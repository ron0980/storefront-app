# Simple Storefront Application

A user-friendly storefront application that fetches and displays product data using the Fake Store API(https://fakestoreapi.com). Built with React, TypeScript, and various robust libraries.

## Installation and Deployment

1. Clone the repository to your local machine.

2. Navigate to the project directory using the terminal.

3. Install dependencies: npm install

4. Start the application: npm start

5. Open your web browser and access the application at [http://localhost:3000](http://localhost:3000).

## Features

### Category Selection

- As a user, you can view a list of product categories in a dropdown.
- Selecting a category will fetch and display associated product data.

### Product Selection

- After selecting a category, you can view a list of products from that category in another dropdown.
- Selecting a product will display detailed product information.

### Bar Chart Visualization

- When viewing the category data, a bar chart is displayed with the product titles along the horizontal axis and the default price along the vertical axis.
- You can switch between viewing product prices and ratings using a dropdown selection.

### Product Details

- When selecting a product, the bar chart is replaced with detailed product information, including the product title, price, description, category, and an image.

### Clear Filters

- You can clear the dropdown filters to reset the selection.

## Tools and Technologies Used

- React with TypeScript
- Context API for state management
- Styled Components for styling
- Material UI for UI components
- Highcharts for data visualization
- Fake Store API for product and category data

## Usage

1. Select a category from the dropdown to view products in that category.

2. Optionally, select a product from the product dropdown to view its details.

3. Toggle between Price and Rating using the dropdown to change the chart visualization.

4. To clear filters, use the "Clear Filters" option.

## Credits
- Product data is fetched from the [Fake Store API](https://fakestoreapi.com).
- Various libraries and components have been used to enhance the user experience.

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute it as needed.
