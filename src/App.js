import React from "react";
import UserList from "./components/UserList";

function App() {
	return (
		<div className="App container grey">
			<h1 className="blue-text white">List of customer</h1>
			<UserList />
		</div>
	);
}

export default App;
