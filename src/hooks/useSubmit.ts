import { FieldValues, UseFormReturn, useForm } from "react-hook-form";
import { FunctionModelStruct } from "../models/function.model";
import { SubmitModelStruct } from "../models/submit.model";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { Dispatch, UnknownAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { setLogin } from "../redux/slices/login.slice";
import { AlertHookModelStruct } from "../models/alert.model";
import { useAlert } from "./useAlert";
import { LocalStorageUtil } from "../utils/local-storage.util";

export const useSubmit: FunctionModelStruct<SubmitModelStruct> = (): SubmitModelStruct => {
    const { register, control, handleSubmit, formState }: UseFormReturn = useForm();

    const { onAlertError, onAlertSuccess }: AlertHookModelStruct = useAlert();
    
    const dispatch: Dispatch<UnknownAction> = useDispatch();
    const navigate: NavigateFunction = useNavigate();

    const onRegister: FunctionModelStruct<FieldValues, Promise<void>> = async (field?: FieldValues): Promise<void> => {
        if (!field) {
            return;
        }

        if (field.password !== field.repeatPassword) {
            onAlertError("Las contraseñas no coinciden");
            return;
        }

        if (LocalStorageUtil.getLocalStorage(field.email)) {
            onAlertError("Esta cuenta ya existe");
            return;
        }

        onAlertSuccess("Tu cuenta fue creada con éxito");
        LocalStorageUtil.setLocalSorage(field.email, field.password);

        setTimeout((): void => {
            navigate("/login", { replace: true });
        }, 400);
    };

    const onLogin: FunctionModelStruct<FieldValues, Promise<void>> = async (field?: FieldValues): Promise<void> => {
        if (!field) {
            return;
        }

        console.log(field);

        const password: string | null = LocalStorageUtil.getLocalStorage(field.email);

        if (password === null) {
            onAlertError("Esta cuenta no existe");
            return;
        }

        if (field.password !== password) {
            onAlertError("La contraseña es incorrecta");
            return;
        }

        dispatch(setLogin(true));
        LocalStorageUtil.setLocalSorage("authenticate", "true");
        
        onAlertSuccess("Bienvenido nuevamente!");

        setTimeout((): void => {
            navigate("/", { replace: true });
        }, 400);
    };

    return {
        register,
        handleSubmit,
        formState,
        control,
        onRegister,
        onLogin
    };
};