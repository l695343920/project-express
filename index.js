/*
 * @Descripttion: 入口文件
 * @Date: 2021-05-03 16:19:08
 * @LastEditTime: 2021-08-03 17:36:47
 */
const express = require("express");
const bodyParser = require("body-parser");
const expressJwt = require("express-jwt");
const { secret } = require("./utils/utils");
const book = require("./routes/book");
const user = require("./routes/user");
const upload = require("./routes/upload");
const mean = require("./routes/mean");
const role = require("./routes/role");
const permission = require("./routes/permission");
const path = require("path");
const app = express();

//请求次数
let api = {};

app.use(
  expressJwt({
    secret, // 签名的密钥
    algorithms: ["HS256"],
  }).unless({
    path: ["/api/user/login"], // 指定路径不经过 Token 解析
  })
);

app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(403).send({
      code: 403,
      data: null,
      message: "token已过期!",
    });
  }
});

//记录请求数据
app.use("/api", (req, res, next) => {
  const {
    _parsedUrl: { pathname },
  } = req;
  if (!api[pathname]) {
    api[pathname] = 1;
  } else {
    api[pathname] += 1;
    if (api[pathname] > 10) {
      res.status(502).json({
        code: 502,
        data: null,
        message: "请求过于频繁!",
      });
    }
  }
  next();
});

setInterval(() => {
  api = {};
}, 10000);

//设置apidoc
app.use("/api", express.static(path.join(__dirname, "public/apidoc")));
app.use("/upload", express.static(path.join(__dirname, "./../public/upload")));

//需要use的
app.use(bodyParser.json()); // for parsing application/json
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
); // for parsing application/x-www-form-urlencoded

app.use(book);
app.use(user);
app.use(upload);
app.use(mean);
app.use(role);
app.use(permission);

app.listen(3001);
