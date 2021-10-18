import { Tab } from 'react-tabs';
import { Link } from 'react-router-dom';

const SideTab = props => {
    const { children, ...tabProps } = props;

    return (
        <Tab className='sideTab' {...tabProps}>
            {children}
        </Tab>
    );
};

SideTab.tabsRole = 'Tab';

export default SideTab;
