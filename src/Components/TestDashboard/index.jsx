import '@Styles/testDashboard.css';

// TODO_P :: 이거 스타일 상속 관련 나중에 설정 (testDashboard가 Card를 상속)
import '@Styles/card.css';
import TaskItem from './TaskItem';
import { useState } from 'react';
import { observer } from 'mobx-react';
import { DummyCircle } from '@Dummy/DummyComponents';
import ProgressBar from '@Components/ProgressBar';
import TaskInformation from './TaskInformation';
import store from '@Stores/inspection';

import { dummyTasks } from '@Dummy/dummyTask.js';

const TestDashboard = () => {
    const [nowIndex, setIndex] = useState(0);

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
                <Header title={dummyTasks[nowIndex]['taskTitle']} timestamp={dummyTasks[nowIndex]['taskDescription']} />
                <ProgressBar steps={dummyTasks[nowIndex]['progress']} />
                <TaskInformation />
                {/* 적용 가능한 정책 list => 새로운 form */}
            </div>
        </div>
    );
};

export default observer(TestDashboard);

const Header = props => {
    const { title = '테스트 이름', timestamp = 'YYYY년 MM월 DD일 오전 HH:MM:SS' } = props;

    const dummyCircleSize = '45px';

    return (
        <div className='taskDetailHeader'>
            <div className='taskDetailInfoWrapper'>
                <span className='title'>{title}</span>
                <span className='time'>{timestamp}</span>
            </div>
            <div className='functions'>
                <DummyCircle color='red' size={dummyCircleSize} style={{ marginRight: '40px' }} />
                <DummyCircle color='gray' size={dummyCircleSize} style={{ marginRight: '20px' }} />
                <DummyCircle color='gray' size={dummyCircleSize} />
            </div>
        </div>
    );
};
