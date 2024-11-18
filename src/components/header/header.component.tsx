import { ArrowDropDownOutlined, Notifications, Search } from "@mui/icons-material";
import { Avatar, Box, Divider, Input } from "@mui/joy";
import { Dispatch, UnknownAction } from "@reduxjs/toolkit";
import { FC, KeyboardEvent, ReactElement } from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../../redux/slices/search.slice";
import { FunctionModelStruct } from "../../models/function.model";

const HeaderComponent: FC = (): ReactElement => {

    const dispatch: Dispatch<UnknownAction> = useDispatch();

    const onSearch: FunctionModelStruct<KeyboardEvent<HTMLInputElement>, void> = (key?: KeyboardEvent<HTMLInputElement>): void => {
        if (!key) {
            return;
        }

        const value: string = (key.target as HTMLInputElement).value;
        dispatch(setSearch(value));
    };

    return (
        <Box   
            display="flex" 
            alignItems="center" 
            justifyContent="end" 
            bgcolor="white" 
            padding={2} gap={3} 
            boxShadow="0px 0px 10px rgba(0, 0, 0, 30%)"
            position="sticky"
            width="100%"
            top="0"
            zIndex={99}
        >
            <Input startDecorator={<Search/>} placeholder="Buscar" onKeyUp={(key: KeyboardEvent<HTMLInputElement>): void => onSearch(key)}/>
            <Notifications color="info" cursor="pointer"/>
            <Divider orientation="vertical"/>

            <Box display="flex" alignItems="center">
                <Avatar color="primary">CR</Avatar>
                <ArrowDropDownOutlined cursor="pointer"/>
            </Box>
        </Box>
    );
};

export default HeaderComponent;