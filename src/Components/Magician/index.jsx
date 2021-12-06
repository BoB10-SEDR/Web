import '@Styles/magician.css';
import Modal from '@Components/Modal';
import ModalHeader from '@Components/Modal/ModalHeader';

const Magician = props => {
    const { children, Formatter, onClick = () => {}, title, description } = props;

    return (
        <div id='magician'>
            <Header title={title} description={description}>
                <SubmitButton Formatter={Formatter} onClick={onClick} />
            </Header>
            <Body>{children}</Body>
        </div>
    );
};

const Header = props => {
    const { title, description, children } = props;

    return (
        <div className='header'>
            <ModalHeader title={title} description={description} />
            {children}
        </div>
    );
};

const Body = ({ children }) => {
    return <div className='body'>{children}</div>;
};

const SubmitButton = props => {
    const { Formatter, onClick } = props;

    return (
        <div className='submitButton'>
            <Modal hasButton isStacked buttonContent='Select' buttonClassName='submitButton' onClick={onClick}>
                <Formatter />
            </Modal>
        </div>
    );
};

export default Magician;
