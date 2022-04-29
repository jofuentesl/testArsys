const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host:'localhost',
    password:'3Fuh?v39',
    user:'adminUser',
    database: 'barnabitbbdd',
    port: '8889'
});

mysqlConnection.connect(err =>{
    if(err) {
        console.log('Error db' + err);
        return
    } else {
        console.log('Db connection OK');
    }
});

module.exports = mysqlConnection;
