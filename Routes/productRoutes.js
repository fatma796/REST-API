const express = require("express")
const router = express.Router()
const {createProduct} = require("../Controllers/productControllers")
const {getProduct} = require("../Controllers/productControllers")
const {updateProduct} = require("../Controllers/productControllers")

//router.post("/createproduct", createProduct)
//router.get("/getproduct", getProduct)
router.put("/updateproduct/:id", updateProduct)
//router.delete("/deleteproduct/:id", deletEProduct)







module.exports =router