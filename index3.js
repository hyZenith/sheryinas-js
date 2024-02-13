// JS--3 VIDEO
// ----topics----
// ** higher order fncs--
        // --are the  functions which accept a function in a parameter or return a function or both

// function abcd()
// {

// }
//  abcd(function(){})

// function abd(){
//     return function(){}
// }
// abd;
    // aisa function jo ksi function ko accept kre or return krde
// eg.
// var arr = [1,3,4,];
// arr.forEach(function(){})
// foreach is a higher order function


// **constructor function
//normal fnc jisme this ka istemmal ho and aap fnc ko call karte waqt new keyword ka use karein

// function saanchaofBiscuit(){
//     this.width = 12;
//     this.height = 14;
//     this.color = "brown";
//     this.taste = "sugary";
// }

// var bis1 = new saanchaofBiscuit();
// var bis2 = new saanchaofBiscuit();
// var bis3  = new saanchaofBiscuit();

// jab appko lagta hai ek jaise bohut sare elements banane hai tab aap constructor function use kar sakte ho

// function circularButtonBanao(color){
//     this.radius = 2;
//     this.color = color;
//     this.icon = false;
//     this.preseble = true;
// }
// var redbtn = new circularButtonBanao("red");
// var grnbtn = new circularButtonBanao("green");
// var bluebtn = new circularButtonBanao("blue");




//**  first class function
// ---a function is called a first class function when the function in that language treated as normal values,we can save them .
// we can pass them as an argument  to another function

// var helll = function abcd(){

// }
// setTimeout(function(){})

// *** New keyword
 // new=> jab bhi new keyword lagta hai hamesha ek blank object apne man mein bana lo
// {

// }

// function abd(){
//     age = 12;
// }
// new abd();

// {
//     age:12;
// }



//*** iife =>immediately invoked function expression
// iife function ko turant chalane ki kala, is tareeke se ki hum log koi private variable bna paaye

// (function(){
//     var a = 12;

// })()

// var ans = (function(){
//     privateVal = 12;
//     return{
//         getter: function(){
//             console.log(privateVal);
//         },
//         setter: function(val){
//             privateVal = val;
//         }
//     }
// })()



// ***prototype
    // --contains helper properties in browser which we can use to help our task
    //prototype is collection of built in methods to help

//*** prototypal inheritance
     //---  shinchan ka papa
        //-he's a human
        //he is a lazy man
        //he got round eyebrows

    //----ShinChan
        //--because ShinChan is his papa's son, he inherits,or we can say he contain properties of his father
             //-he's a human
            //he is a lazy man
            //he got round eyebrows
        // this is called inheritance


// var human = {
//     canFly: true,
//     canTalk:true,
//     canWalk:true,
//     haveEmotions:true,
//     haveFourLegs:false,
// }

// var sheryiansStudent = {
//     canMakeWebsites:true,
//     canMakeAnimations:true,
//     canMakeWorldAmazingWebsites:true
// }

// sheryiansStudent.__proto__ = human;

//  *** this is call apply bind

    //***-------This--------
// In global scope
// console.log(this); gives window

// In Function scope
// function abcd(){
//     console.log(this)      --- gives window
// }
// abcd()

// In Method scope
   //--ek function jo kisi object ke ander hai, use Method Scope kehte hai
    // var obj = {
    //         name:"harsh",
    //     baatkaro:function(){
    //         console.log(this)     --gives Object scope
    //     }

    // }
    // obj.baatkaro();


    // ***IMPORTANT
    // in any method, "this" keyword always refers to the parent object



    //----call apply blind---
    //agar tumhare pas koi function hai and object hai and tumhe function chalana hai aur by default jo "this" ka value windows na raakh kar point karwana hai kisi object ki taraf

    // function abcd(){
    //     console.log(this.age)
    // }
    // var obj = {age :24 }
    // // abcd();
    // abcd.call(obj);

    //In here call is used for pointing the value of "this" from windows to obj

    // function abcd(val1,val2,val3){
    //     console.log(this,val1,val2,val3)
    // }
    // var obj = {age :24 }

    // abcd.call(obj,1,2,3);
    // abcd.apply(obj, [1,2,3])

    //bind
    // function abcd(){
    //     console.log(this);
    // }
    // var obj = {
    //     age : 24
    // }
    //  var bindedfnc =  abcd.bind(obj)
    //  bindedfnc();

// jab hame koi function chalana hai jisme "this" ka value kuch aur hai par hum chahte hai "this" ka value kuch aur rahe, tab ".call"".bind"".apply" use kia jata hai


//***   pure & impure fnc
    //pure function is a function which has these 2 features:
    //1) it should always return same output for same input
    //2) it will never change/update the value of a global variable

    // function abcd(val){
    //     return Math.random()*val;
    // }                                               ---this is a impure function
    // ans1 = abcd(3)
    // ans2 = abcd(3)

    // function abcd(a,b){
    //     return a*b;
    // }

    // var ans1 = abcd(1,2);
    // var ans2 = abcd(1,2);

