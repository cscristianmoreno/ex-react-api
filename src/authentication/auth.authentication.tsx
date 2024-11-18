import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { loginSlice } from "../redux/slices/login.slice";
import { useSelect } from "../hooks/useSelect";

const Authentication: FC<{ children: ReactNode }> = ({ children }: { children: ReactNode }): ReactNode => {

    const login: boolean = useSelect(loginSlice.name);

    if (!login) {
        return <Navigate to="/login" replace={true}/>;
    }

    return children;
};

export default Authentication;