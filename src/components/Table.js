import React from 'react';

import {DataTable} from '@salesforce/design-system-react'
import {DataTableColumn} from '@salesforce/design-system-react'
import {DataTableCell} from '@salesforce/design-system-react'
import {IconSettings} from '@salesforce/design-system-react'

const CustomDataTableCell = ({ children, ...props }) => {
	console.log(children, props);
	return <DataTableCell {...props}>
		<div><input 
			type="checkbox" defaultChecked = {children}
			id={props.item.id}
			onChange={(event) => {
				console.log("toggle for", event.target.id);
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
	constructor(props){
		super(props);
		this.state = {
			items: [
				{
					id: '8IKZHZZV80',
					text : "hi",
					done: true
				},
				{
					id: '5GJOOOPWU7',
					text : "let's go",
					done: false
				},
				{
					id: '8IKZHZZV81',
					text : "test todo",
					done: false
				},
			],
		};
	}
	render() {
		return (
			<IconSettings iconPath="/assets/icons">
				<div style={{ overflow: 'auto' }}>
					<DataTable items={this.state.items} id="DataTableExample-1-default">
						{columns}
					</DataTable>
				</div>
			</IconSettings>
		);
	}
}
export default Example;

