import { Input, Stack, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchFilter = searchParams.get("search");

  const handlePushRoute = (e) => {
    if (e.target.value) {
      const queryParams = new URLSearchParams({ search: e.target.value });
      navigate(`/play/channels?${queryParams.toString()}`);
    } else {
      navigate("/play/channels");
    }
  };

  return (
    <Stack
      backgroundColor="#28282F"
      height="70px"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      position="sticky"
      top={0}
      p={2}
    >
      <Typography color="#FFFFFFB3">
        Tokopedia Clone By: Marsya Putra
      </Typography>
      <Input
        sx={{ color: "white", borderBottom: "2px solid #FFFFFFB3" }}
        startAdornment={<SearchIcon sx={{ mr: 1 }} />}
        multiline
        placeholder="Search"
        value={searchFilter}
        onChange={handlePushRoute}
      />
    </Stack>
  );
};

export default Navbar;
