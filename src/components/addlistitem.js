import React from 'react';
import PropTypes from 'prop-types';
//////////////////////////////////////////////////
///////////// Dependencies

import {style} from '../style.js';
//////////////////////////////////////////////////
///////////// Styling for the component

/* Class AddListItem, to handle the adding of tasks
 * PropTypes: addToList equals a function
 * 			  clearCache equals a function
 *
 * Exported as AddListItem
 *
 */
class AddListItem extends React.Component {
	constructor () {
		super();
		this.state = {
			addButton: false,
			clearButton: false
		}
	}

	submit () {
		this.props.addToList(this.refs.input.value);
		this.refs.input.value = '';
	}

	onMouseOver (turnery) {
		turnery === 1 ? this.setState({ addButton:true }) : this.setState({ clearButton:true });
    }

    onMouseOut (turnery) {
    	turnery === 1 ? this.setState({ addButton:false }) : this.setState({ clearButton:false });
    }

	render () {

		return (
			<div style={style.div}>
				<input style={style.input} ref="input" type="text" defaultValue=""/>
				<br/>
				<button onMouseOver={this.onMouseOver.bind(this,0)} onMouseOut={this.onMouseOut.bind(this,0)} style={this.state.clearButton ? Object.assign({},style.clear, {color: '#fff', background: '#D98880'}) : Object.assign({},style.clear, {color: '#fff', background: 'none'})} onClick={this.props.clearCache}>Clear</button>

				<button onMouseOver={this.onMouseOver.bind(this,1)} onMouseOut={this.onMouseOut.bind(this,1)} style={this.state.addButton ? Object.assign({},style.button, {color: '#5DADE2', background: '#fff'}) : Object.assign({},style.button, {color: '#fff', background: 'none'})} onClick={this.submit.bind(this)}>Add task</button>
			</div>
		)
	}
}

AddListItem.propTypes = {
	addToList: PropTypes.func.isRequired,
	clearCache: PropTypes.func.isRequired
}

export default AddListItem
