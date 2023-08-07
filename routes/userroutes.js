const express = require("express")
const {createUser} = require("../Controller/usercontroller")
const router = express.Router()


router.post("/CreateUser" , createUser)



module.exports = router