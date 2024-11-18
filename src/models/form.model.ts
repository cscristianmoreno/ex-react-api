import { SystemProps } from "@mui/joy/styles/types";
import { CSSProperties, FormEventHandler, ReactNode } from "react";

export type FormModelStruct = {
    children: ReactNode,
    title?: string,
    style?: CSSProperties,
    submitText?: string,
    onSubmit?: FormEventHandler<HTMLFormElement>,
    formEdit?: boolean
} & SystemProps;