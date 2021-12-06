import '@Styles/logMagician.css';
import Magician from '@Components/Magician';
import store from '@Stores/logMagician';
import Selector from './Selector';
import LogFormatter from '@Components/Modal/ModalContent/LogFormatter';

const LogMagician = () => {
    const title = '모니터링 파일 선택';
    const description = '장비-프로세스-파일 순으로 선택하세요';

    const handleClick = () => {
        store.setFdList([]);
        store.setIsSubmitted(true);
    };

    return (
        <div id='logMagician'>
            <Magician title={title} description={description} onClick={handleClick} Formatter={LogFormatter}>
                <Selector />
            </Magician>
        </div>
    );
};

export default LogMagician;
