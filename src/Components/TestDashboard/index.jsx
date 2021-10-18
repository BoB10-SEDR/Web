import '@Styles/testDashboard.css';

const TestDashboard = () => {
    return (
        <div id='testDashboard'>
            <div className='taskListWrapper'>
                <h4>title</h4>
                <hr />
                <ul className='taskList'></ul>
                {/* list item => Status 포함해서 내부구성 */}
            </div>

            <div className='taskDetail'>
                {/* header => 타이틀 및 타임스탬프와 정보갱신, 기록 저장 등등 버튼 */}
                {/* Progress bar => 구현해야함 */}
                {/* 좌우 Column => 그리드 적용 7:3 */}
                {/* 적용 가능한 정책 list => 새로운 form */}
            </div>
        </div>
    );
};

export default TestDashboard;
