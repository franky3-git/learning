import React from 'react';
import { AiFillCloseCircle } from "react-icons/ai";

const ListItem = ({items, handleDeleteItem, handleChangeCheckedItem}) => {
	
	return (
		<>
			<ul className="list-item">
				{items.map(item => (
					 <li className='item' key={item.id}>
						<input onChange={() => handleChangeCheckedItem(item.id)} type='checkbox' checked={item.checked} />
						<label 
						style={{textDecoration: item.checked ? 'line-through' : 'none'}}
						onDoubleClick={() => handleChangeCheckedItem(item.id)}
						 >{item.item}</label>
						<AiFillCloseCircle onClick={() => handleDeleteItem(item.id)} className='btn-delete' style={{marginLeft: 'auto'}} />
					 </li>)
				)}
			</ul>
		</>
	)
}

export default ListItem;