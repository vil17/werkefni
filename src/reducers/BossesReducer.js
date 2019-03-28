import { FETCH_BOSSES, ADD_BOSS, FETCH_BOSS_DETAIL, EDIT_BOSS, DELETE_BOSS } from '../constants'

const initialState = {
    items: [],
    item: {},
    boss: {}
}

const bossReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_BOSSES:
            return Object.assign({}, state, {
                ...state,
                items: action.payload /// /arf ad skoda thetta er ekki viss med thetta
            });
            case ADD_BOSS: {
                //console.log('reducerAddBoss')
                return Object.assign({}, state, {
                    ...state,
                    item: action.payload /// /arf ad skoda thetta er ekki viss med thetta
                    });
            }
            case FETCH_BOSS_DETAIL: {
                //console.log('reducerDetail')
                //console.log('thisdude', action.payload)
                return Object.assign({}, state, {
                    ...state,
                    boss: action.payload /// /arf ad skoda thetta er ekki viss med thetta
                    });
            }
            case EDIT_BOSS: {
                //console.log('reducerDetail')
                //console.log('thisdude', action.payload)
                return Object.assign({}, state, {
                    newBoss: action.payload /// /arf ad skoda thetta er ekki viss med thetta
                    });
            }
            case DELETE_BOSS: {
                //console.log('reducerDetail')
                console.log('thisdude deleteboss', action.payload)
                return Object.assign({}, state, {
                    newBoss: action.payload /// /arf ad skoda thetta er ekki viss med thetta
                    });
            }

            // case FETCH_BOSSES: return Object.assign({}, state, {
        //     articles: [...state.bosses, action.payload] /// /arf ad skoda thetta er ekki viss med thetta
        // });
        default: return state;
    }
}

export default bossReducer;