import React, { useState } from 'react';

const Registerform = () => {

	const initialData = [
		{
			user: '',
			name: '',
			email: '',
			password: '',
		}
	];

	// definimos el estado inicial
	const [data, setData] = useState(initialData);
	return (
		<div>
			
		</div>
	);
}

export default Registerform;
