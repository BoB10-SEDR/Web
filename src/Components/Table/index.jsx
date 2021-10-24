import { useEffect, useMemo, useState } from 'react';
import { useBlockLayout, useTable } from 'react-table';
import getSchemaData from './data';
import genData from './data/generator';

const dummyFunction = async schema => genData();

const Table = props => {
    const { id = 'table', schema = 'example' } = props;

    const [tableData, setTableData] = useState([]);

    // TODO_P :: Schema 데이터도 그냥 DB에서 불러오기?
    const schemaData = useMemo(() => getSchemaData(schema), []);

    const defaultColumn = useMemo(
        () => ({
            width: 150,
        }),
        []
    );

    // 불러오는 값들을 기능에 따라 잘 정의해야함.
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
        {
            schemaData,
            tableData,
            defaultColumn,
        },
        useBlockLayout
    );

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
            <div {...getTableProps()} className='table'>
                <div>
                    {headerGroups.map(headerGroup => (
                        <div {...headerGroup.getHeaderGroupProps()} className='tr'>
                            {headerGroup.headers.map(column => (
                                <div {...column.getHeaderProps()} className='th'>
                                    {column.render('Header')}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                <div {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        prepareRow(row);
                        return (
                            <div {...row.getRowProps()} className='tr'>
                                {row.cells.map(cell => {
                                    return (
                                        <div {...cell.getCellProps()} className='td'>
                                            {cell.render('Cell')}
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Table;
