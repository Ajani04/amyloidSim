import { useLogout } from "../hooks/useLogout";
import { Link } from "react-router-dom";

const Navbar = (props) => {
    const username = props.username;
    const { Logout } = useLogout();

    const handleLogout = () => {
        Logout(); // removes user session from local storage
    };
    const JSX = (
        <>
            <nav className="navbar navbar-expand-md col-12 py-3 d-flex align-items-center container">
                <Link
                    to="/"
                    className="navbar-brand text-primary-emphasis text-decoration-none col-9 mx-3"
                >
                    amyloidSim
                </Link>
                <span className=" mx-3 mx-lg-auto">
                    {`Hi, ${username} `}
                    <i className="fa fa-user-circle"></i>
                </span>
                <button
                    className="text-end btn fw-bold btn-warning"
                    onClick={handleLogout}
                >
                    Log out
                </button>
            </nav>
        </>
    );

    return JSX;
};

export default Navbar;
