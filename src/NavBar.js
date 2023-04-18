import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div className = "NavDiv">
            <NavLink className="Nav" to="/">Home</NavLink> - 
            <NavLink className="Nav" to="/blogs"> Blogs</NavLink> - 
            <NavLink className="Nav" to="/post"> Post</NavLink>
            <h1>Blogitz!</h1>
        </div>
    )
}

export default NavBar