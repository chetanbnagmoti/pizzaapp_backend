const express=require("express");
const paymentPizzaRoute =new express.Router();
const paymentController=require('../Controllers/PaymentController');

paymentPizzaRoute.post('/orders',paymentController.orders);
paymentPizzaRoute.post('/verify',paymentController.verify);

module.exports=paymentPizzaRoute;
