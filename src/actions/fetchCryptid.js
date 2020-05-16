export function fetchCryptid(id) {  
    return (dispatch) => {
        fetch(`http://localhost:3000/cryptids/${id}`)
        .then(response => response.json())
        .then(cryptid => dispatch({
            type: "FETCH_CRYPTID",
            payload: cryptid
        }))
    }
}