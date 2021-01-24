import React from 'react'

export const WatchList = () => {
    const watchlist= localStorage.getItem('watchlist')?JSON.parse(localStorage.getItem('watchlist')): []

    return (
        <div>
            {watchlist?.map(movie=>{

                console.log(movie)
            })}
        </div>
    )
}
