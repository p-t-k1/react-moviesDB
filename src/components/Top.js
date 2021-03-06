import logo from '../logo.svg';
import '../App.css';
import '../styles.css';
import {useEffect, useState} from "react";
import axios from "axios";
import MovieBanner from "./MovieBanner";

function Top() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        window.scrollTo(0, 0)
        axios({
            method: 'get',
            url: 'https://pr-movies.herokuapp.com/api/movies',
        }).then((response) => {
            setMovies(response.data.filter(element=> (element.image && element.image!="" && element.image.includes("https://") && !element.image.includes("gfycat.com" ) && !element.image.includes("twimg.com")&& !element.image.includes("wallpaper" )&&!element.image.includes( "sql-inject")&& element.title!="SPAM")))
        }).catch((error) => {
            console.log(error);
        });
    }, []);

    const getTop10=()=>{
        return movies.map((value) => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)
            .slice(0, 10);
    }

    return (
        <div id="bodyBackground">
            <div id="headerImage"></div>
            <div id="allMoviesBox">
                <div id="allMoviesBoxText">
                    Najlepsze propozycje dla Ciebie
                </div>
                <div id="allMovies">
                    {getTop10().map((movie) =>
                        <MovieBanner title={movie.title} image={movie.image} content={movie.content} id={movie.id} key={movie.id}/>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Top;
