var express = require('express');
var router = express.Router();
const userModel = require("./users"); //for importing mongodb database

/* GET home page. */

router.get("/",function(req,res){
  res.cookie("age" , 24)
  req.session.ban = true;
  res.render("index")
})

//Collection -->
//creation
router.get("/create",async function(req,res){
const createdUser = await userModel.create({
    username:"harsh",
    name:"harsh patil",
    age:12,
  });
  res.send(createdUser);
})

// find ----> for finding all users in the collection
router.get("/allUsers", async function(req,res){
  let allUsers = await userModel.find()
  res.send(allUsers);
})

//findOne ----> for finding particular users
// router.get("/allUsers", async function(req,res){
//   let allUsers = await userModel.findOne({username: "harsh"});
//   console.log(allUsers);
//   res.send(allUsers);
// })
  

//delete--->
router.get("/delete", async function(req,res){
  const deletedUser = await userModel.findOneAndDelete({
    username: "harsh"
  });
  res.send(deletedUser);
})

router.get("/checkban" , async function(req,res){
  if(req.session.ban === true){
    res.send ("You are Banned")
  } 
  else{
    res.send ("You are not Banned")
  }
  // console.log(req.session);
  // res.send("check kiya consle dekho");
})
router.get("/removeban" , async function(req,res){
  req.session.destroy(function(err){
    console.log(err);
    if (err) throw err;
    res.send("ban Removed ")
  })
})

router.get("/readcookie" , async function(req,res){
  console.log(req.cookies.age);
  res.send("check console");
});

router.get("/deletecookie" , async function(req,res){
  res.clearCookie("age");
  res.send("cookie clear hogaya");
})

module.exports = router;
