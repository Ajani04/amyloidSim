import Footer from "../../components/Footer";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { Login, isLoading, error } = useLogin();

    const handleSubmit = async (eventObj) => {
        eventObj.preventDefault();
        await Login(email, password);
    };
    const JSX = (
        <>
            <div className="navbar navbar-expand-md container-fluid">
                <Link
                    to="/home"
                    className="navbar-brand text-primary-emphasis text-decoration-none mx-5"
                >
                    amyloidSim
                </Link>
            </div>
            <div className="col-6 mt-4 py-3 display-5 text-center mx-5">
                Login to Your Account!
            </div>
            <div className="container-fluid mb-5">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="img-fluid"
                            alt="Hero"
                        />
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form
                            onSubmit={handleSubmit}
                            // action="/api/v1/auth/login" method="post"
                        >
                            <div className="form-outline mb-4">
                                <i className="fa fa-envelope fa-lg me-3 fa-fw"></i>
                                <label
                                    className="form-label"
                                    // for="form3Example3"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="form3Example3"
                                    name="email"
                                    className="form-control form-control-lg"
                                    placeholder="e.g. john@doe.com"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    required
                                />
                            </div>

                            <div className="form-outline mb-3">
                                <i className="fa fa-lock fa-lg me-3 fa-fw"></i>
                                <label
                                    className="form-label"
                                    // for="form3Example4"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="form3Example4"
                                    name="password"
                                    className="form-control form-control-lg"
                                    placeholder="Enter password"
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    value={password}
                                    required
                                />
                            </div>

                            <div className="d-flex justify-content-between align-items-center">
                                <div className="form-check mb-0">
                                    <input
                                        className="form-check-input me-2"
                                        type="checkbox"
                                        value=""
                                        id="form2Example3"
                                    />
                                    <label
                                        className="form-check-label"
                                        // for="form2Example3"
                                    >
                                        Remember me
                                    </label>
                                </div>
                                <Link to="#!" className="text-body">
                                    Forgot password?
                                </Link>
                            </div>

                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button
                                    className="btn btn-primary btn-lg"
                                    value="login-data"
                                    style={{
                                        paddingleft: "2.5rem",
                                        paddingright: "2.5rem",
                                    }}
                                    disabled={isLoading}
                                >
                                    Login
                                </button>
                                <p className="small fw-bold mt-2">
                                    Don't have an account?{" "}
                                    <Link
                                        to="/auth/register"
                                        className="link-danger"
                                    >
                                        Register
                                    </Link>
                                </p>
                            </div>
                            {error && (
                                <div className="error link-danger fw-bold text-center mt-lg-4">
                                    {error}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
    return JSX;
}
