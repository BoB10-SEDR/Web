import { useMemo } from 'react';
import { observer } from 'mobx-react';
import { Status } from '@Components/UI';
import { formatTimestamp } from '@Functions/';

// TODO_P :: Status 붙이고 Style 수정
const TaskItem = props => {
    const { item = {} } = props;
    const {
        name,
        timestamp: rawTimestamp,
        total_level: totalLevel = 0,
        now_level: nowLevel = 0,
        process_info: processInfo = [],
    } = item;

    const updateStatus = () => {
        if (totalLevel === nowLevel) return processInfo[totalLevel - 1].status;

        for (let i = 0; i < processInfo.length; i++) {
            if (processInfo[i].status === 'FAIL') return 'FAIL';
        }
        return processInfo[0].status === 'IN PROGRESS' ? 'IN PROGRESS' : 'PENDING';
    };

    const status = useMemo(() => updateStatus(), [processInfo]);
    const timestamp = useMemo(() => formatTimestamp(rawTimestamp), [rawTimestamp]);

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
