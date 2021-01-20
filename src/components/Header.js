import React from 'react'
import '../style/Header.css'
import {Link} from 'react-router-dom'

export const Header = () => {
    return (
        <div className="header">
            <div className="header__search">
            <form>
            <input type="text" placeholder="search"/>
            </form>
            </div>
           
            <div className="header__nav">
            <ul className="header__navlist">
                <Link className="header__navItem" to="/toprated"><li>Top Rated</li></Link>
                <Link className="header__navItem" to="/upcomming"><li>UpComming</li></Link>
                <Link className="header__navItem" to="/latest"><li>Latest</li></Link>
                <Link className="header__navItem" to="/popular"><li>Popular</li></Link>

            </ul>
            </div>
           
        </div>
    )
}
