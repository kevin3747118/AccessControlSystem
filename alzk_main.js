const Koa = require('koa');
const Router = require('koa-router');
const mysql = require('mysql');

const alzkApp = new Koa();
const alzkRouter = new Router({
  prefix: '/alzk'
});


alzkRouter.get('/:category/:name',(ctx, next) => {
  ctx.response.body = '<h2>@_@</h2>';
  console.log(ctx.params);
});

alzkApp.use(
  alzkRouter.routes());
alzkApp.listen(3000);
console.log('start testing...');
// configDir = './.alzkConfig';
// alzkConsts = require(configDir + "/" + "alzkConfig.json");

// // load config
// function loadConfig() {

// }

// // mysql connection pool
// function setUpDBPool() {
//   try {
//     alzkConsts.DBPOOL = mysql.createPool({
//       connectionLimit: alzkConsts.DBPOOL_MAX,
//       host: 'localhost',
//       port: alzkConsts.ALZK_DB_PORT,
//       user: alzkConsts.ALZK_DB_USER,
//       password: alzkConsts.ALZK_DB_PWD,
//       database: alzkConsts.ALZK_DB_NAME,
//       typeCast: function (field, next) {
//         if (field.type == 'JSON') return (JSON.parse(field.string()));
//         return next();
//       },
//       queryFormat: function (query, values) {
//         if (!values) return query;
//         return query.replace(/\:(\w+)/g, function (txt, key) {
//           if (values.hasOwnProperty(key)) {
//             if (Array.isArray(values[key]) || typeof (values[key]) == "object") {
//               return this.escape(JSON.stringify(values[key]));
//             } else
//               return this.escape(values[key]);
//           }
//           return txt;
//         }.bind(this));
//       }
//     });
//   } catch (err) {
//     logger.error("alzk database conn pool init fail: " + err);
//     process.exit(-1);
//   };
// }
// //start cron job

// //initial express server
// function startExpress() {
//   const express = require('express'); // call express
//   const app = express(); // define our app using express
//   const bodyParser = require('body-parser');
// }

// function startServer() {
//   loadConfig();
//   setUpDBPool();
//   startExpress()
// }

// router.get('/users/:id', function (ctx, next) {
//   return User.findOne(ctx.params.id).then(function (user) { // 首先讀取使用者的資訊，非同步操作 
//     ctx.user = user;
//     next();
//   });
// }, function (ctx) {
//   console.log(ctx.user);
//   // 在這個中介軟體中再對使用者資訊做一些處理 // => { id: 17, name: "Alex" } 
// });