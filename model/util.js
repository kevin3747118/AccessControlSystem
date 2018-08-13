const modelUtil = exports;

modelUtil.getConn = function () {
  alzkConsts.DBPOOL.getConnection(() => {

  });
}