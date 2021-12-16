import { observable } from 'mobx';

const deviceTable = {
    page: 1,
    limit: 10,
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
};

export default observable(deviceTable);
