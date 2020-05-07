export function fetchCryptids() {  
    return (dispatch) => {
        fetch("http://localhost:3000/cryptids")
        .then(response => response.json())
        .then(cryptids => dispatch({
            type: "FETCH_CRYPTIDS",
            payload: cryptids
        }))
    }
}