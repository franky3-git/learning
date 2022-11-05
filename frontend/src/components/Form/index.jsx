import {useState} from 'react';
import Content from '../Content';

const Form = ({setItems, items}) => {
	const [inputValue, setInputValue] = useState('');
	
	const handleSubmit = (e) => {
		e.preventDefault();
		
		console.log(inputValue)
		setItems([...items, {id: new Date().getTime(), item: inputValue, checked: false}])
		
		setInputValue('')
	}
	
	return (
		<form style={{width: 500, padding: 10}} onClick={handleSubmit}>
			
			<div className="mb-3">
				<label for="input-description">Description item</label>
				<input className="form-control" type="text" id="input-description" onChange={(e) => setInputValue(e.target.value)} value={inputValue}/>
			</div>
			<button className="btn btn-primary">add item</button>
		</form>
	)
}

export default Form;