import { useState } from "react";
import { Box } from "@mui/material";

const VideoSection = ({ url }) => {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const handleIframeLoad = () => {
    setIframeLoaded(true);
  };

  return (
    <Box sx={{ height: "60vh", width: "100%" }}>
      <iframe
        src={`${url}?autoplay=1`}
        title={"video-title"}
        frameBorder={0}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        height="100%"
        width="100%"
        style={{ display: iframeLoaded ? "block" : "none" }}
        onLoad={handleIframeLoad}
      >
        <div></div>
      </iframe>
    </Box>
  );
};

export default VideoSection;
