import { observer } from 'mobx-react';
import { useState } from 'react';
import Modal from 'react-modal';
import Button from '@Components/UI/Button';

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
        backgroundColor: '#35383D',
        border: '1px solid rgba(154, 161, 171, 0.2)',
        borderRadius: '6px',
        color: 'white',
        padding: '50px 50px 30px 50px',
        zIndex: 2,
    },
};

const CustomModal = props => {
    // TODO :: props type 명세화 => Style 적용 관련
    const {
        hasButton = false,
        modalDefaultStyle = customStyle,
        buttonContent = 'Apply',
        buttonStyle = {},
        contentLabel = 'Custom Modal',
        children,
    } = props;

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <>
            {hasButton && (
                <Button buttonStyle={buttonStyle} onClick={openModal}>
                    {buttonContent}
                </Button>
            )}
            <Modal isOpen={isOpen} onRequestClose={closeModal} style={modalDefaultStyle} contentLabel={contentLabel}>
                {children}
            </Modal>
        </>
    );
};

export default observer(CustomModal);
