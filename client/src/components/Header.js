import { Link } from "react-router-dom";

export default function Header() {
    const JSX = (
        <div className="container-fluid bg-body-white">
            <header className="p-3 container vh-80">
                <nav className="navbar navbar-expand-md container-fluid-md">
                    <Link
                        to="/home"
                        className="navbar-brand text-primary-emphasis text-decoration-none col-md-3"
                    >
                        amyloidSim
                    </Link>
                    <button
                        className="navbar-toggler order-first"
                        data-bs-toggle="collapse"
                        data-bs-target="#nav-menu"
                        aria-controls="nav-menu"
                        aria-label="Expand Navbar"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse col-md-6"
                        id="nav-menu"
                    >
                        <ul className="navbar-nav col-md-10 justify-content-center gap-sm-0 gap-lg-3 emb-md-0">
                            <li className="nav-item">
                                <Link
                                    to="/home"
                                    className="nav-link px-2 text-secondary"
                                    id="home"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/documentation"
                                    className="nav-link px-2 text-black"
                                >
                                    Documentation
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/contact"
                                    className="nav-link px-2 text-black"
                                >
                                    Contacts
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                    to="/about"
                                    className="nav-link px-2 text-black"
                                >
                                    About
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-3 text-end">
                        <Link to="/auth/login">
                            <button
                                type="button"
                                className="btn btn-outline-secondary me-2"
                            >
                                Login
                            </button>
                        </Link>
                        <Link to="/auth/register">
                            <button
                                type="button"
                                className="btn btn-secondary register active"
                            >
                                Register
                            </button>
                        </Link>
                    </div>
                </nav>
            </header>
        </div>
    );

    return JSX;
}
