import { observable } from 'mobx';

const nav = {
    open: true,
    setOpen(value) {
        this.open = value;
    },
};

export default observable(nav);
