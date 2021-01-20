import React,{useState,useEffect} from 'react'
import {fetchUpCommingMovies} from '../axios'

export const Upcomming = () => {
    const [upComming, setUpComming] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
  
    useEffect(()=>{
        const fetchAPI=async()=>{
            setUpComming(await fetchUpCommingMovies())
        }
        fetchAPI()
    },[])
    return (
        <div>
            {upComming.map(movie=>{
                return(
                    <div>

                    {movie.title}
                    </div>

                )
            })}
        </div>
    )
}
