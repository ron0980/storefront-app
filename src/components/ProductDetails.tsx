// ProductDetails Component: Displays detailed information about a selected product.
// It shows the product title, category, SKU, price, image, and description.
import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { Card, Typography } from "@mui/material";
import { styled } from "styled-components";
import { Product } from "../interface/interface";

// StyledCard: Custom styled component for wrapping the product details.
const StyledCard = styled(Card)`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

// CategoryImageContainer: A container for arranging the product details and image.
const CategoryImageContainer = styled.div`
  display: flex;
  gap: 100px;
`;

// ProductImage: Styled component to give the product image a specific width.
const ProductImage = styled.img`
  width: 100px;
`;

// StyledPriceTypography: Custom typography for displaying the product's price with emphasis.
const StyledPriceTypography = styled(Typography)`
  font-size: 32px !important;
  margin-top: 20px !important;
`;

const ProductDetails = () => {
  const { selectedProduct, products } = useAppContext()!;
  const [selectedProductData, setSelectedProductData] = useState<Product | null>(null);

    useEffect(() => {
    if (selectedProduct && products) {
      const productData = products.find(
        (product: any) => product.id === parseInt(selectedProduct)
      );

      setSelectedProductData(productData || null);
    }

    return () => {
      setSelectedProductData(null);
    };
  }, [selectedProduct, products]);

  return (
    <div>
      {selectedProductData ? (
        <StyledCard>
          <Typography variant="h4">{selectedProductData.title}</Typography>
          <CategoryImageContainer>
            <div>
              <Typography variant="body1">
                {selectedProductData.category.toUpperCase()}
              </Typography>
              <Typography variant="body1">
                SKU: {selectedProductData.id}
              </Typography>
              <StyledPriceTypography variant="body1">
                ${selectedProductData.price}
              </StyledPriceTypography>
            </div>

            <ProductImage src={selectedProductData.image} alt="Product" />
          </CategoryImageContainer>

          <Typography variant="body2">
            {selectedProductData.description}
          </Typography>
        </StyledCard>
      ) : (
        <p>Select a product to view details.</p>
      )}
    </div>
  );
};

export default ProductDetails;
