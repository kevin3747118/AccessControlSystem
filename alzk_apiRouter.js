const express = require('express');
const alzkApiRouter = express.Router();

const acEvents = require('./model/alzk_accessEvents').accessEvents;
const lvEvents = require('./model/alzk_leaveEvents').leaveEvents;

const date = new Date();

// initial every session

// alzkApiRouter.get('/:category/:name', (ctx, next) => {
//   ctx.response.body = 'test';
//   console.log(ctx.params);
// });

//change staff object key
alzkApiRouter.post('/getStaffAccess', (req, res, next) => {
  let queryObj;
  if (req.body.staff !== "-1") queryObj = { // -1 means all
    'ownername': req.body.staff,
    'DATE(a.createdate)': date.toLocaleDateString()
  };
  else queryObj = {
    'DATE(a.createdate)': date.toLocaleDateString()
  };
  acEvents.getStaffAccess(queryObj)
    .then((events) => {
      res.send({
        "data": events
      });
      next();
    })
    .catch((err) => {
      console.log(err);
      next();
    });
});

alzkApiRouter.post('/leaveRequest', (req, res, next) => {
  let lvEvent = new lvEvents(req.body);
  lvEvent.saveToDB(null)
    .then((res) => {
      res.send({
        status: "ok",
        data: res
      });
      next();
    })
    .catch((err) => {
      res.send({
        status: "ok"
      });
      next();
    });
});

module.exports = alzkApiRouter;