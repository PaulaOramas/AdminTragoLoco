# Admin Trago Loco

## Overview
This project is a web application built using Svelte, designed for managing products, users, and invoices for the "Trago Loco" brand. It features a dashboard with statistics and charts to provide insights into the application's data.

## Project Structure
The project is organized as follows:

```
admintrago-svelte
├── public
│   ├── index.html          # Main HTML entry point
│   └── imagenes
│       └── logo.png       # Logo image for the application
├── src
│   ├── App.svelte         # Main Svelte component
│   ├── main.js            # Entry point for JavaScript
│   ├── components          # Reusable components
│   │   ├── Header.svelte   # Header component
│   │   ├── Footer.svelte   # Footer component
│   │   ├── StatsSection.svelte # Statistics section component
│   │   ├── ProductsChart.svelte # Chart for registered products
│   │   └── UsersChart.svelte    # Chart for user distribution
│   ├── pages               # Page components
│   │   ├── Dashboard.svelte # Dashboard view
│   │   ├── Productos.svelte  # Products management page
│   │   ├── Usuarios.svelte   # Users management page
│   │   └── Facturas.svelte   # Invoices management page
│   └── styles
│       └── site.css        # CSS styles for the application
├── package.json            # npm configuration file
├── svelte.config.js        # Svelte configuration settings
├── vite.config.js          # Vite configuration settings
└── README.md               # Project documentation
```

## Getting Started

### Prerequisites
- Node.js (version 14 or later)
- npm (Node package manager)

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd admintrago-svelte
   ```

2. Install the dependencies:
   ```
   npm install
   ```

### Running the Application
To start the development server, run:
```
npm run dev
```
This will start the application on `http://localhost:3000`.

### Building for Production
To build the application for production, run:
```
npm run build
```
The built files will be available in the `dist` directory.

### Deployment
You can deploy the application to platforms like Netlify or Vercel. Follow the respective platform's instructions for deploying a static site.

## Usage
- Navigate through the application using the header links.
- Access the dashboard to view statistics and charts.
- Manage products, users, and invoices through their respective pages.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.