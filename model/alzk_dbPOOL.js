const mysql = require('mysql');
const alzkConsts = require('../.alzkConfig/alzkConfig.json');

function createRemoteDBPOOL() {
  let DBPOOL = null;
  try {
    DBPOOL = mysql.createPool({
      connectionLimit: alzkConsts.REMOTE.DBPOOL_MAX,
      host: alzkConsts.REMOTE.REMOTE_HOST_IP,
      database: alzkConsts.REMOTE.ALZK_DB_NAME,
      port: alzkConsts.REMOTE.ALZK_DB_PORT,
      user: alzkConsts.REMOTE.ALZK_DB_USER,
      password: alzkConsts.REMOTE.ALZK_DB_PWD
    });
  } catch (err) {
    console.log(err);
  }
  return DBPOOL;
}

function createLocalDBPOOL() {
  let DBPOOL = null;
  try {
    DBPOOL = mysql.createPool({
      connectionLimit: alzkConsts.LOCAL.DBPOOL_MAX,
      host: alzkConsts.LOCAL.LOCAL_HOST_IP,
      database: alzkConsts.LOCAL.ALZK_DB_NAME,
      port: alzkConsts.LOCAL.ALZK_DB_PORT,
      user: alzkConsts.LOCAL.ALZK_DB_USER,
      password: alzkConsts.LOCAL.ALZK_DB_PWD
    });
  } catch (err) {
    console.log(err);
  }
  return DBPOOL;
}

module.exports = {
  REMOTE: createRemoteDBPOOL(),
  LOCAL: createLocalDBPOOL()
};