import React,{useState,useEffect} from 'react'
import {fetchTopRatedMovies} from '../axios'
import MovieCard from './MovieCard'
import Paging from './Paging'

export const TopRated = () => {
    const [topRated, setTopRated] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const pages=3
    const type=""
    useEffect(()=>{
        
        fetchAPI()
    },[])
    const fetchAPI=async()=>{
        setTopRated(await fetchTopRatedMovies())
    }
    const nextPage=async(pagenumber)=>{
        setTopRated(await fetchTopRatedMovies(pagenumber))
        setCurrentPage(pagenumber)
    }
    return (
        <div className='"container'>
            <div className="cardContainer">
                
                {topRated.map((movie)=>{
                    return(
                        <MovieCard key={movie.id} movie={movie} type={type}/>

                    )
                })}
                
            </div>
            <Paging pages={pages} nextPage={nextPage} currentPage={currentPage}/>
            </div>
    )
}
