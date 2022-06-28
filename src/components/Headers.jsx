import Logo from "../img/logo.png"

function Headers() {
    return (
        <div className="navbar navbar-expand-lg navbar-light bg-light">
            <nav className="container d-flex justify-content-between">
                <div className="navbar-brand"><img src={Logo} height={60} alt="logo" /></div>

            </nav>
        </div>
    )
}

export default Headers