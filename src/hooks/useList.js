import { useEffect } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';

const useList = (fetchList, atomState) => {
    const [ listState, setListState ] = useRecoilState(atomState);
    const list = useRecoilValue(fetchList);

    useEffect(() => {
        setListState(list)
    }, [list])
    
    return {
        data: listState
    }
}

export default useList;