import '@Styles/ui.css';
import { BiDotsHorizontalRounded } from 'react-icons/bi';

const Detail = props => {
    const { onClick = () => {} } = props;

    return (
        <div className='detail' onClick={onClick}>
            <BiDotsHorizontalRounded />
        </div>
    );
};

export default Detail;
