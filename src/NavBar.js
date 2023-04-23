import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div className = "NavDiv">
            <h1>Blogitz!</h1>
            <NavLink className="Nav" to="/">Home</NavLink> -  
            <NavLink className="Nav" to="/post">New Post</NavLink> -  
            <NavLink className="Nav" to="/about">About</NavLink>
        </div>
    )
}

export default NavBar