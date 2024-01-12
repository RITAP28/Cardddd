import { User, Tree } from "./types";

export interface UserReducerInitialState {
    user: User | null;
    loading: boolean;
    isPaid: boolean;
}

export interface TreeReducerInitialState {
    tree: Tree[];
    trus: Tree | null;
    loading: boolean;
}



