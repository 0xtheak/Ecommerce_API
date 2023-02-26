Ecommerce API

This is an ecommerce API built using Node.js, Express, and MongoDB. It is designed to allow developers to easily build ecommerce applications or add e-commerce functionality to existing applications.
Table of Contents

    Installation
    Usage
    Endpoints
    License

Installation

To use this API, you will need to have Node.js and MongoDB installed on your computer.

    Clone the repository: git clone https://github.com/0xtheak/Ecommerce_API.git
    Navigate to the project directory: cd Ecommerce_API
    Install dependencies: npm install
    Set environment variables:

        Create a .env file in the root directory of the project

        Add the following environment variables to the .env file:

        bash

        MONGOURL="mongodb://localhost:27017/Ecommerce_API"


        Replace the values with your own MongoDB URL
    Start the server: npm start
    The server will start on port 5000 by default. You can access the API at http://localhost:5000.

Usage

You can test the API using a tool like Postman or by sending HTTP requests using a programming language like JavaScript.

For example, to store a new product, send a POST request to the /products/create endpoint with the following JSON data in the request body:

request

{
    "name": "Laptop",
    "quantity": "100"
}

The API will store the product in the database and return a JSON response with the product data.


For more information on how to use the API, refer to the Endpoints section below.
Endpoints

The following endpoints are available in the API:
Endpoint	Method	Description
/products	GET	a list of all products
/products/create	POST	store new product in the database
/product/:id	DELETE	delete the product in the database by ID
/products/:id/update_quantity/?number=10	POST	update the product qunatity

This API is licensed under the MIT License. Feel free to use, modify, and distribute it as you see fit. If you find any issues or have suggestions for improvements, please create a GitHub issue or pull request.