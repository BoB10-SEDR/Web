import '@Styles/formErrorMessage.css';
import { ErrorMessage } from '@hookform/error-message';

const FormErrorMessage = ({ errors, name }) => {
    return (
        <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => <p className='formErrorMessage'>{message}</p>}
        />
    );
};

export default FormErrorMessage;
