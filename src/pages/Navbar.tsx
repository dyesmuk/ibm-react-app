// Navbar.tsx
import { Link } from "react-router-dom";
import logo from "../assets/ibm-logo-transparent.png";

const Navbar = () => {

    const linkStyle = {
        textDecoration: "none",
        color: "inherit",
        margin: "0 5px"
    };

    return (
        <nav>
            <Link to="/home" style={linkStyle}>
                <img src={logo} height="16px" alt="Home" />
            </Link> {" | "}
            <Link to="/about" style={linkStyle}>About</Link> {" | "}
            <Link to="/employeelist" style={linkStyle}>Employee List</Link> {" | "}
            <Link to="/register" style={linkStyle}>Register</Link> {" | "}
            <Link to="/login" style={linkStyle}>Login</Link>
        </nav>
    );
};

export default Navbar;