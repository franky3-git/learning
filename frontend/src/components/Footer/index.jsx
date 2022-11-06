import React from 'react';

const Footer = ({items}) => {
	const today = new Date();
	
	return (
		<footer>
			<div style={{textAlign: "center", padding: '10px'}}>Copyright &copy; {today.getFullYear()} : {items.length} {items.length === 1 ? 'item' : 'items'} in the list</div>
		</footer>
	)
}

export default Footer;