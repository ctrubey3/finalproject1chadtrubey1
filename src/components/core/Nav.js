import React from 'react';
import {NavLink} from "react-router-dom";

function Nav(){
    return(
        <nav>
            <NavLink activeStyle={{fontWeight:"bold", color:"red"}} exact to={"/"}>Store</NavLink>
            <NavLink activeStyle={{fontWeight:"bold", color:"red"}} to={"/cart/red"}>Cart</NavLink>
            <NavLink activeStyle={{fontWeight:"bold", color:"red"}} to={"/admin"}>Admin</NavLink>
        </nav>
    )
}

export default Nav;