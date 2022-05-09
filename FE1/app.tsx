import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

// CSS
import "./App.css"

// Importing Components
import Home from './components/Home';
import Calculator from './components/Calculator';
import History from './components/History';


class Main extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<div className="content">
						<Routes>
							<Route path="/" element={<Home/>} />
							<Route path="/Calculator" element={<Calculator/>} />
							<Route path="/History" element={<History/>} />
						</Routes>
					</div>
				</div>
			</Router>
		);
	}
}

export default Main

ReactDOM.render(<Main />, document.getElementById("root"));
