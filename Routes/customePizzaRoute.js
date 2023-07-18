const express=require("express");
const customePizzaRoute =new express.Router();
const customPizzaController=require('../Controllers/CustomPizzaController');



//Custome-Pizza-Route:-
customePizzaRoute.post("/add-custom-pizza",customPizzaController.addCustomPizza );

customePizzaRoute.get("/get-custom-pizza",customPizzaController.getCustomPizza);

customePizzaRoute.get("/get-custom-pizza/:id",customPizzaController.getCustomPizzaId);


customePizzaRoute.delete("/delete-custom-pizza/:id",customPizzaController.deleteCustomPizzaId);  

customePizzaRoute.delete("/delete-custom-pizza-price/:price",customPizzaController.deleteCustomPizzaPricePrice);

module.exports=customePizzaRoute;