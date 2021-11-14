import { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import Modal from 'react-modal';
import Button from '@Components/UI/Button';
import ModalContent from './ModalContent';
import store from '@Stores/policyMagician';
import { getPolicy } from '@Api/policies';

const Magician = () => {
    const customStyles = {
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
            color: 'white',
            zIndex: 2,
        },
    };

    const openModal = () => {
        store.setIsOpen(true);
    };

    const closeModal = () => {
        store.setIsOpen(false);
    };

    return (
        <>
            <Button onClick={openModal}>Apply</Button>
            <Modal isOpen={store.isOpen} onRequestClose={closeModal} style={customStyles} contentLabel='정책 마법사'>
                <ModalContent onClose={closeModal} />
            </Modal>
        </>
    );
};

export default observer(Magician);
