import classes from "./App.module.scss";
import SearchBar from "./components/SearchBar";
import MovieTemplate from "./components/MovieTemplate";
import { useEffect, useState } from "react";

 const App = () => {
  
  const [searchTerm, setSearchTerm] = useState("");
  const [movieDetails, setMovieDetails] = useState("");

  useEffect(() => { //This is a hook that runs when search term is updated. 
    if (searchTerm === "") return; //This check is to prevent the API call from running on initial render.
    fetch(`http://www.omdbapi.com/?apikey=d51f98ac&${searchTerm.match(/tt\d{7}/) ? "i" : "t"}=${searchTerm}`)  
    .then(response => {
      return response.json();
    })
    .then(data => {
      if (data.Response === "False") {
        setMovieDetails("");
        return;
      }
      console.log(data);
      setMovieDetails(data);
    })
  }, [searchTerm]);

  return (
    <div className={classes.App}>
      <h1 className={classes.Header}> IMDb Search Tool </h1>
      <SearchBar searchTerm={setSearchTerm}/>
      <div details={movieDetails}></div>
      {movieDetails !== "" ? <MovieTemplate movie={movieDetails}/> : null}
      <div className={classes.Footer}>Ibrahim Berk Bulgan - 2022 - Burdur</div>
    </div>
  );
}

export default App;