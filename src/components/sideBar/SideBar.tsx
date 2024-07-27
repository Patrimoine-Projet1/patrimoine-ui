import { useRedirect } from "react-admin";
import { Box, Typography, MenuItem } from "@mui/material";

import logo from "@/assets/logo.png";
import { Link } from "react-admin";
import { FaChartLine, FaLandmark } from "react-icons/fa";

const MenuItemLink = ({
  icon: Icon,
  label,
  path,
}: {
  icon: any;
  label: string;
  path: string;
}) => {
  const redirect = useRedirect();
  return (
    <MenuItem
      sx={{
        backgroundColor: "#131419",
        width: "90%",
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        margin: "0.8rem",
        borderRadius: "0.2rem",
        padding: "0.5rem 1rem",
      }}
      onClick={() => {
        redirect("list", label);
      }}
    >
      <Icon style={{ fontSize: "1.5rem" }} />
      <Link
        to={path}
        style={{
          textDecoration: "none",
          color: "white",
          fontSize: "1rem",
          fontWeight: "bold",
        }}
      >
        {label}
      </Link>
    </MenuItem>
  );
};

export default function SideBar() {
  return (
    <Box
      height="100vh"
      width="20vw"
      bgcolor="#1c1f26"
      position="fixed"
      top="0"
      left="0"
      color="white"
      zIndex="1"
      borderRight="1px solid #333"
    >
      <Box
        display="flex"
        alignItems="center"
        gap="1rem"
        p="1rem"
        borderBottom="1px solid #333"
      >
        <img
          src={logo}
          alt="logo"
          style={{ width: "4rem", height: "4rem", objectFit: "cover" }}
        />
        <Box>
          <Typography sx={{ fontWeight: "bold", fontSize: "1.4rem" }}>
            Harena-com
          </Typography>
          <Typography sx={{ fontSize: "0.8rem" }}>wealth Management</Typography>
        </Box>
      </Box>
      <Box>
        <MenuItemLink
          icon={FaLandmark}
          path="/patrimoines"
          label="patrimoines"
        />
        <MenuItemLink
          icon={FaChartLine}
          label="projections futures"
          path="/projections-futures"
        />
      </Box>
    </Box>
  );
}
