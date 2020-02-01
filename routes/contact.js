///const con = require('mysql');
const express = require('express');
const router = express.Router();

router.post('/', (req, res)=>{
    const email = req.body.contact_email;
    res.json({message:`${email}님 환영합니다`});
});
module.exports = router;