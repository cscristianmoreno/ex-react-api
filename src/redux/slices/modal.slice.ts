import { CaseReducerActions, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ModalHookModelStruct } from "../../models/modal.model";
import { ModalType } from "../../utils/modal-types.util";

// eslint-disable-next-line @typescript-eslint/typedef
export const modalSlice = createSlice({
    name: "modalSlice",
    initialState: { 
        open: false,
        type: ModalType.EDIT
    } as ModalHookModelStruct,
    reducers: {
        setModalDelete: (del: ModalHookModelStruct, action: PayloadAction<ModalHookModelStruct>): ModalHookModelStruct => {
            const { open, type }: ModalHookModelStruct = action.payload;

            del.open = open;
            del.type = type; 

            return del;
        },
        setModalEdit: (edit: ModalHookModelStruct, action: PayloadAction<ModalHookModelStruct>): ModalHookModelStruct => {
            const { open, type }: ModalHookModelStruct = action.payload;

            edit.open = open;
            edit.type = type; 

            return edit;
        }
    }
});

export const { setModalDelete, setModalEdit }: CaseReducerActions<{ 
    setModalDelete: (del: ModalHookModelStruct, action: PayloadAction<ModalHookModelStruct>) => ModalHookModelStruct, 
    setModalEdit: (del: ModalHookModelStruct, action: PayloadAction<ModalHookModelStruct>) => ModalHookModelStruct }, 
    "modalSlice" > = modalSlice.actions;