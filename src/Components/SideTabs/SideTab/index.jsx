import { Tab } from 'react-tabs';
import { Link } from 'react-router-dom';

const SideTab = props => {
    const { children, ...tabProps } = props;

    return (
        <Link to='/Logs/Devices/Tabs'>
            <Tab className='sideTab' {...tabProps}>
                {children}
            </Tab>
        </Link>
    );
};

SideTab.tabsRole = 'Tab';

export default SideTab;
