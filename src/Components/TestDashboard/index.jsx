import '@Styles/testDashboard.css';

// TODO_P :: 이거 스타일 상속 관련 나중에 설정 (testDashboard가 Card를 상속)
import '@Styles/card.css';
import { Row } from '@Components/Grid';
import { Col } from '@Components/Grid';
import TaskItem from './TaskItem';
import { useState } from 'react';
import { DummyCircle } from '@Dummy/DummyComponents';

const TestDashboard = () => {
    const [nowIndex, setIndex] = useState(0);

    const dummyTasks = [
        { taskTitle: '작업 명 1', taskDescription: 'task 상세설명 혹은 시간 1', status: 'pending' },
        { taskTitle: '작업 명 2', taskDescription: 'task 상세설명 혹은 시간 2', status: 'blocked' },
        { taskTitle: '작업 명 3', taskDescription: 'task 상세설명 혹은 시간 3', status: 'unblocked' },
    ];

    return (
        <div id='testDashboard' className='card'>
            <div className='taskListWrapper'>
                <h6>Test Dashboard</h6>
                <div className='hr' />
                <ul className='taskList'>
                    {dummyTasks.map((e, i) => (
                        <TaskItem {...e} index={i} selectedIndex={nowIndex} setIndex={setIndex} />
                    ))}
                </ul>
            </div>
            <div className='taskDetail'>
                {/* header => 타이틀 및 타임스탬프와 정보갱신, 기록 저장 등등 버튼 */}
                <Header title={dummyTasks[nowIndex]['taskTitle']} timestamp={dummyTasks[nowIndex]['taskDescription']} />
                {/* Progress bar => 구현해야함 */}
                {/* 좌우 Column => 그리드 적용 7:3 */}
                {/* 적용 가능한 정책 list => 새로운 form */}
            </div>
        </div>
    );
};

export default TestDashboard;

const Header = props => {
    const { title = '테스트 이름', timestamp = 'YYYY년 MM월 DD일 오전 HH:MM:SS' } = props;

    return (
        <div className='taskDetailHeader'>
            <div className='taskDetailInfoWrapper'>
                <span className='title'>{title}</span>
                <span className='time'>{timestamp}</span>
            </div>
            <div className='functions'>
                <DummyCircle color='red' size='50px' style={{ marginRight: '40px' }} />
                <DummyCircle color='gray' size='50px' style={{ marginRight: '20px' }} />
                <DummyCircle color='gray' size='50px' />
            </div>
        </div>
    );
};
