import { FC, ReactElement } from "react";

import "./menu.component.css";
import { MenuModelStruct } from "../../models/menu.model";
import LinkComponent from "../link/link.component";
import { Home } from "@mui/icons-material";

const MENU_ITEMS: MenuModelStruct[] = [
    { icon: <Home/>, name: "Inicio", path: "/" },
    { icon: <Home/>, name: "Acerca de", path: "/path1" },
    { icon: <Home/>, name: "Otra ruta", path: "/path2" }
];

const MenuComponent: FC = (): ReactElement => {
    return (
        <nav>
            <ul>
            {
                MENU_ITEMS.map((str: MenuModelStruct, index: number): ReactElement => {
                    return <LinkComponent key={index} item={str}/>;
                })
            }
            </ul>
        </nav>
    );
};

export default MenuComponent;