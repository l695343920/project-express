/*
 * @Descripttion: 用户模型
 * @Date: 2021-06-05 11:07:00
 */
const { DataTypes, NOW } = require("sequelize");
const db = require("./../db/index");
const moment = require("moment");
const { format } = require("./../utils/utils");

const UserModel = db.define(
  "user",
  {
    // 注明主键
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    roleId: DataTypes.INTEGER,
    name: DataTypes.STRING(10),
    avatar: DataTypes.STRING,
    pass_word: DataTypes.STRING(20),
    create_time: {
      type: DataTypes.DATE(6),
      defaultValue: NOW,
      get() {
        const rawValue = this.getDataValue("create_time");
        return rawValue && moment(rawValue).format(format);
      },
    },
  },
  {
    tableName: "user",
  }
);

module.exports = UserModel;
