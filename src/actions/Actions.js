import ActionType from './ActionTypes';

export const registerUser = (body) => {
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000',
            'Authorization': `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTYxMjIzMDM0OCwiaWF0IjoxNjEyMTk0MzQ4fQ.c91Gd8lmh7B_UyXKJM-AZcUHdqZOWWaeHIxm6-NTKQ4`
        },
        body: JSON.stringify(body),
        redirect: 'follow'
    };

    return dispatch => {
        dispatch(updateRegisterStatus('PENDING'))
        fetch('http://localhost:8080/authenticate/createUser', requestOptions)
            .then(response => {
                if (response.status === 201) {
                    dispatch(updateRegisterStatus('SUCCESS'));
                } else {
                    dispatch(updateRegisterStatus('FAILED'));
                }

                return response.json();
            })
            .then(json => {
                console.log(json);
            })
    }
}

export const updateRegisterStatus = (status) => {
    return ({
        type: ActionType.REGISTER_STATUS,
        payload: status
    })
}