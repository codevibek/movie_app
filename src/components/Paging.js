import React from 'react'

const Paging = ({pages,nextPage,currentPage}) => {
    const pageLinks = []

    for(let i=1;i<pages + 1; i++){
        let active = currentPage == i ? 'active': ''
        pageLinks.push(<li className={`hey${active}`} key={i} onClick={()=>nextPage(i)}><a href="#">{i}</a></li>) 
    }

    return (
        <div>
            {currentPage > 1?<li  onClick={()=>nextPage(currentPage-1)}><a href="#">prev Page</a></li>:""}
            {currentPage}
            {currentPage < pages-1?<li  onClick={()=>nextPage(currentPage+1)}><a href="#">Next Page</a></li>:""}

        </div>
    )
}

export default Paging
 