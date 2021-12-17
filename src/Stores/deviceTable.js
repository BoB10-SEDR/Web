import { observable } from 'mobx';

const deviceTable = {
    page: 1,
    limit: 20,
    visibleData: [],
    setPage(value) {
        this.page = value;
    },
    setLimit(value) {
        this.limit = value;
    },
    setVisibleData(value) {
        this.visibleData = value;
    },
    clear() {
        this.page = 1;
    },
};

export default observable(deviceTable);
