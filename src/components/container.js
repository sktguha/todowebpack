import React from 'react';
import ReactDOM from "react-dom";
import {IconSettings} from '@salesforce/design-system-react';
import {Tabs} from '@salesforce/design-system-react'; 
import {TabsPanel} from '@salesforce/design-system-react';
import { withRouter } from 'react-router-dom';

class Example extends React.Component {
	// static displayName = 'TabsExample';
	constructor(props){
		super(props);
		this.pathList = ["/all","/todo","/completed"];
		this.state = {
			sI : 1
		}
	}
	onSelect(){
		console.log(this.refs.tabs.props);
	}
	componentDidMount(){
		["all","todo","completed"].forEach( 
			(ref) => { console.log(ReactDOM.findDOMNode(this.refs[ref]))});
		console.log(ReactDOM.findDOMNode(this.refs["tabs"]))
		let str = JSON.stringify(this.props)
		let path = this.props.location.pathname;
		let selectedIndex = this.pathList.indexOf(path);
		if(selectedIndex === -1){
			selectedIndex = 0;
		}
		this.setState({
			sI: selectedIndex
		})
		// setTimeout(()=>{ this.setState({
		// 		sI: null
		// 	})
		// },3000);
	}
	render() {
		
		return (	
			<IconSettings iconPath="/assets/icons">
				<Tabs ref="tabs" defaultSelectedIndex={this.state.sI} id="tabs-example-scoped">
					<TabsPanel ref="all" label="Item One">Item One Content</TabsPanel>
					<TabsPanel ref="todo" label="Item Two">Item Two Content</TabsPanel>
					<TabsPanel ref="completed" label="Item Three">Item Three Content</TabsPanel>
					<TabsPanel disabled label="Disabled">
						Disabled Content
					</TabsPanel>
				</Tabs>
			</IconSettings>
		);
	};
}
export default withRouter(Example);
