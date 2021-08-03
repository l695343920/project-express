/*
 * @Descripttion: 角色模块
 * @Date: 2021-07-15 03:09:37
 */
const express = require("express");
const role = express.Router();
const { checkRequire } = require("./../utils/utils");
const RoleModel = require("./../model/role");
const { Op } = require("sequelize");

/**
 * @api {get} /api/role/list 分页查询
 * @apiDescription 分页查询
 * @apiName list
 * @apiGroup 角色列表
 * @apiParam {string} name 角色名
 * @apiParam {string} pageIndex 页码
 * @apiParam {string} pageSize 页数
 * @apiSuccess {Object} data 接口具体数据
 * @apiSuccess {Object[]} data.data 列表数据
 * @apiSuccess {String} data.data.id 角色id
 * @apiSuccess {String} data.data.name 角色名
 * @apiSuccess {String} data.data.meanId 菜单id
 * @apiSuccess {String} data.data.permissionId 权限id
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
 *          "id":'',
 *          "name" : "",
 *          "meanId" : "",
 *          "permissionId":""
 *        }],
 *        total:0,
 *        pageIndex:1,
 *        pageSize:10,
 *      ]
 *  }
 * @apiSampleRequest http://localhost:3001/api/role/list
 * @apiVersion 1.0.0
 */

//角色列表
role.get("/api/role/list", async (req, res) => {
  const { pageIndex, pageSize, name = "" } = req.query;
  const pageNum = Number(pageIndex);
  const limit = Number(pageSize);

  //组装搜索条件
  let search = {
    name: {
      [Op.like]: `%${name}%`,
    },
  };
  //搜索参数
  let params = {
    where: search,
  };
  if (pageNum && pageSize) {
    params.offset = (pageNum - 1) * limit;
    params.limit = limit;
  }

  const { count, rows } = await RoleModel.findAndCountAll(params);
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
 * @api {post} /api/role/login 角色登录
 * @apiDescription 角色登录
 * @apiName login
 * @apiGroup 角色列表
 * @apiParam {string} name 角色名
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
 * @apiSampleRequest http://localhost:3001/api/role/login
 * @apiVersion 1.0.0
 */

checkRequire(role, {
  type: "/api/role/login",
  rules: [
    {
      label: "name",
      value: "角色名",
    },
    {
      label: "password",
      value: "密码",
    },
  ],
});

/**
 * @api {post} /api/role/add 新增角色
 * @apiDescription 新增角色
 * @apiName add
 * @apiGroup 角色列表
 * @apiParam {string} name 角色名
 * @apiSuccess {Object} data 接口具体数据
 * @apiSuccess {String} code 结果码
 * @apiSuccess {String} message 消息说明
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "code" : "200",
 *      "message":"true",
 *      "data" : {}
 *  }
 * @apiSampleRequest http://localhost:3001/api/role/add
 * @apiVersion 1.0.0
 */

checkRequire(role, {
  type: "/api/role/add",
  rules: [
    {
      label: "name",
      value: "角色名",
    },
  ],
});

//新增角色
role.post("/api/role/add", async (req, res, next) => {
  const { name, avatar, roleId } = req.body;
  let find_name = await RoleModel.findOne({
    where: {
      name,
    },
  });
  if (find_name) {
    return res.status(400).send({
      code: 400,
      message: "角色名已存在!",
      data: null,
    });
  }
  const data = await RoleModel.create({
    name,
  });
  res.send({
    code: 200,
    data,
    message: "添加成功!",
  });
});

/**
 * @api {post} /api/role/del 删除角色
 * @apiDescription 删除角色
 * @apiName del
 * @apiGroup 角色列表
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
 * @apiSampleRequest http://localhost:3001/api/role/del
 * @apiVersion 1.0.0
 */

checkRequire(role, {
  type: "/api/role/del",
  rules: [
    {
      label: "id",
      value: "id",
    },
  ],
});

//删除角色
role.post("/api/role/del", async (req, res) => {
  const { id } = req.body;
  //超级管理员不能删除
  if (id === 1) {
    return res.status(400).send({
      code: 400,
      data: null,
      message: "超级管理员不能删除!",
    });
  }
  const data = await RoleModel.destroy({
    where: { id },
  });
  res.send({
    code: 200,
    data,
    message: "删除成功!",
  });
});

/**
 * @api {post} /api/role/edit 修改角色
 * @apiDescription 修改角色
 * @apiName edit
 * @apiGroup 角色列表
 * @apiParam {string} id 标识
 * @apiParam {string} name 角色名
 * @apiSuccess {String} code 结果码
 * @apiSuccess {String} message 消息说明
 * @apiSuccess {Object} data 接口具体数据
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "code" : "200",
 *      "message":"true",
 *      "data" : {}
 *  }
 * @apiSampleRequest http://localhost:3001/api/role/edit
 * @apiVersion 1.0.0
 */

checkRequire(role, {
  type: "/api/role/edit",
  rules: [
    {
      label: "id",
      value: "id",
    },
    {
      label: "name",
      value: "角色名",
    },
  ],
});

//修改角色
role.post("/api/role/edit", async (req, res, next) => {
  const { id, name, meanId, permissionId } = req.body;
  //超级管理员不能修改
  if (id === 1) {
    return res.status(400).send({
      code: 400,
      data: null,
      message: "超级管理员不能修改!",
    });
  }
  let params = { name };
  //更新菜单
  if (meanId) {
    params.meanId = meanId;
  }
  //更新权限
  if (permissionId) {
    params.permissionId = permissionId;
  }
  const data = await RoleModel.update(params, {
    where: {
      id,
    },
  });
  res.send({
    code: 200,
    data,
    message: "修改成功!",
  });
});

/**
 * @api {get} /api/role/detail 角色详情
 * @apiDescription 角色详情
 * @apiName detail
 * @apiGroup 角色列表
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
 * @apiSampleRequest http://localhost:3001/api/role/detail
 * @apiVersion 1.0.0
 */

checkRequire(role, {
  type: "/api/role/detail",
  rules: [
    {
      label: "id",
      value: "id",
    },
  ],
});

//查看角色详情
role.get("/api/role/detail", async (req, res) => {
  const { id } = req.query;
  const data = await RoleModel.findOne({
    where: { id },
  });
  res.send({
    code: 200,
    data,
    message: true,
  });
});

module.exports = role;
