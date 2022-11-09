import {useState} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';
import datas from '../datas/items';

//import css
import './app.css';

const App = () => {
	const title = 'Grocery';
	const [items, setItems] = useState(JSON.parse(localStorage.getItem('grocerylist')) || datas)
	const [inputValue, setInputValue] = useState('');
	
	const handleChangeCheckedItem = (id) => {
		const listItem = items.map(item => item.id === id ? {...item, checked: !item.checked} : item)
		setItems(listItem)
		localStorage.setItem('grocerylist', JSON.stringify(listItem))
	}
	
	const handleDeleteItem = (id) => {
		if(window.confirm('Are you sure you want to delete this item?')) {
			const listItem = items.filter(item => item.id !== id);
			setItems(listItem)
			localStorage.setItem('grocerylist', JSON.stringify(listItem))
		} else {
			alert('canceled deletion')
		}
	}
	
	const handleSubmit = (e) => {
		e.preventDefault();
		if(inputValue.trim() === "") {
			alert('Input cannot be empty')
			return;
		}
	
		console.log(inputValue)
		const listItems = [...items, {id: new Date().getTime(), item: inputValue, checked: false}]
		setItems(listItems)
		localStorage.setItem('grocerylist', JSON.stringify(listItems))
		
		setInputValue('')
	}
			
	return (
		
		<div className="app">
			<Header title={title}></Header>
			<Main items={items} handleChangeCheckedItem={handleChangeCheckedItem} handleDeleteItem={handleDeleteItem} setItems={setItems} handleSubmit={handleSubmit} inputValue={inputValue} setInputValue={setInputValue}></Main>
			<Footer items={items}></Footer>
		</div>	
	)
}

export default App;



