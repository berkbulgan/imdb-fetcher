import classes from "./MovieTemplate.module.scss";
import imdb from "../images/imdb.png";
import rotten from "../images/rotten.png";
import metacritic from "../images/metacritic.png";

const toHours = (runtime) => {
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
    return `${hours}h ${minutes}m`;
}

const MovieTemplate = (props) => {
    const runtime = toHours(parseInt(props.movie.Runtime.split(" ")[0]));

    const ratings = props.movie.Ratings.map((rating) => {
        if (rating.Source === "Internet Movie Database") {
            return (
                <div className={classes.Rating} key="imdb">
                    <img src={imdb} alt="imdb" className={classes.RatingImage} />
                    <p className={classes.RatingText}>{rating.Value}</p>
                </div>
            );
        } else if (rating.Source === "Rotten Tomatoes") {
            return (
                <div className={classes.Rating} key="rotten">
                    <img src={rotten} alt="rotten" className={classes.RatingImage} />
                    <p className={classes.RatingText}>{rating.Value}</p>
                </div>
            );
        } else if (rating.Source === "Metacritic") {
            return (
                <div className={classes.Rating} key="metacritic">
                    <img src={metacritic} alt="metacritic" className={classes.RatingImage} />
                    <p className={classes.RatingText}>{rating.Value}</p>
                </div>
            );
        }
        return <></>;
    });

    const genres = props.movie.Genre.split(", ").map((genre) => {
        return (
            <p className={classes.GenreText} key={genre}>{genre}</p>
        );
    });
    return (
        <div className={classes.MovieTemplate}>
            <div className={classes.Header}>
                <div className={classes.Title}>
                    <h2>{props.movie.Title}</h2>
                    <div className={classes.SubInfo}>
                        <p>{props.movie.Year}</p>
                        <p>{props.movie.Rated}</p>
                        <p>{runtime}</p>
                    </div>
                </div>
                <div className={classes.Ratings}>
                    {ratings}
                </div>
            </div>
            <div className={classes.Hero}>
                <div className={classes.Metadata}>
                    <img src={props.movie.Poster} alt={props.movie.Title} />
                    <div className={classes.Genres}>
                        {genres}
                    </div>
                </div>
                <div className={classes.Left}>
                    <div className={classes.Description}>
                        <div className={classes.Crew}>
                            <h2>Director: {props.movie.Director}</h2>
                            <h3>Writer: {props.movie.Writer}</h3>
                        </div>
                        <div className={classes.Plot}>
                            <h4>Plot: <br /></h4>
                            <p>{props.movie.Plot}</p>
                        </div>
                    </div>
                    <div className={classes.Actors}>
                        <h4>Actors: <br /></h4>
                        <p>{props.movie.Actors}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieTemplate;