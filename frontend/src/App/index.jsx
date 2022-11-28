import {useState, useEffect} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';
import Modal from '../components/Modal';
import datas from '../datas/items';

//import css
import './app.css';

const App = () => {
	const title = 'Grocery';
	const [items, setItems] = useState([]);
	const [inputValue, setInputValue] = useState('');
	const [inputShowing, setInputShowing] = useState(true);
	const [searchWord, setSearchWord] = useState('');
	const [showModal, setShowModal] = useState(false);
	const [modalMessage, setModalMessage] = useState('');
	
	useEffect(() => {
		setItems(JSON.parse(localStorage.getItem('grocerylist')) || datas)
	}, [])

	const openModalAndSetMessage = (message) => {
		setShowModal(true)
		setModalMessage(message)
	}
	
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
			openModalAndSetMessage('item deleted')
		} else {
			openModalAndSetMessage('deletion canceled')
		}
	}
	
	const handleSubmit = (e) => {
		e.preventDefault();
		if(inputValue.trim() === "") {
			openModalAndSetMessage('Input cannot be empty')
			return;
		}

		const listItems = [...items, {id: new Date().getTime(), item: inputValue, checked: false}]
		saveList(listItems)
		openModalAndSetMessage('item added')
		setInputValue('')
	}
	
	
	const changeInput = (e) => {
		e.preventDefault()
		
		setInputShowing(!inputShowing)
	}

	const closeModal = () => {
		setShowModal(false)
	}
			
	
	return (
		
		<div className="app">
			{showModal && <Modal message={modalMessage} closeModal={closeModal} />}
			<Header title={title}></Header>
			
			<Main items={items.filter(item => item.item.toLowerCase().includes(searchWord.toLowerCase()))} handleChangeCheckedItem={handleChangeCheckedItem} handleDeleteItem={handleDeleteItem} setItems={setItems} handleSubmit={handleSubmit} inputValue={inputValue} setInputValue={setInputValue} inputShowing={inputShowing} setInputShowing={setInputShowing} searchWord={searchWord} setSearchWord={setSearchWord} changeInput={changeInput} ></Main>
			<Footer items={items}></Footer>
		</div>	
	)
}

export default App;



