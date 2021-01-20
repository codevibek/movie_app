import {createContext,useReducer,useEffect} from 'react'
import AppReducer from './AppReducer.js'


const initialState={
    watchList: [],
    watcched: []
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = props =>{
    const[state,dispatch] = useReducer(AppReducer,initialState)


    useEffect(()=>{
        localStorage.setItem('watchlist', JSON.stringify(state.watchList))
        localStorage.setItem('watched',JSON.stringify(state.watched))

    },[state])


const addMovieToWatchlist = movie =>{
    dispatch({type:"ADD_TO_WATCHLIST",payload:movie})
}
const removeFromWatchlist = id =>{
    dispatch({type:"REMOVE_FROM_WATCHLIST",payload:id})
}
const addMovieToWatced = movie =>{
    dispatch({type:"ADD_TO_WATCHED",payload:movie})
}
const removeFroWatched = id =>{
    dispatch({type:"REMOVE_FROM_WATCHED",payload:id})
}
const moveMovieToWatchlist = movie =>{
    dispatch({type:"MOVE_TO_WATCHLIST",payload:movie})
}
return(
    <GlobalContext.Provider value={{watchlist:state.watchlist,watched:state.watched,addMovieToWatced,addMovieToWatchlist,removeFroWatched,removeFromWatchlist,moveMovieToWatchlist}}>
        {props.children}
    </GlobalContext.Provider>
)
}