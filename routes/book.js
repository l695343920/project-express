/*
 * @Descripttion: 图书模块
 * @date: 2021-05-05 12:16:48
 * @LastEditTime: 2021-07-24 13:48:16
 */
const express = require("express");
const book = express.Router();
const { checkRequire } = require("./../utils/utils");
const BookModel = require("./../model/book");
const moment = require("moment");
const { format } = require("./../utils/utils");
const { Op } = require("sequelize");

/**
 * @api {get} /api/book/list 分页查询
 * @apiDescription 分页查询
 * @apiName list
 * @apiGroup 图书列表
 * @apiParam {string} name 名称
 * @apiParam {string} content 描述
 * @apiParam {string} pageIndex 页码
 * @apiParam {string} pageSize 页数
 * @apiSuccess {Object} data 接口具体数据
 * @apiSuccess {Object[]} data.data 列表数据
 * @apiSuccess {String} data.data.name 名称
 * @apiSuccess {String} data.data.content 描述
 * @apiSuccess {String} data.data.create_time 创建时间
 * @apiSuccess {Number} data.total 总条数
 * @apiSuccess {Number} data.pageIndex 页数
 * @apiSuccess {Number} data.pageSize 页码
 * @apiSuccess {String} message 消息说明
 * @apiSuccess {String} code 结果码
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "code" : "200",
 *      "message":"true",
 *      "data" : [
 *        data:[{
 *          "name" : "",
 *          "content" : "",
 *          "create_time":""
 *        }],
 *        total:0,
 *        pageIndex:1,
 *        pageSize:10,
 *      ]
 *  }
 * @apiSampleRequest http://localhost:3001/api/book/list
 * @apiVersion 1.0.0
 */

checkRequire(book, {
  type: "/api/book/list",
  rules: [
    {
      label: "pageIndex",
      value: "分页参数",
    },
    {
      label: "pageSize",
      value: "分页参数",
    },
  ],
});

//图书列表
book.get("/api/book/list", async (req, res) => {
  const { pageIndex, pageSize, name = "", content = "" } = req.query;
  const pageNum = Number(pageIndex);
  const limit = Number(pageSize);
  const { count, rows } = await BookModel.findAndCountAll({
    where: {
      name: {
        [Op.like]: `%${name}%`,
      },
      content: {
        [Op.like]: `%${content}%`,
      },
    },
    order: [["create_time", "DESC"]],
    offset: (pageNum - 1) * limit,
    limit,
  });
  res.send({
    code: 200,
    data: {
      data: rows,
      pageIndex,
      pageSize,
      total: count,
    },
    message: true,
  });
});

/**
 * @api {post} /api/book/add 新增图书
 * @apiDescription 新增图书
 * @apiName add
 * @apiGroup 图书列表
 * @apiParam {string} name 名称
 * @apiParam {string} content 描述
 * @apiSuccess {Object} data 接口具体数据
 * @apiSuccess {String} code 结果码
 * @apiSuccess {String} message 消息说明
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "code" : "200",
 *      "message":"true",
 *      "data" : {}
 *  }
 * @apiSampleRequest http://localhost:3001/api/book/add
 * @apiVersion 1.0.0
 */

checkRequire(book, {
  type: "/api/book/add",
  rules: [
    {
      label: "name",
      value: "名称",
    },
    {
      label: "content",
      value: "内容",
    },
  ],
});

//新增图书
book.post("/api/book/add", async (req, res, next) => {
  const { name, content } = req.body;
  const data = await await BookModel.create({
    name,
    content,
    create_time: moment().format(format),
  });
  res.send({
    code: 200,
    data,
    message: "添加成功!",
  });
});

/**
 * @api {post} /api/book/del 删除图书
 * @apiDescription 删除图书
 * @apiName del
 * @apiGroup 图书列表
 * @apiParam {string} id 标识
 * @apiSuccess {String} code 结果码
 * @apiSuccess {String} message 消息说明
 * @apiSuccess {Object} data 接口具体数据
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "code" : "200",
 *      "message":"true",
 *      "data" : {}
 *  }
 * @apiSampleRequest http://localhost:3001/api/book/del
 * @apiVersion 1.0.0
 */

checkRequire(book, {
  type: "/api/book/del",
  rules: [
    {
      label: "id",
      value: "id",
    },
  ],
});

//删除图书
book.post("/api/book/del", async (req, res) => {
  const { id } = req.body;
  const data = await BookModel.destroy({
    where: { id },
  });
  res.send({
    code: 200,
    data,
    message: "删除成功!",
  });
});

/**
 * @api {post} /api/book/edit 修改图书
 * @apiDescription 修改图书
 * @apiName edit
 * @apiGroup 图书列表
 * @apiParam {string} id 标识
 * @apiParam {string} name 名称
 * @apiParam {string} content 描述
 * @apiSuccess {String} code 结果码
 * @apiSuccess {String} message 消息说明
 * @apiSuccess {Object} data 接口具体数据
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "code" : "200",
 *      "message":"true",
 *      "data" : {}
 *  }
 * @apiSampleRequest http://localhost:3001/api/book/edit
 * @apiVersion 1.0.0
 */

checkRequire(book, {
  type: "/api/book/edit",
  rules: [
    {
      label: "id",
      value: "id",
    },
    {
      label: "name",
      value: "名称",
    },
    {
      label: "content",
      value: "内容",
    },
  ],
});

//修改图书
book.post("/api/book/edit", async (req, res, next) => {
  const { id, name, content } = req.body;
  const data = await BookModel.update(
    { name, content },
    {
      where: {
        id,
      },
    }
  );
  res.send({
    code: 200,
    data,
    message: "修改成功!",
  });
});

/**
 * @api {get} /api/book/detail 图书详情
 * @apiDescription 图书详情
 * @apiName detail
 * @apiGroup 图书列表
 * @apiParam {string} id 标识
 * @apiSuccess {String} code 结果码
 * @apiSuccess {String} message 消息说明
 * @apiSuccess {Object} data 接口具体数据
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "code" : "200",
 *      "message":"true",
 *      "data" : {}
 *  }
 * @apiSampleRequest http://localhost:3001/api/book/detail
 * @apiVersion 1.0.0
 */

checkRequire(book, {
  type: "/api/book/detail",
  rules: [
    {
      label: "id",
      value: "id",
    },
  ],
});

//查看图片详情
book.get("/api/book/detail", async (req, res) => {
  const { id } = req.query;
  const data = await BookModel.findOne({
    where: { id },
  });
  res.send({
    code: 200,
    data,
    message: true,
  });
});

module.exports = book;
