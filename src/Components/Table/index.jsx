import { useMemo, useState, useEffect } from 'react';
import { useTable } from 'react-table';
import makeData from './data';
import '@Styles/table.css';
import { dummyColumns, dummyData } from '@Dummy/tableDummy';

const Table = props => {
    // TODO_P :: namor => 이거 패키지 삭제해야함 (랜덤명 생성 패키지)
    const {
        onRowClick = () => {},
        nowSelected,
        columns = dummyColumns,
        data = dummyData,
        columnColor = '#FFF',
    } = props;
    const cols = useMemo(() => columns, [columns]);
    const rows = useMemo(() => data, [data]);

    console.table(rows);

    return (
        <TableContent
            columns={cols}
            data={rows}
            onRowClick={onRowClick}
            nowSelected={nowSelected}
            columnColor={columnColor}
        />
    );
};

export default Table;

const TableContent = ({ columns, data, onRowClick, nowSelected, columnColor }) => {
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
                            <th style={{ color: columnColor }} {...column.getHeaderProps()}>
                                {column.render('Header')}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, idx) => {
                    prepareRow(row);
                    return (
                        <tr
                            style={{ backgroundColor: idx === nowSelected ? '#35383d' : 'transparent' }}
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
