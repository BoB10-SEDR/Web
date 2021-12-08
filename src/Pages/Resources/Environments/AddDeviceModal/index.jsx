import '@Stores/addDeviceModal';
import { observer } from 'mobx-react';
import Modal from '@Components/Modal';
import store from '@Stores/addDeviceModal';
import ModalContent from '../../../../Components/Modal/ModalContent/AddDevice';

const AddDeviceModal = () => {
    const customStyles = {
        overlay: {
            backgroundColor: 'rgba(0,0,0, 0.8)',
        },
        content: {
            top: '50%',
            left: '50%',
            width: '80%',
            height: '80%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#23262b',
            border: 'none',
            color: 'white',
            zIndex: 2,
        },
    };

    const closeModal = () => {
        store.setIsOpen(false);
    };

    return (
        <Modal isOpen={store.isOpen} onRequestClose={closeModal} style={customStyles} contentLabel='장비 추가하기'>
            <ModalContent onClose={closeModal} />
        </Modal>
    );
};

export default observer(AddDeviceModal);
