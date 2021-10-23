import { observable } from 'mobx';

const envInfo = {
    selectedEnv: 0,
    setSelectedEnv(index) {
        this.selectedEnv = index;
        console.log(this.selectedEnv);
    },
};

export default observable(envInfo);
