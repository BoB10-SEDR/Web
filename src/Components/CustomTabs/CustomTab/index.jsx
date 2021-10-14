import { BiCircle } from 'react-icons/bi';
import { IoIosClose } from 'react-icons/io';
import { Tab } from 'react-tabs';
import store from '@Stores/deviceDetail';
import { observer } from 'mobx-react';

const CustomTab = props => {
    const { Icon = BiCircle, children, tabIndex, ...tabProps } = props;

    return (
        <Tab className='tab' tabIndex={tabIndex} {...tabProps}>
            <div className='icon'>
                <Icon size='25' />
            </div>
            <div className='title'>{children}</div>
            <div className='cancelButton' onClick={() => store.closeTab(tabIndex)}>
                <IoIosClose size='25' />
            </div>
        </Tab>
    );
};

CustomTab.tabsRole = 'Tab';

export default observer(CustomTab);
