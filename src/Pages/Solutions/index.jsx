import '@Styles/solution.css';
import useSWR from 'swr';
import { observer } from 'mobx-react';
import Card from '@Components/Card';
import Table from '@Components/Table';
import TableHeading from '@Components/Table/TableHeading';
import Magician from './Magician';
import { getPolicies } from '@Api/policies';
import store from '@Stores/policyMagician';
import dummySolutions from '@Dummy/solutions';
import { fetcher } from '@Hooks/';

const Solutions = () => {
    const [page, limit] = [1, 10];
    let { data: solutions = dummySolutions, error } = useSWR(`/policies/custom?page=${page}`, url => fetcher(url));

    return (
        <div id='solutions' className='page'>
            <Card>
                <TableHeading>
                    <span>대응 정책</span>
                    <Magician />
                </TableHeading>
                <Table
                    hasConfig
                    hasToggle
                    toggleId='idx'
                    toggleValueField='activate'
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
