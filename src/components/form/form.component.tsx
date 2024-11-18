import { FC, ReactElement } from "react";
import { FormModelStruct } from "../../models/form.model";

import "./form.component.css";
import { Button, Typography } from "@mui/joy";

const FormComponent: FC<FormModelStruct> = ({ children, title, style, submitText, onSubmit }: FormModelStruct): ReactElement => {
    return (
        <form onSubmit={onSubmit} style={{...style}} className="class_form_container">
            {title && <Typography level="h3">{title}</Typography>}
            {children}

            {submitText && <Button size="lg" type="submit">{submitText}</Button>}
        </form>
    );
};

export default FormComponent;