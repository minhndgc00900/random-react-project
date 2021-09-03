import { AppBar, Tab, Tabs } from '@material-ui/core'
import React, { useState } from 'react'
import TabPanel from './tab-panel/tab-panel.component'
import './tabs.styles.scss'

const a11yProps = (index) => ({
	id: `simple-tab-${index}`,
	'aria-controls': `simple-tabpanel-${index}`,
})

function TabsComponent() {
	const [value, setValue] = useState(0)

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	return (
		<div className='root'>
			<AppBar position='static'>
				<Tabs
					value={value}
					onChange={handleChange}
					aria-label='simple tabs example'
				>
					<Tab label='Item One' {...a11yProps(0)} />
					<Tab label='Item Two' {...a11yProps(1)} />
					<Tab label='Item Three' {...a11yProps(2)} />
				</Tabs>
			</AppBar>
			<TabPanel value={value} index={0}>
				Item One
			</TabPanel>
			<TabPanel value={value} index={1}>
				Item Two
			</TabPanel>
			<TabPanel value={value} index={2}>
				Item Three
			</TabPanel>
		</div>
	)
}

export default TabsComponent
