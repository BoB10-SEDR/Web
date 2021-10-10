import { useMemo, useState, useEffect } from 'react';
import { useTable, useRowSelect } from 'react-table';
import makeData from './data';
import '@Styles/table.css';
import CheckBox from '@Components/UI/CheckBox';
import { dummyColumns, dummyData } from '@Dummy/tableDummy';

const Table = props => {
    // TODO_P :: namor => 이거 패키지 삭제해야함 (랜덤명 생성 패키지)
    const { onRowClick = () => {}, nowSelected, columns = dummyColumns, data = dummyData, isCheckable } = props;
    const cols = useMemo(() => columns, [columns]);
    const rows = useMemo(() => data, [data]);

    console.table(rows);

    return (
        <TableContent
            columns={cols}
            data={rows}
            onRowClick={onRowClick}
            nowSelected={nowSelected}
            isCheckable={isCheckable}
        />
    );
};

export default Table;

const TableContent = ({ columns, data, onRowClick, nowSelected, isCheckable }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        selectedFlatRows,
        state: { selectedRowIds },
    } = useTable(
        {
            columns,
            data,
        },
        useRowSelect,
        hooks => {
            if (!isCheckable) return;
            hooks.visibleColumns.push(columns => [
                {
                    id: 'selection',
                    Header: ({ getToggleAllRowsSelectedProps }) => <CheckBox {...getToggleAllRowsSelectedProps()} />,
                    Cell: ({ row }) => <CheckBox {...row.getToggleRowSelectedProps()} />,
                },
                ...columns,
            ]);
        }
    );

    return (
        <table id='tableArea' {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column, index) => {
                            return (
                                <th key={index} {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                </th>
                            );
                        })}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, idx) => {
                    const styleCondition = isCheckable ? row.isSelected : nowSelected === idx;
                    prepareRow(row);
                    return (
                        <tr
                            style={{
                                backgroundColor: styleCondition ? '#35383d' : 'transparent',
                            }}
                            {...row.getRowProps({
                                onClick: () => onRowClick(idx),
                            })}
                        >
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
