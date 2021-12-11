import React from "react";
import {NavLink} from "react-router-dom";


function Nav(){
    return(
        <nav>
            <NavLink exact to={"/"} activeClassName={"active"}>Store</NavLink>
            <NavLink to={"/games"} activeClassName={"active"}>  Cart  </NavLink>
            <NavLink to={"/television"} activeClassName={"active"}>  Admin  </NavLink>
        </nav>
    )

}

export default Nav;