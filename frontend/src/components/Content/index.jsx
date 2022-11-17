import React from 'react';
import ListItem from '../ListItem';

//import css
import './content.css';


const Content = ({items, handleDeleteItem, handleChangeCheckedItem}) => {
	
	return (
		<div className='content'>
			<h1>Hello Dear!</h1>
			{items.length === 0 ?
				<h2 style={{color: 'red'}}>The list is empty</h2> :
				<ListItem items={items} handleChangeCheckedItem={handleChangeCheckedItem} handleDeleteItem={handleDeleteItem}  />
			}
		</div>
	)
}

export default Content;