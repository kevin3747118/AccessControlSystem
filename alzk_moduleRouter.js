const express = require('express');
const moduleRouter = express.Router();

const fs = require('fs');

const pubPage = __dirname + '/pages/';

moduleRouter.get('/', (req, res) => {
  res.sendFile(__dirname + "/pages/old/index.html");
  // res.sendFile(__dirname + "/pages/old/123.html");
});

moduleRouter.get('/adm', (req, res) => {
  // res.sendFile(__dirname + "/pages/old/tables-data.html");
  // res.sendFile(__dirname + "/pages/old/index.html");
  // res.sendFile(__dirname + "/pages/m.html");
});

moduleRouter.get('/:funcName', (req, res) => {
  res.sendFile(__dirname + "/pages/old/" + req.params.funcName + ".html", 'utf8', function (err) {
    if (err) {
      // logger.error(__dirname + "/pages/" + req.params.funcName + ".html =>" + err);
      console.log(err)
    }
  });
});


module.exports = moduleRouter;