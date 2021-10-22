import Button from '@Components/UI/Button';
import { RiRadioButtonLine } from 'react-icons/ri';

const DeviceBubble = props => {
    const { isActive } = props;

    return (
        <Button>
            <RiRadioButtonLine size='20' color={isActive ? 'red' : 'gray'} />
        </Button>
    );
};

export default DeviceBubble;
