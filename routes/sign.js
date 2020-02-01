const con = require('./mysql_con');
const express = require('express');
const router = express.Router();

router.post('/', (req, res)=>{
    
    const email = req.body.user_email;
    const name = req.body.user_name;
    const phone = req.body.user_phone;

    var sql = `INSERT INTO user (email, name, phone) VALUES ('${email}', '${name}', ${phone})`;

    con.query(sql, function(err, result){
        con.query(sql, function (err, result) {
            if (err){
                console.log("insert fail");
                res.json({message:"회원가입 실패"})
            }else{
                console.log("1 record inserted");
                res.json({message:"sign in success"});
            }
        });
    });
});
module.exports = router;