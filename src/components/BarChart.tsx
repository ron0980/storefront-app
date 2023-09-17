// BarChart Component: Displays a column chart comparing products based on user-selected metrics (Price or Rating).
// It also shows a product table underneath the chart if a category has been selected.
import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useAppContext } from "../context/AppContext";
import { Card, MenuItem, Select, Typography } from "@mui/material";
import { styled } from "styled-components";
import ProductTable from "./ProductTable";

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const BoldTypography = styled(Typography)`
  font-weight: bold;
`;

const BarChart = () => {
  const { products, selectedCategory } = useAppContext()!;
  const [chartData, setChartData] = useState([]);
  const [selectedAxis, setSelectedAxis] = useState<"Price" | "Rating">("Price");

  // Prepares the chart data based on the selected category and chosen metric (Price/Rating).
  const prepareChartData = () => {
    const categoryProducts =
      products &&
      products.filter((product) => product.category === selectedCategory);

    const chartData =
      categoryProducts &&
      categoryProducts.map((product) => ({
        name: product.title,
        y: selectedAxis === "Price" ? product.price : product.rating.rate,
      }));

    return chartData;
  };

  // React effect hook to update chart data when category, products, or selected metric changes.
  useEffect(() => {
    const newChartData: any = prepareChartData();
    setChartData(newChartData);
    // eslint-disable-next-line
  }, [selectedCategory, products, selectedAxis]);

  const chartOptions = {
    chart: {
      type: "column",
    },
    title: {
      text: `${selectedAxis} Comparison`,
    },
    xAxis: {
      categories: chartData && chartData.map((data: any) => data.name),
    },
    yAxis: {
      title: {
        text: selectedAxis,
      },
    },
    series: [
      {
        name: selectedAxis,
        data: chartData && chartData.map((data: any) => data.y),
      },
    ],
  };
  const handleAxisChange = (event: any) => {
    setSelectedAxis(event.target.value);
  };

  if (selectedCategory) {
    return (
      <>
        <Card>
          <CenteredContainer>
            <Select
              value={selectedAxis}
              onChange={handleAxisChange}
              variant="outlined"
            >
              <MenuItem value="Price">Price</MenuItem>
              <MenuItem value="Rating">Rating</MenuItem>
            </Select>
          </CenteredContainer>
          <HighchartsReact highcharts={Highcharts} options={chartOptions} />
        </Card>
        <Card sx={{ marginTop: "20px" }}>
          <ProductTable />
        </Card>
      </>
    );
  }

  return (
    <CenteredContainer>
      <BoldTypography variant="h4">Please select a category</BoldTypography>
    </CenteredContainer>
  );
};

export default BarChart;
