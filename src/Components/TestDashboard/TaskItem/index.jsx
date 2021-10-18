const TaskItem = props => {
    const {
        taskTitle = '작업 명',
        taskDescription = 'task 상세설명 혹은 시간',
        selectedIndex,
        index,
        setIndex,
        status,
    } = props;

    const isSelected = selectedIndex === index ? 1 : 0;

    const handleClick = e => {
        e.preventDefault();

        setIndex(index);
    };

    // TODO_P :: Status 붙이고 Style 수정

    return (
        <li className='taskItem' mode={isSelected} onClick={handleClick}>
            <div className='taskInfo'>
                <span className='taskName'>{taskTitle}</span>
                <span className='taskDescription'>{taskDescription}</span>
            </div>

            <div className='status'>
                {status}
                {/* Status UI */}
            </div>
        </li>
    );
};

export default TaskItem;
