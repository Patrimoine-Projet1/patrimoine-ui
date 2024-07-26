import { Box, Typography } from "@mui/material";

export default function AppBar() {
  return (
    <Box
      width="80%"
      position="fixed"
      top="0"
      left="20vw"
      bgcolor="#1c1f26"
      height="17vh"
      padding="10px"
    >
      <Typography variant="h5" sx={{ color: "white" }}>
        <p>Bienvenue sur Harena-com </p>
      </Typography>
    </Box>
  );
}
