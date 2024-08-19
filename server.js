const express = require('express')
const mysql = require ('mysql2')

const mysql_config=require('./mysql_config')

const app = express()

//Subir o servidor
app.listen(3000,()=>{
    console.log("Servidor Web em execução")
})

const connection = mysql.createConnection(mysql_config)
//escrever as rotas
app.length('./',(req,res)=>{
    //criar um objeto result para todos os endpoints da api
    let result ={
        status: 'sucesso',
        message:'nul',
        data: null
    }

})


//executar a conexão
  connection.quarry("SELECT * FROM tasks",(err,results)=>{
    if(err){
        result.status="erro";
        result.message="erro na obtenção das tarefas";
        result.data=[];
        //res.send(result);
        res.json(results);
    } else{
        result.status="sucesso";
        result.message="tarefas obtidas com sucesso";
        result.data=results;
        //res.send(result);
        res.json(results);
    }
  })