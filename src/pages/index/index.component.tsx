import { Box, Typography } from "@mui/joy";
import { FC, ReactElement } from "react";
import SectionCore from "../../core/section.core";
import { useFetch } from "../../hooks/useFetch";
import { FetchHookModelStruct } from "../../models/fetch.model";
import { UserApiDTO } from "../../dto/user-api.dto";
import ProfileComponent from "../../components/profile/profile.component";
import { useSelect } from "../../hooks/useSelect";
import ModalDeleteComponent from "../../components/modal/delete/modal-delete.component";
import { FunctionModelStruct } from "../../models/function.model";
import { AlertHookModelStruct } from "../../models/alert.model";
import { useAlert } from "../../hooks/useAlert";
import { modalSlice } from "../../redux/slices/modal.slice";
import { ModalHookModelStruct } from "../../models/modal.model";
import { ModalType } from "../../utils/modal-types.util";
import ModalEditComponent from "../../components/modal/edit/modal-edit.component";
import { userSlice } from "../../redux/slices/user.slice";
import { FieldValues } from "react-hook-form";

const IndexComponent: FC = (): ReactElement => {
    const { loading, data, userData, setData }: FetchHookModelStruct = useFetch();
    const { onAlertSuccess }: AlertHookModelStruct = useAlert();

    const modal: ModalHookModelStruct = useSelect(modalSlice.name);

    const user: UserApiDTO = useSelect(userSlice.name);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const onDeleteUser: FunctionModelStruct<FieldValues, void> = (_field?: FieldValues): void => {
        const filter: UserApiDTO[] = [...data].filter((str: UserApiDTO): boolean => str.id.value !== user.id.value);
        console.log(user);
        setData(filter);
        onAlertSuccess("Usuario eliminado");
    };

    const onEditUser: FunctionModelStruct<FieldValues, void> = (field?: FieldValues): void => {
        if (!field) {
            return;
        }

        const items: UserApiDTO[] = data;
        const index: number = items.findIndex((str: UserApiDTO): boolean => str.id.value === user.id.value);

        items[index] = {
            ...items[index],
            name: {
                first: field.name,
                last: field.lastname
            }
        };

        setData(items);
        
        onAlertSuccess("Usuario actualizado");
    };

    return (
        <SectionCore>
            <Box
                display="flex"
                flexWrap="wrap"
                alignItems="center"
                justifyContent=" center"
                width="95%"
                padding={5}
                gap={6}
            >
                {loading && <Typography>Cargando...</Typography>}    
                {!userData && <Typography>No hay resultados...</Typography>}    
                {
                    userData.map((str: UserApiDTO, index: number): ReactElement => {
                        return (
                            <ProfileComponent 
                                key={index}
                                name={str.name}
                                picture={str.picture} 
                                id={str.id}
                            />
                        );
                    })
                }
            </Box>

            {
                modal.type == ModalType.DELETE &&
                 <ModalDeleteComponent 
                    open={modal.open} 
                    fnAction={onDeleteUser}
                />
            }
            {
                modal.type == ModalType.EDIT &&
                <ModalEditComponent
                   open={modal.open} 
                   fnAction={onEditUser}
               />
            }
            
        </SectionCore>
    );
};

export default IndexComponent;