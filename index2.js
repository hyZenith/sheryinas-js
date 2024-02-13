// --advanced javascript--\
// javascript versions -1)es5 and 2)es6
// es5 has var and es6 has let const 

//---->var let const
  
// var function scoped hota hai => var apne parent fnc main kahi bhi use mein kaun ata hai foreach loop ho sakta hai 
// var function scoped hota hai 
// var add itself to the windows itself --->>js language kuch cheeje nahi hai jo hum use kar saktehai aur wo cheeje  hum js se nahi balki browser se milti hai . aise sare features jo js ka part nahi hai but fir bhi use kar sakte hai unhe hum dhoond sakte hai ek particular object mein jiska name hai window 

 // /*  function abd(){
//     for(var i = 1; i<12; i++){
//         console.log(i);
//     }
//     console.log(i);
// }
// abd(); 

// let cons braces scoped hota hai 
// let cons new js mein use mein kaun ata hai foreach loop hota hai 
// var doesn't add itself to the windows itself

// --stack--
// => order of doing something 

// ---heap memory---
    // jitne bhi varibles hum bante hai  unhe store kahi to karna padta hai uske liye hota hai heap memory

    
//----execution context----
// jab hum function chalayenge tab func apna ek imainary container bana lega  jismein uska teen chije hogi:
// 1)variables
// 2)functions inside that parent function
// 3)lexical environment of that function
// yeh joh imaginary contianer hai ise hi execution context kehte hai 

// function abcd(){
//     var a = 12;
//     function def(){
//         var b = 24;
//     }
    
// }

// abcd();
// execution context is a container where the function's code is execute and its created whenever a fucntion is called, it contains 3 things varibles,functions and lexical environment

// --lexical envionment  hota hai ek chart jisme ye likha hota hai ke aapka particular  funciton kin cheejo ko access kar sakta hai and kinko nhi , matlab ki its holds it's scope and scope chain

//---How to copy reference value ----
// var a =[1,2,3,4,5]
// var b = [...a]
// //the ... is called spread operator
// console.log(b);
// var obj = {name:"harshit"};
// var copyobj = {...obj};
// console.log(copyobj);

// ---truthy vs falsy
// js mein kuch bhi likho wo mainly do prakarr mein se kisi ek prakar ko belog karti 
//falsey value ye hai = 0 false undefined nul NAN document.all
// if any value does not belong to falsey value then it is truthy value
//NAN mean not a number
 
// if(0){
//     console.log("hey");

// }
// else{
//     console.log("hello");
// }

// --foreach forin do-while--- 
// --foreach loop srf array pe chalta hai matlab ki tumhare pas ek aray ho ,tab use mein kaun ata hai-foreach loop 

// var a =[1,2,3,4,5,6,7,8,9,10]


// a.forEach(function(val){
//     console.log(val+2);  
// })

    // foreach kabhi bhi  by default aapke array main change nahi karta wo aapko changes krke deta hai array ki temporary copy par jiske wajah se array hamersha same rehta hai  

// --forin--
// objects par loop karne ke liye hota hai forin loop
// var obj = {
//     name:"harshit",
//     age:24  ,
//     city:"Bhopal",
// }

// for(var key in obj){
//     console.log(key,obj[key]);

// }


// --do-while--    

// var a = 12;
// do{
//     console.log("hey");
//     a++;
// }
// while(a<15);


// --callback functions --
// jo bhi aisa code badme chalta hai aap likhoge , kyuki  wo code bad mein chalta hai  js ko ye pata nhi hota hai ki wo complte  hua ya nahi, aise code    completion    par js ko bataya jata hai ke wo complte hogya aur use chala sakte ho , ye batane ka kaam  callback ka hai

// demo----> 
// setTimeout(function(){
//     console.log("2 second bad chalao");
// },2000)



// --what is first class function---
//  js mein ek concept hai jiska matlab hota hai  ki  aap function ko use kar sakte hai as a value


// var a = function(){};

// function abcd(a){
//     a();
// }
// abcd(function(){console.log("hey");})


// --how to delete object properties---
// var a = {
//     name:"harshit",
//         age:25 ,
// };

// delete a.age;
// delete a.name;