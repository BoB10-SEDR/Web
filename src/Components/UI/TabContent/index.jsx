import store from '@Stores/deviceDetail';
import { BiCircle } from 'react-icons/bi';
import { IoIosClose } from 'react-icons/io';

const TabContent = props => {
    const { tabIndex, Icon = BiCircle, name = 'dummy' } = props;
    return (
        <>
            <div className='icon'>
                <Icon size='25' />
            </div>
            <div className='title'>{name}</div>
            <div className='cancelButton' onClick={() => store.closeTab(tabIndex)}>
                <IoIosClose size='25' />
            </div>
        </>
    );
};

export default TabContent;