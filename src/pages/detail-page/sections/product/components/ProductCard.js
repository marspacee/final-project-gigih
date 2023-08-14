import { Box, Divider, Stack, Typography } from "@mui/material";

const ProductCard = ({ data }) => {
  const { url, title, price, thumbnail } = data;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
    >
      <Stack
        sx={{ backgroundColor: "white", borderRadius: "8px" }}
        maxHeight="300px"
      >
        <Box
          sx={{
            borderTopRightRadius: "8px",
            borderTopLeftRadius: "8px",
            position: "relative",
            backgroundImage: `url(${thumbnail})`,
            backgroundSize: "cover",
            width: "100%",
            paddingTop: "100%",
          }}
        />
        <Stack p={1} spacing={1}>
          <Typography
            fontSize="12px"
            fontWeight={700}
            sx={{
              textOverflow: "ellipsis",
              display: "-webkit-box",
              overflow: "hidden",
              WebkitBoxOrient: "vertical",
              whiteSpace: "pre-wrap",
              WebkitLineClamp: 2,
            }}
          >
            {title}
          </Typography>
          <Divider />
          <Typography fontSize="12px">
            {`Rp${price.toLocaleString("ID")}`}
          </Typography>
        </Stack>
      </Stack>
    </a>
  );
};

export default ProductCard;
