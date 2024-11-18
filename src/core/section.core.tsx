import { Box, Stack, Typography } from "@mui/joy";
import { FC, ReactElement } from "react";
import HeaderComponent from "../components/header/header.component";
import { CoreModelStruct } from "../models/core.model";

const SectionCore: FC<CoreModelStruct> = ({ children }: CoreModelStruct): ReactElement => {
    return (
        <Box 
            display="flex" 
            flexDirection="column"
            alignItems="center"
            width="100%"
        >
            <HeaderComponent/>
            <Stack width="100%" boxSizing="border-box" gap={2} padding={3} height="100%" bgcolor="#f6f7fc">
                <Typography level="h3">Bienvenido a RandomUser API</Typography>
                <Typography fontWeight={400}>Sección / Inicio</Typography>
            </Stack>
            {children}
        </Box>
    );
};

export default SectionCore;