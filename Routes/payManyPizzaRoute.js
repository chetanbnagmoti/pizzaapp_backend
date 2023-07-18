const express=require("express");
const payManyPizzaRoute =new express.Router();
const payManyPizzaController=require('../Controllers/PayManyPizzaController');

payManyPizzaRoute.post('/add-many-pay-pizza', payManyPizzaController.addManyPayPizza );

payManyPizzaRoute.delete('/delete-many-pay-pizza-item/:total',payManyPizzaController.deleteManyPayPizzaItemTotal)

payManyPizzaRoute.get("/get-all-many-pay-pizza",payManyPizzaController.getAllManyPayPizza);

payManyPizzaRoute.get("/get-many-pay-pizza/:id",payManyPizzaController.getManyPayPizzaId );

payManyPizzaRoute.delete('/delete-many-pay-pizza/:id',payManyPizzaController.deleteManyPayPizzaId);


module.exports=payManyPizzaRoute;

