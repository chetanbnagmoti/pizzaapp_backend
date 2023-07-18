const express=require("express");
const addToCartRoute =new express.Router();
const addToCartController=require('../Controllers/AddToCartsController');

//Add To Cart  Route:-
addToCartRoute.post('/add-to-cart',addToCartController.addToCart)

addToCartRoute.get("/get-cart-pizza/:id",addToCartController.getCartPizzaId  );

addToCartRoute.delete("/delete-cart-pizza/:id",addToCartController.deleteCartPizzaId);  


module.exports=addToCartRoute;