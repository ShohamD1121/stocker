import * as api from '../api';

export const sendEmail = (email) => async (dispatch) => {
    try {
        const {data } = await api.sendEmail(email);
        dispatch({type : 'SEND', payload : data})
    } catch (error) {
        console.log(error);
    }
}