import { FiEdit } from 'react-icons/fi';
import Button from '@Components/UI/Button';

const EditButton = props => {
    const { onClick = () => {} } = props;

    return (
        <Button className='editButton' onClick={onClick} backgroundColor='transparent'>
            <FiEdit size='24' />
        </Button>
    );
};

export default EditButton;
