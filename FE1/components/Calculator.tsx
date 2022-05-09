import React from "react";
import { NavLink } from 'react-router-dom';
import TextareaAutosize from 'react-textarea-autosize';

class Calculator extends React.Component {
    state = {
        // xVal: 0,
        // yVal: 0,
        // result: 0,
        // operation:'',
        message:'',
    }

    handleInputChange = (event) => {
        const { name, value } = event.target
        this.setState({[name] : value})
    }

    // calculate = (operation) => {
    //     const { xVal, yVal } = this.state
    //     let finalResult = 0;

    //     if(operation === 'addition'){
    //         finalResult = Number(xVal) + Number(yVal)
    //     } else if(operation === 'subtraction'){
    //         finalResult = Number(xVal) - Number(yVal)
    //     } else if(operation === 'multiplication'){
    //         finalResult = Number(xVal) * Number(yVal)
    //     } else if(operation === 'division' && xVal !== 0  && yVal !== 0){
    //         finalResult = Number(xVal) / Number(yVal)
    //     }

    //     this.setState({result : finalResult, operation})

    // }
    saveOP = async () => {
        
        const message  = document.getElementById('message').value;
        const url = "http://localhost:3000/saveHistory"
        const response = await fetch(
            url,
            {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message })
            }
        )
        const data = await response.json();
        alert(data.message)
    }


    // saveOP = async () => {
    //     const { xVal, yVal, result, operation } = this.state
    //     const url = "http://localhost:3000/saveHistory"
        
    //     const response = await fetch(
    //         url,
    //         {
    //             method: "POST",
    //             headers: { 'Content-Type': 'application/json' },
    //             body: JSON.stringify({ xVal, yVal, result, operation })
    //         }
    //     )
    //     const data = await response.json();

    //     alert(data.message)
    // }

	render() {
        // const { result } = this.state
        var date = new Date();
        console.log(date.toISOString())
		return (
			<div className='container'>
                <NavLink to="/">Home</NavLink>
                <h1>Message</h1>
                <form>
                    <textarea id="message" className="form-control" name="message" rows="5" cols="100">
                    </textarea>
                    <label> 
                        <input
                        type="button" 
                        value="Send Message"
                        className="input-submit"
                        onClick={() => this.saveOP()}
                        />
                    </label>
                </form>
               

				{/* <h1>My Awesome Calculator</h1>

                <form className="form-container">
                    <div>
                        <label>X:
                            <input type="text" name="xVal" className="input-text" onKeyUp={(e) => this.handleInputChange(e)} />
                        </label>
                    </div>
                    <div>
                        <label>Y:
                            <input type="text" name="yVal" className="input-text" onKeyUp={(e) => this.handleInputChange(e)} />
                        </label>
                    </div>
                </form>
                <div>
                    Result : {result}
                </div>
                <div className="operation">
                    <div>Please select operation:</div>

                    <div>
                        <label> 
                            <input
                            type="radio" 
                            name="operation"
                            onChange={(e) => this.calculate('addition')}
                            /> Addition
                        </label>
                    </div>

                    <div>
                        <label> 
                            <input
                            type="radio" 
                            name="operation"
                            onChange={(e) => this.calculate('subtraction')}
                            /> Subtraction
                        </label>
                    </div>

                    <div>
                        <label> 
                            <input
                            type="radio" 
                            name="operation"
                            onChange={(e) => this.calculate('multiplication')}
                            /> Multiplication
                        </label>
                    </div>

                    <div>
                        <label> 
                            <input
                            type="radio" 
                            name="operation"
                            onChange={(e) => this.calculate('division')}
                            /> Division
                        </label>
                    </div>

                    <div>
                        <label> 
                            <input
                            type="button" 
                            value="Submit"
                            className="input-submit"
                            onClick={() => this.saveOP()}
                            />
                        </label>
                    </div>

                </div> */}

			</div>
		);
	}
}

export default Calculator