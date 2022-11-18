import React from 'react';
import './modal.css';


const Modal = ({message, closeModal}) => {

    setTimeout(() => {
        closeModal()
    }, 2000)
	return (
		<div className='custommodal'>
			<span>{message}</span>
		</div>
	)
}

export default Modal