define({ "api": [
  {
    "type": "post",
    "url": "/api/book/add",
    "title": "新增图书",
    "description": "<p>新增图书</p>",
    "name": "add",
    "group": "图书列表",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>描述</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>接口具体数据</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>消息说明</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\" : \"200\",\n    \"message\":\"true\",\n    \"data\" : {}\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/book/add"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/book.js",
    "groupTitle": "图书列表"
  },
  {
    "type": "post",
    "url": "/api/book/del",
    "title": "删除图书",
    "description": "<p>删除图书</p>",
    "name": "del",
    "group": "图书列表",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>标识</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>接口具体数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\" : \"200\",\n    \"message\":\"true\",\n    \"data\" : {}\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/book/del"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/book.js",
    "groupTitle": "图书列表"
  },
  {
    "type": "get",
    "url": "/api/book/detail",
    "title": "图书详情",
    "description": "<p>图书详情</p>",
    "name": "detail",
    "group": "图书列表",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>标识</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>接口具体数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\" : \"200\",\n    \"message\":\"true\",\n    \"data\" : {}\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/book/detail"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/book.js",
    "groupTitle": "图书列表"
  },
  {
    "type": "post",
    "url": "/api/book/edit",
    "title": "修改图书",
    "description": "<p>修改图书</p>",
    "name": "edit",
    "group": "图书列表",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>标识</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>描述</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>接口具体数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\" : \"200\",\n    \"message\":\"true\",\n    \"data\" : {}\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/book/edit"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/book.js",
    "groupTitle": "图书列表"
  },
  {
    "type": "get",
    "url": "/api/book/list",
    "title": "分页查询",
    "description": "<p>分页查询</p>",
    "name": "list",
    "group": "图书列表",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "content",
            "description": "<p>描述</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "pageIndex",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "pageSize",
            "description": "<p>页数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>接口具体数据</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.data",
            "description": "<p>列表数据</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.data.name",
            "description": "<p>名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.data.content",
            "description": "<p>描述</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.data.date",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.total",
            "description": "<p>总条数</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.pageIndex",
            "description": "<p>页数</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.pageSize",
            "description": "<p>页码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>结果码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\" : \"200\",\n    \"message\":\"true\",\n    \"data\" : [\n      data:[{\n        \"name\" : \"\",\n        \"content\" : \"\",\n        \"date\":\"\"\n      }],\n      total:0,\n      pageIndex:1,\n      pageSize:10,\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/book/list"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/book.js",
    "groupTitle": "图书列表"
  },
  {
    "type": "post",
    "url": "/api/public/upload",
    "title": "上传图片",
    "description": "<p>上传图片</p>",
    "name": "upload",
    "group": "图片上传",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "object",
            "optional": false,
            "field": "file",
            "description": "<p>文件</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>接口具体数据</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "data.url",
            "description": "<p>地址</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>结果码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\" : \"200\",\n    \"message\":\"true\",\n    \"data\" : {}\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/public/upload"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/upload.js",
    "groupTitle": "图片上传"
  },
  {
    "type": "post",
    "url": "/api/user/add",
    "title": "新增用户",
    "description": "<p>新增用户</p>",
    "name": "add",
    "group": "用户列表",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "avatar",
            "description": "<p>头像</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "create_time",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>接口具体数据</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>消息说明</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\" : \"200\",\n    \"message\":\"true\",\n    \"data\" : {}\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/user/add"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/user.js",
    "groupTitle": "用户列表"
  },
  {
    "type": "post",
    "url": "/api/user/del",
    "title": "删除用户",
    "description": "<p>删除用户</p>",
    "name": "del",
    "group": "用户列表",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>标识</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>接口具体数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\" : \"200\",\n    \"message\":\"true\",\n    \"data\" : {}\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/user/del"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/user.js",
    "groupTitle": "用户列表"
  },
  {
    "type": "get",
    "url": "/api/user/detail",
    "title": "用户详情",
    "description": "<p>用户详情</p>",
    "name": "detail",
    "group": "用户列表",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>标识</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>接口具体数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\" : \"200\",\n    \"message\":\"true\",\n    \"data\" : {}\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/user/detail"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/user.js",
    "groupTitle": "用户列表"
  },
  {
    "type": "post",
    "url": "/api/user/edit",
    "title": "修改用户",
    "description": "<p>修改用户</p>",
    "name": "edit",
    "group": "用户列表",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": "<p>标识</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "avatar",
            "description": "<p>头像</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>接口具体数据</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\" : \"200\",\n    \"message\":\"true\",\n    \"data\" : {}\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/user/edit"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/user.js",
    "groupTitle": "用户列表"
  },
  {
    "type": "get",
    "url": "/api/user/list",
    "title": "分页查询",
    "description": "<p>分页查询</p>",
    "name": "list",
    "group": "用户列表",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "avatar",
            "description": "<p>头像</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "create_time",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "pageIndex",
            "description": "<p>页码</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "pageSize",
            "description": "<p>页数</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>接口具体数据</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.data",
            "description": "<p>列表数据</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.data.name",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.data.avatar",
            "description": "<p>头像</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.data.create_time",
            "description": "<p>创建时间</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.total",
            "description": "<p>总条数</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.pageIndex",
            "description": "<p>页数</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.pageSize",
            "description": "<p>页码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>结果码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\" : \"200\",\n    \"message\":\"true\",\n    \"data\" : [\n      data:[{\n        \"name\" : \"\",\n        \"content\" : \"\",\n        \"date\":\"\"\n      }],\n      total:0,\n      pageIndex:1,\n      pageSize:10,\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/user/list"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/user.js",
    "groupTitle": "用户列表"
  },
  {
    "type": "post",
    "url": "/api/user/login",
    "title": "用户登录",
    "description": "<p>用户登录</p>",
    "name": "login",
    "group": "用户列表",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "name",
            "description": "<p>用户名</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "password",
            "description": "<p>密码</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>接口具体数据</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>结果码</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>消息说明</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\" : \"200\",\n    \"message\":\"true\",\n    \"data\" : {}\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/user/login"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/user.js",
    "groupTitle": "用户列表"
  },
  {
    "type": "get",
    "url": "/api/mean/list",
    "title": "菜单查询",
    "description": "<p>菜单查询</p>",
    "name": "list",
    "group": "菜单列表",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>接口具体数据</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.id",
            "description": "<p>菜单id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.code",
            "description": "<p>菜单编码</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.meta",
            "description": "<p>菜单属性</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.name",
            "description": "<p>菜单名称</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.path",
            "description": "<p>菜单路径</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.parentId",
            "description": "<p>菜单父级id</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data.permission",
            "description": "<p>菜单权限</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.redirect",
            "description": "<p>菜单重定向</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>消息说明</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>结果码</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"code\" : \"200\",\n    \"message\":\"true\",\n    \"data\" : [{\n       \"children\": null,\n       \"code\": \"100\",\n       \"component\": null,\n       \"id\": 1,\n       \"meta\": null,\n       \"name\": \"工作台\",\n       \"parentId\": 1,\n       \"path\": \"/work\",\n       \"permission\": [],\n       \"redirect\": \"\"\n    }]\n}",
          "type": "json"
        }
      ]
    },
    "sampleRequest": [
      {
        "url": "http://localhost:3001/api/mean/list"
      }
    ],
    "version": "1.0.0",
    "filename": "routes/mean.js",
    "groupTitle": "菜单列表"
  }
] });
