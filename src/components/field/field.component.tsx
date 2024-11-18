import { FormControl, FormHelperText, FormLabel, Input } from "@mui/joy";
import { FC, ReactElement } from "react";
import { FieldModelStruct, FieldValidationModelStruct } from "../../models/field.model";

const FieldComponent: FC<FieldModelStruct> = ({ ...props }: FieldModelStruct): ReactElement => {
    const { name, errors, placeholder, validators, register, title, type }: FieldModelStruct = props;

    const entries: FieldValidationModelStruct = validators.reduce((previous: FieldValidationModelStruct, current: FieldValidationModelStruct): FieldValidationModelStruct => {
        return { ...previous, ...current };
    });

    return (
        <FormControl>
            <FormLabel>{title}</FormLabel>
            <Input type={type} placeholder={placeholder} size="lg" {...register(name, entries)}
            />
            {<FormHelperText sx={{ fontSize: 13, color: "red" }}>{errors[name]?.message as string}</FormHelperText>}
        </FormControl>
    );
};

export default FieldComponent;