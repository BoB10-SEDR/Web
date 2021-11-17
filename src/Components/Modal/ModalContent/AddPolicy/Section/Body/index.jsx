const Body = ({ content = [], selected, setIdx, multiSelect }) => {
    return (
        <ul className='bodyList'>
            {content.map((e, idx) => {
                const { title, isBlocked: blocked } = e;

                const isSelected = !blocked && idx === selected ? 1 : 0;
                const isBlocked = blocked ? 1 : 0;

                const handleClick = elem => {
                    elem.preventDefault();

                    if (blocked) return;

                    const clickedIdx = Number(elem.target.id);

                    setIdx(clickedIdx);
                };

                return (
                    <li
                        key={idx}
                        className='bodyListItem'
                        id={`${idx}`}
                        isSelected={isSelected}
                        isBlocked={isBlocked}
                        onClick={handleClick}
                    >
                        {title}
                    </li>
                );
            })}
        </ul>
    );
};

export default Body;
