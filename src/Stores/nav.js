import { observable } from 'mobx';

const nav = {
    open: false,
    setOpen(value) {
        this.open = value;
    },
};

export default observable(nav);
