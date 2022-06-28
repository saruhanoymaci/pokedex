import Logo from "../img/logo.png"
import { Link } from "react-router-dom"

function Headers() {
    return (
        <div className="navbar navbar-expand-lg navbar-light bg-light">
            <nav className="container d-flex justify-content-between">
                <Link to="/"> <div className="navbar-brand"><img src={Logo} height={60} alt="logo" /></div></Link>

            </nav>
        </div>
    )
}

export default Headers