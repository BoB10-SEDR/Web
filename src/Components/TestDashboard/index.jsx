import '@Styles/testDashboard.css';

// TODO_P :: 이거 스타일 상속 관련 나중에 설정 (testDashboard가 Card를 상속)
import '@Styles/card.css';
import TaskItem from './TaskItem';
import TaskDetail from './TaskDetail';
import useSWR from 'swr';
import { observer } from 'mobx-react';
import { CustomTabList, CustomTab, CustomTabPanel } from '@Components/CustomTabs';
import { Tabs } from 'react-tabs';
import store from '@Stores/inspection';
import { fetcher } from '@Hooks/';
import dummy from '@Dummy/testDashboard';

const TestDashboard = () => {
    const { data = dummy } = useSWR(`/inspection/task`, url => fetcher(url, { refreshInterval: 5000 }));

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
                    <div className='header'>
                        <h6>Test Dashboard</h6>
                        <div className='hr' />
                    </div>
                    <div className='body'>
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

export default observer(TestDashboard);
