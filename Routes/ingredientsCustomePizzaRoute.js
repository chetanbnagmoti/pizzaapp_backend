const express=require("express");
const ingredientsCustomePizzaRoute =new express.Router();
const ingredientsCustomPizzaController=require('../Controllers/IngredientCustomePizzaController');


ingredientsCustomePizzaRoute.post("/add-ingredients-custom-pizza", ingredientsCustomPizzaController.addIngredientsCustomPizza );

ingredientsCustomePizzaRoute.delete("/delete-ingredients-custom-pizza/:id",ingredientsCustomPizzaController.deleteIngredientsCustomPizzaId);  

ingredientsCustomePizzaRoute.put("/update-ingredients-custom-pizza/:id",ingredientsCustomPizzaController.updateIngredientsCustomPizzaId);

ingredientsCustomePizzaRoute.get("/get-ingredients-custom-pizza/:id",ingredientsCustomPizzaController.getIngredientsCustomPizzaId);

ingredientsCustomePizzaRoute.get("/all-pizza-ingredients",ingredientsCustomPizzaController.allPizzaIngredients);

module.exports=ingredientsCustomePizzaRoute;