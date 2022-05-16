import axios from 'axios';

const url = "https://stocker-website.herokuapp.com/emails";

export const sendEmail = (newEmail) => axios.post(url, newEmail);