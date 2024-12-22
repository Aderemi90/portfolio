import { NavLink } from "react-router-dom";
import Resume from "./Resume";

function Header() {
    return (
        <header>
            <h1>ADEREMI OJE</h1>
            <nav>
                <ul>
                    <li><NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink></li>
                    <li><NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink></li>
                    <li><NavLink to="/services" className={({ isActive }) => (isActive ? "active" : "")}>Services</NavLink></li>
                    {/* <li><NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink></li> */}
                    <Resume/>
                </ul>
                {/* <hr /> */}
            </nav>
        </header>
    );
}

export default Header;
