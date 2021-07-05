/*
 * @Descripttion: 入口文件
 * @Date: 2021-05-03 16:19:08
 * @LastEditTime: 2021-07-03 15:49:11
 */
const express = require("express");
const bodyParser = require("body-parser");
const expressJwt = require("express-jwt");
const { secret } = require("./utils/utils");
const book = require("./routes/book");
const user = require("./routes/user");
const upload = require("./routes/upload");
const mean = require("./routes/mean");
const path = require("path");
const app = express();

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

app.use(
  expressJwt({
    secret, // 签名的密钥
    algorithms: ["HS256"],
  }).unless({
    path: ["/api/mean/list", "/api/user/login", "/api/public/upload"], // 指定路径不经过 Token 解析
  })
);

app.use(function (err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    res.status(403).send("token已过期!");
  }
});

app.listen(3001);
