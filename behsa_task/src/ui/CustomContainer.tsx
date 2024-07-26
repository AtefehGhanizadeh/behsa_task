import { Container } from "@mui/material";
import { PropsWithChildren } from "react";
const CustomContainer = ({ children }: PropsWithChildren) => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        bgcolor: "white",
        paddingX: "10px",
        paddingY: "20px",
        borderRadius: "10px",
      }}
    >
      {children}
    </Container>
  );
};

export default CustomContainer;
