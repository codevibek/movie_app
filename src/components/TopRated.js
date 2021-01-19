import React,{useState,useEffect} from 'react'
import {fetchTopRatedMovies} from '../axios'

export const TopRated = () => {
    const [topRated, setTopRated] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
  
    useEffect(()=>{
        const fetchAPI=async()=>{
            setTopRated(await fetchTopRatedMovies())
        }
        fetchAPI()
    },[])
    return (
        <div>
            {topRated.map(movie=>{
                return(
                    <div>

                    {movie.title}
                    </div>

                )
            })}
        </div>
    )
}
