const DBPOOL = require('./alzk_dbPOOL').REMOTE;
const util = require('../alzk.util');

class accessEvents {

  static getStaffAccess(queryObj = {}) {
    return new Promise((resolve, reject) => {
      let whereStr = util.addWhereStr(queryObj);
      let sqlStr = `select ownername, min(createdate) createdate
      from ( select b.ownername, a.card, a.createdate as createdate, a.lockplacename 
        from alzk.lockevents a
        join alzk.ordkeys b on a.card = b._id where (
          a.lockplacename in ('10F Office Door', 'Meeting Room 1') and b.owneremail != '' 
          and b.keytype = 'Staff' and a.lockplaceid in (2, 162))) a ` + whereStr + `
          group by card, date(createdate) order by ownername, createdate desc`;
      DBPOOL.query(sqlStr, (err, res) => {
        if (err) {
          reject(err);
        } else {
          let event = [];
          if (res.length !== 0) {
            res.forEach((ele) => {
              let createDateArr = ele.createdate.split(' ');
              let date = createDateArr[0];
              let time = createDateArr[1];
              let data = {
                name: ele.ownername,
                date: date,
                time: time
              };
              event.push(data);
            });
          }
          resolve(event);
        }
      });
    });
  }
}

module.exports.accessEvents = accessEvents;