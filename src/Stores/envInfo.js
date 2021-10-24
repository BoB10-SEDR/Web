import { observable } from 'mobx';

const envInfo = {
    selectedEnv: 0,
    circleLayers: [],
    setEnv(id, circle) {
        this.selectedEnv = id;
        this.circleLayers = circle;
    },
};

export default observable(envInfo);
