/**
 * Ejemplo de uso de:
 * useState()
 * useContext() - para trabajar con datos y pasarlo a componente de nivel inferior
 */

import React, {useState, useContext} from 'react';

/**
 * 
 * @returns Componente1
 * Dispone de un contexto que va a tener un valor que recibe desde el padre
 */

// Creamos un contexto en el componente hijo
// Inicializamos un estado vacío que va a rellenarse con los datos del padre
const miContexto = React.createContext(null)

const Componente1 = () => {

	// usamos un contexto en el componente padre
	const state = useContext(miContexto);

	// el componente padre me pasará el valor del token
	return (
		<div>
			<h1>
				El token es: {state.token}
			</h1>
			{/* Pintamos el componente 2 */}
			<Componente2></Componente2>
		</div>
	);
}

const Componente2 = () => {
	
	// usamos un contexto en el componente padre
	const state = useContext(miContexto);

	return (
		<div>
			<h2>La sesión es: {state.sesion}</h2>
		</div>
	);
}

// ahora tenemos que crear el contexto, para ello creamos un componente
export default function MiComponenteConContexto() {

	// declaramos un estado inicial
	const estadoInicial = {
		token: '1234567',
		sesion: 1
	}

	// ahora creamos el estado de este componente useState()
	const [sessionData, setSessionData] = useState(estadoInicial)

	// función para añadir nuevos valores
	function actualizarSesion() {
		setSessionData(
			{
				token: 'JWT123456789',
				sesion: sessionData.sesion + 1
			}
		);
	}

	// Ahora tenemos que proporcionar un contexto a los datos
	// esto es para que los datos sean accesible a todos los componentes que estén por aquí abajo
	// le pasamos los datos de setSessionData() al contexto como un Provider
	return (
		<miContexto.Provider value={sessionData} >
			{/* Todo lo que está aqui dentro puede leer los datos de sessionData */}
			{/* Además si se actualiza, los componentes de aquí, también lo actualizan */}
			<h1>**** Ejemplo de useState() y useContext() ****</h1>
			<Componente1></Componente1>
			<button onClick={actualizarSesion}>Actualizar sesión</button>
		</miContexto.Provider>
	)
}


