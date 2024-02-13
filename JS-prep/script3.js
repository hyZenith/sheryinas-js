// Classes in js
/* class SanchaForBiscuit {
    constructor(){
        this.width = 4;
        this.height = 3;
        this.taste = "sweet";
        this.price = "$32"
    }
}
var biscuit1 = new SanchaForBiscuit();
 */


/* class KhanekiThali{
    constructor(sweet, price){
       this.sweet = sweet;
       this.price = price;
    }
}
var KhanekiThali1 = new KhanekiThali("rasmalai","$12")
// KhanekiThali1.sweet = "gulla"
var KhanekiThali2 = new KhanekiThali("gualm Jamun","30rupee") */


// -------------------------------------------------
//Question

/* // Q1. write an js  program to find the frequency  of items of an array
var arr = ["a","a","a", "abcd","b","harsh"];

var obj = {};

arr.forEach(function(elem){
    obj.hasOwnProperty(elem) ? obj[elem]++ : obj[elem] =1 ;
})
console.log(obj);

 */


/* // Q.2.write a js program to find duplicate values in a js  array
var arr =  ["a","aa","def","aa","abcd","abcd","abcdef","a","b","c"]
var obj = {}

arr.forEach(function(elem){
        obj.hasOwnProperty(elem) ? obj[elem]++ : obj[elem] =1 ;
})
for(var i in obj) {
   if(obj[i]>1){
    console.log(i)
   }
}    */



// Q3.write a js program which accept a number  as input and insert dashes (-) between each two even numbers .for example if you accept 025468 the output should be 0-254-6-8

// var n = 565266345;
// var nstr = n.toString();

// for(var i =1 ; i < nstr.length; i++ )
//     {
//         if(Number(nstr[i-1]) % 2 === 0 && Number(nstr[i] % 2 === 0))
//           nstr.substring(0,i)+'_'+nstr.substring(i, nstr.length);
//     }


// ---------------------
// Q. write a js program which accept a number as input and swap the case of each character. for example if you input 'The quick brown fox' the output should be 'tHE qUICK bROWN fOX'

function stingCOnverter(str){
    var starr = str.split("").map(function(c){
        if(c.charCodeAt()>90){
            return c.toUpperCase();
        }
        else{
            return c.toLowerCase();
        }
    })
     return starr.join("");

}
var inverted =   stingCOnverter("the Quick Brown Fox");








