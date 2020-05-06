export default function cryptidReducer(state = {cryptids: []}, action ) {    

    switch (action.type) {
        case "FETCH_CRYPTIDS":
            return {cryptids: action.payload}

        case "ADD_CRYPTID":
            return {...state, cryptids: [...state.cryptids, action.payload]}

    
        default:
            return state
    }    

}