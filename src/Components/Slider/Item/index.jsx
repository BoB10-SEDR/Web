const Item = props => {
    const {
        data = [],
        nowSelected,
        nowTabIndex,
        setSelectedItemIndex: setIndex,
        borderColor = 'red',
        fontColor = '#FFFFFF',
        handleListIdxChange,
    } = props;
    // data에는 최대 8개씩 모듈 정보가 담겨있을 예정...

    return (
        <ul id='carouselList'>
            {data.map((e, idx) => {
                const { name = '제목 없음', info = '설명 없음' } = e;

                const moduleName = name;
                const moduleDetail = `${info['description'].slice(0, 10)}...`;

                const handleClick = () => {
                    setIndex(idx);

                    handleListIdxChange(nowTabIndex, idx);
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
