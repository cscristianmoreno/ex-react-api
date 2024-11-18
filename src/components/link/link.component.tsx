import { FC, ReactElement } from "react";
import { NavLink } from "react-router-dom";
import { MenuModelStruct } from "../../models/menu.model";

const LinkComponent: FC<{ item: MenuModelStruct }> = ({ item }: { item: MenuModelStruct }): ReactElement => {
    return (
        <li>
            {item.icon}
            <NavLink 
                to={item.path} 
                className={({ isActive }: { isActive: boolean}): string => 
                    isActive ? "class_link_active" : ""
                }>
                    {item.name}
                </NavLink>
        </li>
    );
};

export default LinkComponent;