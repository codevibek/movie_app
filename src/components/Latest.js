import React,{useState,useEffect} from 'react'
import {fetchLatestMovies} from '../axios'

export const Latest = () => {
    const [latest, setLatest] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
  
    useEffect(()=>{
        const fetchAPI=async()=>{
            setLatest(await fetchLatestMovies())
        }
        fetchAPI()
    },[])
    return (
        <div>
            {latest.map(movie=>{
                return(
                    <div>

                    {movie.title}
                    </div>

                )
            })}
        </div>
    )
}
