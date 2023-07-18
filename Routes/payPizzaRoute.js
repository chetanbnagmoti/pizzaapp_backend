const express=require("express");
const payPizzaRoute =new express.Router();
const payPizzaController=require('../Controllers/PayPizzaController');

payPizzaRoute.post('/add-pay-pizza',payPizzaController.addPayPizza)

payPizzaRoute.delete('/delete-pay-pizza/:total', payPizzaController.deletePayPizzaTotal);

payPizzaRoute.get("/get-all-pay-pizza",payPizzaController.getAllPayPizza);

payPizzaRoute.get("/get-pay-pizza/:id", payPizzaController.getPayPizzaId );

payPizzaRoute.delete('/delete-pay-pizza-order/:id',payPizzaController.deletepayPizzaOrderId);

module.exports=payPizzaRoute;
