import React from 'react';

import {DataTable} from '@salesforce/design-system-react'
import {DataTableColumn} from '@salesforce/design-system-react'
import {DataTableCell} from '@salesforce/design-system-react'
import {IconSettings} from '@salesforce/design-system-react'
import { connect } from "react-redux";

const CustomDataTableCell = ({ children, ...props }) => {
	console.log(children, props);
	return <DataTableCell {...props}>
		<div><input 
			type="checkbox" defaultChecked = {children}
			id={props.item.id}
			onChange={(event) => {
				console.log("toggle for", event.target.id);
				props.toggleTodo(event.target.id);
			}}
		/>
			{children}
		</div>
	</DataTableCell>
};
CustomDataTableCell.displayName = DataTableCell.displayName;

const columns = [
	<DataTableColumn key="stage" label="id" property="id" />,

	<DataTableColumn key="confidence" label="done" property="done">
		<CustomDataTableCell />
	</DataTableColumn>
	,

	<DataTableColumn key="amount" label="text" property="text" />,

	// <DataTableColumn key="contact" label="Contact" property="contact">
	// 	<CustomDataTableCell />
	// </DataTableColumn>,
];

class Example extends React.Component {
	render() {
		return (
			<IconSettings iconPath="/assets/icons">
				<div style={{ overflow: 'auto' }}>
					{
						this.props.items.length >0 ? <DataTable toggleTodo = {this.props.toggleTodo} items={this.props.items} id="DataTableExample-1-default">
							{columns}
						</DataTable> :"No todos in "+this.props.filter+" category. yay"
					}
				</div>
			</IconSettings>
		);
	}
}

function getItemsByFilter(state, filter = "all"){
	if(filter === "all"){
		return state;
	} else if(filter === "completed"){
		return state.filter(item => item.done)
	} else if(filter === "todo"){
		return state.filter(item => !item.done)
	}
}

export default connect((state,ownProps) => ({
	items : getItemsByFilter(state, ownProps.filter)
}), (dispatch) => ({
	toggleTodo : id => dispatch({
		type: "TOGGLE_TODO",
		payload : {
			id
		}
	})
}))(Example);

