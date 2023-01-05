const express = require('express')
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

//mongodb+srv://admin:<password>@cluster0.8taek.mongodb.net/?retryWrites=true&w=majority
// getting-started.js
const mongoose = require('mongoose');
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb+srv://admin:admin@cluster0.8taek.mongodb.net/imagedb?retryWrites=true&w=majority');
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

const carSchema = new mongoose.Schema({
  make: String,
  reg: String,
  description: String,
  image: String
});

const carModel = mongoose.model('fdgdfgdfgdfg', carSchema);

app.post('/api/cars',(req,res)=>{
  console.log(req.body);

  carModel.create({
    make: req.body.make,
    reg:req.body.reg,
    description:req.body.description,
    image:req.body.image
  })
  
  res.send('Data Recieved');
})

app.get('/api/cars', (req, res) => {
  carModel.find((error, data)=>{
    res.json(data);
  })
})

app.get('/api/car/:id', (req, res)=>{
  console.log(req.params.id);
  carModel.findById(req.params.id,(error,data)=>{
    res.json(data);
  })
})

app.put('/api/car/:id', (req, res)=>{
  console.log("Update: "+req.params.id);

  carModel.findByIdAndUpdate(req.params.id, req.body, {new:true},
    (error,data)=>{
      res.send(data);
    })
})

app.delete('/api/car/:id',(req, res)=>{
  console.log('Deleting: '+req.params.id);
  carModel.findByIdAndDelete({_id:req.params.id},(error,data)=>{
    res.send(data);
  })
})
// app.get('*', (req,res) =>{
//   res.sendFile(path.join(__dirname+'/../build/index.html'));
//   });
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})