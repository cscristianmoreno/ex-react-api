import { CaseReducerActions, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserApiDTO } from "../../dto/user-api.dto";

// eslint-disable-next-line @typescript-eslint/typedef
export const userSlice = createSlice({
    name: "userSlice",
    initialState: { } as UserApiDTO,
    reducers: {
        setUser: (user: UserApiDTO, action: PayloadAction<UserApiDTO>): UserApiDTO => {
            const { id, name, picture }: UserApiDTO = action.payload;

            user.id = id;
            user.name = name;
            user.picture = picture;

            return user;
        }
    }
});

export const { setUser }: CaseReducerActions<{ setUser: (id: UserApiDTO, action: PayloadAction<UserApiDTO>) => UserApiDTO }, "userSlice" > = userSlice.actions;