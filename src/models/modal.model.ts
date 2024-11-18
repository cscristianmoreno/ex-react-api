import { FieldValues } from "react-hook-form";
import { ModalType } from "../utils/modal-types.util";

export type ModalModelStruct = {
    open: boolean, 
    fnAction: (fields?: FieldValues) => void
};      

export type ModalHookModelStruct = {
    type: ModalType,

} & Pick<ModalModelStruct, "open">;