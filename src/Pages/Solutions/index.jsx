import '@Styles/solution.css';
import useSWR from 'swr';
import { observer } from 'mobx-react';
import Card from '@Components/Card';
import Table from '@Components/Table';
import TableHeading from '@Components/Table/TableHeading';
import Magician from './Magician';
import { getPolicies } from '@Api/policies';
import store from '@Stores/policyMagician';
import ToggleSwitch from '@Components/UI/ToggleSwitch';
import { attachToggle } from '@Functions/';

const Solutions = () => {
    const [page, limit] = [1, 10];
    const { data: solutionsData = [], error } = useSWR(`policies?page=${page}&limit=${limit}`, () =>
        getPolicies(1, 10)
    );

    const solutions = attachToggle(solutionsData, 'idx');

    return (
        <div id='solutions' className='page'>
            <Card>
                <TableHeading>
                    <span>대응 정책</span>
                    <Magician />
                </TableHeading>
                <Table
                    isCheckable
                    hasToggle
                    toggleKey='idx'
                    schema='solutions'
                    browseData={solutions}
                    isSubmitted={store.isOpen}
                    onSubmit={data => store.setSelectedPolicies(data)}
                />
            </Card>
        </div>
    );
};

export default observer(Solutions);
