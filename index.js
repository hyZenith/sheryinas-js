 //1---> var const let

// variables and constatnt
// code m ein koi bhi data store karne ke liye jiska use hota hai use kehte hai  "variables

// var dulha ="lab";
// var dulhan ="labby";

// const dulhaa ="lab";
// const varn ="labby";

// 2 --> Hoisting - variable and function  are hoisted which claims declaration is moved on the top of code
// var a;   ----declaration
// console.log(a);
// a = 12;   --- initialisation


 // 3 types in js
// primitive and reference

// primitive = number , string ,null , undefined ,boolean
// reference = [] ,{} ()
// aiso koi bhi value jisko copy karne par real copy nahi hota,balki us main value ka referece  pass ho jaata hai use hum reference value kehte hai ,aur jiska copy karne par real copy ho jaaye wo value primitive type value hoti hai

//  var a = 1;
//  var b = 2;
//  b = b+1;

//  var a = [12,13];
//  var b = a;
//  b.pop();
//  .pop help us to remove  last element


// ------> conditionals -- if and else
//  if(){

//  }
//  else if(){

//  }
//  else(){

//  }

//  loops -for while (meaning repeat)


// 0-10
// for(var i = 1; i<11; i++){
//     console.log(i);
// }

// var a = 13;
// while(a<20){
//     a++;
// }

// functions = code ko store karna or code ko name dena
//  ---future code ko chalane ke liye function use karte hai

// --parameters and arguments

//    --in func brackets are called parameters
// function hllo(a,b,c,d){
//     console.log(a,b,c,d);
// }
// hllo(12,34,45,21);



// arrays = jab hame ek variable mein ek value store kar paate hai par jab hamein ek se jyaada value store karni ho tab fir use hota hai array ka, matlab ki array aapko freedom deta hai ek se jyada value use krni ki
// array = group of values
// var arr = [1,2,3,4,5]


// push ,pop, shift, unshift, slice ---

// var arr = [21,24,32,43,45]
// arr.push(8);
// push to add extra member in array

// arr.pop();
// pop used to remove last member in array

// arr.unshift(9);
// unshift used for add a member in first position

// arr.shift();
// shift used for remove first value from Array


// arr.splice(4);
// splice is used for removing index  from middle of Array


// Object-- ek se jyada bande ke bare mein baat ki toh array and ek bande ke baare mein saari baat ki to hua object
// object hai ek bande ki detail ko hold karna,in a key value pair

// 1) black object
// var a ={};

// // 2)filled object
// var a = {
//     age: 23,
//     name: "harsh",
//     email:"hello@gmail.com",
//     kuchbolo:function(){}
//     // --the function is called method--
// }
// // for changing
// a.name = "hello this is nw rowld";