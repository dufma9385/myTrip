const con = require('./mysql_con');
const express = require('express');
const router = express.Router();


router.get('/', (req, res)=>{

    let login_email=0;
    if(req.session.login_email){
        login_email = 1;
    }

    const sql = `SELECT * FROM board`;
    con.query(sql,(err, result)=>{
        if(err){
            console.log('불러오기 실패');
        }else{
            console.log(result);
            res.render('index',{flag:login_email, result:result});   
                      
        }
    });
    
});


module.exports = router;