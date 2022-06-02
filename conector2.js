var ibmdb = require('ibm_db');

ibmdb.open("DRIVER={DB2};DATABASE=sakfilcg;HOSTNAME=192.168.200.168");
UID=kessler;PWD=detenis;PORT=25000;
PROTOCOL=TCPIP, function (err,conn) {
  if (err) return console.log(err);

  conn.query('select macnom from sakfilcg.maecf', function (err, data) {
    if (err) console.log(err);

    console.log(data);

    conn.close(function () {
      console.log('done');
    });
  });
};