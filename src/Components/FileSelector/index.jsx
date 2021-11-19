import Modal from '@Components/Modal';
import SelectDevice from '@Components/Modal/ModalContent/SelectDevice';
import Selector from '@Components/Selector';

const FileSelector = () => {
    const buttonCustom = {
        position: 'absolute',
        top: '15px',
        right: '70px',
    };

    return (
        <div id='fileSelector'>
            <Modal hasButton buttonStyle={buttonCustom} buttonContent='장비 선택'>
                <SelectDevice />
            </Modal>
            <Selector />
        </div>
    );
};

export default FileSelector;
