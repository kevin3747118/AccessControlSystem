const DBPOOL = require('./model/alzk_dbPOOL').REMOTE;
const util = exports;

util.addWhereStr = function (queryObj) {
  var whereStr = "where ";
  Object.keys(queryObj).forEach((i, idx) => {
    let val = queryObj[i];
    whereStr = whereStr + i + " = " + DBPOOL.escape(val);
    if (idx < Object.keys(queryObj).length - 1)
      whereStr = whereStr + ' and ';
  });
  return whereStr;
};

