const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

var mysqlConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password: '',
    database:'sir_tp2',
    connectionLimit:10,
    multipleStatements: true
})

mysqlConnection.connect((err)=>{
    if(!err)
    console.log('DB connection succeded.');
    else
    console.log('DB connection failed \n Eror: '+ JSON.stringify(err, undefined,2));
})


app.listen(3000, ()=>console.log('Express server is running at port n:3000'));


app.get('/users',(req,res)=>{
    mysqlConnection.query('SELECT * FROM users',(err, rows, fields)=>{
        if(!err)
        res.send(rows);
        else
        console.log(err);
    })
});


app.get('/users/:id',(req,res)=>{
    mysqlConnection.query('SELECT * FROM users WHERE id = ?',[req.params.id],(err, rows, fields)=>{
        if(!err)
        res.send(rows);
        else
        console.log(err);
    })
});

app.delete('/users/:id',(req,res)=>{
    mysqlConnection.query('DELETE FROM users WHERE id = ?',[req.params.id],(err, rows, fields)=>{
        if(!err)
        res.send('Deleted successfully.');
        else
        console.log(err);
    })
});