/*
 * @Descripttion: book模型
 * @Date: 2021-06-02 19:45:24
 */
const { DataTypes, NOW } = require("sequelize");
const db = require("./../db/index");
const moment = require("moment");
const { format } = require("./../utils/utils");

const BookModel = db.define(
  "book",
  {
    // 注明主键
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: DataTypes.STRING(20),
    content: DataTypes.STRING(100),
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
    tableName: "book",
  }
);

module.exports = BookModel;
