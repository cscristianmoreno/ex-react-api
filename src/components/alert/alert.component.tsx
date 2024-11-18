import { Box, Snackbar, Typography } from "@mui/joy";
import { FC, ReactElement } from "react";
import { AlertHookModelStruct, AlertModelStruct } from "../../models/alert.model";
import { AlertType } from "../../utils/alert-types.util";
import { CheckCircle, Info } from "@mui/icons-material";
import { useAlert } from "../../hooks/useAlert";

const AlertComponent: FC<AlertModelStruct> = ({ open, message, type, title }: AlertModelStruct): ReactElement => {

    const { onAlertClose }: AlertHookModelStruct = useAlert();

    const success: AlertType = (type) ? AlertType.SUCCESS : AlertType.ERROR;

    return (
        <Snackbar
            open={open}
            anchorOrigin={{
                horizontal: "right",
                vertical: "top"
            }}
            variant="solid"
            color={(success) ? "success" : "danger"}
            autoHideDuration={5000}
            onClose={(): void => onAlertClose()}
        >
            <Box display="flex" gap={0.5}>
                {(success) ? <CheckCircle/> : <Info/>}
                <Box>
                    <Typography fontWeight={500} textColor="white">{title}</Typography>
                    {message}
                </Box>
            </Box>
        </Snackbar>
    );
};

export default AlertComponent;