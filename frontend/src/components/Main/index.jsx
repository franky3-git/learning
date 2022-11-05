import {useState} from 'react';
import Content from '../Content';
import Form from '../Form';

const Main = () => {
	
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
		<main>
			<Form setItems={setItems} items={items}></Form>
			<Content items={items} handleChangeCheckedItem={handleChangeCheckedItem} handleDeleteItem={handleDeleteItem}></Content>
		</main>
	)
}

export default Main;