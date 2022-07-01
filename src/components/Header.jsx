import Logo from "../img/logo.png"
import { Link } from "react-router-dom"
import "../scss/Header.scss"

function Header() {
    return (
        <div className="navbar navbar-expand-lg navbar-dark header-bg">
            <nav className="container d-flex justify-content-between">
                <Link to="/"> <div className="navbar-brand"><img src={Logo} height={60} alt="logo" /></div></Link>
            </nav>
        </div>
    )
}

export default Header