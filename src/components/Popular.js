import React,{useState,useEffect} from 'react'
import {fetchPopularMovies} from '../axios'
import MovieCard from "./MovieCard"

export const Popular = () => {
    const [popular, setPopular] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const type=""
    useEffect(()=>{
        const fetchAPI=async()=>{
            setPopular(await fetchPopularMovies())
        }
        
        fetchAPI()
    },[])
    console.log(popular)
    return (
        <div className='"container'>
        <div className="cardContainer">
            
            {popular.map((movie)=>{
                return(
                    <MovieCard key={movie.id} movie={movie} type={type}/>

                )
            })}
            
        </div>
        </div>
    )
}
