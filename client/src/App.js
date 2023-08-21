import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthenticationContext } from "./hooks/useAuthenticationContext";

// importing the various pages
import SimulationHome from "./pages/SimulationHome";
import NewSimulation from "./pages/NewSimulation";
import PastSimulation from "./pages/PastSimulation";
// import UserProfile from "./pages/UserProfile"; fix when userprofile is implemented
import NotFound from "./pages/NotFound";
import Homepage from "./pages/static pages/Homepage";
import Login from "./pages/static pages/Login";
import Register from "./pages/static pages/Register";
import About from "./pages/static pages/About";
import Contact from "./pages/static pages/Contact";
import Documentation from "./pages/static pages/Documentation";

export default function App() {
    const { user } = useAuthenticationContext();
    const username = user ? user.username : "Researcher"; //default user is Seun Ajani

    const JSX = (
        <>
            <BrowserRouter>
                <Routes>
                    <Route
                        index
                        element={
                            user ? (
                                <Navigate to="/simulationHome" />
                            ) : (
                                <Homepage />
                            )
                        }
                    />
                    <Route
                        path="/home"
                        element={
                            user ? <Navigate to="/auth/login" /> : <Homepage />
                        }
                    />
                    <Route
                        path="/about"
                        element={
                            user ? <Navigate to="/auth/login" /> : <About />
                        }
                    />
                    <Route
                        path="/contact"
                        element={
                            user ? <Navigate to="/auth/login" /> : <Contact />
                        }
                    />
                    <Route
                        path="/documentation"
                        element={
                            user ? (
                                <Navigate to="/auth/login" />
                            ) : (
                                <Documentation />
                            )
                        }
                    />
                    <Route
                        path="/auth/login"
                        element={
                            !user ? (
                                <Login />
                            ) : (
                                <Navigate to="/simulationHome" />
                            )
                        }
                    />
                    <Route
                        path="/auth/register"
                        element={
                            !user ? (
                                <Register />
                            ) : (
                                <Navigate to="/simulationHome" />
                            )
                        }
                    />

                    <Route
                        path="/simulationHome"
                        element={
                            user ? (
                                <SimulationHome user={username} />
                            ) : (
                                <Navigate to="/auth/login" />
                            )
                        }
                    />

                    <Route
                        path="/newSimulation"
                        element={
                            user ? (
                                <NewSimulation user={username} />
                            ) : (
                                <Navigate to="/auth/login" />
                            )
                        }
                    />
                    <Route
                        path="/pastSimulations"
                        element={
                            user ? (
                                <PastSimulation user={username} />
                            ) : (
                                <Navigate to="/auth/login" />
                            )
                        }
                    />
                    {/* <Route path="profile" element={<UserProfile />} />  fix when userprofile is implemented!!!*/}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );

    return JSX;
}
