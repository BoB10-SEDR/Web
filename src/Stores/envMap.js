import { observable } from 'mobx';

const envMap = {
    mode: 'graphic',
    isTransforming: false,
    setMode(value) {
        this.mode = value;
    },
    setIsTransforming(value) {
        this.isTransforming = value;
    },
};

export default observable(envMap);
