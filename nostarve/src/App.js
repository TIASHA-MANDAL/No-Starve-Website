
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import "./App.css";
import Homepage from "./homepage";
import Member from "./pages/member";
import Feedback from "./pages/feedback";
import Feedbackregister from "./pages/feedbackregister";
import Form1 from "./pages/form1";
import Feed from "./pages/feed";
import Form2 from "./pages/form2";
import Form3 from "./pages/form3";
import Admin from "./pages/admin";
import Record from "./pages/admin pages/record";
import Hubs from "./pages/hubs";
import Hubsadmin from "./pages/admin pages/hubsadmin";
import Player from "./pages/player";
import { Occasional } from "./pages/admin pages/occasional";
import { Daily } from "./pages/admin pages/daily";
import { Monthly } from "./pages/admin pages/monthly";
import Tracking from "./pages/admin pages/tracking";



function App() {
	const [user, setUser] = useState(null);

	const getUser = async () => {
		try {
			const url = `http://localhost:8080/auth/login/success`;
			const { data } = await axios.get(url, { withCredentials: true });
			setUser(data.user._json);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		console.log(user);
		// if (user){
		//   window.location.replace('http://localhost:3000/')
		// }
		getUser();

	}, [user]);

	return (
		<div className="con">
			<Routes>
				<Route

					path="/"
					element={user ? <Home user={user} /> : <Navigate to="/Home" />}
				/>
				<Route
					exact
					path="/login"
					element={user ? <Navigate to="/" /> : <Login />}
				/>
				<Route
					path="/signup"
					element={user ? <Navigate to="/" /> : <Signup />}
				/>
				<Route
					exact
					path="/Home"
					element={user ? <Navigate to="/" /> : <Homepage />}
				/>
				<Route
					exact
					path="/1236547890"
					element={<Member />}
				/>
				<Route
					exact
					path="/feedback"
					element={<Feedback user={user} />}
				/>
				<Route
					exact
					path="/feedbackregister"
					element={<Feedbackregister user={user} />}
				/>
				<Route
					exact
					path="/feed"
					element={<Feed user={user} />}
				/>
				<Route
					exact
					path="/form1"
					element={<Form1 user={user} />}
				/>
				<Route
					exact
					path="/form2"
					element={<Form2 user={user} />}
				/>
				<Route
					exact
					path="/form3"
					element={<Form3 user={user} />}
				/>
				<Route
					exact
					path="/admin"
					element={<Admin user={user} />}
				/>
				<Route
					exact
					path="/record"
					element={<Record user={user} />}
				/>
				<Route
					exact
					path="/hubs"
					element={<Hubs user={user} />}
				/>
				<Route
					exact
					path="/hubsadmin"
					element={<Hubsadmin user={user} />}
				/>
				<Route
					exact
					path="/player"
					element={<Player user={user} />}
				/>
				<Route
					exact
					path="/occasional"
					element={<Occasional user={user} />}
				/>
				<Route
					exact
					path="/daily"
					element={<Daily user={user} />}
				/>
				<Route
					exact
					path="/monthly"
					element={<Monthly user={user} />}
				/>
				<Route
					exact
					path="/tracking"
					element={<Tracking user={user} />}
				/>
			</Routes>
		</div>
	);
}

export default App;