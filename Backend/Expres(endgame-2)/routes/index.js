var express = require('express');
var router = express.Router();

const userModel =  require("./users")
const passport = require("passport");
const localStategy = require("passport-local");

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

/* 
router.get("/failed", function(req, res) {
  // hum ek route se dusre route par data bhej nhi sakte 
 //bur flash message se data bhej sakte hai 
  // req.flash(name , value)
  req.flash("age", 12)  
  res.send("ban gaya ")
});

router.get("/checkkaro", function(req, res) {
 console.log(req.flash("age"));
 res.send("check kro backend ke terminal pe")

}) */


router.get("/create", function(req, res) {
 let userdata = userModel.create({
  username: "harshita ",
  nickname: "hans",
  desription: " age is 15 and nothing to tell bout",
  categories: ['mongodb','fashion','ndejs',"react"]
 });
res.send(userdata);  

})

// router.get("/find", async function(req, res){
//   // new RegExp(search , flags)
//  let regex = new RegExp("^harshIta $",'i')
//  let user =  await userModel.findOne({username:regex})
//   res.send(user)
// })
  
/* router.get("/find", async function(req, res){
  let user = await userModel.find({categories: {  $all: ['mongodb']}})
  res.send(user)
})
 */

  // router.get("/find", async function(req, res){
  //   // /* var date1 = new Date(2023-12-20);
  //   // var date2 = new Date(2024-1-3);
  //   // let user = await userModel.find({datecreted: { $gte: date1 , $lte: date2}})
  //   let user = await userModel.find({categories: {$exists: true}})
  //   res.send({user})
  // })

  // router.get("/find", async function(req, res){
  //   let user = await userModel.find({
  //     $expr: {
  //       $and: [
  //         {$gte:[{$strLenCP: '$nickname'},0]},
  //         {$lte:[{$strLenCP: '$nickname'},9]}
  //       ]
  //     }
  //   });
  //   res.send(user)
  // })


//  -----authentication and authorization

router.get("/profile",isLoggedIn ,function(req, res,){
  // res.render("profile")
    res.send("hell")
})


router.post('/register', function(req,res){
  var userdata = new userModel({
    username:req.body.username,
    secret:req.body.secret,
  });
  userModel.register(userdata, req.body.password)
  .then(function (registereduser){
    passport.authenticate("local")(req,res,function(){
      res.redirect('/profile');
    })
  })
})


  router.post("/login",  passport.authenticate("local", {
    successRedirect:"/profile",
    failureRedirect:"/"
  }), function(req,res){})

router.get("/logout", function(req,res, next){
  req.logout(function(err){
    if(err) {return next(err);}
    res.redirect('/')
  })
})

function isLoggedIn(req,res,next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect("/")
}


  
module.exports = router;
