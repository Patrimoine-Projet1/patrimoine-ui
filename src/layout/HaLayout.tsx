import { Box } from "@mui/material";
import { LayoutProps } from "react-admin";
import AppBar from "../components/appBar/AppBar";
import SideBar from "../components/sideBar/SideBar";

export default function HaLayout({ children }: LayoutProps) {
  return (
    <Box position="relative">
      <SideBar />
      <AppBar />
      <Box
        width="80%"
        position="fixed"
        top="17vh"
        left="20vw"
        minHeight="83vh"
        padding="0.8rem"
        bgcolor="black"
      >
        {children}
      </Box>
    </Box>
  );
}
