import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useAuth } from "../Context/AuthContext";

const Login = () => {

    const userEmail = useRef("");
    const userPassword = useRef("");

    const { signInUser } = useAuth();

    const [ data, setData ] = useState({
        email: "",
        password: "",
    });

    useEffect(() => {
        (async () => {
          if (data.email && data.password !== "") {
            signInUser(data.email, data.password);
          }
        })();
        // eslint-disable-line react-hooks/exhaustive-deps
      }, [data.email, data.password]); 

      
  const signInFunction = () => {
    setData((prev) => ({
      ...prev,
      email: userEmail.current.value,
      password: userPassword.current.value,
    }));
  };

    return (
        <div class="login-container flex-row p-2">
            <div class="login-main flex-column p-2">
                <div class="main-heading mb-2">LOGIN</div>
                <div class="main-desc mb-2 gray-text">To quickly find your favourites items, saved addresses and payments.</div>
                <hr />
                <div class="main-form flex-column mt-2">
                    <div class="input flex-row">
                        <input class="input-text" type="email" placeholder="Enter Email ID" ref={userEmail} required/>
                        <div class="placeholder">Email ID</div>
                    </div>
                    <div class="input flex-row">
                        <input class="input-text" type="password" placeholder="Enter Password" ref={userPassword} required/>
                        <div class="placeholder">Password</div>
                    </div>
                    <div class="form-check mb-2 flex-row justify-content-between gap">
                        <div class="checkbox-container">
                            <input type="checkbox" name="condition" id="condition" />
                            <label for="condition">Remember Me</label>
                        </div>
                        <Link class="form-check-link no-style-link" to="/">Forgot Password?</Link>
                    </div>
                    <div class="main-buttons flex-column">
                        <button class="sign-button mb-2" onClick={() => signInFunction()}>LOGIN</button>
                        <Link to="/signup" class="no-style-link black-text sign-button-secondary flex-row justify-content-around mb-2">Create New Account</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Login }