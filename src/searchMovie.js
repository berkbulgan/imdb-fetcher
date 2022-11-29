const searchMovie = (searchTerm, setState) => {
    if (searchTerm === "") return; //This check is to prevent the API call from running on initial render.
    fetch(`http://www.omdbapi.com/?apikey=d51f98ac&${searchTerm.match(/tt\d{7}/) ? "i" : "t"}=${searchTerm}`)  
    .then(response => {
      return response.json();
    })
    .then(data => {
      if (data.Response === "False") {
        setState("");
        return;
      }
      console.log(data);
      setState(data);
    }).catch(error => {
        throw new Error(error);
    });
    return;
}
 
export default searchMovie;