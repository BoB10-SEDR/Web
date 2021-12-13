const solutions = [
    {
        name: '기기',
        mid: [
            {
                name: '서비스 설정',
                sub: [
                    {
                        name: '권한 관리',
                        last: [],
                    },
                    {
                        name: '상태 관리',
                        last: [],
                    },
                    {
                        name: '기타 설정 관리',
                        last: [],
                    },
                ],
            },
            {
                name: '포트 및 인터페이스 설정',
                sub: [
                    {
                        name: '권한 관리',
                        last: [],
                    },
                    {
                        name: '상태 관리',
                        last: [],
                    },
                ],
            },
            {
                name: '파일 및 디렉토리 설정',
                sub: [
                    {
                        name: '권한 관리',
                        last: [],
                    },
                    {
                        name: '상태 관리',
                        last: [],
                    },
                    {
                        name: '로그 관리',
                        last: [],
                    },
                ],
            },
            {
                name: '데이터 보호',
                sub: [
                    {
                        name: '유효성 검증',
                        last: [],
                    },
                    {
                        name: '무결성 검증',
                        last: [],
                    },
                    {
                        name: '데이터 관리',
                        last: [],
                    },
                ],
            },
            {
                name: 'OS 보안',
                sub: [],
            },
            {
                name: '하드웨어 보안',
                sub: [],
            },
        ],
    },
    {
        name: '사용자 계정',
        mid: [
            {
                name: '설정 관리',
                sub: [
                    {
                        name: '권한 관련',
                        last: [],
                    },
                    {
                        name: '일반 관련 (권한 외)',
                        last: [],
                    },
                ],
            },
            {
                name: '인증정보 관리',
                sub: [
                    {
                        name: '패스워드',
                        last: [],
                    },
                    {
                        name: '초기 인증정보',
                        last: [],
                    },
                ],
            },
        ],
    },
    {
        name: '네트워크',
        mid: [
            {
                name: '통신 관리',
                sub: [
                    {
                        name: '인증',
                        last: [],
                    },
                    {
                        name: '전송 데이터 보호',
                        last: [],
                    },
                ],
            },
            {
                name: '세션',
                sub: [
                    {
                        name: '세션 관리',
                        last: [],
                    },
                    {
                        name: '세션 설정',
                        last: [],
                    },
                ],
            },
            {
                name: '접근 제어',
                sub: [
                    {
                        name: 'ACL 설정',
                        last: [
                            {
                                idx: 2,
                                name: '관리자 중복접속 방지',
                            },
                            {
                                idx: 3,
                                name: 'SNMP 커뮤니티 권한 설정',
                            },
                            {
                                idx: 196,
                                name: '접속 IP 및 포트 제한',
                            },
                        ],
                    },
                    {
                        name: '기타 설정',
                        last: [],
                    },
                ],
            },
        ],
    },
    {
        name: '제품 보안',
        mid: [
            {
                name: '개발 보안',
                sub: [],
            },
            {
                name: '저장 데이터 보호',
                sub: [],
            },
            {
                name: '보안요소 알림',
                sub: [],
            },
            {
                name: '안전한 암호',
                sub: [],
            },
            {
                name: '정보 조회',
                sub: [],
            },
            {
                name: '자체 시험',
                sub: [],
            },
        ],
    },
];

export default solutions;
