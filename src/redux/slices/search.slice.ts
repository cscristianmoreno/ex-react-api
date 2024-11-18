import { CaseReducerActions, PayloadAction, createSlice } from "@reduxjs/toolkit";

// eslint-disable-next-line @typescript-eslint/typedef
export const searchSlice = createSlice({
    name: "searchSlice",
    initialState: "",
    reducers: {
        setSearch: (search: string, action: PayloadAction<string>): string => {
            search = action.payload;
            return search;
        }
    }
});

export const { setSearch }: CaseReducerActions<{ setSearch: (search: string, action: PayloadAction<string>) => string }, "searchSlice" > = searchSlice.actions;