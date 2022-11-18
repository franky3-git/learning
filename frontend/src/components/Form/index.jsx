import {useState} from 'react';
import {FaSistrix, FaListAlt} from 'react-icons/fa';

const Form = ({handleSubmit, inputValue, setInputValue, inputShowing, setInputShowing, searchWord, setSearchWord, handleSearch, changeInput}) => {
	
	return (
		<>
		<form style={{width: 500, padding: 10}} onSubmit={handleSubmit}>
			
			{inputShowing ? 
			(<div className="mb-3">
				<label htmlFor="input-description">Description item</label>
				<input className="form-control" type="text" autoFocus id="input-description" onChange={(e) => setInputValue(e.target.value)} value={inputValue} />
			</div>) : 
			(<div className="mb-3">
				<label htmlFor="input-search">Search a specific item</label>
				<input className="form-control" type="text"  autoFocus id="input-search" onChange={(e) => setSearchWord(e.target.value)} value={searchWord} />
			</div>)}
			<div>
				{inputShowing && <button className="btn btn-primary">add item</button>}
				<button style={{marginLeft: 15}} onClick={changeInput} className="btn btn-primary">{inputShowing ? <FaSistrix/> : <FaListAlt />}</button>
			</div>
		</form>
		
		</>
	)
}

export default Form;