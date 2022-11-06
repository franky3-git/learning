import React from 'react';
import { AiFillCloseCircle } from "react-icons/ai";

const LineItem = ({id, item, checked , handleChangeCheckedItem, handleDeleteItem}) => {
  return (
    <li className='item'>
        <input onChange={() => handleChangeCheckedItem(id)} type='checkbox' checked={checked} />
        <label 
        style={{textDecoration: item.checked ? 'line-through' : 'none'}}
        onDoubleClick={() => handleChangeCheckedItem(id)}
        >{item}</label>
        <AiFillCloseCircle aria-label={`Delete ${item}`} onClick={() => handleDeleteItem(id)} className='btn-delete' style={{marginLeft: 'auto'}} />
    </li>
  )
}

export default LineItem