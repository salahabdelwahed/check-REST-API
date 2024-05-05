import express from "express";
import Movie from "../models/movie.js";


const route = express.Router();


//post method 
route.post("/add", async (req, res) => {
    try {
        const newmovie = Movie(req.body)
        await newmovie.save()
        res.status(200).send({msg: "Movie added successfully"})
    } catch (error) {
        res.status(500).send({msg:"invalid",error});
    }
})
//end

//get method
route.get("/user", async (req,res)=>{
    try {
        const getUser = await Movie.find()
        res.status(200).send({msg: "Movie getted successfully",getUser})
    } catch (error) {
        res.status(500).send({msg:"invalid",error});
    }
})
//end 




export default route;