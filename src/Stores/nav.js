import { observable } from 'mobx';

const nav = {
    open: true,
    setOpen(value) {
        this.open = value;
        console.log(value);
    },
};

export default observable(nav);
