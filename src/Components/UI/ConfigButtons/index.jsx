import { FiEdit } from 'react-icons/fi';
import Modal from '@Components/Modal';
import DeleteButton from '@Components/UI/DeleteButton';

const ConfigButtons = props => {
    const { EditModal, onDelete = () => {} } = props;

    const EditButton = <FiEdit size='24' />;

    const buttonStyle = { backgroundColor: 'transparent', borderColor: 'transparent' };

    return (
        <div className='configButtons'>
            <Modal hasButton buttonClassName='editButton' buttonStyle={buttonStyle} buttonContent={EditButton}>
                {EditModal && <EditModal />}
            </Modal>
            <DeleteButton onDelete={onDelete} />
        </div>
    );
};

export default ConfigButtons;
