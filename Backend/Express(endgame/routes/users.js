
//strorage --->container(databases) 

//variety of data which is made by models =>collection (like usersdata,adminsdata,sellsdata,ordersdata etc.)

//In collection the  types of data like userdata of particular users or data of adminsdatas
    //---> [notes.md]  


//steps for mongodb
// -install mogngoose
// -require ans setup connection
//make schema
//create model and export

const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/dbname"); // created  database 

const userscheme = mongoose.Schema({
  username: String,
  name: String,
  age: Number
})  //document ka data

module.exports = mongoose.model("user",userscheme); //colletion

