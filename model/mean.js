/*
 * @Descripttion: 菜单模型
 * @Date: 2021-07-03 12:42:51
 */
const { DataTypes } = require("sequelize");
const db = require("./../db/index");

const MeanModel = db.define(
  "mean",
  {
    // 注明主键
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    parentId: DataTypes.INTEGER,
    code: DataTypes.STRING(2000),
    name: DataTypes.STRING(30),
    path: DataTypes.STRING(90),
    meta: DataTypes.STRING(180),
    redirect: DataTypes.STRING(180),
    component: DataTypes.STRING(180),
    children: DataTypes.STRING(180),
    permission: DataTypes.STRING(2000),
  },
  {
    tableName: "mean",
  }
);

module.exports = MeanModel;
