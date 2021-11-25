import React from 'react';
import { useEffect, useMemo, useState } from 'react';
import { useExpanded, useFlexLayout, useGlobalFilter, useSortBy, useTable, useRowSelect } from 'react-table';
import getSchemaData from './data';
import genData from './data/generator';
import '@Styles/table.css';
import CheckBox from '@Components/UI/CheckBox';
import Hr from '@Components/UI/Border';
import matchSorter from 'match-sorter';
import NoData from '@Components/UI/NoData';
import ToggleSwitch from '@Components/UI/ToggleSwitch';
import EditButton from '@Components/UI/EditButton';
import ConfigButtons from '@Components/UI/ConfigButtons';

const Table = props => {
    const {
        id = 'table',
        schema = 'example',
        defaultRowHeight = '60',
        defaultRowWidth = '50',
        defaultFontSize = '18',
        defaultHeaderHeight = '45',
        defaultHeaderFontSize = '16',
        tableHeight,
        isCheckable,
        browseData = [],
        nowSelected = 0,
        onRowClick = () => {},
        isSubmitted,
        hasToggle,
        toggleId,
        onToggle = () => {},
        hasConfig,
        isExpandable,
        onSubmit = () => {},
        renderRowSubComponent = () => {},
    } = props;
    const [clickedIndex, setClickedIndex] = useState(nowSelected);

    // TODO_P :: Schema 데이터도 그냥 DB에서 불러오기?
    const schemaData = useMemo(() => getSchemaData(schema), [schema]);

    const defaultColumn = useMemo(
        () => ({
            // When using the useFlexLayout:
            minWidth: 30, // minWidth is only used as a limit for resizing
            width: defaultRowWidth, // width is used for both the flex-basis and flex-grow
            maxWidth: 600, // maxWidth is only used as a limit for resizing
        }),
        []
    );

    function fuzzyTextFilterFn(rows, id, filterValue) {
        return matchSorter(rows, filterValue, { keys: [row => row.values[id]] });
    }

    // Let the table remove the filter if the string is empty
    fuzzyTextFilterFn.autoRemove = val => !val;

    const filterTypes = useMemo(
        () => ({
            // Add a new fuzzyTextFilterFn filter type.
            fuzzyText: fuzzyTextFilterFn,
            // Or, override the default text filter to use
            // "startWith"
            text: (rows, id, filterValue) => {
                return rows.filter(row => {
                    const rowValue = row.values[id];
                    return rowValue !== undefined
                        ? String(rowValue).toLowerCase().startsWith(String(filterValue).toLowerCase())
                        : true;
                });
            },
        }),
        []
    );

    // 불러오는 값들을 기능에 따라 잘 정의해야함.
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        setGlobalFilter,
        selectedFlatRows,
        visibleColumns,
        state: { selectedRowIds, expanded },
    } = useTable(
        {
            columns: schemaData,
            data: browseData,
            defaultColumn,
            filterTypes,
        },
        useFlexLayout,
        useGlobalFilter,
        useSortBy,
        useExpanded,
        useRowSelect,
        hooks => {
            if (isCheckable) {
                hooks.visibleColumns.push(columns => [
                    {
                        id: 'selection',
                        Header: ({ getToggleAllRowsSelectedProps }) => (
                            <CheckBox {...getToggleAllRowsSelectedProps()} />
                        ),
                        Cell: ({ row }) => <CheckBox {...row.getToggleRowSelectedProps()} />,
                    },
                    ...columns,
                ]);
            }
            if (isExpandable) {
                hooks.visibleColumns.push(columns => [
                    {
                        // Make an expander cell
                        Header: () => null, // No header
                        id: 'expander', // It needs an ID
                        Cell: ({ row }) => (
                            // Use Cell to render an expander for each row.
                            // We can use the getToggleRowExpandedProps prop-getter
                            // to build the expander.
                            <span {...row.getToggleRowExpandedProps()}>{row.isExpanded ? '👇' : '👉'}</span>
                        ),
                    },
                    ...columns,
                ]);
            }
            if (hasToggle) {
                hooks.visibleColumns.push(columns => [
                    ...columns,
                    {
                        id: 'toggle',
                        Header: '상태',
                        Cell: ({ row }) => {
                            return <ToggleSwitch id={row.original[toggleId]} />;
                        },
                        align: 'center',
                        width: 100,
                    },
                ]);
            }
            if (hasConfig) {
                hooks.visibleColumns.push(columns => [
                    ...columns,
                    {
                        id: 'config',
                        Header: '설정',
                        Cell: ({ row }) => {
                            return <ConfigButtons />;
                        },
                        align: 'center',
                        width: 100,
                    },
                ]);
            }
        }
    );

    // Header 그리고 Cell의 속성들
    const headerProps = (props, { column }) => getHeaderStyles(props, column.align);

    const cellProps = (props, { cell }) => getStyles(props, cell.column.align);

    const headerGroupProps = props => getHeaderGroupStyles(props);

    const getHeaderGroupStyles = props => [
        props,
        {
            style: {
                height: `${defaultHeaderHeight}px`,
                alignItems: 'center',
                fontSize: `${defaultHeaderFontSize}px`,
            },
        },
    ];

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

    const getHeaderStyles = (props, align = 'left') => [
        props,
        {
            style: {
                justifyContent: align === 'center' ? 'center' : align === 'right' ? 'flex-end' : 'flex-start',
                alignItems: 'center',
                display: 'flex',

                cursor: 'pointer',

                height: `${defaultHeaderHeight}px`,
                fontSize: `${defaultHeaderFontSize}px`,
            },
        },
    ];

    const getRowStyles = props => [
        props,
        {
            style: {
                height: `${defaultRowHeight}px`,
                alignItems: 'center',
                fontSize: `${defaultFontSize}px`,
            },
        },
    ];

    const handleClick = index => {
        onRowClick(index);
        setClickedIndex(index);
    };

    // const onSearchKeywordChange = useAsyncDebounce(value => {
    //     setGlobalFilter(value || undefined);
    // }, 0);

    // 로드시에 스키마를 불러와야하며, 데이터도 받아야함.
    // const mounted = useRef();
    // useEffect(() => {
    //     // if (!mounted.current) {
    //     //     (async () => {
    //     //         // TODO_P :: Dummy 해제
    //     //         setTableData(browseData);
    //     //         mounted.current = true;
    //     //     })();
    //     // } else {
    //     //     onSearchKeywordChange(searchKeyword);
    //     //     // console.log({ status: 'changed', searchKeyword });
    //     // }
    //     console.log('엄마!!!');
    // }, [searchKeyword, schema, onSearchKeywordChange]);

    useEffect(() => {
        if (!isSubmitted) return;
        onSubmit(selectedFlatRows.map(d => d.original));
    }, [isSubmitted]);

    // 아래는 스타일 적용을 위해 Tag이름 구분지어야함
    return (
        <div id={id} className='table' style={{ height: tableHeight ?? null }}>
            <div {...getTableProps()} className='tableWrapper'>
                <div className='tableHeader'>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps(headerGroupProps)} className='columnGroup'>
                            {headerGroup.headers.map(column => {
                                const sortProps = column.isAbleToSort
                                    ? {
                                          onClick: column.getSortByToggleProps()['onClick'],
                                      }
                                    : {};

                                return (
                                    <th {...column.getHeaderProps(headerProps)} {...sortProps} className='columnTitle'>
                                        {column.render('Header')}
                                        {column.isSorted ? (
                                            !column.isSortedDesc ? (
                                                <i className='fas fa-caret-down' />
                                            ) : (
                                                <i className='fas fa-caret-up' />
                                            )
                                        ) : null}
                                    </th>
                                );
                            })}
                        </tr>
                    ))}
                    <Hr color='#303236' />
                </div>

                {browseData.length !== 0 ? (
                    <div {...getTableBodyProps()}>
                        {rows.map((row, i) => {
                            const isLast = i === rows.length - 1;
                            prepareRow(row);
                            return (
                                <>
                                    <tr
                                        className={`tableRow ${clickedIndex === i ? ' clicked' : ''}`}
                                        {...row.getRowProps(rowProps)}
                                        onClick={() => handleClick(i)}
                                    >
                                        {row.cells.map(cell => {
                                            return (
                                                <td {...cell.getCellProps(cellProps)} className='rowCell'>
                                                    {cell.render('Cell')}
                                                </td>
                                            );
                                        })}
                                    </tr>
                                    {row.isExpanded ? (
                                        <tr>
                                            <td colSpan={visibleColumns.length}>
                                                {/*
                          Inside it, call our renderRowSubComponent function. In reality,
                          you could pass whatever you want as props to
                          a component like this, including the entire
                          table instance. But for this example, we'll just
                          pass the row
                        */}
                                                {renderRowSubComponent({ row })}
                                            </td>
                                        </tr>
                                    ) : null}
                                    {!isLast && <Hr />}
                                </>
                            );
                        })}
                    </div>
                ) : (
                    <NoData />
                )}
            </div>
        </div>
    );
};

export default Table;
