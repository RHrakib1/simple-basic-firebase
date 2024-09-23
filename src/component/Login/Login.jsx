import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from "../Firebase/Firebase.init";
import { useState } from "react";
const Login = () => {
    const [user, setuser] = useState(null)
    const auth = getAuth(app)
    const googleprovider = new GoogleAuthProvider()
    const githubprovider = new GithubAuthProvider()

    const heandlelogin = () => {
        signInWithPopup(auth, googleprovider)
            .then(result => {
                const login = result.user;
                console.log(login);
                setuser(login)
            })
            .catch(error => {
                console.log(error);
            })
    }

    const hendlelogout = () => {
        signOut(auth)
            .then(result => {
                console.log(result);
                setuser(null)
            })
            .catch(error => {
                console.log(error);
            })
    }

    const hendlegithublogin = () => {
        signInWithPopup(auth, githubprovider)
        .then(result=>{
            const singgithub=result.user
            console.log(singgithub);
            setuser(singgithub)
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div>
            {
                user ? <button onClick={hendlelogout}>Sing Out</button> :
                    <>
                    <button onClick={heandlelogin}>Google login</button>
                    <button onClick={hendlegithublogin}>Github login</button>
                    </>
            }

            {
                user && <div>
                    <h1>User Name:{user.displayName}</h1>
                    <p>Email: {user.email}</p>
                    <img src={user.photoURL} alt="pic nai" />
                </div>
            }
        </div>
    );
};

export default Login;