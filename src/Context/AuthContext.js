import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const authContext = createContext(null);

const AuthProvider = ({children}) => {
    const localStorageToken = JSON.parse(localStorage.getItem("signup"));
    const [token, setToken] = useState(localStorageToken);
    const localStorageUser = JSON.parse(localStorage.getItem("user"));
    const [user, setUser] = useState(localStorageUser);
    const [isLogin, setIsLogin] = useState(JSON.parse(localStorage.getItem("login")) ? true : false)

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
            localStorage.setItem("token", JSON.stringify(encodedToken));
            setToken(encodedToken);
            localStorage.setItem("user", JSON.stringify(createdUser));
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
          if (status === 200) {
            localStorage.setItem("login", JSON.stringify(encodedToken));
            setToken(encodedToken);
            setIsLogin(true)
            localStorage.setItem("user", JSON.stringify(foundUser));
            setUser(foundUser);
            navigate("/product-listing");
          }
          if (status === 201) {
            setToast({type: "error", msg: "Wrong Password"})
          }
        } catch (error) {
          console.log(error)
            setToast({type: "error", msg: "No User found with entered email!"})
        }
      };

      const logoutHandler = () => {
        if (localStorage.getItem("login")) {
            setIsLogin(false)
            localStorage.removeItem("login")
            navigate("/") 
        } else {
            navigate("/signup");
        }
    }

    return (
        <authContext.Provider value={{ signUpUser, signInUser, token, user, toast, setToast, logoutHandler, isLogin}}>{ children }</authContext.Provider>
    )
}

const useAuth = () => useContext(authContext);

export { AuthProvider, useAuth }