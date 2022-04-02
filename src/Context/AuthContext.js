import { createContext, useContext, useState, useReducer, useEffect } from "react";
import axios from "axios";

const authContext = createContext(null);

const AuthProvider = ({children}) => {
    const localStorageToken = JSON.parse(localStorage.getItem("token"));
    const [token, setToken] = useState(localStorageToken?.token);
    const localStorageUser = JSON.parse(localStorage.getItem("user"));
    const [user, setUser] = useState(localStorageUser?.user);
    const [tokenState, setTokenState] = useState(false);

    const authReducer = (state, {type, payload}) => {
        switch(type) {
            case "SIGNUP" : return {...state, data: payload};
            case "CHECK": return {...state, check: !state.check}
        }
    }

    const [{data, check}, dispatch] = useReducer(authReducer, {
        data: { firstName: null, email: null, password: null, confirmPassword: null},
        check: false
    })

    const signUpUser = async (email, password, firstname) => {
        try {
        //   const {
        //     data: { createdUser, encodedToken },
        //     status,
        //   } = await axios.post("/api/auth/signup", {
        //     email: email,
        //     password: password,
        //     firstName: firstname
        //   });
          
        //   if (status === 200 || 201) {
        //     localStorage.setItem("signup", JSON.stringify({ token: encodedToken }));
        //     setToken(encodedToken);
        //     localStorage.setItem("user", JSON.stringify({ user: createdUser }));
        //     setUser(createdUser);
        //     alert("Successfully Created! Proceed to login with your credentials");
        //   }
        console.log("hello")
        } catch(err) {
            console.log(err)
            alert("User already exists, please sign in!");
        }
    }

    return (
        <authContext.Provider value={{dispatch, signUpUser}}>{ children }</authContext.Provider>
    )
}

const useAuth = () => useContext(authContext);

export { AuthProvider, useAuth }