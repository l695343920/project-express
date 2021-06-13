/*
 * @Descripttion: 连接数据库
 * @Date: 2021-05-06 09:13:19
 * @LastEditTime: 2021-06-03 16:35:50
 */
const Sequelize = require("sequelize");
const config = require("./config");
const mysql = require("mysql2");

const db = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: "mysql",
  dialectModule: mysql,
  pool: {
    max: 5,
    min: 0,
    idle: 30000,
  },
  //禁用所有时间戳开启
  define: {
    timestamps: false,
  },
});

module.exports = db;
