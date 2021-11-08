import { observable } from 'mobx';

const envMap = {
    isGraphic: true,
    setIsGraphic(value) {
        this.isGraphic = value;
    },
    isGraphicMode() {
        return this.isGraphic;
    },
};

export default observable(envMap);
