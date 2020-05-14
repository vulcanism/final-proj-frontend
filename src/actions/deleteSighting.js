export const deleteSighting = (sightingId, cryptidId) => {
    return (dispatch) => {
        return fetch(`http://localhost:3000/cryptids/${cryptidId}/sightings/${sightingId}`, {
            method: "DELETE"
        })
        .then(response => response.json())
        .then(cryptid => dispatch({type: "DELETE_SIGHTING", payload: cryptid}))
    }
}