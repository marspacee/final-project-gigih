import { Avatar, Box, Button, Input, Stack, Typography } from "@mui/material";

import { styled } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import socket from "../../../../utils/socket";
import { useParams } from "react-router-dom";
import Message from "./components/Message";

const CommentSection = () => {
  const { videoId } = useParams();
  const [comments, setComments] = useState([]);
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    socket.emit("joinRoom", videoId);

    socket.on("initialComments", (initialComments) => {
      setComments(initialComments);
    });

    socket.on("newComment", (comment) => {
      setComments((prevComments) => [...prevComments, comment]);
    });

    return () => {
      socket.off("initialComments");
      socket.off("newComment");
    };
  }, [videoId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && message) {
      const newComment = { username, message, videoId };
      socket.emit("newComment", newComment);
      setMessage("");
      setUsername("");
    }
  };

  return (
    <Stack
      sx={{
        width: "100%",
        border: "1px solid black",
        borderRadius: "8px",
        height: "79vh",
        mt: 0,
      }}
    >
      <Box px={3} py={2} borderBottom="1px solid black">
        <Typography fontSize="20px" color="white">
          Comments
        </Typography>
      </Box>

      <Box px={3} py={2} sx={{ overflowY: "scroll", height: "70%" }}>
        <Stack spacing={1} height="100%">
          {React.Children.toArray(
            comments.map(({ username, message }) => {
              return <Message username={username} message={message} />;
            })
          )}
        </Stack>
      </Box>
      <Box px={5} py={2}>
        <Stack height="100%" spacing={2}>
          <Input
            sx={{ color: "white", borderBottom: "2px solid #FFFFFFB3" }}
            fullWidth
            multiline
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            sx={{ color: "white", borderBottom: "2px solid #FFFFFFB3" }}
            fullWidth
            multiline
            value={message}
            placeholder="Message"
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button
            fullWidth
            variant="outlined"
            onClick={handleSubmit}
            sx={{
              border: "1px solid #FFFFFFB3",
              backgroundColor: "inherit",
              color: "#FFFFFFB3",
              "&:hover": {
                border: "1px solid #FFFFFFB3",
                backgroundColor: "inherit",
                color: "white",
              },
              "&:active": {
                backgroundColor: "inherit",
                color: "white",
              },
            }}
          >
            Submit
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
};

export default CommentSection;
