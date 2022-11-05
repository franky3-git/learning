import React, {useState} from 'react';
import { AiFillCloseCircle } from "react-icons/ai";

//import css
import './content.css';


const Content = ({items, handleDeleteItem, handleChangeCheckedItem}) => {
	
	return (
		<div className='content'>
			<h1>Hello Frank!</h1>
			<ul className="list-item">
				{items.length === 0 ? <p style={{color: 'red'}}>The list is empty</p> : items.map(item => (
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
		</div>
	)
}

export default Content;