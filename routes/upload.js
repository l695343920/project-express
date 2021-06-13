/*
 * @Descripttion: 上传接口
 * @Date: 2021-06-05 15:21:38
 */
const express = require("express");
const upload = express.Router();
const multer = require("multer");
const fs = require("fs");

/**
 * @api {post} /api/public/upload 上传图片
 * @apiDescription 上传图片
 * @apiName upload
 * @apiGroup 图片上传
 * @apiParam {object} file 文件
 * @apiSuccess {Object} data 接口具体数据
 * @apiSuccess {string} data.url 地址
 * @apiSuccess {String} message 消息说明
 * @apiSuccess {String} code 结果码
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "code" : "200",
 *      "message":"true",
 *      "data" : {}
 *  }
 * @apiSampleRequest http://localhost:3001/api/public/upload
 * @apiVersion 1.0.0
 */
multer({ dest: "upload_tmp/" });

upload.post("/api/public/upload", (req, res, next) => {
  console.log(req.files[0]); // 上传的文件信息

  const des_file = "./../public/upload/" + req.files[0].originalname;
  fs.readFile(req.files[0].path, function (err, data) {
    fs.writeFile(des_file, data, function (err) {
      if (err) {
        console.log(err);
      } else {
        response = {
          code: 200,
          message: "文件上传",
          data: { url: req.files[0].originalname },
        };
        console.log(response);
        res.end(JSON.stringify(response));
      }
    });
  });
});

module.exports = upload;
