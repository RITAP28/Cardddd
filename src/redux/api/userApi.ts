import axios from "axios";
import {
    // AllUsersResponse,
    // DeleteUserRequest,
    // MessageResponse,
    UserResponse,
} from "../../types/api-types";
// import { User } from "../../types/types";

export const getUser = async () => {
    try {
        const { data }: { data: UserResponse } = await axios.get(`http://localhost:7070/api/v1/user/me`, { withCredentials: true } );
        return data;
    } catch (error) {
        throw error;
    }
};

export const loginUser = async (loginData: object) => {
    try {
        const config = { headers: { "Content-Type": "application/json" }, withCredentials: true };
        const { data }: { data: UserResponse } = await axios.post(`http://localhost:7070/api/v1/user/login`, loginData , config);
        return data;
    } catch (error) {
        throw error;
    }
};

export const registerUser = async (registerData: object) => {
    try {
        const config = { headers: { "Content-Type": "multipart/form-data" }, withCredentials: true };
        const { data }: { data: UserResponse } = await axios.post(`http://localhost:7070/api/v1/user/register`, registerData , config);
        return data;
    } catch (error) {
        throw error;
    }
};

export const logoutUser = async () => {
    try {
        const { data }: { data: UserResponse } = await axios.get(`http://localhost:7070/api/v1/user/logout`, { withCredentials: true } );
        return data;
    } catch (error) {
        throw error;
    }
};

