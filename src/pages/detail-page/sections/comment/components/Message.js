import { Avatar, Stack, Typography } from "@mui/material";

const Message = ({ username, message }) => {
  return (
    <Stack spacing={1} direction="row">
      <Avatar>{username.split(" ")[0].split("")[0]}</Avatar>
      <Typography fontSize="12px" color="#FFFFFF">
        <Typography
          fontSize="13px"
          fontWeight="700"
          color="#FFFFFFB3"
          component="span"
        >
          {username}{" "}
        </Typography>
        {message}
      </Typography>
    </Stack>
  );
};

export default Message;
