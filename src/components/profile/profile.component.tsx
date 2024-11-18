import { Avatar, Box, ButtonGroup, IconButton, Typography } from "@mui/joy";
import { FC, ReactElement } from "react";
import { UserApiDTO } from "../../dto/user-api.dto";
import { Delete, Edit, Info } from "@mui/icons-material";
import { ProfileHookModelStruct } from "../../models/profile.model";
import { useProfile } from "../../hooks/useProfile";
import { AlertHookModelStruct } from "../../models/alert.model";
import { useAlert } from "../../hooks/useAlert";

const ProfileComponent: FC<UserApiDTO> = (user: UserApiDTO): ReactElement => {

    const { name, picture }: UserApiDTO = user;

    const { onAlertError }: AlertHookModelStruct = useAlert();

    const { onProfileDelete, onProfileEdit }: ProfileHookModelStruct = useProfile();

    return (
        <Box 
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            width={250}
            height={300}
            boxShadow="5px 5px 10px rgba(0, 0, 0, 10%)"
            borderRadius={10}
            gap={2}
        >
            <Avatar 
                sx={{ 
                    width: "auto", 
                    height: "auto", 
                    borderStyle: "solid", 
                    borderColor: "#e3effb", 
                    borderWidth: 10 
                }} 
                src={picture.medium}
            />

            <Typography level="h4">{name.first} {name.last}</Typography>

            <ButtonGroup spacing={2}>
                <IconButton color="neutral" onClick={(): void => onAlertError("Esta función está sin uso")}>
                    <Info/>
                </IconButton>

                <IconButton color="primary" onClick={(): void => onProfileEdit(user)}>
                    <Edit/>
                </IconButton>

                <IconButton color="danger" onClick={(): void => onProfileDelete(user)}>
                    <Delete/>
                </IconButton>
            </ButtonGroup>
        </Box>
    );
};

export default ProfileComponent;