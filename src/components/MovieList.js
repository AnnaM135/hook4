import React, { useState, useContext } from "react"
import Movie from "./Movie"
import { MovieContext } from "./MovieContext"

const MovieList = () => {
    const [movies, setMovies] =  useContext(MovieContext)
    return(
        <div>
            {
                movies.map(item => (
                    <Movie name = {item.name} price = {item.price} key = {movies.id}/>
                ))
            }
        </div>
        )
}

export default MovieList