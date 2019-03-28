//import bossService from '../services'
import { FETCH_BOSSES, ADD_BOSS } from '../constants'

export const getBosses = () => dispatch => {
    fetch("http://localhost:4500/api/bosses")
        .then(resp => { console.log(resp, 'asdasdasdasd'); return resp.json() })
        .then(bossList => {
            console.log('inside dispatch');
            dispatch({
                type: FETCH_BOSSES,
                payload: bossList
            })
        }
        ).then(stuff => console.log(stuff))
}

export const createBoss = boss => dispatch => {
    console.log('adding boss')
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

