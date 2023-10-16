const express = require('express');
const app = express();

const cors = require('cors');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());


// ...




const {
    MongoClient
} = require('mongodb');
const {
    error
} = require("console");
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb+srv://avinesh_26:100621rivi@avinesh.frrkapv.mongodb.net';
const client = new MongoClient(url);


app.post('/credential', async function main(req, res) {

  
    await client.connect();
    console.log('Connected successfully to server');
    const db = await client.db('credential')
    const collection = await db.collection('login')
    await collection.insertOne(req.body)
    
    res.send(req.body)
    

})

app.get('/credentials', async function main(req, res) {

    console.log(req.query)
      await client.connect(); 
      console.log('Connected successfully to server');
      const db = await client.db('credential')
      const collection = await db.collection('login')
      let data = await collection.findOne({username:req.query.username,password:req.query.password})
      console.log(data)
  
      let msg = ''
      
      if(data == null){
  
          msg = 'username and password is invalid'
      }
      else{
  
          msg = 'Login Successfully'
      }
  
      res.send({status:true,data:msg})
      
  
  })
  
  app.listen(9000);