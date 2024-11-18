import { store } from "../redux/store/redux.store";

export type RootState = ReturnType<typeof store.getState>; 