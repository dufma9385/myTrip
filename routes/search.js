const con = require('./mysql_con');
const express = require('express');
const router = express.Router();

router.post('/',(req, res)=>{
   
    const sql = `SELECT title FROM board WHERE nation='${req.body.search}'`;
    con.query(sql,(err, result)=>{
        if(err){
            console.log(err);
            res.json({message:"불러오기 실패"});
        }else{
            let str="";
            for(let i=0; i<result.length; i++){
                str+=result[i].title + ", ";
            }
            console.log(result);
            res.json({message:str});
           // res.render('index',{result:str});
        }
    });
});

module.exports=router;