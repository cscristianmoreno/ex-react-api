import { Typography } from "@mui/joy";
import { FC, ReactElement } from "react";

const TitleComponent: FC<{ title: string }> = ({ title }: { title: string }): ReactElement => {
    return <Typography level="h4" textColor="white">{title}</Typography>;
};

export default TitleComponent;