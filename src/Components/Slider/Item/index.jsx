import dummyModuleList from '@Dummy/dummyModuleList.json';

const Item = props => {
    const { data, nowSelected, setSelectedItemIndex: setIndex, borderColor = 'red', fontColor = '#FFFFFF' } = props;

    const rcvData = dummyModuleList;
    // data에는 최대 8개씩 모듈 정보가 담겨있을 예정...

    return (
        <ul id='carouselList'>
            {rcvData['modulePreviewList'].map((e, idx) => {
                const { moduleName = '제목 없음', moduleDetail = '설명 없음' } = e;

                const handleClick = () => {
                    setIndex(idx);
                };

                return (
                    <li
                        id='carouselListItem'
                        style={{
                            border: `3px solid ${idx === nowSelected ? borderColor : 'transparent'}`,
                            fontColor: `${fontColor}`,
                        }}
                        onClick={handleClick}
                    >
                        <div className='content'>
                            <div className='moduleIcon'>
                                <img src='' alt='' />
                            </div>

                            <article className='description'>
                                <h4 className='title'>{moduleName}</h4>
                                <p className='detail'>{moduleDetail}</p>
                            </article>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
};

export default Item;
