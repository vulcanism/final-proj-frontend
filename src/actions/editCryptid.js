export const editCryptid = (data) => {
    return (dispatch) => {
        fetch(`http://localhost:3000/cryptids${data.id}`, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            method: "PATCH",
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(cryptid => dispatch({type: "EDIT_CRYPTID", payload: cryptid}))
    }

}