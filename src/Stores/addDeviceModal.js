import { observable } from 'mobx';

const addDevice = {
    isOpen: false,
    activeTab: 0,
    setActiveTab(value) {
        this.activeTab = value;
    },
    setIsOpen(value) {
        this.isOpen = value;
    },
};

export default observable(addDevice);
