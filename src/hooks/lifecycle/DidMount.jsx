/**
 * Ejemplo de uso del método 
 * del ciclo de vida en componente CLASE y el hook de ciclo de vida
 * en componente funcional
 * 
 * ?rcc : react class component (jsx)
 * ?rfc: (jsx)
 */

// rcc : de clase
import React, { Component, useEffect } from 'react';

export class Didmount extends Component {

	// componentDidMount
	componentDidMount() {
		console.log('Comportamiento antes de que el componente sea añadido al DOM (de que renderice');
	}

	render() {
		return (
			<div>
				<h1>Didmount</h1>
			</div>
		);
	}
}

// rfc: funcional - HOOK USE EFFECT

export const DidmountHook = () => {

	useEffect(() => {
		console.log('Comportamiento antes de que el componente sea añadido al DOM (de que renderice');
	}, []) //si dejamos los corchetes vacíos solo renderiza una vez

	return (
		<div>
			<h1>Didmount</h1>
		</div>
	);
}


