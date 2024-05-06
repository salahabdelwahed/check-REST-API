import React, { useEffect, useState } from "react";
import movieList from "./components/movieList.js";
import axios from "axios";

const App = () => {
  const [movies, setmovies] = useState([]);
  useEffect(() => {
    const getDataFromDb = async () => {
      await axios
        .get("http://localhost:5000/movie/user")
        .then((result) => setmovies(result.data.getUser))
        .catch((err) =>
          console.log("this error for get data from database:", err)
        );
    };
    getDataFromDb();
   
  }, []);

  return (
    <div>
      <movieList movies={movies}/>
      </div>
  );
};

export default App;