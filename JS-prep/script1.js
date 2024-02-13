//array -- foreach map filter
//---Foreach--->

// var a = [1,2,3,5,6]

// a.forEach(function(val){
//     console.log(val+2)
// })



// Q1.Foreach ka use krke array ke saare member ke age "hello " print kro


// var b =[1,2,3,4,5,6,8]

// b.forEach(function(val){
//      console.log("hello,"+val);
// })
//

//Q2.array ki sare memebrs ko print kro aur unhe chhod do jo ki 2 se bade ho

// b.forEach(function(val){
//     if(val<=2){
//         console.log(val)
//     }
// })



//Q3.sare  elements jo ki aare mein hai unka sum kro
/* sum = 0;
b.forEach(function(val){
    sum = sum + val;
})
console.log(sum); */



//Q4.sare elements ko add kro ,agr unme se koi string nikal jay to use skip kro



// var a =[1,2,3,4,5,'6',8]
// sum =0;
// a.forEach(function(val){
//     if(typeof val === "number"){
//         sum = sum+val;
//     }
// })
// console.log(sum)


// var arr = []
// for(var i = 0; i<10; i++){
//     arr.push(function(){
//         setTimeout(function(){
//            console.log(i)
//         }, 1000);
//     })
// }

// for(var i = 0; i<10; i++){
//     arr[i]();
// }



//------Map----->

// var arr = [1,2,3,4,5,6]s

// var arr2 =[]

// console.log(arr2)
// arr.forEach(function(val){
//     arr2.push(val*2);
// })




//Map=> jab appko array ke har member par koi operation perform karna ho, aur har member par operation karne ke bad usey ek naye array mein dalna hai tab hum "Map" ka use krte hai
// Map bilkul Foreach ki tarah hai
// map hamesha return mangta hai
// return jo hoga wo ek imaginary array mein store ho jayega
// end main jab map khtm ho toh map us imaginary array ko apkko bapas kar dega to app use new variable main save krlo



// var ans = arr.map(function(val){
//     return "hello"
// })

// console.log(ans)


//Questions
//Q1.ek array se ek new array banao jisme word ki length 5 akshar ho to p tag mein dalo nhito span tag mein dalo


// arr = ["apple","guava","a","harsh","puneet"]

// var ans = arr.map(function(val){
//     if(val.length === 5) return `<p>${val}</p>`
//     else return `<span>${val}</span>`
// })

// Q2.ek array of objects hai, aur us array main hum logo ke pass kaafi data hai , usse ek array banao jismei sirf name ho

// var arr = [
//     {name:"harsh",age:42},
//     {name:"hell",age:32},
//     {name:"puneet",age:34}

// ]

// var ans = arr.map(function(val){
//     return val.name //return array
//     // return {name: val.name}  //return object
// })




// Filter=>filter ka bhi exact structure map ki tarah hai
//iska matlba filter bhi return krega
//ab return jo hoga wo har halat mein boolean hona chahiye
//map jo return karta tha wo hi direct save hota tha imaginary array mein, par filter kyuki boolean return kar raha hai to boolean save nhi hota balki boolean ki jagah jo us waqt  value chal rahi hoti hai wo save hota hai

/* var arr = [1,2,4,5,6]
arr.filter(function(val){
    // return true or false
    // return 11>3 or return 13<92;
})

 */
// Q1. arr which is divisible by 2

// var arr = [1,2,3,4,5,6,7]

// var ans = arr.filter(function(val){
//     if(val%2 === 0){
//         return true;
//     }
// })


// Q2. array mein jitne bhi naam aise bhi jinke naam mein "a" aa ho, naamo ko hata do

// var arr = ["harsh","patel","bholu","rhMn","sheryins"]

// var ans = arr.filter(function(val){
//     return  !val.includes("a")
// })


// Q3.aise name ko remve kro  jinmein do ya do se jyada bar "a" aa raha ho

// var arr = ["harshit","naagarjun","hritesh","dimaakh"]

// var ans = arr.filter(function(val){
//     if(val.split("a").length<=2) return true;
// })








// objects --access loop
//freeze ,this call apply bind