export const addSighting = (sighting, cryptidId) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/cryptids/${cryptidId}/sightings`, {            
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(sighting)
        })
        .then(response => response.json())
        .then(sighting => dispatch({type: "ADD_SIGHTING", payload: sighting}))
    }
}