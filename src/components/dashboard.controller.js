import React from 'react';
import ListItem from './listitem.js';
import AddListItem from './addlistitem.js';
//////////////////////////////////////////////////
///////////// Dependencies

//////////////////////////////////////////////////
///////////// Styling for the component

/* Class DashboardController, handels the ListItem and AddListItem
 * PropTypes: None
 * 
 * Functions: validateMsg
 *			  clearList
 *			  addToList
 *			  removeItem
 *			  componentWillMount
 *
 * Exported as DashboardController
 *
 */
class DashboardController extends React.Component {
	constructor () {
		super();
		this.state = {
			listObj: []
		}
		this.addToList = this.addToList.bind(this);
		this.clearList = this.clearList.bind(this);
		this.removeItem = this.removeItem.bind(this);
	}

	clearList () {
		localStorage.clear();
		this.setState({
			listObj: []
		});
	}

	validateMsg (msg) {
		if (msg && msg !== '') {
			return msg;
		}
		return false;
	}

	addToList (val) {
		if (this.validateMsg(val)) {
			let temp = [...this.state.listObj, val];
			this.setState({
				listObj: temp
			});
			localStorage.setItem('mylist', temp); 
		}
	}

	removeItem (index) {
		let listOfItems = this.state.listObj;
		listOfItems.splice(index, 1);
		this.setState({
			listObj: listOfItems
		});
		localStorage.setItem('mylist', listOfItems);
	}

	componentWillMount () {
		let items = localStorage.getItem('mylist');
		if (items) {
			let arr = items.split(",");
			let array = [];
			arr.map(i => {
				return array.push(i);
			});
			this.setState({
				listObj: array
			});
		}
	}

	render () {
		return (
			<div>
				<ListItem array={this.state.listObj} deleteItem={this.removeItem}/>
				<AddListItem addToList={this.addToList} clearCache={this.clearList}/>
			</div>
		)
	}
}

export default DashboardController