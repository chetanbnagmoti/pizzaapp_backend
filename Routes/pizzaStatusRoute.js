const express=require("express");
const pizzaStatusRoute =new express.Router();
const pizzaStatusController=require('../Controllers/PizzaStatusController');

pizzaStatusRoute.post('/accepted-pizza',pizzaStatusController.acceptedPizza);

module.exports=pizzaStatusRoute;