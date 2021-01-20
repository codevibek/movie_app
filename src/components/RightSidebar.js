import React from 'react'
import {Link} from "react-router-dom"

export const RightSidebar = () => {
    return (
        <div className="rightsidebar">
           <Link className="watchlink" to="/watchlist"> <h3>WatchList</h3></Link>
            <Link className="watchlink" to="/watched"><h3>Watched</h3></Link>
        </div>
    )
}
