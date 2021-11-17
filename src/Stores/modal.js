import { observable } from 'mobx';

const modal = {
    isOpen: false,
    setIsOpen(value) {
        this.isOpen = value;
    },
};

export default observable(modal);
