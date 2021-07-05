/*
 * @Descripttion: 用户模块
 * @Date: 2021-06-05 11:12:36
 */
const express = require("express");
const user = express.Router();
const { hashSync, compareSync } = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { checkRequire, secret, format } = require("./../utils/utils");
const UserModel = require("./../model/user");
const moment = require("moment");
const { Op } = require("sequelize");

/**
 * @api {get} /api/user/list 分页查询
 * @apiDescription 分页查询
 * @apiName list
 * @apiGroup 用户列表
 * @apiParam {string} name 用户名
 * @apiParam {string} avatar 头像
 * @apiParam {string} create_time 创建时间
 * @apiParam {string} pageIndex 页码
 * @apiParam {string} pageSize 页数
 * @apiSuccess {Object} data 接口具体数据
 * @apiSuccess {Object[]} data.data 列表数据
 * @apiSuccess {String} data.data.name 用户名
 * @apiSuccess {String} data.data.avatar 头像
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
 *          "date":""
 *        }],
 *        total:0,
 *        pageIndex:1,
 *        pageSize:10,
 *      ]
 *  }
 * @apiSampleRequest http://localhost:3001/api/user/list
 * @apiVersion 1.0.0
 */

checkRequire(user, {
  type: "/api/user/list",
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
user.get("/api/user/list", async (req, res) => {
  const { pageIndex, pageSize, name = "", create_time = "" } = req.query;
  const pageNum = Number(pageIndex);
  const limit = Number(pageSize);
  const { count, rows } = await UserModel.findAndCountAll({
    where: {
      name: {
        [Op.like]: `%${name}%`,
      },
      // create_time:'2021-06-06',
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
 * @api {post} /api/user/login 用户登录
 * @apiDescription 用户登录
 * @apiName login
 * @apiGroup 用户列表
 * @apiParam {string} name 用户名
 * @apiParam {string} password 密码
 * @apiSuccess {Object} data 接口具体数据
 * @apiSuccess {String} code 结果码
 * @apiSuccess {String} message 消息说明
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "code" : "200",
 *      "message":"true",
 *      "data" : {}
 *  }
 * @apiSampleRequest http://localhost:3001/api/user/login
 * @apiVersion 1.0.0
 */

checkRequire(user, {
  type: "/api/user/login",
  rules: [
    {
      label: "name",
      value: "用户名",
    },
    {
      label: "password",
      value: "密码",
    },
  ],
});

//用户登录
user.post("/api/user/login", async (req, res, next) => {
  const { name, password } = req.body;
  let data = await UserModel.findOne({
    where: {
      name,
    },
  });
  if (!data) {
    return res.status(400).send({
      code: 400,
      message: "用户名不存在",
      data: null,
    });
  }

  // compareSync 解密匹配，返回 boolean 值
  const isPasswordValid = compareSync(password, data.pass_word);
  if (!isPasswordValid) {
    return res.status(400).send({
      code: 400,
      message: "密码无效",
      data: null,
    });
  }

  // 3、生成token 向客户端返回token
  const token = jwt.sign(
    {
      id: String(data._id),
    },
    secret,
    { expiresIn: 0.5 * 60 }
  );
  const { create_time } = data.dataValues;
  data.dataValues.token = token;
  data.dataValues.create_time =
    create_time && moment(create_time).format(format);
  delete data.dataValues.pass_word;
  res.send({
    code: 200,
    data: {
      ...data.dataValues,
    },
    message: "登录成功!",
  });
});

/**
 * @api {post} /api/user/add 新增用户
 * @apiDescription 新增用户
 * @apiName add
 * @apiGroup 用户列表
 * @apiParam {string} name 用户名
 * @apiParam {string} password 密码
 * @apiSuccess {string} avatar 头像
 * @apiSuccess {string} create_time 创建时间
 * @apiSuccess {Object} data 接口具体数据
 * @apiSuccess {String} code 结果码
 * @apiSuccess {String} message 消息说明
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "code" : "200",
 *      "message":"true",
 *      "data" : {}
 *  }
 * @apiSampleRequest http://localhost:3001/api/user/add
 * @apiVersion 1.0.0
 */

checkRequire(user, {
  type: "/api/user/add",
  rules: [
    {
      label: "name",
      value: "用户名",
    },
  ],
});

//新增用户
user.post("/api/user/add", async (req, res, next) => {
  const { name, avatar } = req.body;
  let find_name = await UserModel.findOne({
    where: {
      name,
    },
  });
  if (find_name) {
    return res.status(400).send({
      code: 400,
      message: "用户名已存在!",
      data: null,
    });
  }
  const data = await UserModel.create({
    name,
    pass_word: "$2a$08$jHRWnbtP3zu28T5lDYTTa.bwdQOwJ2mUOnaC45tO9siJsqYrthm0a",
    avatar,
    create_time: moment().format(format),
  });
  res.send({
    code: 200,
    data,
    message: "添加成功!",
  });
});

/**
 * @api {post} /api/user/del 删除用户
 * @apiDescription 删除用户
 * @apiName del
 * @apiGroup 用户列表
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
 * @apiSampleRequest http://localhost:3001/api/user/del
 * @apiVersion 1.0.0
 */

checkRequire(user, {
  type: "/api/user/del",
  rules: [
    {
      label: "id",
      value: "id",
    },
  ],
});

//删除用户
user.post("/api/user/del", async (req, res) => {
  const { id } = req.body;
  //查询用户
  const user = await UserModel.findOne({
    where: { id },
  });
  //超级管理员不能删除
  if (user.roleId === 1) {
    return res.status(400).send({
      code: 400,
      data: null,
      message: "超级管理员不能删除!",
    });
  }
  const data = await UserModel.destroy({
    where: { id },
  });
  res.send({
    code: 200,
    data,
    message: "删除成功!",
  });
});

/**
 * @api {post} /api/user/edit 修改用户
 * @apiDescription 修改用户
 * @apiName edit
 * @apiGroup 用户列表
 * @apiParam {string} id 标识
 * @apiParam {string} name 用户名
 * @apiParam {string} avatar 头像
 * @apiParam {string} password 密码
 * @apiSuccess {String} code 结果码
 * @apiSuccess {String} message 消息说明
 * @apiSuccess {Object} data 接口具体数据
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "code" : "200",
 *      "message":"true",
 *      "data" : {}
 *  }
 * @apiSampleRequest http://localhost:3001/api/user/edit
 * @apiVersion 1.0.0
 */

checkRequire(user, {
  type: "/api/user/edit",
  rules: [
    {
      label: "id",
      value: "id",
    },
    {
      label: "name",
      value: "用户名",
    },
    {
      label: "avatar",
      value: "头像",
    },
    {
      label: "password",
      value: "密码",
    },
  ],
});

//修改用户
user.post("/api/user/edit", async (req, res, next) => {
  const { id, name, avatar, password } = req.body;
  const data = await UserModel.update(
    { name, avatar, pass_word: hashSync(password, 8) },
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
 * @api {get} /api/user/detail 用户详情
 * @apiDescription 用户详情
 * @apiName detail
 * @apiGroup 用户列表
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
 * @apiSampleRequest http://localhost:3001/api/user/detail
 * @apiVersion 1.0.0
 */

checkRequire(user, {
  type: "/api/user/detail",
  rules: [
    {
      label: "id",
      value: "id",
    },
  ],
});

//查看用户详情
user.get("/api/user/detail", async (req, res) => {
  const { id } = req.query;
  const data = await UserModel.findOne({
    where: { id },
  });
  res.send({
    code: 200,
    data,
    message: true,
  });
});

module.exports = user;
