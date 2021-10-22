import '@Styles/deviceBubble.css';
import { RiRadioButtonLine } from 'react-icons/ri';

const DeviceBubble = props => {
    const { isActive } = props;

    const handleClick = () => {
        return null;
    };

    return (
        <div className='deviceBubble' onClick={handleClick}>
            <RiRadioButtonLine size='20' color={isActive ? 'red' : 'gray'} />
        </div>
    );
};

export default DeviceBubble;
