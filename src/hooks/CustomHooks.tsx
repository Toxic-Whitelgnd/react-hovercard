import { useCallback } from 'react';

function useCustomButtonClick(onClick: () => void) {
    const handleClick = useCallback(() => {
        onClick();
    }, [onClick]);

    return handleClick;
}


export {useCustomButtonClick}