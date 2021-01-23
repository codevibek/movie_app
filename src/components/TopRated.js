import React,{useState,useEffect} from 'react'
import {fetchTopRatedMovies} from '../axios'
import MovieCard from './MovieCard'

export const TopRated = () => {
    const [topRated, setTopRated] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const type=""
    useEffect(()=>{
        const fetchAPI=async()=>{
            setTopRated(await fetchTopRatedMovies())
        }
        fetchAPI()
    },[])
    return (
        <div className='"container'>
            <div className="cardContainer">
                
                {topRated.map((movie)=>{
                    return(
                        <MovieCard key={movie.id} movie={movie} type={type}/>

                    )
                })}
                
            </div>
            </div>
    )
}
