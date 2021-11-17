import { observer } from 'mobx-react';
import Modal from 'react-modal';
import Button from '@Components/UI/Button';
import store from '@Stores/modal.js';

const customStyle = {
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
        border: '1px solid rgba(154, 161, 171, 0.2)',
        borderRadius: '6px',
        color: 'white',
        padding: '80px 80px 30px 80px',
        zIndex: 2,
    },
};

const CustomModal = props => {
    // TODO :: props type 명세화 => Style 적용 관련
    const {
        hasButton = false,
        modalDefaultStyle = customStyle,
        buttonContent = 'Apply',
        contentLabel = 'Custom Modal',
        children,
    } = props;

    const { isOpen } = store;

    const openModal = () => store.setIsOpen(true);
    const closeModal = () => store.setIsOpen(false);

    return (
        <>
            {hasButton && <Button onClick={openModal}>{buttonContent}</Button>}
            <Modal isOpen={isOpen} onRequestClose={closeModal} style={modalDefaultStyle} contentLabel={contentLabel}>
                {children}
            </Modal>
        </>
    );
};

export default observer(CustomModal);
