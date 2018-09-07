const express = require('express'); 
const alzkApp = express(); 
const bodyParser = require('body-parser');
// const session = require('client-sessions');

const path = require('path');

const moduelRouter = require('./alzk_moduleRouter');
const alzkApiRouter = require('./alzk_apiRouter');

configDir = './.alzkConfig/';
const alzkConsts = require(configDir + 'alzkConfig.json');

// try to put db connection in app.use

alzkApp.disable('x-powered-by');
alzkApp.use(bodyParser.urlencoded({ extended: true }));
alzkApp.use(bodyParser.json());


alzkApp.use(express.static('public'));
// alzkApp.use(express.static('pages'));

alzkApp.use('/adm', (req, res, next) => {
  next();
});

const moduleRouter = require("./alzk_moduleRouter");
alzkApp.use('/adm', moduleRouter);

const apiRouter = require("./alzk_apiRouter");
alzkApp.use('/api', apiRouter);


alzkApp.listen(8787);
console.log('start server...');


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