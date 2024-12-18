import { FC, ReactElement, ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "../store/redux.store";

const ReduxProvider: FC<{ children: ReactNode }> = ({ children }: { children: ReactNode }): ReactElement => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default ReduxProvider;