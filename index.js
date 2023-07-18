require("dotenv").config();
require('./db/config');
const express = require('express');
const app = express();
const cors = require('cors');
const http=require('http');
const {Server} =require('socket.io');

const PORT=process.env.PORT || 8000;


const userRoute=require('./Routes/userRoute');
const pizzaRouter=require('./Routes/pizzaRoute');
const customePizzaRoute=require('./Routes/customePizzaRoute');
const ingredientsCustomePizzaRoute=require('./Routes/ingredientsCustomePizzaRoute');
const countRoute=require('./Routes/countRoute');
const addToCartRoute=require('./Routes/addToCartRoute');
const payPizzaRoute =require('./Routes/payPizzaRoute');
const payManyPizzaRoute=require('./Routes/payManyPizzaRoute');
const paymentPizzaRoute=require('./Routes/paymentPizzaRoute');
const pizzaStatusRoute=require('./Routes/pizzaStatusRoute');



const IngrediendenEmail=require('./Email/IngrediendenEmail');

const Base_URL_VERIFY =process.env.Base_URL_VERIFY;


app.use(cors());
app.use(express.json());
//Users Route:-
app.use(userRoute);
//Pizza Route:-
app.use(pizzaRouter);
//Custome-Pizza-Route:-
app.use(customePizzaRoute);
//Ingredients custome pizza Route:-
app.use(ingredientsCustomePizzaRoute);
//Count Route:-
app.use(countRoute);
//Add To Cart Route:-
app.use(addToCartRoute);
//Pay-Pizza Route:-
app.use(payPizzaRoute);
//Pay-Many-Pizza-Route:-
app.use(payManyPizzaRoute);
//Payment-pizza-Route:-
app.use(paymentPizzaRoute);
//Accepted-pizza-Route:-
app.use(pizzaStatusRoute);


//socket.io code here:-

const server =http.createServer(app);
const io=new Server(server,{
  cors:{
    origin:`${Base_URL_VERIFY}`,
    methods: ['GET','POST'],
  }
})

io.on('connection',(socket)=>{
    //  console.log(`user connected  ${socket.id}`);
     
     socket.on("join_room", (data) => {
      console.log("user_Id : ="+data);
      socket.join(data);
    });
  

     socket.on("accepted_Order",(data)=>{
      console.log(data);
      // socket.broadcast.emit("receive",data);
    //  io.to(data.room).emit("receive", data.data);
    io.to(data.room).emit("receive", data);
    
     })

     socket.on("in_kitchen_Order",(data)=>{
      console.log(data);
      // socket.broadcast.emit("receive",data);
      // io.to(data.room).emit("receive", data);
      io.to(data.room).emit("receive", data);
    
     })

     socket.on("order_Send",(data)=>{
      console.log(data);
      // socket.broadcast.emit("receive",data);
      //io.to(data.room).emit("receive", data);
      io.to(data.room).emit("receive", data);
    
     })
     
     socket.on("success",(data)=>{
      console.log(data.data);
      io.emit("success", data);
     })
     let isEmailSent = false;
     socket.on("limit", (item) => {
      console.log("Item Remaining: " + item.data);
      
      if (!isEmailSent) { // Check if the email has already been sent
        IngrediendenEmail.sendEmailIngredient(item.data, item.userEmail);
        isEmailSent = true; // Set the flag to indicate that the email has been sent
      }
    });

   socket.on('disconnect',()=>{
    console.log("disconnected user");
   })

})

















server.listen(PORT, () => {
  console.log("Server is running on port 8000");
});
