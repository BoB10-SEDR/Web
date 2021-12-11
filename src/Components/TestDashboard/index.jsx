import '@Styles/testDashboard.css';

// TODO_P :: 이거 스타일 상속 관련 나중에 설정 (testDashboard가 Card를 상속)
import '@Styles/card.css';
import TaskItem from './TaskItem';
import useSWR from 'swr';
import { observer } from 'mobx-react';
import { CustomTabList, CustomTab, CustomTabPanel } from '@Components/CustomTabs';
import { Tabs } from 'react-tabs';
import { DummyCircle } from '@Dummy/DummyComponents';
import ProgressBar from '@Components/ProgressBar';
import TaskInformation from './TaskInformation';
import store from '@Stores/inspection';
import { fetcher } from '@Hooks/';
import dummy from '@Dummy/testDashboard';

import { dummyTasks } from '@Dummy/dummyTask.js';

const TestDashboard = () => {
    const tasks = store.ticketList;
    const requestConfig = { params: { task_queue: tasks } };
    const { data = dummy } = useSWR(tasks.length ? `/inspection/task` : null, url =>
        fetcher(url, requestConfig, { refreshInterval: 5000 })
    );

    const taskInfo = data.task_info ?? [];

    const handleSelect = index => {
        store.setActiveTab(index);
    };

    return (
        <div id='testDashboard' className='card'>
            <Tabs
                className='tabs'
                selectedIndex={store.activeTab}
                selectedTabClassName='active'
                onSelect={handleSelect}
            >
                <div className='taskListWrapper'>
                    <h6>Test Dashboard</h6>
                    <div className='hr' />
                    <ul className='taskList'>
                        <CustomTabList>
                            {taskInfo.map((item, index) => {
                                const { ticket_idx: ticketIndex = index } = item;
                                return (
                                    <CustomTab key={ticketIndex} tabIndex={index}>
                                        <TaskItem tabIndex={index} item={item} />
                                    </CustomTab>
                                );
                            })}
                        </CustomTabList>
                    </ul>
                </div>
                <div className='taskDetail'>
                    {taskInfo.map((item, index) => {
                        const { ticket_idx: ticketIndex = index } = item;
                        return (
                            <CustomTabPanel key={ticketIndex}>
                                <TaskDetail item={item} />
                            </CustomTabPanel>
                        );
                    })}
                </div>
                {/* 적용 가능한 정책 list => 새로운 form */}
            </Tabs>
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
    const { item = {} } = props;
    const { name: title, timestamp, process_info: steps = [] } = item;

    return (
        <>
            <Header title={title} timestamp={timestamp} />
            <ProgressBar steps={steps} />
            <TaskInformation />
            {/* 적용 가능한 정책 list => 새로운 form */}
        </>
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
