/*
 * @Descripttion: 角色模型
 * @Date: 2021-07-03 12:42:51
 */
const { DataTypes, NOW } = require("sequelize");
const db = require("./../db/index");
const moment = require("moment");
const { format } = require("./../utils/utils");

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
    permissionsId: DataTypes.STRING(200),
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
    tableName: "role",
  }
);

module.exports = RoleModel;
