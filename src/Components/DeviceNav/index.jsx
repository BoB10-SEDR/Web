import '@Styles/deviceNav.css';
import { IoIosArrowBack } from 'react-icons/io';
import ButtonGroup from '@Components/ButtonGroup';
import Button from '@Components/UI/Button';
import IconButtonListDummy from '@Dummy/IconButtonListDummy';

const DeviceNav = props => {
    const { items = IconButtonListDummy, onArrowClick = () => {} } = props;
    return (
        <div id='deviceNav'>
            <div className='deviceNavItems'>
                <div className='deviceNavGroup'>
                    <ButtonGroup isVertical={true} buttons={items} />
                </div>
                <div className='deviceNavToggle'>
                    <Button isCircle={true} onClick={onArrowClick}>
                        <IoIosArrowBack color='#fff' />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default DeviceNav;
