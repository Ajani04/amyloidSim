import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import { useRegister } from "../../hooks/useRegister";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");

    const { Register, isLoading, error } = useRegister();

    const handleSubmit = async (eventObj) => {
        eventObj.preventDefault();
        await Register(username, email, password);
    };
    const JSX = (
        <>
            <div className="container">
                <div className="navbar navbar-expand-md container-fluid">
                    <Link
                        to="/home"
                        className="navbar-brand text-primary-emphasis text-decoration-none mx-5"
                    >
                        amyloidSim
                    </Link>
                </div>
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-lg-12 col-xl-11">
                        <div className="text-black">
                            <div className="p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                        <p className="text-center display-6 mb-4 mx-1 mx-md-4">
                                            <small>
                                                Let's get you started!
                                            </small>
                                        </p>

                                        <form
                                            className="mx-1 mx-md-4"
                                            onSubmit={handleSubmit}
                                            // action="/api/v1/auth/register"
                                            // method="post"
                                        >
                                            <div className="d-flex flex-row align-items-center mb-3">
                                                <i className="fa fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-sm-fill mb-0">
                                                    <label
                                                        className="form-label"
                                                        // for="form3Example1c"
                                                    >
                                                        Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="form3Example1c"
                                                        className="form-control"
                                                        name="username"
                                                        onChange={(e) =>
                                                            setUsername(
                                                                e.target.value
                                                            )
                                                        }
                                                        value={username}
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-3">
                                                <i className="fa fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-sm-fill mb-0">
                                                    <label
                                                        className="form-label"
                                                        // for="form3Example3c"
                                                    >
                                                        Email
                                                    </label>
                                                    <input
                                                        type="email"
                                                        id="form3Example3c"
                                                        className="form-control"
                                                        name="email"
                                                        onChange={(e) =>
                                                            setEmail(
                                                                e.target.value
                                                            )
                                                        }
                                                        value={email}
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fa fa-lock fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-sm-fill mb-0">
                                                    <label
                                                        className="form-label"
                                                        // for="form3Example4c"
                                                    >
                                                        Password
                                                    </label>
                                                    <input
                                                        type="password"
                                                        id="form3Example4c"
                                                        className="form-control"
                                                        name="password"
                                                        onChange={(e) =>
                                                            setPassword(
                                                                e.target.value
                                                            )
                                                        }
                                                        value={password}
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="form-check d-flex justify-content-center mb-4">
                                                <input
                                                    className="form-check-input me-2"
                                                    type="checkbox"
                                                    value=""
                                                    id="form2Example3c"
                                                    required
                                                />
                                                <label
                                                    className="form-check-label"
                                                    // for="form2Example3"
                                                >
                                                    I agree to the{" "}
                                                    <Link to="#!">
                                                        Terms of service
                                                    </Link>
                                                </label>
                                            </div>
                                            <div className="container-fluid d-flex justify-content-flex-start mb-2 mb-lg-2">
                                                <button
                                                    className="btn btn-primary btn-lg"
                                                    value="registration-data"
                                                    disabled={isLoading}
                                                >
                                                    Register
                                                </button>
                                                <span className="small fw-bold mt-2 mx-sm-auto text-sm-center">
                                                    Already have an account?{" "}
                                                    <Link
                                                        to="/auth/login"
                                                        className="link-danger"
                                                    >
                                                        Login
                                                    </Link>
                                                </span>
                                            </div>
                                            {error && (
                                                <div className="error link-danger fw-bold text-center mt-lg-4">
                                                    {error}
                                                </div>
                                            )}
                                        </form>
                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                            className="img-fluid"
                                            alt="SignUp"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
    return JSX;
}
