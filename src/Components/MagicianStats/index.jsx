import { useState } from 'react';
import useSWR from 'swr';
import { Col } from '@Components/Grid';
import Card from '@Components/Card';
import d from '@Dummy/magician';
import CardBodyForm from '@Components/Card/Form';
import { fetcher } from '@Hooks/';

const red = '#F02632';
const blue = '#727CF5';
const pink = '#F66C6C';
const green = '#61CA68';

const MagicianStats = () => {
    const [start, setStart] = useState('2020-01-01');
    const [time, setTime] = useState(14400);

    const { data: statData, error: statDataError } = useSWR(`/dashboard/statistics?start=${start}&time=${time}`, url =>
        fetcher(url)
    );

    const { info, fail, module } = statData ? statData[0] : d;

    return (
        <>
            <Col md={4} xl={4} mb>
                <Card>
                    <CardBodyForm titleFontColor={red} title='전체 로그 수' content={info.toLocaleString()} />
                </Card>
            </Col>
            <Col md={4} xl={4} mb>
                <Card>
                    <CardBodyForm titleFontColor={blue} title='장애 로그 수' content={fail.toLocaleString()} />
                </Card>
            </Col>
            <Col md={4} xl={4} mb>
                <Card>
                    <CardBodyForm titleFontColor={green} title='연관 장치 수' content={module.toLocaleString()} />
                </Card>
            </Col>
        </>
    );
};

export default MagicianStats;
