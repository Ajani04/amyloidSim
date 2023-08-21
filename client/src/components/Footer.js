import { Link } from "react-router-dom";

const Footer = () => {
    const JSX = (
        <footer className="footer footer-white container">
            <div className="row">
                <hr />
                <div className="row align-items-center">
                    <div className="col-md-9 small">
                        Copyright © amyloidSim 2023
                    </div>
                    <div className="col-md-3 text-md-right small">
                        <Link to="/">Terms &amp; Conditions</Link>
                    </div>
                </div>
            </div>
        </footer>
    );

    return JSX;
};

export default Footer;
