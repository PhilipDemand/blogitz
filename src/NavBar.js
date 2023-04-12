import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div>
            <NavLink className="Nav" to="/">Home</NavLink> - 
            <NavLink className="Nav" to="/blogs"> Blogs</NavLink> - 
            <NavLink className="Nav" to="/post"> Post</NavLink>
        </div>
    )
}

export default NavBar