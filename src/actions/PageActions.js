import { GET_PHOTOS_REQUEST } from '../constants/Page';
import { getStuff } from '../utils/stuffService';

export function getPhotos(year) {
    return (dispatch) => {
        dispatch({
            type: GET_PHOTOS_REQUEST,
            payload: year
        });

        /*setTimeout(() => {
            dispatch({
                type: GET_PHOTOS_SUCCESS,
                payload: [1,2,3,4,5]
            })
        }, 1000);*/
        getStuff()
            .then(res => console.log('stuff', res))
            .catch(err => console.log('ERROR', err))
    }
}