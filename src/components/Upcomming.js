import React,{useState,useEffect} from 'react'
import {fetchUpCommingMovies} from '../axios'
import MovieCard from './MovieCard'

export const Upcomming = () => {
    const [upComming, setUpComming] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const type="upcomming"
    useEffect(()=>{
        const fetchAPI=async()=>{
            setUpComming(await fetchUpCommingMovies())
        }
        fetchAPI()
    },[])
    console.log(upComming)
    return (
        <div className='"container'>
            <div className="cardContainer">
                
                {upComming.map((movie)=>{
                    return(
                        <MovieCard key={movie.id} movie={movie} type={type}/>

                    )
                })}
                
            </div>
           
        </div>
    )
}
