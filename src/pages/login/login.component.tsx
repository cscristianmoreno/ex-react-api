import { Box, Typography } from "@mui/joy";
import { FC, ReactElement } from "react";
import FormComponent from "../../components/form/form.component";
import FieldComponent from "../../components/field/field.component";
import { SubmitModelStruct } from "../../models/submit.model";
import { useSubmit } from "../../hooks/useSubmit";
import { fieldEmail, fieldPassword } from "../../utils/form-validator.util";
import { Link } from "react-router-dom";

const LoginComponent: FC = (): ReactElement => {
    const { handleSubmit, onLogin, register, formState: { errors } }: SubmitModelStruct = useSubmit();

    return (
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="100vw" height="100vh">
            <FormComponent 
                title="Iniciar sesión"
                submitText="Iniciar sesión"
                onSubmit={handleSubmit(onLogin)}
            >
                <FieldComponent 
                    title="Correo electrónico" 
                    name="email"
                    type="string"
                    placeholder="example@hotmail.com"
                    validators={
                        fieldEmail
                    }
                    register={register}
                    errors={errors}
                />

                <FieldComponent 
                    title="Contraseña" 
                    name="password"
                    type="password"
                    placeholder="*********"
                    register={register}
                    errors={errors}
                    validators={
                        fieldPassword
                    }
                />

                <Typography>¿No tienes una cuenta? <Link to="/register" replace={true}>Regístrate</Link></Typography>
            </FormComponent>
        </Box>
    );
};

export default LoginComponent;