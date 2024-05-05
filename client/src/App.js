import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [movies, setmovies] = useState([]);
  useEffect(() => {
    const getDataFromDb = async () => {
      await axios
        .get("http://localhost:5000/movie/user")
        .then((result) => setmovies(result.data.getDataFromDb))
        .catch((err) =>
          console.log("this error for get data from database:", err)
        );
    };
    getDataFromDb();
   
  }, []);

  return (
    <div>
      {movies.map((film) => (
        <h1 key={film.id}>{film.title}</h1>
      ))}
    </div>
  );
};

export default App;
