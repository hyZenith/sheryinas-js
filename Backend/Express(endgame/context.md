express generator
mongodb
    dbs,models,scheme ,collections, documents

Intermediate mongodb
        How can i perform case sensitive search in mongodb
        how do i find  documents where the array field contains all of the set of values?
        how can i search for documents with a specific date range in mongoose
        how can i filter documents based on the existance of a field in mongoose
        how can i filter documents based on the specific field's  length in mongoose

session and cookies 
---both are used to save data 
    --cookies save data in front-end
    --session save data in back-end

  
understandng sessions
    creating sessions, using session across routes and destroying sessions
    
    sesions ====>

  create --
    req.session.koibhinam = koibhivalue;

    read -- 
    req.session.koibchinam
    
    delete --
    req.session.destry

        
    cookies ====>
    create --
    res.cookie("name", value  )
    
    reading --
    req.cookie.name

    delete --
    res.clearCookie("name")
