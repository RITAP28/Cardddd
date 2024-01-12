import axios from "axios";
import { TreeResponse } from "../../types/api-types";

export const getUserTree = async () => {
    try {
        const { data }: { data: TreeResponse } = await axios.get(`http://localhost:7070/api/v1/tree/userTree`, { withCredentials: true } );
        return data;
    } catch (error) {
        throw error;
    }
};

export const deleteTree = async (id: string) => {
    try {
        const { data }: { data: TreeResponse } = await axios.delete(`http://localhost:7070/api/v1/tree/delete/${id}`, { withCredentials: true } );
        return data;
    } catch (error) {
        throw error;
    }
}

export const updateTree = async (treeData: object,id: string) => {
    try {
        const { data }: { data: TreeResponse } = await axios.put(`http://localhost:7070/api/v1/tree/delete/${id}`, treeData, { withCredentials: true } );
        return data;
    } catch (error) {
        throw error;
    }
}


export const createTree = async (treeData: object) => {
    try {
        const { data }: { data: TreeResponse } = await axios.post(`http://localhost:7070/api/v1/tree/new`, treeData, { withCredentials: true } );
        return data;
    } catch (error) {
        throw error;
    }
}

export const getSingleTree = async (id: string) => {
    try {
        const { data }: { data: TreeResponse } = await axios.get(`http://localhost:7070/api/v1/tree/details/${id}`, { withCredentials: true } );
        return data;
    } catch (error) {
        throw error;
    }
}


