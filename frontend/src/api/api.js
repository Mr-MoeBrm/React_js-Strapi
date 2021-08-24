import axios from 'axios';

const API = axios.create({baseURL:'http://localhost:1337'});




export const FetchOffers=()=>API.get('/offres');
export const FetchOffer=(id)=>API.get(`/offres/${id}`);
export const SubmitInOffre=(data)=>API.post('/candidates',data);
export const SubmitInMain=(data)=>API.post('/mains',data);
export const Contact=(data)=>API.post('/contact',data);