import { useEffect, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import '@Styles/deviceNav.css';
import envStore from '@Stores/envInfo';
import tabStore from '@Stores/deviceTabs';
import { IoIosArrowBack } from 'react-icons/io';
import ButtonGroup from '@Components/ButtonGroup';
import Button from '@Components/UI/Button';

const DeviceNav = props => {
    const history = useHistory();

    const handleClick = () => {
        history.push('/Resources/Devices');
    };

    const buttons = [];

    useMemo(() => {
        envStore.selectedEnv.devices.map(device => {
            const button = { children: undefined, onClick: null };
            button.children = <device.Icon size='20' />;
            button.onClick = () => tabStore.openTab(device);
            buttons.push(button);
        });
    }, [envStore.selectedEnv]);

    return (
        <div id='deviceNav'>
            <div className='deviceNavItemsWrapper'>
                <div className='deviceNavItems'>
                    <div className='deviceNavGroup'>
                        <ButtonGroup isVertical={true} buttons={buttons} />
                    </div>
                </div>
            </div>
            <div className='deviceNavToggle'>
                <Button isCircle={true} onClick={handleClick}>
                    <IoIosArrowBack color='#fff' />
                </Button>
            </div>
        </div>
    );
};

export default DeviceNav;
