import { FC, ReactElement } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavigationModelStruct } from "../models/route.model";
import IndexComponent from "../pages/index/index.component";
import LoginComponent from "../pages/login/login.component";
import Authentication from "../authentication/auth.authentication";
import RegisterComponent from "../pages/register/register.component";

const NavigationRoute: FC = (): ReactElement => {

    const ROUTES: NavigationModelStruct[] = [
        { path: "*", element: <IndexComponent/>, authentication: true, },
        { path: "/login", element: <LoginComponent/>, authentication: false, },
        { path: "/register", element: <RegisterComponent/>, authentication: false, },
    ];
    
    return (
        <BrowserRouter>
            <Routes>
            {
                ROUTES.map((str: NavigationModelStruct, index: number): ReactElement => {
                    return <Route path={str.path} key={index} element={
                        (str.authentication) ?
                            <Authentication>
                                {str.element}
                            </Authentication>
                        :
                            str.element
                    }/>;
                })
            }
            </Routes>
        </BrowserRouter>
    );
};

export default NavigationRoute;