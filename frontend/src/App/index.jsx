import {useState, useEffect} from 'react';
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
	const [inputShowing, setInputShowing] = useState(true);
	const [searchWord, setSearchWord] = useState('')
	
	const saveList = (listItem) => {
		setItems(listItem)
		localStorage.setItem('grocerylist', JSON.stringify(listItem))
	}
	
	const handleChangeCheckedItem = (id) => {
		const listItem = items.map(item => item.id === id ? {...item, checked: !item.checked} : item)
		saveList(listItem)
	}
	
	const handleDeleteItem = (id) => {
		if(window.confirm('Are you sure you want to delete this item?')) {
			const listItem = items.filter(item => item.id !== id);
			saveList(listItem)
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

		const listItems = [...items, {id: new Date().getTime(), item: inputValue, checked: false}]
		saveList(listItems)
		
		setInputValue('')
	}
	
	const handleSearch = () => {
		const listItem = items.filter(item => item.item.toLowerCase().includes(searchWord.toLowerCase()))
		if(searchWord === '') {
			setItems(JSON.parse(localStorage.getItem('grocerylist')) )
		} else {
			setItems(listItem)
		}
	}
	
	const changeInput = (e) => {
		e.preventDefault()
		
		setInputShowing(!inputShowing)
	}
			
	
	useEffect(() => {
		handleSearch()
	}, [searchWord])
	
	return (
		
		<div className="app">
			<Header title={title}></Header>
			<Main items={items} handleChangeCheckedItem={handleChangeCheckedItem} handleDeleteItem={handleDeleteItem} setItems={setItems} handleSubmit={handleSubmit} inputValue={inputValue} setInputValue={setInputValue} inputShowing={inputShowing} setInputShowing={setInputShowing} searchWord={searchWord} setSearchWord={setSearchWord} changeInput={changeInput} handleSearch={handleSearch}></Main>
			<Footer items={items}></Footer>
		</div>	
	)
}

export default App;




