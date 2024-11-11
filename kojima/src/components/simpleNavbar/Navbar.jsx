import { NavLink } from "react-router-dom";
import "./Navbar.css"

// if the convention was followed, the function would look like this:
// function getNavClass(props) {
//     return props.isActive ? "nav-button active" : "nav-button";
// }

function ActivateButton(button) {
    return button.isActive ? "nav-button active" : "nav-button";
}

function Navbar() {
    return (
        <div className="navbar">
        <NavLink to="/home"             className={ActivateButton}>Home</NavLink>
            <NavLink to="/professional" className={ActivateButton}>Professional</NavLink>
            <NavLink to="/about"        className={ActivateButton}>About</NavLink>
            <div className="sliding-underline"></div>
        </div>
    );
}

export default Navbar;
