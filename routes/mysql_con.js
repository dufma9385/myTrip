const mysql=require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mysql",
    port:"3307",
    database:"mytrip"
  });
//connecctt은 설정값에 맞게 커넥션이라는 것을 생성
module.exports=con;