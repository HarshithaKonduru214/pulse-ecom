import "../pages/Signup/sign.css";
import { useState } from "react"
import axios from "axios"
import { Toast } from "../components"
import { useAuth } from "../Context/AuthContext";

const Signup = () => {
    const [check, setCheck] = useState(false)
    const [toast, setToast] = useState("");
    const [ data, setData ] = useState({
        firstName: "",
        email: "",
        password: "",
        confirm: ""
    });

    const { dispatch, signUpUser } = useAuth();

    const signUpFunction = () => {

          if (data.password === data.confirm) {
            (async () => {
              signUpUser(data.email, data.password, data.firstname);
              console.log("ghg")
            })();
          } else {
              console.log(data.password, data.confirm)
            alert("Passwords dont match!");
          }

      };

    return (
        <div class="sign-up-container flex-row mt-2">
            <div class="main flex-column p-2">
                <div class="main-heading mb-2">SIGNUP</div>
                <div class="main-desc mb-2 gray-text">To quickly find your favourite items, saved addresses and payments.</div>
                <hr />
                <div class="main-desc mb-2 mt-2 gray-text">Register and earn 2000 reward points</div>
                { toast && <Toast msg={ toast }/>}
                <form class="main-form flex-column">
                    <div class="input flex-column container">
                        <input class="input-text" type="text" placeholder="Enter Name" onChange={(e) => {setData({...data, firstName: e.target.value})}} required  />
                        <div class="placeholder">Name</div>
                    </div>
                    <div class="input flex-column container">
                        <input class="input-text" type="email" placeholder="Enter Email ID" onChange={(e) => {setData({...data, email: e.target.value})}} required />
                        <div class="placeholder">Email ID</div>
                    </div>
                    <div class="input flex-column container">
                        <input class="input-text" type="password" placeholder="Enter Password" onChange={(e) => {setData({...data, password: e.target.value})}} required />
                        <div class="placeholder">Password</div>
                    </div>
                    <div class="input flex-column container">
                        <input class="input-text" type="password" placeholder="Confirm Password" onChange={(e) => {setData({...data, confirm: e.target.value})}}/>
                        <div class="placeholder">Confirm Password</div>
                    </div>
                    <div class="form-check align-self-center mb-2">
                        <input className="mr-1" type="checkbox" name="condition" id="condition" value={check} onChange={(e) => dispatch({type: "CHECK", payload: ""})} />
                        <label for="condition">I accept all Terms & Conditions</label>
                    </div>
                    <div class="main-buttons flex-column">
                        <button class="sign-button" onClick={signUpFunction}>Create New Account</button>
                        <button class="sign-button-secondary no-style-link gray-text flex-row justify-content-around">Already have an Account</button>
                    </div>
                </form>
                
            </div>
            
        </div>
    )
}

export { Signup }