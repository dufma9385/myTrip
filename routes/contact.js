const con = require('./mysql_con');
const express = require('express');
const router = express.Router();

router.post('/', (req, res)=>{
    
    const email = req.body.contact_email;
    var sql = `SELECT * FROM user WHERE email="${email}"`;

    con.query(sql, function(err, result){
        if(err){
            console.log("login fail");
            res.json({message:"login fail"});
        }else{
            if(result[0]){
                const name = result[0].name;
                console.log("login success");
                res.json({message:`${name}님 안녕하세요`});
            }else{
                console.log("login fail");
                res.json({message:"이메일주소를 확인하세요"})
            }
        }
    });
});
module.exports = router;