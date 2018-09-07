const DBPOOL = require('./alzk_dbPOOL').LOCAL;
const mysql = require('mysql');

class leaveEvents {
  constructor(leaveInfo) {
    this.staffName = '';
    this.leaveType = '';
    this.leaveFrom = '';
    this.leaveTo = '';
    this.leaveReason = '';
    if (leaveInfo) {
      Object.keys(leaveInfo).forEach((p) => {
        this[p] = leaveInfo[p];
      });
    }
  }

  saveToDB(conn = null) {
    return new Promise((resolve, reject) => {
      let self = this;
      let sqlStr = `insert into leaveEvents(staffName, leaveType, leaveFrom, 
        leaveTo, leaveReason) values(?, ?, ?, ?, ?)`;
      let parms = [self.staffName, self.leaveType, self.leaveFrom, self.leaveTo, self.leaveReason];
      DBPOOL.query(sqlStr, parms, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(self);
        }
      });
    });
  }
}

module.exports.leaveEvents = leaveEvents;