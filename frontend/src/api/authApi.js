import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

export const signup = (userData) => axios.post(`${API_URL}/signup`, userData);
export const login = (userData) => axios.post(`${API_URL}/login`, userData);
