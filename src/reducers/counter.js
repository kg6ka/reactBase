import { COUNTER_STATE } from '../constants/Count';

const initialState = {
    count: 0
};

export default function counterState(state = initialState, action) {
    switch (action.type) {
        case COUNTER_STATE:
            return {...state, count: action.payload + 1};
        default:
            return state;
    }
}