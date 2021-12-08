import useSWR from 'swr';
import { observer } from 'mobx-react';
import { Status } from '@Components/UI';
import { fetcher } from '@Hooks/';
import store from '@Stores/inspection';

const TaskItem = props => {
    const { index, name, timestamp, onClick = () => {} } = props;

    const isSelected = store.selectedTaskIndex === index ? 1 : 0;

    // TODO_P :: Status 붙이고 Style 수정

    return (
        <li className='taskItem' mode={isSelected} onClick={onClick}>
            <div className='taskInfo'>
                <span className='taskName'>{name}</span>
                <span className='taskDescription'>{timestamp}</span>
            </div>

            <div className='status'>
                <Status status={'pending'} />
            </div>
        </li>
    );
};

export default observer(TaskItem);
