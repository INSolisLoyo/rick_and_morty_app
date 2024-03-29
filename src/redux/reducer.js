import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./action-types";


const initialState = {
    myFavorites: [],
    allCharacters: []
};

const reducer = (state = initialState, action) => {
    switch(action.type){

        case ADD_FAV:
            const copyAllCharacter = [ ...state.allCharacters, action.payload ];
            return {
                ...state,
                myFavorites : copyAllCharacter,
                allCharacters: [...copyAllCharacter]
            }

        case FILTER:
            const copyFilter = state.allCharacters.filter((character) => character.gender === action.payload)
            return {
                ...state,
                myFavorites: copyFilter
            }

        case ORDER:
            const orderCharacter = state.allCharacters.sort( (a, b) => {
                if(action.payload === "A"){
                    if(a.id < b.id) return -1
                    if(b.id < a.id) return 1
                    return 0
                }
                else {
                    if(a.id < b.id) return 1
                    if(b.id < a.id) return -1
                    return 0
                }
            })

            return {
                ...state,
                myFavorites: [ ...orderCharacter ]
            }

        case REMOVE_FAV:
            let deleteCharacter = state.myFavorites.filter(character => character.id !== Number(action.payload))
            return {
                ...state, 
                myFavorites: deleteCharacter
            }
        default:
            return {
                ...state
            }
    }
};

export default reducer;