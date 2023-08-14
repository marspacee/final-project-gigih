import { Box } from "@mui/material";
import Navbar from "./Navbar";

const Page = ({ children }) => {
  return (
    <Box
      sx={{ backgroundColor: "#28282F" }}
      minHeight="100vh"
      position="relative"
    >
      <Navbar />
      <Box p={2}>{children}</Box>
    </Box>
  );
};

export default Page;
