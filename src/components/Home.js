import React, {useEffect,useState} from 'react'
import { fetchMovies } from '../axios'
import MovieCard from './MovieCard'
import "../style/Home.css"
import { LeftSidebar } from './LeftSidebar'

export const Home = () => {
    const [movies, setMovies] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    useEffect(()=>{
        const fetchAPI=async()=>{
            setMovies(await fetchMovies())
        }
        fetchAPI()
    },[])
    const handleGenreClick = async(genre_id) =>{
        setMovies(await fetchMovies(genre_id))
    }

   console.log(movies)
    return (
        <div className='"container'>
            <div className="cardContainer">
                
                {movies.map((movie)=>{
                    return(
                        <MovieCard key={movie.id} poster={movie.poster} id={movie.id} overview={movie.overview} rating={movie.rating} title={movie.title}/>

                    )
                })}
                
            </div>
            <div className="genreContainer">
                <LeftSidebar handleGenreClick={handleGenreClick}/>
            </div>
            
        </div>
    )
}
 