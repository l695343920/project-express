/*
 * @Descripttion: 角色模型
 * @Date: 2021-07-03 12:42:51
 */
const { DataTypes } = require("sequelize");
const db = require("./../db/index");

const RoleModel = db.define(
  "role",
  {
    // 注明主键
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: DataTypes.STRING(30),
    meanId: DataTypes.STRING(200),
    permissionId: DataTypes.STRING(200)
  },
  {
    tableName: "role",
  }
);

module.exports = RoleModel;
