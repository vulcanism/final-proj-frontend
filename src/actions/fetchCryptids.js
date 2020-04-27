export function fetchCryptids() {

    return (dispatch) => {
        fetch("http://localhost:3000/cryptids")
        .then(response => response.json())
        .then(data => dispatch({
            type: "FETCH_CRYPTIDS",
            payload: data
        }))
    }
}