-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- 主机： localhost
-- 生成日期： 2023-02-25 13:08:24
-- 服务器版本： 5.5.62-log
-- PHP 版本： 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- 数据库： `cms`
--

-- --------------------------------------------------------

--
-- 表的结构 `book`
--

CREATE TABLE `book` (
  `id` int(11) NOT NULL,
  `name` char(20) NOT NULL,
  `content` char(100) NOT NULL,
  `create_time` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='书籍管理表';

--
-- 转存表中的数据 `book`
--

INSERT INTO `book` (`id`, `name`, `content`, `create_time`) VALUES
(1, '格林童话', '《格林童话》是由德国语言学家雅各布·格林和威廉·格林兄弟收集、整理、加工完成的德国民间文学。《格林童话》里面约有200多个故事，大部分源自民间的口头传说，其中的《灰姑娘》《白雪公主》《小红帽》《青蛙王', '2023-02-25');

-- --------------------------------------------------------

--
-- 表的结构 `mean`
--

CREATE TABLE `mean` (
  `id` int(11) NOT NULL,
  `parentId` int(11) NOT NULL,
  `code` varchar(2000) NOT NULL,
  `name` char(30) NOT NULL,
  `path` char(90) NOT NULL,
  `meta` char(180) NOT NULL,
  `redirect` char(180) NOT NULL,
  `component` char(180) NOT NULL,
  `children` char(180) NOT NULL,
  `permission` varchar(2000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='菜单权限表';

--
-- 转存表中的数据 `mean`
--

INSERT INTO `mean` (`id`, `parentId`, `code`, `name`, `path`, `meta`, `redirect`, `component`, `children`, `permission`) VALUES
(1, 1, '100', '工作台', '/work', '', '', '', '', ''),
(2, 2, '200', '图书管理', '/book', '', '', '', '', ''),
(3, 2, '201', '图书列表', '/book/list', '', '', '', '', ''),
(4, 4, '300', '系统管理', '/sys', '', '', '', '', ''),
(5, 4, '301', '用户列表', '/sys/list', '', '', '', '', ''),
(6, 4, '302', '角色列表', '/sys/role', '', '', '', '', ''),
(7, 4, '303', '权限管理', '/sys/permission', '', '', '', '', '');

-- --------------------------------------------------------

--
-- 表的结构 `permission`
--

CREATE TABLE `permission` (
  `id` int(11) NOT NULL,
  `name` char(30) NOT NULL,
  `meanId` char(200) NOT NULL,
  `disabled` tinyint(4) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='权限表';

--
-- 转存表中的数据 `permission`
--

INSERT INTO `permission` (`id`, `name`, `meanId`, `disabled`) VALUES
(1, '新增', '3', 0),
(2, '编辑', '3', 0),
(3, '删除', '3', 0),
(4, '', '3', 0),
(5, '新增', '5', 0),
(6, '删除', '5', 0),
(7, '新增', '6', 0),
(8, '编辑', '6', 0),
(9, '删除', '6', 0);

-- --------------------------------------------------------

--
-- 表的结构 `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `name` char(30) NOT NULL,
  `meanId` char(200) NOT NULL,
  `permissionId` char(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='角色表';

--
-- 转存表中的数据 `role`
--

INSERT INTO `role` (`id`, `name`, `meanId`, `permissionId`) VALUES
(1, '超管', '', '1,2,3,4,5,6,7,8,9'),
(2, '普通用户', '', '1');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` char(10) NOT NULL,
  `roleId` int(11) NOT NULL,
  `avatar` mediumtext NOT NULL,
  `pass_word` varchar(200) NOT NULL,
  `create_time` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='用户表';

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`id`, `name`, `roleId`, `avatar`, `pass_word`, `create_time`) VALUES
(1, 'admin', 2, 'https://t12.baidu.com/it/u=2944858655,3260611328&fm=58', '$2a$08$jHRWnbtP3zu28T5lDYTTa.bwdQOwJ2mUOnaC45tO9siJsqYrthm0a', '2023-02-23');

--
-- 转储表的索引
--

--
-- 表的索引 `book`
--
ALTER TABLE `book`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `mean`
--
ALTER TABLE `mean`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `permission`
--
ALTER TABLE `permission`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- 表的索引 `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `book`
--
ALTER TABLE `book`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- 使用表AUTO_INCREMENT `role`
--
ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- 使用表AUTO_INCREMENT `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
