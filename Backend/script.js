// import and export 
// and module.export = (var name)  --used for export
// for export double var we have to use if the variables are a and b
        // module.exports = {first:a , second:b}
// require('./...location') --- used for importing

// var a = 2;
// module.exports = a; 

// // using one line joke npm package
// var oneLinerJoke = require('one-liner-joke');
// console.log(oneLinerJoke.getRandomJoke());



//Express 

const express = require('express')
const app = express()

app.set("view engine","ejs");
app.use(express.static('./public'))

//Middlewere
// during use of middleware, request jam ho jata hai , request ko route pe bhejne ke liye ek push dena padta hai jiske liye next() use hota hai
app.use(function(req,res, next){
    console.log("hello from middlewar");
    next();
    
})
// app.get(route ,function)

// app.get("/",function(req,res){
//     res.send("hello world") 

// })

app.get("/profile",function(req,res){
    res.send("hello from profile")

})
app.get("/profile/harsh",function(req,res){
    res.send("hello from profile")

})
//route parameter ---> Dynamic routing
app.get("/profile/:username",function(req,res){
    res.send(`Hello from ${req.params.username}`)
})


app.get("/",function(req,res){
     res.render("index", {age:12}); 

})
 
app.get("/about",function(req,res){
     res.render("about"); 

})
 
app.listen(3000);

