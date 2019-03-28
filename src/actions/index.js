//import bossService from '../services'
import { FETCH_BOSSES, ADD_BOSS, FETCH_BOSS_DETAIL } from '../constants'

export const getBosses = () => dispatch => {
    fetch("http://localhost:4500/api/bosses")
        .then(resp => { return resp.json() })
        .then(bossList => {
            console.log('inside dispatch');
            dispatch({
                type: FETCH_BOSSES,
                payload: bossList
            })
        }
        )
}

export const getBossDetail = (id) => dispatch => {
    //console.log('inside detil action')
    fetch(`http://localhost:4500/api/bosses/${id}`)
        .then(resp => { return resp.json() })
        .then(bossDetail => {
            //console.log(bossDetail);
            dispatch({
                type: FETCH_BOSS_DETAIL,
                payload: bossDetail
            })
        }
        )
}

export const createBoss = boss => dispatch => {
    fetch('http://localhost:4500/api/bosses', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(boss)
    })
        .then(res => res.json())
        .then(stuff => console.log(stuff))
        .then(boss =>
            dispatch({
                type: ADD_BOSS,
                payload: boss
            }
            )
        )
}


// export const getBossesSuccess = (bosslist) => {

//     return {
//         type: FETCH_BOSSES,
//         payload: bosslist
//     }
// }

// export const getBossesFailure = (bosslist) => {
//     return {
//         type: FETCH_BOSSES,
//         payload: bosslist
//     }
// }

