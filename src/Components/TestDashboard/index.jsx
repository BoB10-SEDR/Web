import '@Styles/testDashboard.css';

// TODO_P :: 이거 스타일 상속 관련 나중에 설정 (testDashboard가 Card를 상속)
import '@Styles/card.css';
import TaskItem from './TaskItem';
import { useState, useEffect } from 'react';
import useSWR from 'swr';
import { observer } from 'mobx-react';
import { DummyCircle } from '@Dummy/DummyComponents';
import ProgressBar from '@Components/ProgressBar';
import TaskInformation from './TaskInformation';
import store from '@Stores/inspection';
import { fetcher } from '@Hooks/';

import { dummyTasks } from '@Dummy/dummyTask.js';

const TestDashboard = props => {
    const initData = [
        {
            name: '',
            timestamp: '',
            processData: [],
        },
    ];
    let { data = initData, isValidating } = useSWR(`/inspeciton/task`, url => fetcher(url));
    const [name, setName] = useState('');
    const [timestamp, setTimestamp] = useState('');
    const [processData, setProcessData] = useState([]);

    // useEffect(() => {
    //     console.log(data[0].task_info);
    //     setName(name);
    //     setTimestamp(timestamp);
    //     setProcessData = data.process_info[store.selectedTaskIndex];
    // }, [isValidating]);

    return (
        <div id='testDashboard' className='card'>
            <TaskList data={data} />
            <TaskDetail title={name} timestamp={timestamp} processData={processData} />
        </div>
    );
};

const TaskList = props => {
    const { data = [] } = props;

    const handleClick = index => {
        store.setSelectedTaskIndex(index);
    };

    return (
        <div className='taskListWrapper'>
            <h6>Test Dashboard</h6>
            <div className='hr' />
            <ul className='taskList'>
                {data.map((item, index) => {
                    const { name, timestamp } = item;
                    return (
                        <TaskItem
                            key={index}
                            index={index}
                            name={name}
                            timestamp={timestamp}
                            onClick={() => handleClick(index)}
                        />
                    );
                })}
            </ul>
        </div>
    );
};

const TaskDetail = props => {
    const { title, timestamp, processData = [] } = props;
    return (
        <div className='taskDetail'>
            <Header title={title} timestamp={timestamp} />
            <ProgressBar steps={processData} />
            <TaskInformation />
            {/* 적용 가능한 정책 list => 새로운 form */}
        </div>
    );
};

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

export default observer(TestDashboard);
