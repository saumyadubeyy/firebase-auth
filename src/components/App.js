import { useState,useEffect } from "react";
import Login from "../components/Login"
import Home from "../components/Home"
import firebase from "../service/firebase";


const App = () => {
    const [user, setUser] = useState("")
    
    useEffect(() => {
        firebase.auth().onAuthStateChanged( user => {
            setUser(user);
        })
    }, [])

    console.log(user);

    return(
        <div  className="login">
            {user? <Home user={user} /> : <Login />}
        </div>
    )
}

export default App