import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";

export const styles: { [key: string]: SxProps<Theme> } = {
  container: {
    marginTop: 3,
    marginBottom: 3,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 3,
    backgroundColor: "#ecf0f1",
    borderRadius: 2,  
    boxShadow: 2,
    marginLeft: { sm: 2 },
  },
  svgGrid: {
    display: { xs: "none", sm: "block" },
  },
  heading: {
    fontWeight: "600",
    color: "#333333",
    fontSize: { xs: "1.4rem", sm: "1.5rem" },
  },
  button: {
    mt: 3,
    mb: 2,
  },
  errorText: {
    display: "block",
    textAlign: "left",
    mt: 0.5,
    ml: 2,
  },
  organizationPlaceholder: {
    color: "#616161",
  },
  organizationError: {
    color: "#d32f2f",
  },
  svgBox:{
     display: { xs: "none", sm: "block" } 
  },
};

export const ITEM_HEIGHT = 48;
export const ITEM_PADDING_TOP = 8;
export const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
