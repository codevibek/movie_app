import React,{useState,useEffect} from 'react'
import {fetchPopularMovies} from '../axios'
import MovieCard from "./MovieCard"
import Paging from './Paging' 

export const Popular = () => {
    const [popular, setPopular] = useState({})
    const [currentPage, setCurrentPage] = useState(1)
    const type=""
    useEffect(()=>{
        const fetchAPI=async()=>{
            setPopular(await fetchPopularMovies())
        }
        
        fetchAPI()
    },[])
    const nextPage=async(pageNumber)=>{
        setPopular(await fetchPopularMovies(pageNumber))
        setCurrentPage(pageNumber)
    }
    console.log(popular)
    return (
        <div className='"container'>
        <div className="cardContainer">
            
            {popular?.modifiedData?.map((movie)=>{
                return(
                    <MovieCard key={movie.id} movie={movie} type={type}/>

                )
            })}
            
        </div>
        <Paging pages={popular?.pages} nextPage={nextPage} currentPage={currentPage} />
        </div>
    )
}
