export const exampleSchema = [
    { Header: '상태', accessor: 'status', align: 'center', width: 100, isAbleToSort: false },
    { Header: '정책 유형 ID', accessor: 'policyID', align: 'left', width: 150, isAbleToSort: true },
    { Header: '정책 이름', accessor: 'policyName', align: 'left', width: 150, isAbleToSort: true },
    { Header: '적용 대상', accessor: 'applyTarget', align: 'left', width: 150, isAbleToSort: true },
    { Header: '마지막 변경 시간', accessor: 'timestamp', align: 'left', width: 400, isAbleToSort: true },
    { Header: '대응 정책 설명', accessor: 'description', align: 'left', isAbleToSort: true },
];

export const solutionsSchema = [
    { Header: '대분류', accessor: 'main', align: 'center', width: 100, isAbleToSort: false },
    { Header: '중분류', accessor: 'classify', align: 'center', width: 100, isAbleToSort: false },
    { Header: '소분류', accessor: 'sub', align: 'center', width: 100, isAbleToSort: false },
    { Header: '정책 유형 ID', accessor: 'idx', align: 'left', width: 150, isAbleToSort: true },
    { Header: '정책 이름', accessor: 'name', align: 'left', width: 150, isAbleToSort: true },
    { Header: '대응 정책 설명', accessor: 'description', align: 'left', isAbleToSort: true },
];

export const sparklineSchema = [
    { Header: '공격 유형', accessor: 'source', align: 'left', isAbleToSort: true },
    { Header: '총 로그 수', accessor: 'total', align: 'left', isAbleToSort: true },
    { Header: '변화 추이', accessor: 'trend', align: 'left', isAbleToSort: true },
];

// TODO_P :: 간격 배정
export const deviceTableSchema = [
    { Header: '장치 종류', accessor: 'deviceIcon', align: 'center', isAbleToSort: false },
    { Header: '장치 이름', accessor: 'name', align: 'center', isAbleToSort: true },
    { Header: '소속 구성', accessor: 'group', align: 'center', isAbleToSort: true },
    { Header: '식별번호', accessor: 'serialNum', align: 'center', isAbleToSort: true },
    { Header: '트래픽 변화량', accessor: 'traficDiff', align: 'center', isAbleToSort: true },
    { Header: '연결 상태', accessor: 'status', align: 'center', isAbleToSort: true },
    { Header: '연결 모듈 수', accessor: 'moduleCount', align: 'center', isAbleToSort: true },
    { Header: '상세 정보', accessor: 'more', align: 'center', isAbleToSort: false },
];

// TODO_P :: 간격 배정
export const eventViewerSchema = [
    { Header: '타임스탬프', accessor: 'timestamp', align: 'center', isAbleToSort: true },
    { Header: '로그 상태', accessor: 'status', align: 'center', isAbleToSort: true },
    { Header: '로그 발생지', accessor: 'source', align: 'center', isAbleToSort: true },
    { Header: '이벤트 ID', accessor: 'eventID', align: 'center', isAbleToSort: true },
    { Header: '상세 설명', accessor: 'description', align: 'left', isAbleToSort: false },
];

// TODO_P :: 간격 배정
export const applyedPolicyListSchema = [
    { Header: '대응 정책 명', accessor: 'policyName', align: 'left', isAbleToSort: false },
    { Header: '상세 설명', accessor: 'description', align: 'left', isAbleToSort: false },
    { Header: '적용 여부', accessor: 'status', align: 'center', isAbleToSort: true },
];

// TODO_P :: 간격 배정
export const recommandedPolicyListSchema = [
    { Header: '대응 정책 명', accessor: 'policyName', align: 'left', isAbleToSort: false },
    { Header: '상세 설명', accessor: 'description', align: 'left', isAbleToSort: false },
    { Header: '타임스탬프', accessor: 'timestamp', align: 'left', isAbleToSort: false },
    { Header: '적용 여부', accessor: 'status', align: 'center', isAbleToSort: false },
];

// TODO_P :: 간격 배정
export const inspectionTableSchema = [
    { Header: '선택', accessor: 'check', align: 'center', isAbleToSort: false },
    { Header: '테스트 ID', accessor: 'testID', align: 'left', isAbleToSort: false },
    { Header: '테스트 이름', accessor: 'testName', align: 'left', isAbleToSort: false },
    { Header: '테스트 대상 유형', accessor: 'target', align: 'left', isAbleToSort: false },
    { Header: '대상 OS', accessor: 'target', align: 'left', isAbleToSort: false },
    { Header: '테스트 설명', accessor: 'description', align: 'left', isAbleToSort: false },
];
