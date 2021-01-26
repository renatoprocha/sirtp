const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');

app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

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

//adicionar user

app.post('/signup',(req,res)=>{
    let emp = req.body;
    var sql = "SET @username = ?; SET @password = ?; \
    CALL adduser(@password, @username);"
    mysqlConnection.query(sql, [emp.username, emp.password], (err, rows, fields)=>{
        if(!err)
        res.send(rows);
        else
        console.log(err);
        res.send({success: false, message: 'utilizador ja existe', error: err});
        return;
    })
});
app.get('/login/:username/:password',(req,res)=>{
    mysqlConnection.query('SELECT password FROM users WHERE username = ? AND password = ? ',[req.params.username, req.params.password ],(err, rows, fields)=>{
        if(!err){
            if(rows != 0){
                res.send("utilizador encontrado");
            }
            else{
                res.send("Utilizador nao encontrado")
            }
            
        }
        
        else
        console.log(err);
    })
});