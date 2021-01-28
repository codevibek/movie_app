import axios from 'axios'

const apikey=`${process.env.REACT_APP_TMDB_KEY}`
const url="https://api.themoviedb.org/3"
const topRatedUrl=`${url}/movie/top_rated`
const popularUrl=`${url}/movie/popular`
const upCommingUrl=`${url}/movie/upcoming`
const movieUrl=`${url}/movie`
const similarMovieUrl=`${url}/movie`
const genreListUrl=`${url}/genre/movie/list`
const genreUrl=`${url}/discover/movie`
const imageUrl = `https://image.tmdb.org/t/p/original`
let currentPage
export const fetchMovies=async(genre_id,currentPage) =>{
    try{
        const {data} =await axios.get(genreUrl,{
            params:{
                api_key:apikey,
                language:"en_US",
                page:currentPage,
                with_genres:genre_id,
                sort_by:"popularity.desc"
            }
        })
        const pages = data['total_pages']
        const modifiedData = data['results'].map(m=>({
            id:m['id'],
            backposter: imageUrl + m['backdrop_path'],
            title: m['title'],
            rating: m['vote_average'],
            overview:m['overview'],
            poster:imageUrl + m['poster_path']
        }))
        return ({modifiedData,pages})
    }catch(error){}
    
}

export const fetchTopRatedMovies=async(currentPage)=>{
    try{
    const {data} = await axios.get(topRatedUrl,{
        
            params:{
                api_key:apikey,
                language:"en_US",
                page:currentPage,
                sort_by:"popularity.desc"
        }
    })
    const pages = data['total_pages']
        const modifiedData = data['results'].map(m=>({
            id:m['id'],
            backposter: imageUrl + m['backdrop_path'],
            title: m['title'],
            popularity:m["popularity"],
            rating: m['vote_average'],
            overview:m['overview'],
            poster:imageUrl + m['poster_path']
        }))
        let allData = {
            modifiedData,
            pages
        }
        return (allData)
}catch(error){}
}

export const fetchPopularMovies= async(currentPage)=>{
    try{
        const {data} = await axios.get(popularUrl,{
            params: {
                api_key:apikey,
                language:"en_US",
                page: currentPage,
            }
        })
        const pages = data['total_pages']
        const modifiedData = data['results'].map(m=>({
            id:m['id'],
            backPoster:imageUrl + m['backdrop_path'],
            popularity:m['popularity'],
            title:m['title'],
            poster:imageUrl + m['poster_path'],
            overview:m['overview'],
            rating:m['vote_average']
        }))
       return ({modifiedData,pages})
    }catch(error){}
}

export const fetchUpCommingMovies=async(currentPage)=>{
    try{
    const {data} = await axios.get(upCommingUrl,{
        params: {
            api_key:apikey,
            language:"en_US",
            page: currentPage
        }
    })
    const pages = data['total_pages']
    const modifiedData = data['results'].map(m=>({
        id:m['id'],
        backPoster:imageUrl + m['backdrop_path'],
        title:m['title'],
        poster:imageUrl + m['poster_path'],
        overview:m['overview'],
        rating:m['vote_average']
    }))
   return ({modifiedData,pages})
}catch(error){}
}


export const fetchSimilarMovies=async()=>{
    try{
        const {data} = await axios.get(similarMovieUrl,{
            params:{
                api_key: apikey,
                language:"en_US",
                page:currentPage
            }
        })
        const modifiedData = data['results'].map(m=>({
            id:m['id'],
        backPoster:imageUrl + m['backdrop_path'],
        title:m['title'],
        poster:imageUrl + m['poster_path'],
        overview:m['overview'],
        rating:m['vote_average']
        }))
       
        return modifiedData
       
    }catch(error){}
}

export const fetchGenreList = async() => {
    try{
        const {data} = await axios.get(genreListUrl,{
            params:{
                api_key:apikey,
                language:"en_US"
            }
        })
        const modifiedData = data['genres'].map(g=>({
            id:g['id'],
            name:g['name']
        }))
        return modifiedData
    }catch(error){}
}
export const fetchCasts=async(id)=>{
    try{
        const {data} = await axios.get(`${movieUrl}/${id}/credits`,{
            params:{
                api_key:apikey,
            }
        })
        const modifiedData = data['cast'].map((c)=>({
            id: c['cast_id'],
            character: c['character'],
            name: c['name'],
            img: `https://image.tmdb.org/t/p/w200`+c['profile_path']
        }))
        return modifiedData
    }catch(error){

    }
}

export const fetchSimilarMovie=async(id)=>{
    try{
        const {data} = await axios.get(`${movieUrl}/${id}/similar`,{
            params:{
                api_key:apikey,
                language:"en_US",

            }
        })
        const posterUrl = `https://image.tmdb.org/t/p/original/`
    const modifiedData = data["results"].map((m)=>({
        id:m['id'],
        backPoster:m['backdrop_path'],
        popularity:m['popularity'],
        title:m['title'],
        poster:posterUrl + m['poster_path'],
        overview:m['overview'],
        rating:m['vote_average']
    }
    
))
        return modifiedData
    }catch(error){

    }
}
export const fetchMovieDetail=async(id)=>{
    try{
        const {data} = await axios.get(`${movieUrl}/${id}`,{
            params:{
                api_key:apikey,
                language:"en_US",

            }
        })
        return data
    }catch(error){

    }
}
