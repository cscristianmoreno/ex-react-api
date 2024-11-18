import { Dispatch, SetStateAction } from "react";
import { UserApiDTO } from "../dto/user-api.dto";

export type FetchHookModelStruct = {
    loading: boolean,
    data: UserApiDTO[],
    userData: UserApiDTO[],
    setData: Dispatch<SetStateAction<UserApiDTO[]>>
};