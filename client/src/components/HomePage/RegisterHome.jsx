import React, { useRef, useState, useContext, useEffect } from 'react'
import { UserContext } from "../../context/UserContext";
import { validateEmail, validateUsername, validatePassword } from "../../utils/register";


function RegisterHome({popupRegister, setPopupRegister, changePopup}) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
  
    const [usernameError, setUsernameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [repPasswordError, setRepPasswordError] = useState("");
  
    const { user, setUser } = useContext(UserContext);
    const Ref = useRef(null);
    useOutsideAlerter(Ref);

    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    removePopup()
                }
            }
    
            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    const removePopup = () => {
        setPopupLogin(false)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        let isUsernameGood = false;
        let isEmailGood = false;
        let isPasswordGood = false;
        let isRepPasswordGood = false;
    
         if(validateUsername(username)) {
          setUsernameError(false)
          isUsernameGood = true;
        } else {
          setUsernameError(true)
        }
        
        if(validateEmail(email)) {
          setEmailError(false)
          isEmailGood = true;
        } else {
          setEmailError(true)
        }
    
        if(validatePassword(password)) {
          setPasswordError(false)
          isPasswordGood = true
        } else {
          setPasswordError(true)
        }
    
        if(password === repeatPassword) {
          setRepPasswordError(false)
          isRepPasswordGood = true;
        } else {
          setRepPasswordError(true)
        }
    
        if(!isUsernameGood || !isEmailGood || !isPasswordGood || !isRepPasswordGood) {
          return;
        }
    
        const res = await fetch("/api/register", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({username, email, password})
        })
    
        const getUser = await res.json();
        setUser(getUser);
        window.location.reload(false);
    }

    return (
        <>
            {popupRegister &&
            <div className="popupContainer">
                <div className="box">
                    <h1>login.</h1>
                    <form className="formRegister">
                        <input
                            className={`inputRegister ${ usernameError && "inputRegisterError"}`}
                            autoComplete="off"
                            type="text"
                            name="username"
                            placeholder="username"
                            required
                            onChange={(e) => {setUsername(e.target.value), setUsernameError(false)}}
                        />
                        {usernameError && <p className="errorText">Username is not valid!</p>}
                        <input
                            className={`inputRegister ${ emailError && "inputRegisterError"}`}
                            type="email"
                            name="email"
                            placeholder="e-mail adress"
                            required
                            onChange={(e) => {setEmail(e.target.value), setEmailError(false)}}
                        />
                        {emailError && <p className="errorText">Email is not valid!</p>}
                        <input
                            className={`inputRegister ${ passwordError && "inputRegisterError"}`}
                            type="password"
                            name="password"
                            placeholder="password"
                            required
                            onChange={(e) => {setPassword(e.target.value), setPasswordError(false)}}
                        />
                        {passwordError && <p className="errorText">Password is not valid!</p>}
                        <input
                            className={`inputRegister ${ repPasswordError && "inputRegisterError"}`}
                            type="password"
                            name="repPassword"
                            placeholder="repeat password"
                            required
                            onChange={(e) => {setRepeatPassword(e.target.value), setRepPasswordError(false)}}
                        />
                        {repPasswordError && <p className="errorText">Password didn't match!</p>}
                        <button className="registerButton" onClick={handleSubmit}>register.</button>
                        <p className="loginText">Already have an account?</p>
                        <p className="loginLink" onClick={() => changePopup()}>
                        Login here
                        </p>
                    </form>
                </div>
            </div>}
        </>
    )
}

export default RegisterHome
