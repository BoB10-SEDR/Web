export const exampleSchema = [
    { Header: '상태', accessor: 'status', align: 'center', width: 100, isAbleToSort: false },
    { Header: '정책 유형 ID', accessor: 'policyID', align: 'left', width: 150, isAbleToSort: true },
    { Header: '정책 이름', accessor: 'policyName', align: 'left', width: 150, isAbleToSort: true },
    { Header: '적용 대상', accessor: 'applyTarget', align: 'left', width: 150, isAbleToSort: true },
    { Header: '마지막 변경 시간', accessor: 'timestamp', align: 'left', width: 400, isAbleToSort: true },
    { Header: '대응 정책 설명', accessor: 'description', align: 'left', isAbleToSort: true },
];

export const sparklineSchema = [
    { Header: '공격 유형', accessor: 'source', align: 'left', isAbleToSort: true },
    { Header: '총 로그 수', accessor: 'total', align: 'left', isAbleToSort: true },
    { Header: '변화 추이', accessor: 'trend', align: 'left', isAbleToSort: true },
];
