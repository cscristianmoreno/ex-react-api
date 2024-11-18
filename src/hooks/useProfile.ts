import { FunctionModelStruct } from "../models/function.model";
import { ProfileHookModelStruct } from "../models/profile.model";
import { Dispatch, UnknownAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { AlertHookModelStruct } from "../models/alert.model";
import { useAlert } from "./useAlert";
import { setModalDelete, setModalEdit } from "../redux/slices/modal.slice";
import { ModalType } from "../utils/modal-types.util";
import { UserApiDTO } from "../dto/user-api.dto";
import { setUser } from "../redux/slices/user.slice";

export const useProfile: FunctionModelStruct<ProfileHookModelStruct> = (): ProfileHookModelStruct => {
    
    const dispatch: Dispatch<UnknownAction> = useDispatch();

    const { onAlertError }: AlertHookModelStruct = useAlert();

    const onProfileDelete: FunctionModelStruct<UserApiDTO, void> = (user?: UserApiDTO): void => {
        if (!user) {
            onAlertError("Este usuario no contiene ID");
            return;
        }

        dispatch(setUser(user));
        dispatch(setModalDelete({ 
            open: true,
            type: ModalType.DELETE
         }));
    };
    
    const onProfileEdit: FunctionModelStruct<UserApiDTO, void> = (user?: UserApiDTO): void => {
        if (!user) {
            onAlertError("Este usuario no contiene ID");
            return;
        }

        dispatch(setUser(user));
        dispatch(setModalEdit({
            open: true,
            type: ModalType.EDIT
        }));
    };

    const onProfileClose: FunctionModelStruct = (): void => {
        dispatch(setModalDelete({
            open: false,
            type: ModalType.DELETE
        }));
        dispatch(setModalEdit({
            open: false,
            type: ModalType.EDIT
        }));
    };

    return {
        onProfileDelete,
        onProfileEdit,
        onProfileClose
    };
};