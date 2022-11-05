import {useState} from 'react';
import Content from '../Content';

const Form = ({setItems, items}) => {
	const [inputValue, setInputValue] = useState('');
	
	const handleSubmit = (e) => {
		e.preventDefault();
		if(inputValue.trim() === "") {
			alert('You must enter a valid description for your grocery list')
			return;
		}
		
		console.log(inputValue)
		const listItems = [...items, {id: new Date().getTime(), item: inputValue, checked: false}]
		setItems(listItems)
		localStorage.setItem('grocerylist', JSON.stringify(listItems))
		
		setInputValue('')
	}
	
	return (
		<form style={{width: 500, padding: 10}} onSubmit={handleSubmit}>
			
			<div className="mb-3">
				<label htmlFor="input-description">Description item</label>
				<input className="form-control" type="text" id="input-description" onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
			</div>
			<button className="btn btn-primary">add item</button>
		</form>
	)
}

export default Form;