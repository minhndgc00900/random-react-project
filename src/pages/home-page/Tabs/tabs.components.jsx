import { AppBar, Tab, Tabs } from '@material-ui/core'
import React, { useContext, useState } from 'react'
import HomeContext from '../../../contexts/home-context'
import TabContent from './tab-panel/tab-content/tab-content.component'
import TabPanel from './tab-panel/tab-panel.component'
import './tabs.styles.scss'

const a11yProps = (index) => ({
	id: `simple-tab-${index}`,
	'aria-controls': `simple-tabpanel-${index}`,
})

function TabsComponent() {
	const [value, setValue] = useState(0)
	const useHomeContext = useContext(HomeContext)
	const { newsState } = useHomeContext

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
					{newsState.map((it, index) => {
						return <Tab label={it.desc} {...a11yProps(index)} />
					})}
				</Tabs>
			</AppBar>
			{newsState.map((it, index) => {
				return (
					<TabPanel value={value} index={index}>
						<TabContent content={it} />
					</TabPanel>
				)
			})}
		</div>
	)
}

export default TabsComponent
