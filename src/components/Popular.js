import React,{useState,useEffect} from 'react'
import {fetchPopularMovies} from '../axios'

export const Popular = () => {
    const [popular, setPopular] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
  
    useEffect(()=>{
        const fetchAPI=async()=>{
            setPopular(await fetchPopularMovies())
        }
        fetchAPI()
    },[])
    return (
        <div>
            {popular.map(movie=>{
                return(
                    <div>

                    {movie.title}
                    </div>

                )
            })}
        </div>
    )
}
