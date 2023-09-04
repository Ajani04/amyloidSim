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
            <nav className="navbar navbar-expand-md col-md-12 py-3 d-flex align-items-center">
                <Link
                    to="/"
                    className="navbar-brand text-primary-emphasis text-decoration-none mx-3 w-75"
                >
                    amyloidSim
                </Link>
                <span className="mx-3 mx-md-auto d-md-inline-flex">
                    {`Hi, ${username} `}
                    <i className="align-self-center fa fa-user-circle border border-3 mx-2"></i>
                </span>
                <button
                    className="text-end btn fw-bold btn-warning ms-3 me-5"
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
