import React from 'react';

const Header = () => {
	const title = 'Grocery list';
	
	return (
		<header>
			<div style={{fontSize: '2.2rem', fontWeight: 600, textAlign: 'center', padding: '20px', backgroundColor: 'dodgerblue', color: 'white'}} className="title">{title}</div>
		</header>
	)
}

export default Header;