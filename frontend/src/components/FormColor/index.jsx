import React, {useState} from 'react';
import './formcolor.css';

const FormColor = ({inputValue, setInputValue}) => {
	
	
	return (
		<div >
			<input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
		</div>
	)
}

export default FormColor;