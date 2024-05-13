import { useState } from "react";

export default function LoginForm({setCurrentUser}) {
    const [username, setUsername] = useState("")
    const [errorMessage, setErrorMessage] =useState("")
    function login() {
        if (!username.length){
            setErrorMessage("Username doesnt exist")
        }
        setCurrentUser(username)
    }

    function handleUsername(event) {
        setUsername(event.target.value)
    }
    return (
        <div style={{ display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", gap:"1em"}}>
            <div style={{ display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", gap:"1em"}}>
                <label>Username</label>
                <input onChange={ handleUsername } value={username} type="text"/>
                <span>error</span>
            </div>
            <div>
                <button onClick={login}>Login</button>
            </div>
        </div>
    );
}