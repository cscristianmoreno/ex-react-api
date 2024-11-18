import { UserApiDTO } from "../dto/user-api.dto";
import { FunctionModelStruct } from "./function.model";

export type ProfileHookModelStruct = {
    onProfileEdit: FunctionModelStruct<UserApiDTO, void>,
    onProfileDelete: FunctionModelStruct<UserApiDTO, void>,
    onProfileClose: FunctionModelStruct
};