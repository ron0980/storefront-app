import React from "react";
import { useAppContext } from "../context/AppContext";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { styled } from "styled-components";

const CustomButton = styled(Button)`
  background-color: #0061a5;
  color: white;
  margin-left: 10px !important;
  padding: 15px !important;
`;

const StyledGridContainer = styled(Grid)`
  display: flex;
  align-items: center;
`;

const ProductDropdown = () => {
  const { selectedProduct, setSelectedProduct, products } = useAppContext()!;

  const handleProductChange = (event: any) => {
    setSelectedProduct(event.target.value);
  };

  return (
    <StyledGridContainer item xs={3}>
      <Box sx={{ minWidth: 400 }}>
        <FormControl fullWidth>
          <InputLabel id="product-label">Product</InputLabel>
          <Select
            labelId="product-label"
            id="product-id"
            label="Products"
            value={selectedProduct || ""}
            onChange={handleProductChange}
          >
            {products &&
              products.map((product) => (
                <MenuItem key={product.id} value={product.id}>
                  {product.title}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Box>
      <CustomButton
        variant="contained"
        id="clear-product"
        onClick={() => {
          setSelectedProduct("");
        }}
      >
        X
      </CustomButton>
    </StyledGridContainer>
  );
};

export default ProductDropdown;
