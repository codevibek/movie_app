import React from 'react'
import '../style/Paging.css'

const Paging = ({pages,nextPage,currentPage}) => {
    const pageLinks = []

    for(let i=1;i<pages + 1; i++){
        let active = currentPage == i ? 'active': ''
        pageLinks.push(<li className={`hey${active}`} key={i} onClick={()=>nextPage(i)}><a href="#">{i}</a></li>) 
    }

    return (
        <div className="paging">
            {currentPage > 1?<div className="paging__page"  onClick={()=>nextPage(currentPage-1)}><a href="#">prev Page</a></div>:""}
            <div className="paging__page">{currentPage}</div> 
            {currentPage < pages-1?<div className="paging__page"  onClick={()=>nextPage(currentPage+1)}><a href="#">Next Page</a></div>:""}

        </div>
    )
}

export default Paging
  