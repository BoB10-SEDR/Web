import ToggleSwitch from '@Components/UI/ToggleSwitch';

const dummyColumns = [
    {
        Header: '대응 정책 명',
        accessor: 'Col1',
    },
    {
        Header: '상세 설명',
        accessor: 'Col2',
    },

    {
        Header: '적용 여부',
        accessor: 'Col3',
    },
];

const dummyData = [
    { Col1: 'SQL Injection', Col2: 'A,B,C,D에 적용됨', Col3: <ToggleSwitch id='dummy1' isToggled /> },
    { Col1: 'SQL Injection', Col2: 'A,B,C,D에 적용됨', Col3: <ToggleSwitch id='dummy2' isToggled /> },
    { Col1: 'SQL Injection', Col2: 'A,B,C,D에 적용됨', Col3: <ToggleSwitch id='dummy3' isToggled /> },
];

export { dummyColumns, dummyData };
