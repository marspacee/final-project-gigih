import {
  Avatar,
  Button,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { styled } from "@mui/material/styles";

const CommentInput = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    backgroundColor: "inherit",
  },
  "& .Mui-focused": {},
}));

const Message = ({ username, message }) => {
  return (
    <Stack spacing={1} direction="row">
      <Avatar>{username.split(" ")[0].split("")[0]}</Avatar>
      <Typography>{message}</Typography>
    </Stack>
  );
};

const CommentSection = () => {
  const username = "Yanto";
  const message =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ornare ac leo facilisis vehicula. Mauris urna justo, euismod quis nunc id, aliquam tincidunt augue. Vestibulum viverra feugiat nibh, in scelerisque mi elementum nec. Nam malesuada diam laoreet malesuada pulvinar. Nunc lorem tortor, volutpat non ex quis, sagittis volutpat orci. Curabitur efficitur lectus vel finibus mollis. Ut ex velit, lacinia ac mauris sit amet, rutrum accumsan mauris. Cras volutpat pellentesque risus, quis imperdiet sapien mattis fringilla. Nulla sit amet sagittis lectus, et tempus nunc. Suspendisse pellentesque augue augue, ultricies feugiat massa dictum ac. Sed non mollis sapien, id ornare sem. Proin porta pellentesque mi sed vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus interdum scelerisque porta. Donec et sem nec ante suscipit tempor hendrerit cursus justo. Nullam euismod dignissim neque quis mollis.";
  return (
    <Grid
      container
      direction="column"
      sx={{
        border: "1px solid black",
        borderRadius: "8px",
        padding: "8px",
        height: "79vh",
      }}
      divider={<Divider sx={{ borderColor: "white", mt: 0 }} />}
      rowSpacing={2}
    >
      <Grid item md={1}>
        <Typography fontSize="25px" color="white">
          Comments
        </Typography>
      </Grid>
      <Grid item md={8} sx={{ overflowY: "scroll" }}>
        <Message username={username} message={message} />
      </Grid>
      <Grid item md={3} padding={2}>
        <CommentInput
          fullWidth
          label="Username"
          multiline
          variant="filled"
          color="secondary"
        />
        <CommentInput fullWidth label="Messages" multiline variant="filled" />
        <Button fullWidth>Submit</Button>
      </Grid>
    </Grid>
  );
};

export default CommentSection;
