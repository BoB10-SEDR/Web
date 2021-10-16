import { Tab } from 'react-tabs';

const CustomTab = props => {
    const { children, ...tabProps } = props;

    return (
        <Tab className='tab' {...tabProps}>
            {children}
        </Tab>
    );
};

CustomTab.tabsRole = 'Tab';

export default CustomTab;
