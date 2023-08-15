import { Box, Button, Input, Stack, Typography } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Message from "./components/Message";
import {
  fetchCommentsByVideoId,
  postCommentByVideoId,
} from "../../../../api/Comment";

const CommentSection = () => {
  const { videoId } = useParams();
  const [comments, setComments] = useState([]);
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  const isSubmitDisabled = !message || !username;

  const fetchComments = useCallback(async () => {
    try {
      const { data } = await fetchCommentsByVideoId(videoId);
      setComments(data);
    } catch (error) {
      console.log(error);
    }
  }, [videoId]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  // useEffect(() => {
  //   socket.emit("joinRoom", videoId);

  //   socket.on("initialComments", (initialComments) => {
  //     setComments(initialComments);
  //   });

  //   socket.on("newComment", (comment) => {
  //     setComments((prevComments) => [...prevComments, comment]);
  //   });

  //   return () => {
  //     socket.off("initialComments");
  //     socket.off("newComment");
  //   };
  // }, [videoId]);

  const handleSubmit = async () => {
    try {
      if (username && message) {
        const newComment = { username, message, videoId };
        await postCommentByVideoId(newComment);
        fetchComments();
        setMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onKeyEnter = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
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
            value={username}
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            onKeyDown={onKeyEnter}
          />
          <Input
            sx={{ color: "white", borderBottom: "2px solid #FFFFFFB3" }}
            fullWidth
            value={message}
            placeholder="Message"
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={onKeyEnter}
          />
          <Button
            fullWidth
            variant={isSubmitDisabled ? "contained" : "outlined"}
            onClick={handleSubmit}
            disabled={isSubmitDisabled}
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
              "&:disabled": {
                border: "inherit",
                color: "#FFFFFFB3",
              },
            }}
          >
            {isSubmitDisabled ? "Fill the Username and Message" : "Submit"}
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
};

export default CommentSection;
