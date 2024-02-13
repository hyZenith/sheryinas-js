#flash messages -->jab bhi aap kisi ejs page ko dekhenge waha par  apko kisi prakar kisi prakkar ka koi information dena hai , wo kehlate hai flash message (like when password or email is entered wrong , a message popupped that "password or email is incorrect")

1)install package-flash
2)make sure you put connect flash in app.use function
3)kisi bhi route mein aap ko flash create karna hai
4)kisi bhi dusre route par aap use chalane ka  try kre
--->aap connect flash ko use nhi kar sakte bina express session 


#indemediate mongoodb
        -How can i perform case sensitive search in mongodb
            ---by using RegExp(search, flags) 


        -how do i find  documents where the array field contains all of the set of values?
            ---userModel.find({categories: {  $all: ['mongodb']}})
            --{array: {$all: ['value']}}

        -How can i search for documents with a specific date range in mongoose
                ---   var date1 = new Date(2023-12-20);
                      var date2 = new Date(2024-1-3);
                      let user = await userModel.find({datecreted: { $gte: date1 , $lte: date2}}) 

        -How can i filter documents based on the existance of a field in mongoose
                ---  let user = await userModel.find({categories: {$exists: true}})

 
        -How can i filter documents based on the specific field's  length in mongoose  
        --->    let user = await userModel.find({
                 $expr: {
                   $and: [
                     {$gte:[{$strLenCP: '$nickname'},0]},
                     {$lte:[{$strLenCP: '$nickname'},9]}
                   ]
                 }
               });

        

authentication and authorization
        #install these packages
           npm i passport passport-local passport-local-mongoose mongoose
           express-session
        #write app.js code after in app.js file and write it after view engine and before logger

        #setup user.js then properly
        #in index.js try register first and then other codes as well 



note:
#Regex 
^ --starting 
& --- end 