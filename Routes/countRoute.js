const express=require("express");
const countRoute =new express.Router();
const countController =require('../Controllers/CountController');

countRoute.post('/add-count', countController.addCount );

countRoute.post("/update-count", countController.updateCount );

countRoute.get('/get-count', countController.getCount);


module.exports=countRoute;