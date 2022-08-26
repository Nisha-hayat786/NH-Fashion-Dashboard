import axios from "axios";
import { useSelector } from "react-redux";



const BASE_URL ="http://localhost:4000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTY1ZmYzMWQ3YWUyYTJkMzQ4YzkwYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MTQxNDg4MCwiZXhwIjoxNjYxNjc0MDgwfQ.xjTniBagXLG4rUAJB0v3oj_xz7Z87a0dNti3dSzH0jo";

console.log(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken);
export const publicRequest = axios.create ({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {token: `Bearer ${TOKEN}`},
})
