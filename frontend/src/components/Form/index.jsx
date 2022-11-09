import {useState} from 'react';

const Form = ({handleSubmit, inputValue, setInputValue}) => {
	
	return (
		<form style={{width: 500, padding: 10}} onSubmit={handleSubmit}>
			
			<div className="mb-3">
				<label htmlFor="input-description">Description item</label>
				<input className="form-control" type="text"  required autoFocus id="input-description" onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
			</div>
			<button className="btn btn-primary">add item</button>
		</form>
	)
}

export default Form;