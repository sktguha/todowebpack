import React from 'react';
import ReactDOM from "react-dom";
import {IconSettings} from '@salesforce/design-system-react';
import {Tabs} from '@salesforce/design-system-react'; 
import {TabsPanel} from '@salesforce/design-system-react';
import { withRouter } from 'react-router-dom';
import Table from "./Table";

class Example extends React.Component {
	// static displayName = 'TabsExample';
	constructor(props){
		super(props);
		this.pathList = ["/all","/todo","/completed"];
		let path = this.props.location.pathname;
		let selectedIndex = this.pathList.indexOf(path);
		if(selectedIndex === -1){
			selectedIndex = 0;
		}
		console.log(selectedIndex);
		this.state = {
			sI : selectedIndex
		}
	}
	onSelect(){
		setTimeout(()=>{ 
			let dom = ReactDOM.findDOMNode(this.refs["tabs"]);
			let activeId = [...dom.getElementsByTagName("a")].findIndex(a=>a.classList.contains("slds-active"))
			console.log(activeId);
			this.props.history.push(this.pathList[activeId]);
		},500);
	}
	render() {
		
		return (	
			<IconSettings iconPath="/assets/icons">
				<Tabs ref="tabs" onSelect={this.onSelect.bind(this)} defaultSelectedIndex={this.state.sI} id="tabs-example-scoped">
					<TabsPanel ref="all" label="All">
					<Table />
					</TabsPanel>
					<TabsPanel ref="todo" label="Todo">Item Two Content</TabsPanel>
					<TabsPanel ref="completed" label="Completed">Item Three Content</TabsPanel>
					<TabsPanel disabled label="Disabled">
						Disabled Content
					</TabsPanel>
				</Tabs>
			</IconSettings>
		);
	};
}
export default withRouter(Example);
