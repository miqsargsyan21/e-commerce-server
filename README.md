# e-commerce-server

## Introduction
### This README provides documentation for the APIs implemented in this project. The APIs are designed to manage products in an e-commerce system. These APIs allow users to perform operations such as adding, retrieving, updating, and deleting products.

## Run application
### Run `docker compose up` to run Database and Application.

## Docs
### Import collection and environment to postman from `/docs`.

## Authentication
### Authentication is required for certain endpoints to ensure secure access. The `authMiddleware` is used to authenticate users before granting access to protected endpoints.

## The following endpoints are available in this API:

### Auth Routes

#### - User Login
##### Method: `POST`
##### Endpoint: `/api/auth/login`
##### Description: Authenticates user credentials and provides access to the system.
##### Controller Function: `authenticateUser`

### Product Routes

#### - Add Product
##### Method: `POST`
##### Endpoint: `/api/product`
##### Description: Adds a new product to the system.
##### Middleware: Authentication required (`authMiddleware`).
##### Controller Function: `addProduct`


#### - Get All Products
##### Method: `GET`
##### Endpoint: `/api/product`
##### Description: Retrieves all products available in the system.
##### Controller Function: `getAllProducts`

#### - Get Product by ID
##### Method: `GET`
##### Endpoint: `/api/product/:id`
##### Description: Retrieves a specific product by its ID.
##### Controller Function: `getProductById`

#### - Update Product
##### Method: `PUT`
##### Endpoint: `/api/product/:id`
##### Description: Updates the details of a specific product.
##### Middleware: Authentication required (`authMiddleware`).
##### Controller Function: `updateProduct`

#### - Delete Product
##### Method: `DELETE`
##### Endpoint: `/api/product/:id`
##### Description: Deletes a specific product from the system.
##### Middleware: Authentication required (`authMiddleware`).
##### Controller Function: `deleteProduct`

### Order Routs

#### - Create Order
##### Method: `POST`
##### Endpoint: `/api/order`
##### Description: Creates a new order in the system.
##### Middleware: Authentication required (`authMiddleware`).
##### Controller Function: `createOrder`

#### - Get Order by ID
##### Method: `GET`
##### Endpoint: `/api/order/:id`
##### Description: Retrieves a specific order by its ID.
##### Controller Function: `Not implemented yet`

#### - Get Orders by Customer ID
##### Method: `GET`
##### Endpoint: `/api/order/customer/:customerId`
##### Description: Retrieves orders associated with a specific customer by customer ID.
##### Controller Function: Not implemented yet