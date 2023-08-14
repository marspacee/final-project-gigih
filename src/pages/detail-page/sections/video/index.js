import { Box } from "@mui/material";

const VideoSection = ({ url }) => {
  return (
    <Box sx={{ height: "60vh", width: "100%" }}>
      <iframe
        src="https://www.youtube.com/embed/Qzcc-FWv0cM"
        title={"video-title"}
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        height="100%"
        width="100%"
      />
    </Box>
  );
};

export default VideoSection;
