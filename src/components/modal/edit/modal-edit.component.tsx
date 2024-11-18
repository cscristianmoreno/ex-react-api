import { DialogContent, DialogTitle, Divider, Modal, ModalDialog } from "@mui/joy";
import { FC, ReactElement } from "react";
import { Edit } from "@mui/icons-material";
import { ProfileHookModelStruct } from "../../../models/profile.model";
import { useProfile } from "../../../hooks/useProfile";
import { FunctionModelStruct } from "../../../models/function.model";
import { ModalModelStruct } from "../../../models/modal.model";
import FormComponent from "../../form/form.component";
import FieldComponent from "../../field/field.component";
import { SubmitModelStruct } from "../../../models/submit.model";
import { useSubmit } from "../../../hooks/useSubmit";
import { fieldLastname, fieldName } from "../../../utils/form-validator.util";
import { FieldValues } from "react-hook-form";

const ModalEditComponent: FC<ModalModelStruct> = ({ open, fnAction }: ModalModelStruct): ReactElement => {

    const { onProfileClose }: ProfileHookModelStruct = useProfile();

    const { formState: { errors }, register, handleSubmit }: SubmitModelStruct = useSubmit();

    const onEdit: FunctionModelStruct<FieldValues, void> = (field?: FieldValues): void => {
        if (!field) {
            return;
        }

        console.log(field);
        onProfileClose();
        fnAction(field);
    };

    return (
        <Modal
            open={open}
            onClose={(): void => onProfileClose()}
        >
            <ModalDialog>
                <DialogTitle>
                    <Edit/>
                    Modificar usuario
                    </DialogTitle>
                <Divider/>
                <DialogContent>
                    <FormComponent
                        onSubmit={handleSubmit(onEdit)}
                        submitText="Modificar"
                    >
                        <FieldComponent
                            type="name"
                            placeholder="Nombre"
                            register={register}
                            name="name"
                            errors={errors}
                            validators={fieldName}
                            title="Nombre"
                        />

                        <FieldComponent
                            type="name"
                            placeholder="Apellido"
                            register={register}
                            name="lastname"
                            errors={errors}
                            validators={fieldLastname}
                            title="Apellido"
                        />
                    </FormComponent>
                </DialogContent>
            </ModalDialog>
        </Modal>
    );
};

export default ModalEditComponent;