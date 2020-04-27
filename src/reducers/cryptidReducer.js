export default function cryptidReducer(state = {sightings: []}, action ) {

    switch (action.type) {
        case "FETCH_CRYPTIDS":
            return {cryptids: action.payload}

    
        default:
            return state
    }    

}