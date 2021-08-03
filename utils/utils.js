/*
 * @Descripttion: utils
 * @Date: 2021-05-24 21:19:59
 */
const jwt = require("jsonwebtoken");

//时间格式
const format = "YYYY-MM-DD HH:mm:ss";

// 签名的密钥
const secret = "fdfhfjdfdjfdjerwrereresaassa2dd@ddds";

//去除首尾空格
const trim = (str) => {
  if (str) {
    return String(str).replace(/(^\s*)|(\s*$)/g, "");
  } else {
    return str;
  }
};

//效验必传项
const checkRequire = (router, config) => {
  router.use(config.type, (req, res, next) => {
    for (let i = 0; i < config.rules.length; i++) {
      const item = config.rules[i];
      const { label, value } = item;
      const keyMap = { GET: "query", POST: "body" };
      const getValue = req[keyMap[req.method]];
      getValue[label] = trim(getValue[label]);
      if (!getValue[label]) {
        res.status(400).json({
          code: 400,
          data: null,
          message: `${value}不能为空!`,
        });
        return;
      }
    }
    next();
  });
};

//处理层级数据
const relation = (arr, config) => {
  let map = new Object();
  const { key = "id", children, as } = config;
  const [defaultArr, afterArr] = arr;
  //存储所有的id
  defaultArr.forEach((obj) => {
    obj[children] = [];
    map[obj[key]] = obj;
  });
  //组装数据
  afterArr.forEach((obj) => {
    let value = map[obj[as]];
    if (value) {
      value[children].push(obj);
    }
  });
  //获取最终值
  let data = Object.values(map);
  return data;
};

//获取用户信息
const getUserInfo = (req) => {
  const token = req.headers.authorization.replace("Bearer ", "");
  //角色信息
  const userInfo = jwt.verify(token, secret).data;
  return userInfo;
};

module.exports = {
  checkRequire,
  format,
  secret,
  relation,
  getUserInfo
};
