import { observable } from 'mobx';

const envMap = {
    mode: 'graphic',
    setListMode() {
        this.mode = 'list';
    },
    setGraphicMode() {
        this.mode = 'graphic';
    },
    isListMode() {
        return this.mode === 'list';
    },
    isGraphicMode() {
        return this.mode === 'graphic';
    },
};

export default observable(envMap);
