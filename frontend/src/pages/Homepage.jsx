import React from "react";
import { Link } from "react-router-dom";

const Homepage = () =>{
    return(
        <>
            <h2>Homepage</h2>
            <Link to='/login'>Login</Link>
        </>
    )
}

export default Homepage;