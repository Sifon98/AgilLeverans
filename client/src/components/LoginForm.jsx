import React, { useRef, useState, useContext, useEffect } from 'react'
import { UserContext } from "../context/UserContext";
import { NavContext } from "../context/NavContext";
import DownloadsContainer from './DownloadsContainer';

function LoginHome({popupLogin, setPopupLogin, changePopup, loginPage}) {
    const { user, setUser } = useContext(UserContext);
    const { setNav } = useContext(NavContext);
    const Ref = useRef(null);
    useOutsideAlerter(Ref);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
    const [loginError, setLoginError] = useState("");
    const [loginErrorUser, setLoginErrorUser] = useState("");
    const [loginErrorPass, setLoginErrorPass] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        const res = await fetch(`/api/login`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username,
            password,
        }),
        });
        let getUser = await res.json();
        if(getUser.error === "Invalid username or password."){
        setLoginError(true);
        setLoginErrorUser(true);
        setLoginErrorPass(true);
        setErrorMessage(getUser.error);
        return;
        }
        setUser(getUser);
        window.location.reload(false);
    }

    const removePopup = () => {
        setPopupLogin(false)
    }

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

    return (
        <>
            {popupLogin &&
            <div className="popupContainer">
                <div className="box" ref={Ref}>
                    <h1>login.</h1>
                    <form className="formLogin">
                    <input
                        className={`inputLogin ${ loginErrorUser && "inputLoginError"}`}
                        type="text"
                        name="username"
                        placeholder="username"
                        onChange={(e) => {setUsername(e.target.value), setLoginErrorUser(false)}}
                    />
                    <input
                        className={`inputLogin ${ loginErrorPass && "inputLoginError"}`}
                        type="password"
                        name="password"
                        placeholder="password"
                        onChange={(e) => {setPassword(e.target.value), setLoginErrorPass(false)}}
                    />
                    {loginError && <p className="errorText">{errorMessage}</p>}
                    <button className="loginButton" onClick={handleLogin}>login.</button>
                    <p className="registerText">Don't have an account?</p>
                    <p className="registerLink" onClick={() => changePopup()}>
                        Register here
                    </p>
                    </form>
                    <DownloadsContainer position="relative" size="small" />
                </div>
            </div>}
            {popupLogin ? user != null ? removePopup() : null : null}
            {loginPage &&
            <form className="formLogin">
                <input
                    className={`inputLogin ${ loginErrorUser && "inputLoginError"}`}
                    type="text"
                    name="username"
                    placeholder="username"
                    onChange={(e) => {setUsername(e.target.value), setLoginErrorUser(false)}}
                />
                <input
                    className={`inputLogin ${ loginErrorPass && "inputLoginError"}`}
                    type="password"
                    name="password"
                    placeholder="password"
                    onChange={(e) => {setPassword(e.target.value), setLoginErrorPass(false)}}
                />
                {loginError && <p className="errorText">{errorMessage}</p>}
                <button className="loginButton" onClick={handleLogin}>login.</button>
                <p className="registerText">Don't have an account?</p>
                <button className="registerLink" 
                    onClick={(e) => {
                        e.preventDefault();
                        setNav({path: "/register", direction: 1});
                    }}>
                    Register here
                </button>
            </form>}
        </>
    )
}

export default LoginHome
