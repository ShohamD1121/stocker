import axios from 'axios';

const url = "http://localhost:5000/emails";

export const sendEmail = (newEmail) => axios.post(url, newEmail);