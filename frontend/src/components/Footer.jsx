import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import { right } from "../../../node_modules/@popperjs/core/dist/esm/enums";

export const Footer = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        height: "3rem",
        background: grey[200],
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      @ 2024 Bookit. All rights reserved.
    </Box>
  );
};

export default Footer;
