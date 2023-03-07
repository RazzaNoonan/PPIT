const express = require('express')
// const dotenv = require("dotenv").config();
const app = express()
const port = 4000
var bodyParser = require('body-parser')
const path = require('path');
app.use(express.static(path.join(__dirname, '../build')));
app.use('/static', express.static(path.join(__dirname, 'build//static')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const cors = require('cors');
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


const mongoose = require('mongoose');
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb+srv://admin:admin@cluster0.8taek.mongodb.net/imagedb?retryWrites=true&w=majority');
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

const alcoholSchema = new mongoose.Schema({
  brand: String,
  quantity: String,
  description: String,
  image: String
});

const alcoholModel = mongoose.model('fdgdfgdfgdfg', alcoholSchema);

app.post('/api/alcohols',(req,res)=>{
  console.log(req.body);

  alcoholModel.create({
    brand: req.body.brand,
    quantity:req.body.quantity,
    description:req.body.description,
    image:req.body.image
  })
  
  res.send('Data Recieved');
})

app.get('/api/alcohols', (req, res) => {
  alcoholModel.find((error, data)=>{
    res.json(data);
  })
})

app.get('/api/alcohol/:id', (req, res)=>{
  console.log(req.params.id);
  alcoholModel.findById(req.params.id,(error,data)=>{
    res.json(data);
  })
})

app.put('/api/alcohol/:id', (req, res)=>{
  console.log("Update: "+req.params.id);

  alcoholModel.findByIdAndUpdate(req.params.id, req.body, {new:true},
    (error,data)=>{
      res.send(data);
    })
})

app.delete('/api/alcohol/:id',(req, res)=>{
  console.log('Deleting: '+req.params.id);
  alcoholModel.findByIdAndDelete({_id:req.params.id},(error,data)=>{
    res.send(data);
  })
})
// app.get('*', (req,res) =>{
//   res.sendFile(path.join(__dirname+'/../build/index.html'));
//   });
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})