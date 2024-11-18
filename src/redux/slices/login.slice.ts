import { CaseReducerActions, PayloadAction, createSlice } from "@reduxjs/toolkit";

// eslint-disable-next-line @typescript-eslint/typedef
export const loginSlice = createSlice({
    name: "loginSlice",
    initialState: false,
    reducers: {
        setLogin: (login: boolean, action: PayloadAction<boolean>): boolean => {
            login = action.payload;
            return login;
        }
    }
});

export const { setLogin }: CaseReducerActions<{ setLogin: (login: boolean, action: PayloadAction<boolean>) => boolean }, "loginSlice" > = loginSlice.actions;