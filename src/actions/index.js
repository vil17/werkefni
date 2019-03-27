import bossService from '../services'
import { GET_BOSS } from '../constants'

export const getBosses = () => {
    console.log('inGetBosses')
    return (dispatch) => {
        console.log('in return');
        return bossService.getBosses().then(resp => { console.log(resp, 'asdasdasdasd')})
        // .then(data => {
        //     dispatch(getBossesSuccess(data)).catch(error => {
        //         dispatch(getBossesFailure(error));
        //     });
        // })
    }
}

export const getBossesSuccess = (bosslist) => {
    
    return {
        type: GET_BOSS,
        payload: bosslist
    }
}

export const getBossesFailure = (bosslist) => {
    return {
        type: GET_BOSS,
        payload: bosslist
    }
}

