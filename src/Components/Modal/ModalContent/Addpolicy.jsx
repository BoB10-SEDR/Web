const AddPolicy = props => {
    // 더미 만들기
    // 로직 (콜백함수) 구성

    return (
        <>
            <div className='headerWrapper'>
                <h3 className='addPolicyHeader'>정책 추가하기</h3>
                <span>원하는 정책을 고르고, 설정후 추가</span>
            </div>

            <div className='bodyWrapper'>
                <Section name='large' />
                {/* <Section name="medium" />
                <Section name="small" />
                <Section name="more" /> */}
            </div>
        </>
    );
};

const Section = props => {
    const { name = 'default' } = props;

    const headContent = '대분류';
    const bodyContent = ['기기', '사용자', '네트워크', '기타'];

    return (
        <div className={`section ${name}Cat`}>
            <Head content={headContent} />
            <Body content={bodyContent} />
        </div>
    );
};

const Head = ({ headContent = '테이블 헤더' }) => {
    return <h4 className='sectionHeader'>{headContent}</h4>;
};

const Body = ({ bodyContent = [] }) => {
    return (
        <ul className='sectionBody'>
            {bodyContent.map(e => {
                return <li></li>;
            })}
        </ul>
    );
};

export default AddPolicy;
