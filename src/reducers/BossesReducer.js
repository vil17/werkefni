import { GET_BOSS } from '../constants'

const bossReducer = (state = [], action) => {
    console.log('reducer')
    switch (action.type) {
        case GET_BOSS: return Object.assign({}, state, {
            articles: [...state.bosses, action.payload] /// /arf ad skoda thetta er ekki viss med thetta
        });;
        default: return state.bosses = { bosses: 'hi'};
    }
}

export default bossReducer;