import React,{useState,useEffect} from 'react'
import {fetchUpCommingMovies} from '../axios'
import MovieCard from './MovieCard'
import Paging from './Paging'

export const Upcomming = () => {
    const [upComming, setUpComming] = useState({})
    const [currentPage, setCurrentPage] = useState(1)
    const type="upcomming"
    useEffect(()=>{
        const fetchAPI=async()=>{
            const returnedUpCommingMovies = (await fetchUpCommingMovies())
            setUpComming(returnedUpCommingMovies)
        }
        fetchAPI()
    },[])
    const nextPage =async(pageNumber)=>{
        const returnedUpCommingMovies = (await fetchUpCommingMovies(pageNumber))
        setUpComming(returnedUpCommingMovies)
        setCurrentPage(pageNumber)
    } 
    console.log(upComming)
    return (
        <div className='"container'>
            <div className="cardContainer">
                
                {upComming?.modifiedData?.map((movie)=>{
                    return(
                        <MovieCard key={movie.id} movie={movie} type={type}/>

                    )
                })}
                
            </div>
            <Paging pages={upComming?.pages} nextPage={nextPage} currentPage={currentPage}/>
           
        </div>
    )
}
