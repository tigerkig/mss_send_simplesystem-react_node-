import React from "react";
import { NavLink } from 'react-router-dom';



class History extends React.Component {
    state = {
        history: []
    }
    
    componentDidMount() {
        const url = "http://localhost:3000/getHistory"

        fetch(url)
        .then(response => response.json())
        .then(data => this.setState({ history: data.data }));
    }

    filterBy = (e) => {
        const { name, value } = e.target
        const url = `http://localhost:3000/getHistory?type=${name}&value=${value}`

        fetch(url)
        .then(response => response.json())
        .then(data => this.setState({ history: data.data }));
    }

	render() {
        const { history } = this.state
    
		return (
			<div className='container'>
                <NavLink to="/">Home</NavLink>
				<h2>Message History</h2>
                
                <input name="date" type='date' className="input-text" onChange={(e) => this.filterBy(e)} />
                <table>
                    <tr>
                        <th>No</th>
                        <th>Message</th>
                        <th>Date</th>
                    </tr>
                    {history.length === 0 && 'No Data'}
                    {history.length > 0 && history.map((item, index) => {
                        return <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.message}</td>
                            <td>{item.createdDate}</td>
                        </tr>
                    })}
                </table>
			</div>
		);
	}
}

export default History