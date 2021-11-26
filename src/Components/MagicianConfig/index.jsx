import Modal from '@Components/Modal';
import AddFd from '@Components/Modal/ModalContent/AddFd';
import Selector from '@Components/Selector';

const MagicianConfig = () => {
    const buttonCustom = {
        position: 'absolute',
        top: '15px',
        right: '70px',
    };

    return (
        <div id='fileSelector'>
            <Modal hasButton buttonStyle={buttonCustom} buttonContent='파일 추가'>
                <AddFd />
            </Modal>
            <Selector />
        </div>
    );
};

export default MagicianConfig;
