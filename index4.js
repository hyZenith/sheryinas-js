// ----ASYNC JAVASCRIPT--
//sync vs async ?
//synch=> work serielly one after another (matlab ek ke bad dusra ,jab tak ek command complete naho dusra shuru nhi hoga)

//async=> work start at a same time but responce came one after another (sare kam ek sath suru karo ,jiska ans pehle aajaye uska jawaab dedena)

//How to determine async and sync js
    //async----
// setTimeout
// setInterval
// Promises
// fetch
// XMLHttpRequest

// if we aren't using those in asynch then we are writing sync js


//***asynch js hai kya?
// eg.
    // console.log("hey");
    // // setTimeout(callback,Timeinms) --callback is a function
    // setTimeout(function(){
    //     console.log("hello");
    // },2000)

//js is not asynchronous
    // MainStack=>jo bhi mainstack pe hota hai wo output karta hai
    // synchronous always move to mainstack


    //SideStack=>sidestack par behind the scenes processing kar sakta hai aur jab uski processing complete ho use main la kar chalaya ja sakta hai
    //asynchronous move to sidestack

    // console.log("hey1")
    // console.log("hey2")
    // setTimeout(function(){
    //     console.log("hey3")
    // },0)
    // console.log("hey4")

    // Event loop --relationship between mainstack and sidestack


//callbacks => Functions

// fetch
// promises
// axios
// setTimeout
// setInterval

//  for ans of async
// then catch
// callbacks
// async await

// jo code async function complete hone par chalta hai
//  setTimeout(function(){},10000)



// promises

    // promises  ----- saved in var
    // it can be in three states
            // --pending
            // ----Resolve ------ then
            // ----Reject  ----- catch


    // var ans = new Promise((res,rej) => {
    //     if(false){
    //         return res();
    //     }
    //     else{
    //         return rej();
    //     }
    // })

    // ans
    //         .then(function(){
    //             console.log("resolve ho gaya tha");
    //         })
    //         .catch(function(){
    //             console.log("resolve nhi hua tha");
    //           })


    //Q. user will ask a number between 0 to 9 and if the number is below 5 then resolve if not reject

    // var ans = new Promise((res,rej)=>{
    //    var n = Math.floor(Maths.random()*10) ;
    //    if (n<5){
    //     return res();
    //    }
    //    else{
    //     return rej();
    //    }
    // })
    // ans.then(function(){
    //     console.log("below")
    // })
    // .catch(function(){
    //     console.log("above")
    // })
    //Q..2. sabse pehle ghar ayoo
        //phir gate kholo aur gate lagao
        //kahan pakao khana khao
        //incognito mode chalao
        //sojao kyuki thak gaye ho
    // =>
        // var ans = new Promise((res,rej)=>{
        //     return res("sabse pehle ghar aao");
        // })

        // var p2 = ans.then(function(data){
        //     console.log(data);
        //    return  new Promise((res,rej)=>{
        //         return res("phir gate kholo aur gate lagao");
        //     })

        // })
        // var p3 = p2.then(function(data){
        //     console.log(data);
        //     return new Promise((res,rej)=>{
        //         return res("kahan pakao khana khao")
        //     })
        // })
        //  var p4 = p3.then(function(data){
        //     console.log(data);
        //     return new Promise((res,rej)=>{
        //         return res("incognito mode on karo")
        //     })
        // })
        // p4.then(function(data){
        //     console.log(data)
        //      return new Promise((res,rej)=>{
        //         return res("so jau kyuki thak gaye ho")
        //     })
        // })
        // p4.then(function(data){
        //     console.log(data)
        // })

    // function abcd(){
    //     fetch( `https://randomuser.me/api/`)
    //     .then(function(raw){
    //         return raw.json();
    //     })
    //     .then(function(data){
    //         console.log(data);
    //     })
    // }
    // abcd();

    //Instead of ".then" we can use "await fetch"


//    async function abcd(){

            //for .then condition

//         fetch(`https://randomuser.me/api`)
//         ---->it will come in raw format---from raw to readable format(json)
//         // .then(function(raw){
//         //     return raw.json(); ---await will remove one ".then"
//         // })

//         // .then(function(data){
//         //  console.log(data); -- for this ".then" another await is used
//

            //fetch condition

//         let raw = await fetch( `https://randomuser.me/api/`) ;
//         let ans =  await raw.json();
//         console.log(ans);

//         // })
//
//     }

//     abcd();



//[concept aside]
// single threading=> ek kam ek bar mein kar rahi hai   
//multi theading => do kam ek bar mein kar rahi hai (multi threading also called cncurrency)
//concurrency parallelism

    //concurrency=> js mein async and sync code ek sath process ho raha tha,this is concurrency
    // parallelism => focus jyada karta hai  different processors and unke cores par kaam ko chalaane par

// Throtting =>kisi code ko control number of executions
