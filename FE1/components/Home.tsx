import React from "react";
import { NavLink } from 'react-router-dom';

class Home extends React.Component {
	render() {
		return (
			<div className="container">
                <div className="button" ><NavLink to="/Calculator">Send Message</NavLink></div>
                <div className="button" ><NavLink to="/History">Show History</NavLink></div>
			</div>
		);
	}
}

export default Home