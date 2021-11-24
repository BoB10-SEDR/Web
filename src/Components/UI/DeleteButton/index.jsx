import { BiTrash } from 'react-icons/bi';
import Button from '@Components/UI/Button';

const deleteButton = props => {
    const { onClick = () => {} } = props;

    return (
        <Button className='deleteButton' onClick={onClick} backgroundColor='transparent'>
            <BiTrash size='24' />
        </Button>
    );
};

export default deleteButton;
