import React from 'react'
import { useHistory } from "react-router-dom";
export default function Dashboard() {
    const history = useHistory();
    const logout = () => {
        localStorage.setItem("token" , "");
        window.location.reload();
    }
    return (
        <div>
            Dashboard
            <button onClick={() =>logout()}>Logout</button>
        </div>
    )
}
