import { TabPanel } from 'react-tabs';
import Details from '@Pages/Logs/Details';
import Card from '@Components/Card';

const CustomTabPanel = props => {
    const { title = 'dummy', ...panelProps } = props;
    return (
        <TabPanel {...panelProps}>
            <Card>
                <Details title={title} />
            </Card>
        </TabPanel>
    );
};

CustomTabPanel.tabsRole = 'TabPanel';

export default CustomTabPanel;
