const dummyLargeData = {
    name: '대분류',
    content: [
        { title: '기기', isBlocked: false },
        { title: '사용자', isBlocked: false },
        { title: '네트워크', isBlocked: false },
        { title: '기타', isBlocked: false },
    ],
};

const dummyMediumData = {
    name: '중분류',
    content: [
        { title: '서비스 설정', isBlocked: false },
        { title: '포트 및 인터페이스 설정', isBlocked: false },
        { title: '파일 및 디렉토리 설정', isBlocked: false },
        { title: '데이터 보호', isBlocked: false },
        { title: 'OS 보안', isBlocked: true },
        { title: '하드웨어 보안', isBlocked: false },
    ],
};

const dummySmallData = {
    name: '소분류',
    content: [
        { title: '권한 관리(6)', isBlocked: false },
        { title: '상태 관리(12)', isBlocked: false },
    ],
};

const dummyMoreData = {
    name: '구현 단위',
    content: [
        { title: '이러이러한 구현 단위', isBlocked: false },
        { title: '이러이러한 구현 단위', isBlocked: false },
        { title: '이러이러한 구현 단위', isBlocked: true },
    ],
};

const initData = {
    large: -1,
    medium: -1,
    small: -1,
    more: [],
    nextStep: 0,
};

export { dummyLargeData, dummyMediumData, dummySmallData, dummyMoreData, initData };
