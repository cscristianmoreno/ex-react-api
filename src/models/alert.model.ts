import { AlertType } from "../utils/alert-types.util";
import { FunctionModelStruct } from "./function.model";

export type AlertModelStruct = {
    open: boolean,
    title?: string,
    message?: string,
    type?: AlertType
};

export type AlertHookModelStruct = {
    onAlertSuccess: FunctionModelStruct<string, void>,    
    onAlertError: FunctionModelStruct<string, void>,
    onAlertClose: FunctionModelStruct
};