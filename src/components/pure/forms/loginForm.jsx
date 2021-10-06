/**
 * Componente que va a contener un formulario para autenticación de usuarios
 * ?rfc
 */

import React, {useState} from 'react';

const Loginform = () => {

	const initialCredentials = [
		{
			user: '',
			password: '',
		}
	]

	// definimos el estado inicial
	const [credentials, setCredentials] = useState(initialCredentials);

	return (
		<div>
			
		</div>
	);
}

export default Loginform;
