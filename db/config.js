const mongoose=require('mongoose');
//mongoose.connect('mongodb://127.0.0.1:27017/pizza-app');


const DB = process.env.DATA_BASE;

mongoose
  .connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("Data Base Connection Completed"))
  .catch((error) => {
    console.log(error);
  });

