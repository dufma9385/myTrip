const con = require('./mysql_con');
const express = require('express');
const router = express.Router();


router.get('/', (req, res)=>{

    let logined=0;
    if(req.session.email){
        logined = 1;
    }

    const sql = `SELECT * FROM board`;
    con.query(sql,(err, result)=>{
        if(err){
            console.log('불러오기 실패');
        }else{
            console.log(result);
            res.render('index',{flag:logined, result:result});             
        }
    });
    
});

module.exports = router;