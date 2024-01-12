import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from "./reducer/userReducer";
import { treeReducer } from './reducer/treeReducer';

export const store = configureStore({
    reducer: {
        [userReducer.name]: userReducer.reducer,
        [treeReducer.name]: treeReducer.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;