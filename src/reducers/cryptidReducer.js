export default function cryptidReducer(state = {cryptids: []}, action ) {    

    switch (action.type) {
        case "FETCH_CRYPTIDS":
            return {cryptids: action.payload}

        case "ADD_CRYPTID":
            return {...state, cryptids: [...state.cryptids, action.payload]}

        case "ADD_SIGHTING":
            let cryptids = state.cryptids.map(cryptid => {
                if (cryptid.id === action.payload.id) {
                    return action.payload
                } else {
                    return cryptid
                }
            })
            return {...state, cryptids: cryptids}
            

    
        default:
            return state
    }    

}