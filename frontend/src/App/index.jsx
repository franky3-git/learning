import {useState, useEffect} from 'react';
import arrayColors from '../datas/colors.js';
import FormColor from '../components/FormColor';
import Box from '../components/Box'

import './app.css';


const App = () => {
	const [inputValue, setInputValue] = useState('');
	//const [backgroundColor, setBackgroundColor] = useState('orange');
	
	const backgroundCol = arrayColors.reduce((acc, val) => {
		if(val.name === inputValue.toLowerCase()) {
			return val
		}
		return acc;
	}, {})
	
	return (
		
		<div className="app">
			<div className="wrapper">
				<Box backgroundColor={backgroundCol} />
				<FormColor inputValue={inputValue} setInputValue={setInputValue} />
				{inputValue !== '' ? <p>{inputValue}</p> : <p>the input is empty</p>}
			</div>
			
		</div>	
	)
}

export default App;




