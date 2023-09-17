import { DataGrid } from "@mui/x-data-grid";
import { useAppContext } from "../context/AppContext";
import React from "react";

const ProductTable = () => {
    const { products } = useAppContext()!;
  // Define the columns for the DataGrid.
  // This determines how the product data will be displayed in the table.

  const columns = [
        { field: "title", headerName: "TITLE", width: 200, sortable: false },
    { field: "price", headerName: "PRICE", width: 100, sortable: false },
    {
      field: "description",
      headerName: "DESCRIPTION",
      width: 500,
      sortable: false,
    },
    {
      field: "rating",
      headerName: "RATING",
      width: 100,
      sortable: false,
      renderCell: (param: any) => {
        return <>{param.row.rating.rate}</>;
      },
    },
  ];

  // Custom rendering to extract the 'rate' from the nested 'rating' object
  return <DataGrid columns={columns} rows={products ?? []} />;
};

export default ProductTable;
