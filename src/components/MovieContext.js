import React, { useState, createContext } from "react"

export const MovieContext = createContext()

export const MovieProvider = props => {
    const [movies, setMovies] = useState([
        {
            name: "Movie-One", 
            price: "10$",
            id: 111
        },
        {
            name: "Movie-Two", 
            price: "10$",
            id: 112
        },
        {
            name: "Movie-Three", 
            price: "10$",
            id: 113
        },

    ])



    return(
        <div>
           <MovieContext.Provider value = {[movies, setMovies]}>
                {props.children}
           </MovieContext.Provider>
        </div>
        )
}