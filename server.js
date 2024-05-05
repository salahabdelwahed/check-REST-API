console.clear();
// importation
import mongoose from "mongoose";
import express from "express";
import "dotenv/config";
import moviesRouters from "./Routers/moviesRouters.js";
import cors from "cors";



const app = express();
const port = process.env.port;


//midellware
app.use(express.json());
app.use(cors());
//end
//connection to database
const connectDB = async() =>{
   await mongoose
    .connect("mongodb+srv://abdo:11139405@cluster0.jcwb7bb.mongodb.net/")
    .then(() => console.log("DB connected"))
    .catch((err) => console.log("error from DB ", err));
}
connectDB()
//end

//CRUD
app.use("/movie",moviesRouters)
//end

app.listen(port, (error) => {
  if (error) throw error;
  console.log(`server is running on http://localhost:${port}`);
});
