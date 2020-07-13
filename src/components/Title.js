import React, { useState, useEffect } from "react";

const Title = (props) => {
	const [numberOfUser, setNumberOfUser] = useState(0);

	useEffect(() => {
		setNumberOfUser(props.user.length);
	});

	return (
		<div className="title-container">
			<h4 className="">List of customer</h4>
			<p> There are {numberOfUser} user</p>
		</div>
	);
};

export default Title;
