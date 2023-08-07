const express = require('express')

const conncetToDB = require('./Config/db')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended : true}))



conncetToDB()

const userroutes = require("./routes/userroutes")

app.use("/" , userroutes)

app.get("/" , (req,res) => {
    res.send("<h1>Welcome to our custom server</h1>")

})

app.get("/youtube" ,(req,res)=>{
    res.json({
        success:true,
        message: "Welcome to PW youtube"
    })
})

app.get("/Instagram" ,(req,res)=>{
    res.send("<h1>Welcome to pw Instagram Page</h1>")
})
module.exports = app