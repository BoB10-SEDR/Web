import { TabList } from 'react-tabs';

const CustomTabList = props => {
    const { children } = props;

    return <TabList className='tabList'>{children}</TabList>;
};

CustomTabList.tabsRole = 'TabList';

export default CustomTabList;
