import React, { useState} from 'react';

// Definiendo estilos en constantes

// estilos para usuario logueado
const loggedStyle = {
	color: 'white',
};

// estilos para usuario no logueado
const unLoggedStyle = {
	color: 'tomato',
	fontWeight: 'bold',
}

const Greetingstyled = (props) => {

	// generamos un estado para el componente
	// y así controlar si el usuario está logueado
	const [logged, setLogged] = useState(false)

	return (
		<div style={logged ? loggedStyle : unLoggedStyle}>
			{logged ?
				(<p>Hola, {props.name}</p>)
				:
				(<p>Please login</p>)}
			
			<button onClick={() => {
				console.log('Botón pulsado');
				setLogged(!logged);
			}}>
				{ logged ? 'Logout' : 'Login'}
			</button>
		</div>
	);
}

export default Greetingstyled;
