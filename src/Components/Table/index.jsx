import { useMemo, useState, useEffect } from 'react';
import { useTable } from 'react-table';
import makeData from './data';
import '@Styles/table.css';

const dummyColumns = () => [
    {
        Header: 'Name',
        columns: [
            {
                Header: 'First Name',
                accessor: 'firstName',
            },
            {
                Header: 'Last Name',
                accessor: 'lastName',
            },
        ],
    },
    {
        Header: 'Info',
        columns: [
            {
                Header: 'Age',
                accessor: 'age',
            },
            {
                Header: 'Visits',
                accessor: 'visits',
            },
            {
                Header: 'Status',
                accessor: 'status',
            },
            {
                Header: 'Profile Progress',
                accessor: 'progress',
            },
        ],
    },
];

const dummyData = () => makeData(20);

const Table = props => {
    // TODO_P :: namor => 이거 패키지 삭제해야함 (랜덤명 생성 패키지)
    const columns = useMemo(dummyColumns, []);

    const data = useMemo(dummyData, []);

    console.table(data);

    return <TableContent columns={columns} data={data} />;
};

export default Table;

const TableContent = ({ columns, data }) => {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
        columns,
        data,
    });

    return (
        <table id='tableArea' {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row);
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                            })}
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};
