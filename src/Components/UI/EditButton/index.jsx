import { FiEdit } from 'react-icons/fi';
import Button from '@Components/UI/Button';

const EditButton = props => {
    const { onClick = () => {} } = props;

    return (
        <Button className='editButton' onClick={onClick} backgroundColor='transparent'>
            <FiEdit />
        </Button>
    );
};

export default EditButton;
