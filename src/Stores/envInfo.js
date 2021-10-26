import { observable } from 'mobx';

const envInfo = {
    selectedEnv: 0,
    setSelectedEnv(index) {
        this.selectedEnv = index;
    },
};

export default observable(envInfo);
