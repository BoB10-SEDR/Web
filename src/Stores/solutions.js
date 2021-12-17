import { observable } from 'mobx';

const solutions = {
    page: 1,
    limit: 20,
    setPage(value) {
        this.page = value;
    },
    setLimit(value) {
        this.limit = value;
    },
};

export default observable(solutions);
