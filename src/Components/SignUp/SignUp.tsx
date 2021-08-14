import React, { useState } from 'react'
const axios = require('axios');
export default function SignUp() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassowrd] = useState("");
    const signUpCallback = () => {
        console.log("reeeeeeeeeeeeeeeee")
        axios({
            method: "post",
            url: "http://localhost:4000/register",
            data: {
                "first_name": username,
                "last_name": username,
                "email": email,
                "password": password
            },
            headers: { 'Content-Type': 'application/json' },
          })

            .then(function (response: any) {
              //handle success
              console.log(response);
              console.log("hola");
            })
            .catch(function (response: any) {
              //handle error
              console.log(response);
            });
    }
    return (
        <div className="w-full max-w-xs">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                        Username
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={e => setUsername(e.target.value)} id="username" type="text" placeholder="Username" />
                </div>
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
                    <p className="text-red-500 text-xs italic">Please choose a password.</p>
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={() => signUpCallback()} type="button">
                        Sign Up
                    </button>
                </div>
            </form>
            <p className="text-center text-gray-500 text-xs">
                &copy;AOK. All rights reserved.
            </p>
        </div>
    )
}
