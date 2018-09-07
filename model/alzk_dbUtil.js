const DBPOOL = require('./alzk_dbPOOL');


function getConn(conn = nul) {
  return new Promise((resolve, reject) => {
    DBPOOL.getConnection((err, conn) => {
      if (err) {
        reject("Get DB connection fail: " + err);
      } else {
        resolve(conn);
      }
    });
  });
};


function execSQL(conn = null) {
  return new Promise((resolve, reject) => {
    DBPOOL.query("select * from alzk.lockevents limit 3", (err, res) => {
      if (err) reject("execute SQL fail: " + err);
      else resolve(res);
    });
  });
};

module.exports.execSQL = execSQL;