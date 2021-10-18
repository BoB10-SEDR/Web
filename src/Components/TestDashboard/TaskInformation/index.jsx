import { Col } from '@Components/Grid';
import { Row } from '@Components/Grid';
import '@Styles/taskInformation.css';

const TaskInformation = props => {
    return (
        <div id='taskInformation'>
            <Row>
                <Col lg={7}>
                    <ProcessDetail />
                </Col>
                <Col lg={5}>
                    <TaskDetail />
                </Col>
            </Row>
        </div>
    );
};

export default TaskInformation;

const CardWithoutTitle = props => {
    const { title = '제목 없음', children } = props;

    return (
        <>
            <span className='title' style={{ display: 'block' }}>
                {title}
            </span>
            <div className='process'>{children}</div>
        </>
    );
};

const ProcessDetail = props => {
    return <CardWithoutTitle title='진행 상황'></CardWithoutTitle>;
};

const TaskDetail = props => {
    return <CardWithoutTitle title='Task 설명'></CardWithoutTitle>;
};
