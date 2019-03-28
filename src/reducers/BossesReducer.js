import { FETCH_BOSSES, ADD_BOSS } from '../constants'

const initialState = {
    items: [],
    item: {}
}

const bossReducer = (state = initialState, action) => {
    console.log(state, action, ' herres')
    switch (action.type) {
        case FETCH_BOSSES:
            console.log('reducer')
            return Object.assign({}, state, {
                ...state,
                items: action.payload /// /arf ad skoda thetta er ekki viss med thetta
            });
        case ADD_BOSS: {
            console.log('reducerAddBoss')
            return Object.assign({}, state, {
                ...state,
                item: action.payload /// /arf ad skoda thetta er ekki viss med thetta
                });
        }

            // case FETCH_BOSSES: return Object.assign({}, state, {
        //     articles: [...state.bosses, action.payload] /// /arf ad skoda thetta er ekki viss med thetta
        // });
        default: return state;
    }
}

export default bossReducer;