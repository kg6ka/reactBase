import { COUNTER_STATE } from '../constants/Count';

export function setCount(count) {
    return (dispatch) => {
        dispatch({
            type: COUNTER_STATE,
            payload: count
        })
    }
}