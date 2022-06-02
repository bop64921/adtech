var ibmdb = require('ibm_db');
var connStr = "DATABASE=sakfilgi;HOSTNAME=192.168.200.168;UID=kessler;PWD=detenis;PORT=25000;PROTOCOL=TCPIP";

ibmdb.open(connStr, function (err,conn) {
  if (err) return console.log(err);
  
  conn.query('select macnom from sakfilgi.maecf', function (err, data) {
    if (err) console.log(err);
    else console.log(data);

    conn.close(function () {
      console.log('done');
    });
  });
});

ibmdb.open(connStr).then(
    conn => {
      conn.query("select macnom from sakfilgi.maecf").then(data => {
        console.log(data);
        conn.closeSync();
      }, err => {
        console.log(err);
      });
    }, err => {
      console.log(err)
    }
);