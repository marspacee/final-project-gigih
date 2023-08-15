import { Input, Stack, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

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

  // if path is in detail page
  if (location.pathname.includes("channels/")) {
    return (
      <Stack
        direction="row"
        alignItems="center"
        backgroundColor="#28282F"
        height="50px"
        position="sticky"
        zIndex={1}
        top={0}
        p={2}
      >
        <Stack
          direction="row"
          spacing={1}
          sx={{ cursor: "pointer" }}
          onClick={() => navigate(-1)}
        >
          <ArrowBackIcon sx={{ color: "white" }} />
          <Typography color="white">Back</Typography>
        </Stack>
      </Stack>
    );
  }
  return (
    <Stack
      backgroundColor="#28282F"
      height="70px"
      justifyContent="space-between"
      alignItems="center"
      position="sticky"
      zIndex={1}
      top={0}
      p={2}
    >
      <Typography fontSize="20px" fontWeight={700} color="#FFFFFFB3">
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
