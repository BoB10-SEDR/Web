import EditButton from '@Components/UI/EditButton';
import DeleteButton from '@Components/UI/DeleteButton';

const ConfigButtons = props => {
    const { onEdit = () => {}, onDelete = () => {} } = props;

    return (
        <div className='configButtons'>
            <EditButton onClick={onEdit} />
            <DeleteButton onClick={onDelete} />
        </div>
    );
};

export default ConfigButtons;
