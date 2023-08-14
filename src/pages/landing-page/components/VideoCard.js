import { Stack, Grid, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const VideoCard = ({ data }) => {
  const { _id, thumbnail, title, author, url } = data;
  return (
    <Link to={`/play/channels/${_id}`}>
      <Box
        display="flex"
        alignItems="end"
        sx={{
          height: "456px",
          cursor: "pointer",
          borderRadius: "8px",
          backgroundSize: "cover",
          backgroundImage: `url(${thumbnail})`,
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
