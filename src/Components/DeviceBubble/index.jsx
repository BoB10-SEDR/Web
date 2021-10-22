import '@Styles/deviceBubble.css';
import { useHistory } from 'react-router-dom';
import store from '@Stores/deviceTabs';
import dummyBubble from '@Dummy/deviceBubble';

const DeviceBubble = props => {
    const { active, tabInfo = dummyBubble } = props;
    const history = useHistory();

    const handleClick = () => {
        store.openTab(tabInfo);
        history.push('/Logs/Devices/Tabs');
    };

    return (
        <div className='deviceBubble'>
            <div className={`bubble ${active ? 'active' : ''}`} onClick={handleClick}>
                <div className='inside'></div>
            </div>
            <span>{tabInfo.deviceName}</span>
        </div>
    );
};

export default DeviceBubble;
