import react from 'react'
import {auth} from "../service/firebase"

const Home = ({user}) => {
    return (
        <div>
            <h1>Hello, <span>{user.displayName}</span></h1>
            <img src={user.photoURL} alt="" /><br/>
            <button className="btn so" onClick={() => auth.signOut()}>Sign Out</button>
        </div>
    )
}

export default Home