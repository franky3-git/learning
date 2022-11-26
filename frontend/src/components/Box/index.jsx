import React from 'react';

const Box = ({backgroundColor}) => {
//	const background = backgroundColor.color || 'white'
//	console.log(background)
	
	return (
		<div className="box" style={{width: 300, height: 300, border: 'solid 1px black', marginBottom: 20, backgroundColor: backgroundColor.color || 'white'}} >
			
		</div>
	)
}

export default Box;