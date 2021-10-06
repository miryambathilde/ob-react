/**
 * Ejemplo de componente de tipo clase que dispone de los
 * métodos de ciclo de vida de los componentes
 * 
 * ? rcfc: reactClassComponentWithMethods
 */

import React, { Component } from 'react';
//import PropTypes from 'prop-types';

class LifeCycleExample extends Component {
	constructor(props) {
		super(props);
		console.log('constructor: Cuando se instancia el componente');
	}

	componentWillMount() {
		console.log('WillMount: Antes del montaje del componente');
	}

	componentDidMount() {
		console.log('DidMount: Justo al acabar el montaje del componente, antes de renderizarlo');
	}

	componentWillReceiveProps(nextProps) {
		console.log('WillReceiveProp: Si va a recibir nuevas props');
	}

	shouldComponentUpdate(nextProps, nextState) {
		/**
		 * Sirve para controlar si el componente debe o no actualizarse
		 */

		// return true o false
	}

	componentWillUpdate(nextProps, nextState) {
		console.log('WillUpdate: Justo antes de actualizarse');
	}

	componentDidUpdate(prevProps, prevState) {
		console.log('DidUpdate: Justo después de actualizarse');
	}

	componentWillUnmount() {
		console.log('WillUnmount: Justo antes de desaparecer el componente');
	}

	render() {
		return (
			<div>

			</div>
		);
	}
}

LifeCycleExample.propTypes = {

};

export default LifeCycleExample;