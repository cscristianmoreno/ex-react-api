import { CaseReducerActions, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AlertModelStruct } from "../../models/alert.model";
import { AlertType } from "../../utils/alert-types.util";

// eslint-disable-next-line @typescript-eslint/typedef
export const alertSlice = createSlice({
    name: "alertSlice",
    initialState: { 
        open: false,
        type: AlertType.ERROR,
        title: "",
        message: ""
    } as AlertModelStruct,
    reducers: {
        setAlert: (alert: AlertModelStruct, action: PayloadAction<AlertModelStruct>): AlertModelStruct => {
            const { open, type, message, title }: AlertModelStruct = action.payload;

            
            alert.message = message;
            alert.open = open;
            alert.title = title;
            alert.type = type;

            return alert;
        }
    }
});

export const {  setAlert  }: CaseReducerActions<{ setAlert: (alert: AlertModelStruct, action: PayloadAction<AlertModelStruct>) => AlertModelStruct }, "alertSlice" > = alertSlice.actions;