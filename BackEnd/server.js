const express = require('express');
const cors = require("cors");
const app = express();
app.use(cors());
const mongoose = require("mongoose");
app.use(express.json());
const bodyParser = require('body-parser');
const path = require('path');

const port = 5007;

app.use(express.static(path.join(__dirname, '../build')));
app.use('/static', express.static(path.join(__dirname, 'build//static')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// const mongoUrl = 
//   "mongodb+srv://ronan1234:ronan1234@ronancluster.37jfzh1.mongodb.net/?retryWrites=true&w=majority";

// mongoose
//   .connect(mongoUrl, {
//     useNewUrlParser: true,
//   })
//   .then(() => {
//     console.log("Connected to database");
//   })
//   .catch((e) => console.log(e));


main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb+srv://ronan1234:ronan1234@ronancluster.37jfzh1.mongodb.net/?retryWrites=true&w=majority');
}

require("./userDetails");
const User = mongoose.model("UserInfo");

//sign up functionality
app.post("/register", async (req, res) => {
  const { fname, lname, email, password } = req.body;
  try {
    //data that will be on database
    await User.create({
      fname,
      lname,
      email,
      password,
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
});


const alcoholSchema = new mongoose.Schema({
  brand: String,
  quantity: String,
  description: String,
  image: String
});

const alcoholModel = mongoose.model('Alcohol', alcoholSchema);

app.post('/api/alcohols',(req,res)=>{
  console.log(req.body);

  alcoholModel.create({
    brand: req.body.brand,
    quantity:req.body.quantity,
    description:req.body.description,
    image:req.body.image
  });

  res.send('Data Received');
});

app.get('/api/alcohols', (req, res) => {
  alcoholModel.find((error, data)=>{
    res.json(data);
  });
});

app.get('/api/alcohol/:id', (req, res)=>{
  console.log(req.params.id);
  alcoholModel.findById(req.params.id,(error,data)=>{
    res.json(data);
  });
});

app.put('/api/alcohol/:id', (req, res)=>{
  console.log("Update: "+req.params.id);

  alcoholModel.findByIdAndUpdate(req.params.id, req.body, {new:true},
    (error,data)=>{
      res.send(data);
    });
});

app.delete('/api/alcohol/:id',(req, res)=>{
  console.log('Deleting: '+req.params.id);
  alcoholModel.findByIdAndDelete({_id:req.params.id},(error,data)=>{
    res.send(data);
  })
})
app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirname+'/../build/index.html'));
  });
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})