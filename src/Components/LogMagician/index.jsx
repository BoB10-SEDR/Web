import Modal from '@Components/Modal';
import SelectLogFile from '@Components/Modal/ModalContent/SelectLogFile';
import Selector from '@Components/Selector';

const LogMagician = () => {
    const buttonCustom = {
        position: 'absolute',
        top: '15px',
        right: '70px',
    };

    return (
        <div id='fileSelector'>
            <Modal hasButton buttonStyle={buttonCustom} buttonContent='파일 추가'>
                <SelectLogFile />
            </Modal>
            <Selector />
        </div>
    );
};

export default LogMagician;
