import '@Styles/solution.css';
import axios from 'axios';
import useSWR, { useSWRConfig } from 'swr';
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
    const { mutate } = useSWRConfig();
    const [page, limit] = [1, 10];
    let { data: solutions = dummySolutions, error } = useSWR(`/policies/custom`, () =>
        fetcher(`/policies/custom?page=${page}`)
    );

    const onToggleActivate = async ({ row }) => {
        const { device_idx: deviceIdx, idx: policyIdx } = row;
        try {
            const response = await axios.post(`/policies/${policyIdx}/activate/${deviceIdx}`);
            mutate(`/policies/custom`);
        } catch (error) {
            console.log(error);
        }
    };

    const onToggleInactivate = async ({ row }) => {
        const { device_idx: deviceIdx, idx: policyIdx } = row;
        try {
            const response = await axios.post(`/policies/${policyIdx}/inactivate/${deviceIdx}`);
            mutate(`/policies/custom`);
        } catch (error) {
            console.log(error);
        }
    };

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
                    onToggleActivate={onToggleActivate}
                    onToggleInactivate={onToggleInactivate}
                />
            </Card>
        </div>
    );
};

export default observer(Solutions);
