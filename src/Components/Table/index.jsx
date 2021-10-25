import { useEffect, useMemo, useState } from 'react';
import { useFlexLayout, useTable } from 'react-table';
import getSchemaData from './data';
import genData from './data/generator';
import '@Styles/table.css';

const dummyFunction = async schema => genData(50);

const Table = props => {
    const { id = 'table', schema = 'example' } = props;

    const [tableData, setTableData] = useState([]);

    // TODO_P :: Schema 데이터도 그냥 DB에서 불러오기?
    const schemaData = useMemo(() => getSchemaData(schema), []);

    const defaultColumn = useMemo(
        () => ({
            // When using the useFlexLayout:
            minWidth: 30, // minWidth is only used as a limit for resizing
            width: 300, // width is used for both the flex-basis and flex-grow
            maxWidth: 600, // maxWidth is only used as a limit for resizing
        }),
        []
    );

    // 불러오는 값들을 기능에 따라 잘 정의해야함.
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
        {
            columns: schemaData,
            data: tableData,
            defaultColumn,
        },
        useFlexLayout
    );

    // Header 그리고 Cell의 속성들
    const headerProps = (props, { column }) => getStyles(props, column.align);

    const cellProps = (props, { cell }) => getStyles(props, cell.column.align);

    const headerGroupProps = props => getRowStyles(props);

    const rowProps = props => getRowStyles(props);

    const getStyles = (props, align = 'left') => [
        props,
        {
            style: {
                justifyContent: align === 'center' ? 'center' : align === 'right' ? 'flex-end' : 'flex-start',
                alignItems: 'flex-start',
                display: 'flex',
            },
        },
    ];

    const getRowStyles = props => [
        props,
        {
            style: {
                height: '50px',
                alignItems: 'center',
            },
        },
    ];

    // 로드시에 스키마를 불러와야하며, 데이터도 받아야함.

    useEffect(() => {
        (async () => {
            // TODO_P :: Web 요청으로 data를 불러오는 hook 연결
            const browseData = await dummyFunction(schema);

            setTableData(browseData);
        })();
    }, []);

    // 아래는 스타일 적용을 위해 Tag이름 구분지어야함
    return (
        <div id={id}>
            <div {...getTableProps()} id='table'>
                <div>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps(headerGroupProps)} className='columnGroup'>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps(headerProps)} className='columnTitle'>
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                    <Hr color='#303236' />
                </div>

                <div {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        const isLast = i === rows.length - 1;
                        prepareRow(row);
                        return (
                            <>
                                <tr {...row.getRowProps(rowProps)} className='tableRow'>
                                    {row.cells.map(cell => {
                                        return (
                                            <td {...cell.getCellProps(cellProps)} className='rowCell'>
                                                {cell.render('Cell')}
                                            </td>
                                        );
                                    })}
                                </tr>
                                {!isLast && <Hr />}
                            </>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Table;

const Hr = ({ color = '#202327' }) => <hr style={{ border: `.1px solid ${color}`, margin: 0 }} />;
