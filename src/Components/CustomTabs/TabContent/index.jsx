import store from '@Stores/deviceTabs';
import { BiCircle } from 'react-icons/bi';
import { IoIosClose } from 'react-icons/io';

const TabContent = props => {
    const { tabIndex, Icon, title } = props;
    return (
        <>
            <ShortCutIcon Icon={Icon} />
            <Title title={title} />
            <CancelButton tabIndex={tabIndex} />
        </>
    );
};

const ShortCutIcon = props => {
    const { Icon = BiCircle } = props;

    return (
        <div className='icon'>
            <Icon size='20' />
        </div>
    );
};

const Title = props => {
    const { title = 'dummy' } = props;

    return <div className='title'>{title}</div>;
};

const CancelButton = props => {
    const { tabIndex } = props;

    const handleClick = event => {
        store.closeTab(tabIndex);
        event.stopPropagation();
    };

    return (
        <div className='cancelButton' onClick={event => handleClick(event)}>
            <IoIosClose size='20' />
        </div>
    );
};

export default TabContent;
