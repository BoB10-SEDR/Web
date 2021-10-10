import '@Styles/ui.css';
import { forwardRef, useEffect, useRef } from 'react';

const CheckBox = forwardRef(({ indeterminate, ...rest }, ref) => {
    const defaultRef = useRef();
    const resolvedRef = ref || defaultRef;

    useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate;
    }, [resolvedRef, indeterminate]);

    return (
        <label className='checkBox'>
            <input type='checkbox' ref={resolvedRef} {...rest} />
            <span className='checkMark'></span>
        </label>
    );
});

export default CheckBox;
