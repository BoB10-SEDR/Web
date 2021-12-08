import '@Styles/deviceBubble.css';
import { useHistory } from 'react-router-dom';
import store from '@Stores/deviceTabs';
import dummyBubble from '@Dummy/deviceBubble';

const DeviceBubble = props => {
    const { active, tabInfo = dummyBubble, styles = {} } = props;
    const history = useHistory();

    const handleClick = () => {
        store.openTab(tabInfo);
        history.push('/Resources/Devices/Tabs');
    };

    return (
        <div className='deviceBubble' style={styles}>
            <div className={`bubble ${active ? 'active' : ''}`} onClick={handleClick}>
                <div className='inside'></div>
            </div>
            <div className='name'>{tabInfo.deviceName}</div>
        </div>
    );
};

export default DeviceBubble;
