import { ReactNode } from "react";

export type NavigationModelStruct = {
    path: string,
    element: ReactNode,
    authentication?: boolean
};