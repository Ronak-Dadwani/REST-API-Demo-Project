require("dotenv").config()

const mongoose = require("mongoose")

const conncetToDB = async () => {
        mongoose.connect(process.env.MONGO_URI)
        .then((conn)=>{
            console.log("DB CONNCTED");
        })
        .catch((err) =>{ 
            console.log(err);
        })
}
module.exports = conncetToDB