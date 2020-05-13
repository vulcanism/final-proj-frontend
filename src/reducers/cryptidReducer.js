export default function cryptidReducer(state = {cryptids: []}, action ) {    

    switch (action.type) {
        case "FETCH_CRYPTIDS":
            return {cryptids: action.payload}

        case "ADD_CRYPTID":
            return {...state, cryptids: [...state.cryptids, action.payload]}

        case "ADD_SIGHTING":
            return {}

    
        default:
            return state
    }    

}