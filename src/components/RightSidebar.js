import React from 'react'
import {Link} from "react-router-dom"
import {FaList} from 'react-icons/fa'
export const RightSidebar = () => {
    return (
        <div className="rightsidebar" >
            
             <Link style={{display:"flex", alignItems:"center"}} className="watchlink" to="/watchlist"><FaList style={{color: "rgb(130, 130, 212)", marginRight:"2px" }} /> <h3>WatchList</h3></Link>
        </div>
    )
}
