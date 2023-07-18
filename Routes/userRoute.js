const express=require("express");
const userRouter=new express.Router();
const userController=require('../Controllers/UserController');

//routes:-
userRouter.post("/register", userController.register);

userRouter.get("/get-user/:id",userController.getUserId );

userRouter.post("/login", userController.login);

userRouter.put('/forgot', userController.forgot );

userRouter.get('/verify-email', async (req, res) => {
  try {
    

    const user = await User.updateOne(
      { _id: req.query.token },
      { $set: { is_varified: 1 } }
    );
    
    console.log(user);

    if (user.modifiedCount === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ message: 'Email verified successfully' });

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


module.exports=userRouter;