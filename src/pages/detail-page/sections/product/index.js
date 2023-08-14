import { Grid } from "@mui/material";
import React from "react";
import ProductCard from "./components/ProductCard";

const ProductSection = ({ products }) => {
  return (
    <Grid container rowSpacing={2}>
      {React.Children.toArray(
        products.map((product) => (
          <Grid item md={12}>
            <ProductCard data={product} />
          </Grid>
        ))
      )}
    </Grid>
  );
};

export default ProductSection;
