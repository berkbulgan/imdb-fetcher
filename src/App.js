import classes from "./App.module.scss";
import SearchBar from "./components/SearchBar";
import MovieTemplate from "./components/MovieTemplate";
import { useEffect, useState } from "react";
import searchMovie from "./searchMovie";

 const App = () => {
  
  const [searchTerm, setSearchTerm] = useState("");
  const [movieDetails, setMovieDetails] = useState("");
  
  useEffect(() => {
      searchMovie(searchTerm, setMovieDetails);
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