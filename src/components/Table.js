import React from 'react';

import {DataTable} from '@salesforce/design-system-react'
import {DataTableColumn} from '@salesforce/design-system-react'
import {DataTableCell} from '@salesforce/design-system-react'
import {IconSettings} from '@salesforce/design-system-react'

const CustomDataTableCell = ({ children, ...props }) => (
	<DataTableCell {...props}>
		<a
			href="javascript:void(0);"
			onClick={(event) => {
				event.preventDefault();
			}}
		>
			{children}
		</a>
	</DataTableCell>
);
CustomDataTableCell.displayName = DataTableCell.displayName;

const columns = [
	<DataTableColumn
		key="opportunity"
		label="Opportunity Name"
		property="opportunityName"
	>
		<CustomDataTableCell />
	</DataTableColumn>,

	<DataTableColumn
		key="account-name"
		label="Account Name"
		property="accountName"
	/>,

	<DataTableColumn key="close-date" label="Close Date" property="closeDate" />,

	<DataTableColumn key="stage" label="Stage" property="stage" />,

	<DataTableColumn key="confidence" label="Confidence" property="confidence" />,

	<DataTableColumn key="amount" label="Amount" property="amount" />,

	<DataTableColumn key="contact" label="Contact" property="contact">
		<CustomDataTableCell />
	</DataTableColumn>,
];

class Example extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			items: [
				{
					id: '8IKZHZZV80',
					opportunityName: 'Cloudhub',
					accountName: 'Cloudhub',
					closeDate: '4/14/2015',
					stage: 'Prospecting',
					confidence: '20%',
					amount: '$25k',
					contact: 'jrogers@cloudhub.com',
				},
				{
					id: '5GJOOOPWU7',
					opportunityName: 'Cloudhub + Anypoint Connectors',
					accountName: 'Cloudhub',
					closeDate: '4/14/2015',
					stage: 'Prospecting',
					confidence: '20%',
					amount: '$25k',
					contact: 'jrogers@cloudhub.com',
				},
				{
					id: '8IKZHZZV81',
					opportunityName: 'Cloudhub',
					accountName: 'Cloudhub',
					closeDate: '4/14/2015',
					stage: 'Prospecting',
					confidence: '20%',
					amount: '$25k',
					contact: 'jrogers@cloudhub.com',
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

