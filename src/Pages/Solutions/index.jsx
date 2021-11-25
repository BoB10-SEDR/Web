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
import Modal from '@Components/Modal';
import AddPolicy from '@Components/Modal/ModalContent/AddPolicy';

const Solutions = () => {
    const [page, limit] = [1, 10];
    let { data: solutions = dummySolutions, error } = useSWR(`policies?page=${page}&limit=${limit}`, () =>
        getPolicies(1, 10)
    );

    return (
        <div id='solutions' className='page'>
            <Card>
                <TableHeading>
                    <span>대응 정책</span>
                    <Modal hasButton buttonContent='추가하기'>
                        <AddPolicy />
                    </Modal>
                </TableHeading>
                <Table
                    isCheckable
                    hasConfig
                    hasToggle
                    toggleId='idx'
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
