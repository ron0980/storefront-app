// ProductDropdown Component: Displays a dropdown for product selection.
// It allows users to choose a product and also offers a way to reset the selected product.
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

// CustomButton: Styled button with a specific design for resetting the product selection.
const CustomButton = styled(Button)`
  background-color: #0061a5;
  color: white;
  margin-left: 10px !important;
  padding: 15px !important;
`;

// StyledGridContainer: Container styled for aligning its child elements.
const StyledGridContainer = styled(Grid)`
  display: flex;
  align-items: center;
`;

const ProductDropdown = () => {
  // Using the context to access selected product, setter function, and the list of all products.
  const { selectedProduct, setSelectedProduct, products } = useAppContext()!;

  // Function to handle changes in product selection from the dropdown.
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
