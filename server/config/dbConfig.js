const mongoose = require("mongoose");

mongoose.connect(process.env.mongo_url)


const connection = mongoose.connection;


//verify connection
connection.on('connected', ()=>{
    console.log("mongo DB connect successful")

})

//verify  connection error 

connection.on('error', (err)=>{
    console.log("mongo DB connect error")
})