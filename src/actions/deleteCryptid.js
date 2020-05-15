export const deleteCryptid = (cryptidId) => {
    return (dispatch) => {
        return fetch(`http://localhost:3000/cryptids/${cryptidId}`, {
            method: "DELETE"
        })
        .then(response => response.json())
        .then(cryptid => dispatch({type: "DELETE_CRYPTID", payload: cryptid}))
    }
}