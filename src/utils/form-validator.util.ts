import { FieldValidationModelStruct } from "../models/field.model";

export const fieldRequired: (min: number, max: number) => FieldValidationModelStruct[] = 
    (min: number, max: number): FieldValidationModelStruct[] => {
    return [
        { required: { value: true, message: "El campo es requerido" } },
        { minLength: { value: min, message: `El campo requiere ${min} carácteres` } },
        { maxLength: { value: max, message: `El campo no puede superar los ${max} carácteres` } }
    ];
};

export const fieldName: FieldValidationModelStruct[] = [
    ...fieldRequired(3, 25),
    { pattern: { value: /^[^\s][a-zA-Z\s]+[^\s]$/, message: "El campo contiene carácteres especiales" }}
];

export const fieldLastname: FieldValidationModelStruct[] = [
    ...fieldRequired(3, 25),
    { pattern: { value: /^[^\s][a-zA-Z\s]+[^\s]$/, message: "El campo contiene carácteres especiales" }}
];

export const fieldEmail: FieldValidationModelStruct[] = [
    ...fieldRequired(3, 32),
    { pattern: { value: /[^@\s]+@[^@\s]+\.[^@\s]+/, message: "El correo electrónico es inválio" }}
];

export const fieldPassword: FieldValidationModelStruct[] = [
    ...fieldRequired(3, 20),
    { pattern: { value: /^[^\s][a-zA-Z\s]+[^\s]$/, message: "El campo contiene carácteres especiales" }}
];