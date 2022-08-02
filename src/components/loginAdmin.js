import '../css/login.css'
import '../api/adminLogin'
import React, { useEffect } from 'react'
import { useState } from "react";
import { logIn } from "../api/adminLogin";
import { Register } from "../api/adminLogin";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export function LoginAdmin(props) {
	let navigate = useNavigate();
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");

	async function onLogIn() {
		// await logIn(userName, password).then(data => {
		// 	if (data) {
		// 		alert("connection successfully");
		// 		navigate('/businessDetails', { state: { id: data } })
		// 	}
		// 	else {
		// 		alert("admin not defined  you need to application")
		// 	}
		// });
		const sighIn = 'sighIn'
		try {
			debugger
			const res = await axios.post(`https://meetings-test.herokuapp.com/user/signin`,
				{
					username: userName,
					password: password
				});
			if (res.data !== "") {
				alert("connection successfully");
				navigate('/businessDetails', { state: { id: res.data } })
			}
			else
				alert("admin not defined  you need to application")
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<div className="login-wrap">
			<div className="login-html">
				<input id="tab-1" type="radio" name="tab" className="sign-in" /><label htmlFor="tab-1" className="tab">Sign In</label>
				<input id="tab-2" type="radio" name="tab" className="sign-up" /><label htmlFor="tab-2" className="tab">Sign Up</label>
				<div className="login-form">
					<div className="sign-in-htm" >
						<div className="group">
							<label htmlFor="user" className="label">Username</label>
							<input id="user" type="text" className="input" onChange={userName => setUserName(userName.target.value)} />
						</div>
						<div className="group">
							<label htmlFor="pass" className="label">Password</label>
							<input id="pass" type="password" className="input" data-type="password" onChange={(password) => setPassword(password.target.value)} />
						</div>
						<div className="group">
							<input id="check" type="checkbox" className="check" />
							<label htmlFor="check"><span className="icon"></span> Keep me Signed in</label>
						</div>
						<div className="group">
							<input className="button" value="Sign In" onClick={() => onLogIn()} />
						</div>
						<div className="hr"></div>
					</div>
				</div>
			</div>
		</div>
	)
}

