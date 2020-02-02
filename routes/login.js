const con = require('./mysql_con');
const express = require('express');
const router = express.Router();

router.get('/login_p', (req, res)=>{
   //쿼리는 질의문이라고 한다. 무슨 쿼리 랭귀지 약자 쿼리를 쓰겠다는 거다 mysql연결해서 쓰겠다는것
    // con.query(sql, (err, result, field) =>{ 
    //     console.log(field);
        res.render('login',{title:"글쓰기 화면"});
    // });
});

router.post('/', (req, res)=>{
    const sql= `SELECT * FROM  user where email='${req.body.login_email}'`;
        console.log(sql);
        con.query(sql, function (err, result, fields){
            if(err){
                console.log(err);
            }else{
                console.log(result.length);
                if(result.length > 0){
                    req.session.login_email = req.body.login_email;
                    message="Login Ok";
                    console.log(message);
                }else{
                    message="Login Fail";
                    console.log(message);
                }
                res.json({message:message});
            }
        });
});
module.exports = router;