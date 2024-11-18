import { Button, DialogActions, DialogContent, DialogTitle, Divider, Modal, ModalDialog } from "@mui/joy";
import { FC, ReactElement } from "react";
import { WarningRounded } from "@mui/icons-material";
import { ProfileHookModelStruct } from "../../../models/profile.model";
import { useProfile } from "../../../hooks/useProfile";
import { FunctionModelStruct } from "../../../models/function.model";
import { ModalModelStruct } from "../../../models/modal.model";

const ModalDeleteComponent: FC<ModalModelStruct> = ({ open, fnAction }: ModalModelStruct): ReactElement => {

    const { onProfileClose }: ProfileHookModelStruct = useProfile();

    const onDelete: FunctionModelStruct = (): void => {
        onProfileClose();
        fnAction();
    };

    return (
        <Modal
            open={open}
            onClose={(): void => onProfileClose()}
        >
            <ModalDialog>
                <DialogTitle>
                    <WarningRounded/>
                    Eliminar usuario
                    </DialogTitle>
                <Divider/>
                <DialogContent>
                    ¿Estás seguro de eliminar este usuario? 
                </DialogContent>
                <DialogActions>
                    <Button variant="solid" color="danger" onClick={(): void => onDelete()}>
                        Eliminar
                    </Button>
                    <Button variant="plain" color="neutral" onClick={(): void => onProfileClose()}>
                        Cancel
                    </Button>
            </DialogActions>
            </ModalDialog>
        </Modal>
    );
};

export default ModalDeleteComponent;