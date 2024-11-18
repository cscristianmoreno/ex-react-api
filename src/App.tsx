import { FC, ReactElement } from "react";
import NavigationRoute from "./routes/navigation.route";
import { HttpInterceptor } from "./interceptors/http.interceptor";
import AlertComponent from "./components/alert/alert.component";
import { AlertModelStruct } from "./models/alert.model";
import { alertSlice } from "./redux/slices/alert.slice";
import { useSelect } from "./hooks/useSelect";

new HttpInterceptor();

const App: FC = (): ReactElement => {    

    const alert: AlertModelStruct = useSelect(alertSlice.name);

    return (
        <>
            {<AlertComponent
                open={alert.open}
                title={alert.title}
                message={alert.message}
                type={alert.type}
            />}

            <NavigationRoute/>
        </>
    );
};

export default App;