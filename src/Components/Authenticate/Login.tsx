import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom'
const axios = require('axios');

export default function Login() {
    const history = useHistory()
    const [signup, toSignUp] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassowrd] = useState("");
    const [authenticated, setauthenticated] = useState(false);
    const signinCallback = () => {
        axios({
            method: "post",
            url: "http://localhost:4000/login",
            data: {
                "email": email,
                "password": password
            },
        })

            .then(function (response: any) {
                //handle success
                if (response["status"] === 200) {
                    localStorage.setItem("email", response["data"]["email"]);
                    localStorage.setItem("token", response["data"]["token"]);
                    setauthenticated(true);
                }
            })
            .catch(function (response: any) {
                //handle error
                console.log(response);
            });
    }
    if (signup === true) {
        return <Redirect to='/register'/>
      }
    if (authenticated === true) {
        window.location.reload();
    }
    

    return (
        <div className="w-full max-w-xs container mx-auto mt-20">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={e => setEmail(e.target.value)} id="email" type="email" placeholder="email" />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Password
                    </label>
                    <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" onChange={e => setPassowrd(e.target.value)} id="password" type="password" placeholder="******************" />
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => signinCallback()} type="button">
                        Login In
                    </button>
                </div>
            </form>
            <p className="text-center text-gray-500 text-xs">
                &copy;AOK. All rights reserved.
            </p>
            <button onClick={() => toSignUp(true)}>Create an account</button>
        </div>
    )
}
