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
    console.log('DB connection failed \n Error: '+ JSON.stringify(err, undefined,2));
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
    mysqlConnection.query('INSERT INTO users (username, password) VALUES (?, ?)',[emp.username, emp.password ],(err, rows, fields)=>{
        if(!err){
            res.send(rows);
            console.log("Registado!");
        }
        else{
            res.send("Utilizador já existe!");    
            console.log(err);
            console.log("Utilizador já existe!");
        }
    })
});

//verifica login

app.get('/login/:username/:password',(req,res)=>{
    mysqlConnection.query('SELECT password FROM users WHERE username = ? AND password = ? ',[req.params.username, req.params.password ],(err, rows, fields)=>{
        if(!err){
            if(rows != 0){
                res.send({"result": 1});
            }
            else{
                res.send({"result": 0});
            }
            
        }
        
        else
        console.log(err);
    })
});