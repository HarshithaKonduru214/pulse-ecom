import "../pages/Signup/sign.css";
import { useState } from "react"
import { Toast } from "../components"
import { useAuth } from "../Context/AuthContext";

const Signup = () => {
    const [check, setCheck] = useState(false)
    const [ data, setData ] = useState({
        firstName: "",
        email: "",
        password: "",
        confirm: ""
    });


    const { signUpUser, toast, setToast } = useAuth();

    const signUp = () => {
        try {
            if (data.email === "" || data.firstName === "" || data.password === "" || data.confirm === "") {
                setToast({type: "warning", msg: "Please fill out all the fields."})
            } else {
                if(!check) {
                    setToast({type: "warning", msg: "Please accept terms and conditions."})
                } else {
                    if(data.password === data.confirm) {
                        (async () => {
                            signUpUser(data.email, data.password, data.firstName);
                        })();
                    } else {
                        setToast({type: "warning", msg: "Passwords do not match."})
                    }
                }
            }
        } catch(err) {
            console.log(err)
        }

    }

    return (
        <div class="sign-up-container mt-2">
            {toast.type !== "" && <Toast type={toast.type} msg={toast.msg} status={true} />}
            <div class="main flex-column p-2">
                <div class="main-heading mb-2">SIGNUP</div>
                <div class="main-desc mb-2 gray-text">To quickly find your favourite items, saved addresses and payments.</div>
                <hr />
                <div class="main-desc mb-2 mt-2 gray-text">Register and earn 2000 reward points</div>
                <div class="main-form flex-column">
                    <div class="input flex-column">
                        <input class="input-text" type="text" placeholder="Enter Name" onChange={(e) => {setData({...data, firstName: e.target.value})}}  />
                        <div class="placeholder">Name</div>
                    </div>
                    <div class="input flex-column">
                        <input class="input-text" type="email" placeholder="Enter Email ID" onChange={(e) => {setData({...data, email: e.target.value})}} />
                        <div class="placeholder">Email ID</div>
                    </div>
                    <div class="input flex-column">
                        <input class="input-text" type="password" placeholder="Enter Password" onChange={(e) => {setData({...data, password: e.target.value})}} />
                        <div class="placeholder">Password</div>
                    </div>
                    <div class="input flex-column">
                        <input class="input-text" type="password" placeholder="Confirm Password" onChange={(e) => {setData({...data, confirm: e.target.value})}}/>
                        <div class="placeholder">Confirm Password</div>
                    </div>
                    <div class="form-check align-self-center mb-2">
                        <input className="mr-1" type="checkbox" name="condition" id="condition" value={check} onChange={() => setCheck((prev) => !prev)} />
                        <label for="condition">I accept all Terms & Conditions</label>
                    </div>
                    <div class="main-buttons flex-column">
                        <button class="sign-button" onClick={() => {
                            setToast({type: "", msg: ""});
                            signUp();
                            }}>Create New Account</button>
                        <button class="sign-button-secondary no-style-link gray-text flex-row justify-content-around">Already have an Account</button>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export { Signup }