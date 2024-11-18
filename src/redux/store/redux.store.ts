import { EnhancedStore, configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "../slices/login.slice";
import { alertSlice } from "../slices/alert.slice";
import { modalSlice } from "../slices/modal.slice";
import { userSlice } from "../slices/user.slice";
import { searchSlice } from "../slices/search.slice";

export const store: EnhancedStore = configureStore({
    reducer: {
        [loginSlice.reducerPath]: loginSlice.reducer,
        [alertSlice.reducerPath]: alertSlice.reducer,
        [modalSlice.reducerPath]: modalSlice.reducer,
        [userSlice.reducerPath]: userSlice.reducer,
        [searchSlice.reducerPath]: searchSlice.reducer,
    },
});