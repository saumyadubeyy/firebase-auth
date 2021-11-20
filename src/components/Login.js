import { signInWithGoogle } from "../service/firebase";
import "../css/App.css"

const Login = () => {
    return (
        <div  className="login">
            <button onClick={signInWithGoogle} className="btn">
                Sign In with Google
            </button>
        </div>
    )
}

export default Login