import React from 'react';

import {IconSettings} from '@salesforce/design-system-react';
import {Tabs} from '@salesforce/design-system-react'; 
import {TabsPanel} from '@salesforce/design-system-react';
import { withRouter } from 'react-router-dom';

class Example extends React.Component {
	// static displayName = 'TabsExample';

	render() {
		let str = JSON.stringify(this.props)
		let path = this.props.location.pathname;
		let selectedIndex = ["/all","/todo","/completed"].indexOf(path);
		if(selectedIndex === -1){
			selectedIndex = 0;
		}
		return (	
			<>
			<span>{str}{selectedIndex}{this.props.location.pathname}</span>
			
			<IconSettings  iconPath="/assets/icons">
				<Tabs selectedIndex={selectedIndex} onSelect={()=>{ console.log(this)}} variant="scoped" id="tabs-example-scoped">
					<TabsPanel label="All">All</TabsPanel>
					<TabsPanel label="Todo">Todo</TabsPanel>
					<TabsPanel label="Completed">Completed</TabsPanel>
				</Tabs>
			</IconSettings>
			</>
		);
	}
}
export default withRouter(Example);
