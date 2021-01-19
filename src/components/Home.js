import React, {useEffect,useState} from 'react'
import { fetchMovies } from '../axios'
import MovieCard from './MovieCard'

export const Home = () => {
    const [movies, setMovies] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    useEffect(()=>{
        const fetchAPI=async()=>{
            setMovies(await fetchMovies())
        }
        fetchAPI()
    },[])
   

   
    return (
        <div className='"container'>
            <div className="cardContainer">
                {movies.map((movie)=>{
                    <MovieCard key={movie.id} poster={movie.poster} id={movie.id} overview={movie.overview} rating={movie.rating} title={movie.title}/>
                })}
                
            </div>
            
        </div>
    )
}
