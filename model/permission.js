/*
 * @Descripttion: 权限模型
 * @Date: 2021-07-03 12:42:51
 */
const { DataTypes } = require("sequelize");
const db = require("./../db/index");

const PermissionModel = db.define(
  "permission",
  {
    // 注明主键
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: DataTypes.STRING(30),
    meanId: DataTypes.STRING(200),
    disabled: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    tableName: "permission",
  }
);

module.exports = PermissionModel;
