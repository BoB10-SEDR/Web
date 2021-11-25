import Modal from '@Components/Modal';
import SelectFile from '@Components/Modal/ModalContent/SelectFile';
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
                <SelectFile />
            </Modal>
            <Selector />
        </div>
    );
};

export default MagicianConfig;
