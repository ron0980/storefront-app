// CategoryDropdown Component: Renders a dropdown to select a product category.
// It updates the application state based on the category chosen and provides an option to clear the selection.
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

// Utility function to capitalize the first letter of a string.
const capitalizeFirstLetter = (inputString: string) => {
  return inputString.charAt(0).toUpperCase() + inputString.slice(1);
};

const CategoryDropdown = () => {
  const {
    selectedCategory,
    setSelectedCategory,
    setSelectedProduct,
    categories,
  } = useAppContext()!;

  // Handler to update selected category and reset product selection.
  const handleCategoryChange = (event: any) => {
    setSelectedCategory(event.target.value);
    setSelectedProduct("");
  };

  return (
    <StyledGridContainer item xs={3}>
      <Box sx={{ minWidth: 400 }}>
        <FormControl fullWidth>
          <InputLabel id="category-label">Category</InputLabel>
          <Select
            labelId="category-label"
            id="category-id"
            value={selectedCategory || ""}
            label="Category"
            onChange={handleCategoryChange}
          >
            {categories &&
              categories.map((category) => (
                <MenuItem key={category} value={category}>
                  {capitalizeFirstLetter(category)}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </Box>
      <CustomButton
        variant="contained"
        id="clear-category"
        onClick={() => {
          setSelectedCategory("");
          setSelectedProduct("");
        }}
      >
        X
      </CustomButton>
    </StyledGridContainer>
  );
};

export default CategoryDropdown;
