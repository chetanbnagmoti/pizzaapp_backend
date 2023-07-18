const express=require("express");
const pizzaRouter=new express.Router();
const pizzaController=require('../Controllers/PizzaController');


//Pizza Route:-
pizzaRouter.post("/add-pizza", pizzaController.addPizza);

pizzaRouter.get("/all-pizza",pizzaController.allPizza);

pizzaRouter.delete("/delete-pizza/:id",pizzaController.deletePizzaId);

pizzaRouter.put("/update-pizza/:id",pizzaController.updatePizzaId);

pizzaRouter.get("/get-single-pizza/:id",pizzaController.getSinglePizzaId);

pizzaRouter.get("/search/:key",pizzaController.searchKey);


module.exports=pizzaRouter;