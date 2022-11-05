import {useState} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';

//import css
import './app.css';

const App = () => {
	const title = 'Grocery';
	
	const [items, setItems] = useState(JSON.parse(localStorage.getItem('grocerylist')) ||[
		{
			id: 1,
			checked: false,
			item: "One half pound bag of cocoa covered almonds unsolved"
		},
		{
			id: 2,
			checked: false,
			item: "item 2"
		},
		{
			id: 3,
			checked: true,
			item: "item 3"
		},
	]);
	
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
			
	return (
		
		<div className="app">
			<Header title={title}></Header>
			<Main items={items} handleChangeCheckedItem={handleChangeCheckedItem} handleDeleteItem={handleDeleteItem} setItems={setItems}></Main>
			<Footer items={items}></Footer>
		</div>	
	)
}

export default App;



