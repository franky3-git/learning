import React from 'react';
import LineItem from '../LineItem';

const ListItem = ({items, handleDeleteItem, handleChangeCheckedItem}) => {
	
	return (
		<>
			<ul className="list-item">
				{items.map(item => <LineItem key={item.id} handleChangeCheckedItem={handleChangeCheckedItem} handleDeleteItem={handleDeleteItem}  {...item} ></LineItem>
				)}
			</ul>
		</>
	)
}

export default ListItem;