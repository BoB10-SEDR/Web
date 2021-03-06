import { TabPanel } from 'react-tabs';
import Card from '@Components/Card';

const CustomTabPanel = props => {
    const { children, ...panelProps } = props;
    return <TabPanel {...panelProps}>{children}</TabPanel>;
};

CustomTabPanel.tabsRole = 'TabPanel';

export default CustomTabPanel;
