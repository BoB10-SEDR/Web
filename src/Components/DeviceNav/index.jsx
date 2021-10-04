import '@Styles/deviceNav.css';
import { IoIosArrowBack } from 'react-icons/io';
import ButtonGroup from '@Components/ButtonGroup';
import Button from '@Components/UI/Button';
import IconButtonListDummy from '@Dummy/IconButtonListDummy';

const DeviceNav = () => {
    const handleArrowClick = () => {};

    return (
        <div id='deviceNav'>
            <div className='deviceNavItems'>
                <div className='deviceNavGroup'>
                    <ButtonGroup isVertical={true} buttons={IconButtonListDummy} />
                </div>
                <div className='deviceNavToggle'>
                    <Button isCircle={true} backgroundColor='#ABB2FC' onClick={handleArrowClick}>
                        <IoIosArrowBack color='#fff' />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default DeviceNav;
