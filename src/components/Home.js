import React, {useEffect,useState} from 'react'
import { fetchMovies } from '../axios'
import MovieCard from './MovieCard'
import "../style/Home.css"
import { LeftSidebar } from './LeftSidebar'
import Paging from './Paging'

export const Home = ({movies,currentPage,nextPage}) => {
    // const [movies, setMovies] = useState([])
    const type= ""
    // useEffect(()=>{
    //     const fetchAPI=async()=>{
    //         setMovies(await fetchMovies())
    //     }
    //     fetchAPI()
    // },[])
    // const handleGenreClick = async(genre_id) =>{
    //     setMovies(await fetchMovies(genre_id))
        
    // }
    return (
        <div className='"container'>
            <div className="cardContainer">
                
                {movies?.modifiedData?.map((movie)=>{
                    return(
                        <MovieCard key={movie.id} movie={movie} type={type}/>

                    )
                })}
                
            </div>
            <Paging pages={movies?.pages} currentPage={currentPage} nextPage={nextPage}/>
           
            {/* <div className="genreContainer">
                <LeftSidebar handleGenreClick={handleGenreClick}/>
            </div> */}
            
        </div>
    )
}
 