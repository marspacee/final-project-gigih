import { Box } from "@mui/material";

const Page = ({ children }) => {
  return (
    <Box sx={{ backgroundColor: "#28282F" }} height="100vh" p={2}>
      {children}
    </Box>
  );
};

export default Page;
