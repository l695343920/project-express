/*
 * @Descripttion: 菜单模块
 * @Date: 2021-07-03 12:40:13
 */
const express = require("express");
const mean = express.Router();
const { checkRequire } = require("./../utils/utils");
const MeanModel = require("./../model/mean");
const PermissionModel = require("./../model/permission");
const RoleModel = require("./../model/role");
const { relation } = require("./../utils/utils");
const { Op } = require("sequelize");

/**
 * @api {get} /api/mean/list 菜单查询
 * @apiDescription 菜单查询
 * @apiName list
 * @apiGroup 菜单列表
 * @apiSuccess {Object} data 接口具体数据
 * @apiSuccess {Number} data.id 菜单id
 * @apiSuccess {String} data.code 菜单编码
 * @apiSuccess {Object} data.meta 菜单属性
 * @apiSuccess {String} data.name 菜单名称
 * @apiSuccess {String} data.path 菜单路径
 * @apiSuccess {Number} data.parentId 菜单父级id
 * @apiSuccess {Object} data.permission 菜单权限
 * @apiSuccess {String} data.redirect 菜单重定向
 * @apiSuccess {String} message 消息说明
 * @apiSuccess {String} code 结果码
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "code" : "200",
 *      "message":"true",
 *      "data" : [{
 *         "children": null,
 *         "code": "100",
 *         "component": null,
 *         "id": 1,
 *         "meta": null,
 *         "name": "工作台",
 *         "parentId": 1,
 *         "path": "/work",
 *         "permission": [],
 *         "redirect": ""
 *      }]
 *  }
 * @apiSampleRequest http://localhost:3001/api/mean/list
 * @apiVersion 1.0.0
 */

checkRequire(mean, {
  type: "/api/mean/list",
  rules: [],
});

//菜单列表
mean.get("/api/mean/list", async (req, res) => {
  //获取所有的菜单
  const mean = await MeanModel.findAll({
    where: {},
  });
  //获取所有的权限
  const permission = await PermissionModel.findAll({
    where: {},
  });
  //获取最终值
  let data = relation([mean, permission], {
    key: "id",
    children: "permission",
    as: "meanId",
  });
  res.send({
    code: 200,
    data,
    message: true,
  });
});

module.exports = mean;
