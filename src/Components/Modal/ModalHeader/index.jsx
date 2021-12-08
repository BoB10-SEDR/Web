import '@Styles/modalHeader.css';

const ModalHeader = props => {
    const { title, description } = props;

    return (
        <div className='modalHeader'>
            <h3>{title}</h3>
            <span>{description}</span>
        </div>
    );
};

export default ModalHeader;
