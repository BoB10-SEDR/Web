import Modal from '@Components/Modal';
import SelectDevice from '@Components/Modal/ModalContent/SelectDevice';
import Selector from '@Components/Selector';

const FileSelector = () => {
    return (
        <div id='fileSelector'>
            <Modal hasButton buttonContent='장비 선택'>
                <SelectDevice />
            </Modal>
            <Selector />
        </div>
    );
};

export default FileSelector;
