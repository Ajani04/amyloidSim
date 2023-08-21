import { useAuthenticationContext } from "./useAuthenticationContext";

export const useLogout = () => {
    const { dispatch } = useAuthenticationContext();

    const Logout = () => {
        //remove saved session id from local Storage
        localStorage.removeItem("user");

        //dispatch the logout action
        dispatch({ type: "LOGOUT" });
    };

    return { Logout };
};
