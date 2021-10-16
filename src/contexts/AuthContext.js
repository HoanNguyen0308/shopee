import { createContext, useReducer } from "react";
import axios from "axios";
import {authReducer} from "../reducer/authReducer";
import { apiUrl } from "./constants";

export const AuthContext = createContext();

const AuthContextProvider = ({children}) =>  {
    const [authState, dispatch] = useReducer(authReducer, {
        authLoading: true,
        isAuthenticated: false,
        user: null
    });

    // Login logic
    const loginUser = async userForm => {
        try {
            const response = await axios.post(`${apiUrl}/auth/login`);

            if(response.data.success) {
                localStorage.setItem("token", response.data.accessToken);
                return response.data;
            }
        } catch (error) {
            if(error.response.data) {
                return error.response.data;
            } else {
                return {
                    success: false,
                    message: error.message
                }
            }
        }
    }
}

export default AuthContextProvider;
