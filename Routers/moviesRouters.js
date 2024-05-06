import express from "express";
import Movie from "../models/movie.js";

const route = express.Router();

//post method
route.post("/add", async (req, res) => {
  try {
    const newmovie = Movie(req.body);
    await newmovie.save();
    res.status(200).send({ msg: "Movie added successfully" });
  } catch (error) {
    res.status(500).send({ msg: "invalid", error });
  }
});
//end

//get method
route.get("/user", async (req, res) => {
  try {
    const getUser = await Movie.find();
    res.status(200).send({ msg: "Movie getted successfully", getUser });
  } catch (error) {
    res.status(500).send({ msg: "invalid", error });
  }
});
//end
//delete method
route.delete("/:id", async (req, res) => {
  try {
    const iduser = req.params.id;
    const movieDel = await Movie.deleteOne({ _id: iduser });
    movieDel.deletedCount
      ? res.status(200).send({ msg: "Movie deleted successfully" })
      : res.status(200).send({ msg: "Movie alredy deleted " });
  } catch (error) {
    res.status(500).send({ msg: "inviled request ", error });
  }
});
//end
//update method
route.put("/:id", async (req, res) => {
  try {
    const updatefilm = await Movie.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    updatefilm.modifiedCount
      ? res.status(200).send({ msg: "Movie updated successfully" })
      : res.status(200).setDefaultEncoding({ msg: "movie already updated" });
  } catch (error) {
    res.status(500).send({ msg: "inviled request ", error });
  }
});
//end

export default route;
