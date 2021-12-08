import Button from '@Components/UI/Button';
import store from '@Stores/addDeviceModal';
import Modal from '@Components/Modal';
import AddDeviceModal from '@Components/Modal/ModalContent/AddDevice';

const AddDeviceButton = () => {
    const handleClick = () => {
        store.setIsOpen(true);
    };

    return (
        <div className='AddDeviceButton'>
            <Modal hasButton buttonContent='장비 추가하기' onClick={handleClick}>
                <AddDeviceModal />
            </Modal>
        </div>
    );
};

export default AddDeviceButton;
