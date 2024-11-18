import { Dispatch, UnknownAction } from "@reduxjs/toolkit";
import { FunctionModelStruct } from "../models/function.model";
import { useDispatch } from "react-redux";
import { setAlert } from "../redux/slices/alert.slice";
import { AlertType } from "../utils/alert-types.util";
import { AlertHookModelStruct } from "../models/alert.model";

export const useAlert: FunctionModelStruct<AlertHookModelStruct> = (): AlertHookModelStruct => {
    const dispatch: Dispatch<UnknownAction> = useDispatch();

    const onAlertSuccess: FunctionModelStruct<string, void> = (message: string = "Acción ejecutada"): void => {
        if (!message) {
            return;
        }

        dispatch(setAlert({
            open: true,
            message: message,
            type: AlertType.SUCCESS,
            title: "Success"
        }));
    };

    const onAlertError: FunctionModelStruct<string, void> = (message: string = "Ocurrió un error"): void => {
        if (message == "undefined") {
            return;
        }

        dispatch(setAlert({
            open: true,
            message: message,
            type: AlertType.ERROR,
            title: "Error"
        }));
    };

    const onAlertClose: FunctionModelStruct = (): void => {
        dispatch(setAlert({
            open: false
        }));
    };

    return {
        onAlertSuccess,
        onAlertError,
        onAlertClose
    };
};