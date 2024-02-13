//iife==> immediately invoked function expression is a function expressed which is immediately called as it is created
// function(){}  --->anonymous function(function which don't have a name)
// (function(){}) --->expression

// (function(){})(); //---->iife
// why iife? ==> to make private variables

// (function(){
//     var a = 12;  //var a is a private variables now and we cannot change it from outside
//     //agar function ke andar hum change and access krne ka code likhein aur us code ko bahar bhej de to bahar se bhi change kiya ja sakta hai

// })();

/* var ans = (function(){
    var a = 12;
    return {
        gettter:function(){
            console.log(a);
        },
        setter:function(prm){
            a = prm;
        }
    }
})();

// ans.gettter() -- getter used for accessing the value
ans.setter(23)  //---setter used for set the value
ans.gettter()   ; */

//----------------------------------------------

// slice and splice
//slice => array ke kisi part ko nikalke dega
//splice => array ke kisi hisse ko hata dega


// var arr = [1,2,3,4,5]
// console.log(arr.slice(1,3));
// slice input dene wala postion ka element dega
// arr.splice(0,2);
//splice(position,no. of elements need remove)

// mutable and immutable  ==> aisa koi bhi operation jisse array ki value change ho jaye use mutable and jisse array ki value same rahe use kahte hai imutable

//***slice kyuki array mein changes nahi karr raha to wo immutable hai and splice kyuki array main changes kar raha hai toh woh mutable hai

//deleting something from object
// var obj = {
//     name:"harsh",
//     age : 23,
//     gawaarHai :true
// }
// delete obj.gawaarHai

//Q.** Make the object immutable so that we can't update add delete values from it

// var obj = {
//     name:"harsh",
//     age: 23,
//     Company:"gawarCompany"
// }

// Object.freeze(obj);
// obj.name = "hello"
// delete obj.name;

// !! symbol => apki kisi bhi value ko convert kardega uske resembling boolean form mein

// var arr = !![1,2,3,4,5,6]

//get all unique values in js array
// var arr = [1,2,34,4,5,56,6,7,33,55]
// var arr2 = [...new Set(arr)]

//------------------------------------------------------
// Promises,First class fnc, first order fnc,higher orde fncs , currying function

// Promises=> koi bhi kam jo apko karna hai par wo kaam bad main complete hoga to us time par Promises ka use krte hai

// Q1.5 secodn bad ek random number nikalo aur agr random number ek 5 se chota hai to "hello"  print kro nhito "hye" print kro

// setTimeout(function(){
//   var randomnum =   Math.floor(Math.random()*10);
//     if(randomnum<5) console.log("hello");
//     else console.log("hye");
// },5000)

// new Promise((hoga, nahihoga)=>{
//*Promise ke andar hamesha resolve chalga ya reject ,aur agr res chala then resultant mein jo ans ayega wo then ke basis pe chalga
// })

// var resultant  = new Promise((res,rej)=>{
//     var rn = Math.floor(Math.random()*10);
//     if(rn < 5) return res();
//     else return rej();
// })

// resultant.then(function(){
//     console.log("Hello");
// })
// .catch(function(){
//     console.log("hii");
// })

/* var resultant = new Promise(function(res,rej){
    setTimeout(function(){
        return res();
    },2000);
});

resultant.then(function(){
    console.log("hello");
})
.catch(function(){
    console.log("hii");
}); */

// Q2.user wil ask for a number between 0 se 9 if the number is below 5 resolve if not reject

/* var ans = new Promise((res,rej)=>{
   var n = Math.floor(Math.random()*10);
    if(n<5){
        return res();
    }
    else{
        return rej();
    }
})
ans.then(function(){
    console.log("below ");
})
.catch(function(){
    console.log("above");
}) */

// Q3. sabse pehel ghar aao
// gate kholo aur gate lagao
// kahan pakao khana khao
// inconginito mode chalao
// sojao kyuki tm thak gaye hoo

/*
var ans = new Promise((res, rej) => {
  return res("sabse pehle ghar aao");
});
var tsk1 = ans.then(function (data) {
  console.log(data);
  return new Promise((res, rej) => {
    return res("gate kholo aur gate lagao");
  });
});
var tsk2 = tsk1.then(function (data) {
  console.log(data);
  return new Promise((res, rej) => {
    return res("khana pakao aur khao");
  });
});
var tsk3 = tsk2.then(function (data) {
  console.log(data);
  return new Promise((res, rej) => {
    return res("incongnito mode chalao");
  });
});
tsk3.then(function (data) {
  console.log(data);
  return new Promise((res, rej) => {
    return res("sojao kyuki thak gaye ho");
  });
});
tsk3.then(function (data) {
  console.log(data);
});
 */



