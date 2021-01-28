import React,{useEffect,useState} from 'react'
import MovieCard from './MovieCard'
import '../style/Home.css'


export const WatchList = () => {
    const [watchlist,setWatchlist]=useState([])
    useEffect(() => {
         const returnedWatchlist= localStorage.getItem('watchlist')?JSON.parse(localStorage.getItem('watchlist')): []
        setWatchlist(returnedWatchlist)

    }, [watchlist])
    const type = "watchlist"
    return (
        <div className="container">
            <div className="cardContainer">

            {watchlist?.map(movie=>{
                    return(
                        <MovieCard key={movie.id} movie={movie} type={type}/>

                    )
})}
        </div>
        </div>

    )
}
