import { useState } from "react";
import { useAuthenticationContext } from "./useAuthenticationContext";

export const useRegister = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthenticationContext();

    const Register = async (username, email, password) => {
        setIsLoading(true);
        setError(null);

        const response = await fetch("/api/v1/auth/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, email, password }),
        });

        const json = await response.json();

        if (!response.ok) {
            setIsLoading(false);
            setError(json.error);
        }

        if (response.ok) {
            // save the session token to local storage
            localStorage.setItem("user", JSON.stringify(json));

            //update the Authentication context
            dispatch({ type: "LOGIN", payload: json });

            // end loading
            setIsLoading(false);
        }
    };
    return { Register, isLoading, error };
};
