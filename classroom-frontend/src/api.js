import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const loginUser = (data) => API.post('/users/login', data);
export const registerUser = (data) => API.post('/users/register', data);
export const getAllUsers = () => API.get('/users');
export const getAllClassrooms = () => API.get('/classrooms');
export const createClassroom = (data) => API.post('/classrooms', data);
export const assignTeacher = (id, data) => API.put(`/classrooms/${id}/assign-teacher`, data);
