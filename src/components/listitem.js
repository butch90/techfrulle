import React from 'react';
import PropTypes from 'prop-types';
import ThumbsDown from 'react-icons/lib/fa/thumbs-o-up';
import {TweenMax} from "gsap";
//////////////////////////////////////////////////
///////////// Dependencies

import {style} from '../style.js';
//////////////////////////////////////////////////
///////////// Styling for the component

/* Class ListItem, component for each element in the list
 * PropTypes: array equals a array
 * 			  deleteItem equals a function
 *
 * Exported as ListItem
 *
 */
class ListItem extends React.Component {

	onMouseOver (i) {
		TweenMax.to(document.getElementById(i), 1, {transform: 'rotate(-180deg)', color: 'red'});
    }

    onMouseOut (i) {
    	TweenMax.to(document.getElementById(i), 1, {transform: 'rotate(0deg)', color: 'black'});
    }

	render () {

		const content = this.props.array.map((item, i) => {
			return <div><li style={style.li}>{item} <ThumbsDown onMouseOver={this.onMouseOver.bind(this, i)} onMouseOut={this.onMouseOut.bind(this, i)} id={i} style={style.icon} key={i} onClick={this.props.deleteItem.bind(this, i)}/></li></div>;
		});
		return (
			<div>
				<ul>
					{content}
				</ul>
			</div>
		)
	}
}

ListItem.propTypes = {
	array: PropTypes.array.isRequired,
	deleteItem: PropTypes.func.isRequired
}

export default ListItem
