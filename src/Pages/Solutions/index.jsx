import '@Styles/solution.css';
import { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import Card from '@Components/Card';
import Table from '@Components/Table';
import TableHeading from '@Components/Table/TableHeading';
import Button from '@Components/UI/Button';
import Magician from './Magician';
import { getPolicies } from '@Api/policies';
import store from '@Stores/policyMagician';

const Solutions = () => {
    const [solutions, setSolutions] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getPolicies(1, 10);
                setSolutions(data.outputs);
            } catch (e) {
                setSolutions([]);
            }
        };
        fetchData();
    }, []);

    const openModal = () => {
        store.setIsOpen(true);
    };

    return (
        <div id='solutions' className='page'>
            <Card>
                <TableHeading>
                    <span>대응 정책</span>
                    <Magician />
                </TableHeading>
                <Table
                    isCheckable
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
