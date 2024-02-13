//Q1.write a javascript function to check whether an `input` is an array or not?
//-----method-1--
// function CheckArray(inp){
//    return Array.isArray(inp);
// }

// console.log(CheckArray(2))
// console.log(CheckArray({}))
// console.log(CheckArray([1,2,4])) 


//---method-2---

// function CheckArray(inp){
//     return inp instanceof Array;
// }

// console.log(CheckArray([1,2,4,5]));
// console.log(CheckArray(2));



// Q2.Write a js function to clone an array?
// function cloning(inp){
//     var arr = [...inp];
//     return arr;
// }
// //--       array with sub-array
// console.log(cloning([1,3,55,[9,4]])); 



//Q3.write a js function to get the first element of the array.passing the parameter 'n' will return the first 'n' elements  of the array?  
// function getter(inp,get = 1){
//     var cloned = [];
//     for(var i = 0; i < get; i++){
//         cloned.push(inp[i]);
//     }
//     return cloned;  
// }
// console.log(getter([1,2,4,5]));
// 

//Q4.wrte a simple js program to join all elements of the following into string.
    //sample array : myColor=["Red","Green","blue","black"]
    //soluton=> Red,Green,blue,black

// function joiner(inp){
// //    return inp.join(",")
//     return inp.join("+")
// }
// console.log(joiner(["Red","Green","Blue","yellow"]));

//Ways to create an Object
// 1.var a = {} //object literal
// 2.2.var ans = Object.create(null) // by using object create method

// 3.
// function obj(){
//     this.name = "harsh"
// }
// new obj();

// class object{
//     constructor(){}
//     a =12;
// }
// var ans = new object();


// Higher Order Function
 // `function abcd(inp){
 //     return function(inp2){return inp2+inp }
 // }
 // console.log(abcd(10)(20))`

//call apply bind

// var obj = {
//     name:"harsh"
// }

// function abd(a,b,c,d){
//     console.log(this,a,b,c,d);
// }
// // abd()
// //with the help of call we can trasnform the value of this from windows to obj
// abd.call(obj,1,2,3,4)

// apply 
// abd.apply(obj,[1,2,3,4])

//bind
// var newfc = abd.bind(obj);
// newfc()