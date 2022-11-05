import React from 'react';

const Footer = () => {
	const today = new Date();
	
	return (
		<footer>
			<div style={{textAlign: "center", padding: '10px'}}>Copyright &copy; {today.getFullYear()}</div>
		</footer>
	)
}

export default Footer;