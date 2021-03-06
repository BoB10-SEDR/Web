import '@Styles/ui.css';
import { HiArrowNarrowUp, HiArrowNarrowDown } from 'react-icons/hi';

const UpDown = props => {
    const { isDecreasing, amount } = props;

    let color = '#727CF5';
    let Icon = HiArrowNarrowUp;

    if (isDecreasing) {
        color = '#F66C6C';
        Icon = HiArrowNarrowDown;
    }

    return (
        <div className='upDown'>
            <Icon color={color} />
            <span style={{ color }}>{amount}</span>
        </div>
    );
};

export default UpDown;
