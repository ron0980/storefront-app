// App Component: Main entry point of the application.
// It displays a header, category dropdown, product dropdown, and content display which either shows product details or a bar chart.
import React from "react";
import { AppProvider, useAppContext } from "./context/AppContext";
import CategoryDropdown from "./components/CategoryDropdown";
import ProductDropdown from "./components/ProductDropdown";
import BarChart from "./components/BarChart";
import ProductDetails from "./components/ProductDetails";
import { Grid } from "@mui/material";
import Header from "./components/Header";
import { styled } from "styled-components";

// AppContainer: Styled container for the entire app content.
const AppContainer = styled.div`
  margin: 20px;
  padding: 20px;
`;

// ProductGrid: Styled grid for displaying the product dropdown.
const ProductGrid = styled(Grid)`
  display: flex;
  flex-direction: row;
  margin-top: 40px;
`;

const App = () => {
  return (
    <>
      <Header />
      <AppProvider>
        <AppContainer>
          <Grid container spacing={4} columns={16}>
            <Grid item spacing={2} xs={6} gap={4}>
              <CategoryDropdown />
              <ProductGrid>
                <ProductDropdown />
              </ProductGrid>
            </Grid>
            <Grid item xs={10}>
              <ContentDisplay />
            </Grid>
          </Grid>
        </AppContainer>
      </AppProvider>
    </>
  );
};

// ContentDisplay Component: Determines which content to display based on whether a product is selected.
// If a product is selected, it displays its details. Otherwise, a bar chart is shown.
const ContentDisplay = () => {
  const { selectedProduct } = useAppContext()!;

  if (selectedProduct) {
    return <ProductDetails />;
  }

  return <BarChart />;
};

export default App;
