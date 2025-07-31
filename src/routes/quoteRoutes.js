const routes = require("../controller/quoteController")
const express=require("express");
const router=express.Router();

router.post("/quotes",routes.addQuote)
router.get("/quotes",routes.getAllQuotes)
router.get("/quotes/:index",routes.quoteById)
router.delete("/quotes/:index",routes.deteleQuote)



module.exports=router
