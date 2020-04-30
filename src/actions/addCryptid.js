export const addCryptid = (data) => {
    return (dispatch) => {
        fetch("http://localhost:3000/cryptids", {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            method: "POST",
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(cryptid => dispatch({type: "ADD_CRYPTID", payload: cryptid}))
    }

}