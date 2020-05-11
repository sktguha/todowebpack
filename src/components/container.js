import React from 'react';

import { IconSettings, Tabs, TabsPanel } from '@salesforce/design-system-react';

class Example extends React.Component {
	// static displayName = 'TabsExample';

	render() {
		return (
			<IconSettings iconPath="/assets/icons">
				<Tabs variant="scoped" id="tabs-example-scoped">
					<TabsPanel label="Item One">Item One Content</TabsPanel>
					<TabsPanel label="Item Two">Item Two Content</TabsPanel>
					<TabsPanel label="Item Three">Item Three Content</TabsPanel>
					<TabsPanel disabled label="Disabled">
						Disabled Content
					</TabsPanel>
				</Tabs>
			</IconSettings>
		);
	}
}
export default Example;
