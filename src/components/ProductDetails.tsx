import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { Card, Typography } from "@mui/material";
import { styled } from "styled-components";

const StyledCard = styled(Card)`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CategoryImageContainer = styled.div`
  display: flex;
  gap: 100px;
`;

const ProductImage = styled.img`
  width: 100px;
`;

const StyledPriceTypography = styled(Typography)`
  font-size: 32px !important;
  margin-top: 20px !important;
`;

const ProductDetails = () => {
  const { selectedProduct, products } = useAppContext()!;
  const [selectedProductData, setSelectedProductData] = useState<any>();

  useEffect(() => {
    if (selectedProduct && products) {
      const productData = products.find(
        (product: any) => product.id === parseInt(selectedProduct)
      );

      setSelectedProductData(productData);
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
