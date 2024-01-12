import {
    User,
    Tree
} from "./types";

export type UserResponse = {
    success: boolean;
    user: User;
};

export type TreeResponse = {
    success: boolean;
    tree: Tree[];
}
