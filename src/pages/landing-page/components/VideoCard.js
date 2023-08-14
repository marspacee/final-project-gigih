import { Stack, Grid, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const VideoCard = ({ data }) => {
  const { _id, thumbnail, title, author } = data;
  return (
    <Link to={`/play/channels/${_id}`} style={{ textDecoration: "none" }}>
      <Box
        display="flex"
        alignItems="end"
        sx={{
          cursor: "pointer",
          borderRadius: "8px",
          backgroundImage: `url(${thumbnail})`,
          backgroundSize: "cover",
          width: "100%",
          paddingTop: "140%",
        }}
      >
        <Stack spacing={0.5} padding={1} width="100%">
          <Typography color="white" fontSize="14px">
            {title}
          </Typography>
          <Typography color="white" fontSize="12px">
            {author}
          </Typography>
        </Stack>
      </Box>
    </Link>
  );
};

export default VideoCard;
