import { UseFormReturn, FieldValues } from "react-hook-form";
import { FunctionModelStruct } from "./function.model";

export type SubmitModelStruct<F = FunctionModelStruct<FieldValues, void>> = {
    onRegister: F,
    onLogin: F
} & Pick<UseFormReturn<FieldValues>, "register" | "control" | "handleSubmit" | "formState">;