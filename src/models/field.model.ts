import { FieldErrors, FieldValues, UseFormReturn } from "react-hook-form";


export type FieldModelStruct = {
    title: string,
    errors: FieldErrors<FieldValues>,
    validators: FieldValidationModelStruct[]
} & Pick<UseFormReturn, "register"> & Pick<HTMLInputElement, NonNullable<"name"> | "type" | "placeholder">;

export type FieldValidationError<T> = {
    [T: string]: T
};

export type FieldValidationModelStruct = {
    minLength?: {
        value: number,
        message: string
    },
    maxLength?: {
        value: number,
        message: string
    },
    min?: {
        value: number,
        message: string
    },
    max?: {
        value: number,
        message: string
    },
    required?: {
        value: boolean,
        message: string
    },
    pattern?: {
        value: RegExp,
        message: string
    }
};