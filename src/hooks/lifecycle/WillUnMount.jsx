/**
 * Ejemplo de uso del metodo componentWillUnmount para el componente clase
 * y ejemplo de hook para el componente funcional
 */

import React, { useEffect } from 'react';

// eslint-disable-next-line no-undef
export class Willunmount extends Component {

	componentWillMount() {
		console.log('Comportamiento antes de que el componente desaparezca');
	}

	render() {
		return (
			<div>
				<h1>WillUnmount</h1>
			</div>
		);
	}
}


export const WillunmountHook = () => {

	useEffect(() => {
		// aqui no ponemos nada, lo ponemos directamente en el return
		return () => {
			console.log('Comportamiento antes de que el componente desaparezca');
		};
	}, []); //dejamos los corchetes vacíos para que sólo se ejecute una vez

	return (
		<div>
			<h1>WillUnmount</h1>
		</div>
	);
}


