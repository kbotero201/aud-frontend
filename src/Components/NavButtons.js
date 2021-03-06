import React from "react"
import {NavLink} from "react-router-dom"

function NavButtons({currentUser}){
    return(
        <nav className="nav-buttons">    
                <NavLink exact to="/"  activeClassName="current">  Test </NavLink>
                <NavLink exact to="/Audiologists"  activeClassName="current"> Audiologists  </NavLink>
                {currentUser? <NavLink exact to="/profile"  activeClassName="current"> My Profile </NavLink> : null } 
        </nav>
    )
}

export default NavButtons