import React,{useState,useEffect} from 'react'
import {fetchTopRatedMovies} from '../axios'
import MovieCard from './MovieCard'
import Paging from './Paging'

export const TopRated = () => {
    const [topRated, setTopRated] = useState({})
    const [currentPage, setCurrentPage] = useState(1)
    const type=""
    useEffect(()=>{
        
        fetchAPI()
    },[])
    const fetchAPI=async()=>{
        const returnedMovies=(await fetchTopRatedMovies())
        setTopRated(returnedMovies)
        
    }
    const nextPage=async(pagenumber)=>{
        setTopRated(await fetchTopRatedMovies(pagenumber))
        setCurrentPage(pagenumber)
    }
    const pages = topRated?.pages 
    return (
        <div className='"container'>
            <div className="cardContainer">
                
                { topRated?.modifiedData?.map((movie)=>{
                    return(
                        <MovieCard key={movie.id} movie={movie} type={type}/>

                    )
                })}
                
            </div>
            <Paging pages={pages} nextPage={nextPage} currentPage={currentPage}/>
            </div>
    )
}
