import '@Styles/deviceNav.css';
import { IoIosArrowBack } from 'react-icons/io';
import IconButtonGroup from '@Components/IconButtonGroup';
import IconButton from '@Components/UI/IconButton';
import IconButtonListDummy from '@Dummy/IconButtonListDummy';

const DeviceNav = () => {
    const handleArrowClick = () => {};

    return (
        <div id='deviceNav'>
            <div className='deviceNavItems'>
                <div className='deviceNavGroup'>
                    <IconButtonGroup isVertical={true} buttons={IconButtonListDummy} />
                </div>
                <div className='deviceNavToggle'>
                    <IconButton
                        isCircle={true}
                        backgroundColor='#ABB2FC'
                        Icon={IoIosArrowBack}
                        onClick={handleArrowClick}
                    />
                </div>
            </div>
        </div>
    );
};

export default DeviceNav;
