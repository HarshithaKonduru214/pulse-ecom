import "../pages/Signup/sign.css";
import { useState } from "react"
import { axios } from "axios"

const Signup = () => {
    const [ data, setData ] = useState({
        firstName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    async function clickHandler() {
        try {
            const response = await axios.post(`/api/auth/signup`, {
                firstName: "Adarsh",
                lastName: "Balika",
                email: "adarshbalika@neog.camp",
                password: "adarshBalika",
              });
              console.log(response)
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <div class="sign-up-container flex-row mt-2">
            <div class="main flex-column p-2">
                <div class="main-heading mb-2">SIGNUP</div>
                <div class="main-desc mb-2 gray-text">To quickly find your favourites items, saved addresses and payments.</div>
                <hr />
                <div class="main-desc mb-2 mt-2 gray-text">Register and earn 2000 reward points</div>
                <div class="main-form flex-column">
                    <div class="input flex-column container">
                        <input class="input-text" type="text" placeholder="Enter Name" onChange={(e) => {setData({...data, firstName: e.target.value})}} />
                        <div class="placeholder">Name</div>
                    </div>
                    <div class="input flex-column container">
                        <input class="input-text" type="email" placeholder="Enter Email ID" onChange={(e) => {setData({...data, email: e.target.value})}}/>
                        <div class="placeholder">Email ID</div>
                    </div>
                    <div class="input flex-column container">
                        <input class="input-text" type="password" placeholder="Enter Password" onChange={(e) => {setData({...data, password: e.target.value})}}/>
                        <div class="placeholder">Password</div>
                    </div>
                    <div class="input flex-column container">
                        <input class="input-text" type="password" placeholder="Confirm Password" onChange={(e) => {setData({...data, confirmPassword: e.target.value})}}/>
                        <div class="placeholder">Confirm Password</div>
                    </div>
                    <div class="form-check align-self-center mb-2">
                        <input className="mr-1" type="checkbox" name="condition" id="condition" />
                        <label for="condition">I accept all Terms & Conditions</label>
                    </div>
                    <div class="main-buttons flex-column">
                        <button class="sign-button" onClick={clickHandler} >Create New Account</button>
                        <button to="/" class="sign-button-secondary no-style-link gray-text flex-row justify-content-around">Already have an Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Signup }