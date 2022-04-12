import { createContext, useContext, useState, useReducer, useEffect } from "react";
import axios from "axios";
import { Toast } from "../components"
import { useNavigate } from "react-router-dom";


const authContext = createContext(null);

const AuthProvider = ({children}) => {
    const localStorageToken = JSON.parse(localStorage.getItem("token"));
    const [token, setToken] = useState(localStorageToken?.token);
    const localStorageUser = JSON.parse(localStorage.getItem("user"));
    const [user, setUser] = useState(localStorageUser?.user);
    const navigate = useNavigate();
    const [toast, setToast] = useState({type: "", msg: ""});

    const signUpUser = async (email, password, firstname) => {
        try {
          const {
            data: { createdUser, encodedToken },
            status,
          } = await axios.post("/api/auth/signup", {
            email: email,
            password: password,
            firstName: firstname
          });
          if (status === 200 || 201) {
            localStorage.setItem("signup", JSON.stringify({ token: encodedToken }));
            setToken(encodedToken);
            localStorage.setItem("user", JSON.stringify({ user: createdUser }));
            setUser(createdUser);
            setToast({type: "success", msg: "Successfully Created! Proceed to login with your credentials!"})
            setTimeout(() => {navigate("/login");},2000)
          }
        } catch(err) { 
            setToast({type: "error", msg: "User already exists, please sign in!"})
            setTimeout(() => {navigate("/login");},2000)   
        }
    }

    const signInUser = async (email, password) => {
        try {
          const {
            data: { foundUser, encodedToken },
            status,
          } = await axios.post("/api/auth/login", {
            email: email,
            password: password,
          });
          console.log(status)
          if (status == 200) {
            localStorage.setItem("login", JSON.stringify({ token: encodedToken }));
            setToken(encodedToken);
            localStorage.setItem("user", JSON.stringify({ user: foundUser }));
            setUser(foundUser);
            navigate("/product-listing");
          }
          if (status == 201) {
            setToast({type: "error", msg: "Wrong Password"})
          }
        } catch (error) {
            setToast({type: "error", msg: "No User found with entered email!"})
        }
      };

      const logoutHandler = () => {
        if (user) {
            localStorage.removeItem("user")
            localStorage.removeItem("login")
            setUser([]);
            navigate("/") 
        } else {
            navigate("/signup");
        }
    }

    return (
        <authContext.Provider value={{ signUpUser, signInUser, token, user, toast, setToast, logoutHandler}}>{ children }</authContext.Provider>
    )
}

const useAuth = () => useContext(authContext);

export { AuthProvider, useAuth }