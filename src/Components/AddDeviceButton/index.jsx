import Button from '@Components/UI/Button';
import store from '@Stores/addDeviceModal';
import AddDeviceModal from '@Pages/Logs/Devices/AddDeviceModal';

const AddDeviceButton = () => {
    const handleClick = () => {
        store.setIsOpen(true);
    };

    return (
        <div className='AddDeviceButton'>
            <Button onClick={handleClick}>
                <span>장비 추가하기</span>
            </Button>
            <AddDeviceModal />
        </div>
    );
};

export default AddDeviceButton;
