import { useMemo } from 'react';
import { observer } from 'mobx-react';
import { Status } from '@Components/UI';

// TODO_P :: Status 붙이고 Style 수정
const TaskItem = props => {
    const { item = {} } = props;
    const { name, timestamp, total_level: totalLevel = 0, now_level: nowLevel = 0 } = item;

    const updateStatus = (totalLevel, nowLevel) => {
        return nowLevel < totalLevel ? 'pending' : '양호';
    };

    const status = useMemo(() => updateStatus(totalLevel, nowLevel), [totalLevel, nowLevel]);

    return (
        <li className='taskItem'>
            <div className='taskInfo'>
                <span className='taskName'>{name}</span>
                <span className='taskDescription'>{timestamp}</span>
            </div>

            <div className='status'>
                <Status status={status} />
            </div>
        </li>
    );
};

export default observer(TaskItem);
