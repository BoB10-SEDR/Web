import '@Styles/ui.css';
import { forwardRef, useEffect, useRef } from 'react';

const CheckBox = forwardRef((props, ref) => {
    const { indeterminate, ...rest } = props;
    const defaultRef = useRef();
    const resolvedRef = ref || defaultRef;

    useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
        <div className='checkBox'>
            <label>
                <input type='checkbox' ref={resolvedRef} {...rest} />
                <span className='checkMark'></span>
            </label>
        </div>
    );
});

export default CheckBox;
