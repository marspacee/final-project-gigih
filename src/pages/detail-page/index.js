import { Box, Grid, Stack } from "@mui/material";
import Page from "../../components/Page";
import { useCallback, useState, useEffect } from "react";
import VideoSection from "./sections/video";
import { useParams } from "react-router-dom";
import { fetchVideoById } from "../../api/Video";
import { fetchProductByVideoId } from "../../api/Product";
import ProductSection from "./sections/product";
import CommentSection from "./sections/comment";

const DetailPage = () => {
  const { videoId } = useParams();
  const [loading, setLoading] = useState(true);
  const [videoData, setVideoData] = useState({});
  const [productData, setProductdata] = useState([]);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const { data: videoResult } = await fetchVideoById(videoId);
      const { data: productResult } = await fetchProductByVideoId(videoId);
      setProductdata(productResult);
      setVideoData(videoResult);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [videoId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Page>
      <Grid container height="100%" columnSpacing={3} position="relative">
        <Grid item md={1.5}>
          <ProductSection products={productData} />
        </Grid>
        <Grid
          item
          md={7}
          height="fit-content"
          display="flex"
          alignItems="center"
          position="sticky"
          top="60px"
          pt="60px"
        >
          <VideoSection url={videoData.url} />
        </Grid>
        <Grid
          item
          md={3.5}
          height="fit-content"
          display="flex"
          alignItems="center"
          position="sticky"
          top="60px"
          pt="60px"
        >
          <CommentSection />
        </Grid>
      </Grid>
    </Page>
  );
};

export default DetailPage;
