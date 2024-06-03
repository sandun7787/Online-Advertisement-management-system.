
# Advertisement Management API

## Description

This project is an API for managing advertisements. It provides CRUD operations for advertisements, including functionalities such as adding images to advertisements and pagination for listing advertisements.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository
    ```bash
    git clone https://github.com/yourusername/advertisement-api.git
    cd advertisement-api
    ```

2. Install dependencies
    ```bash
    npm install
    ```

3. Set up your environment variables. Create a `.env` file in the root of the project and add the following:
    ```
    DB_HOST=your-database-host
    DB_USER=your-database-user
    DB_PASS=your-database-password
    DB_NAME=your-database-name
    JWT_SECRET=your-jwt-secret
    ```

4. Run the server
    ```bash
    npm start
    ```

## Usage

### Running the API

To run the API locally, use the following command:
```bash
npm start
```

The API will be available at `http://localhost:3000`.

### Example Requests

Here are example requests for each CRUD operation.

#### Create Advertisement

```http
POST /api/advertisements
Content-Type: application/json

{
    "topic": "Sale",
    "description": "Great discounts on electronics",
    "price": 100,
    "telephoneNo": "1234567890",
    "sellerId": 1,
    "locationId": 1,
    "categoryId": 1,
    "images": ["http://example.com/image1.jpg", "http://example.com/image2.jpg"]
}
```

#### Get Single Advertisement

```http
GET /api/advertisements/:id
```

#### Get All Advertisements with Pagination

```http
GET /api/advertisements?page=1&limit=10
```

#### Update Advertisement

```http
PUT /api/advertisements/:id
Content-Type: application/json

{
    "topic": "Updated Sale",
    "description": "New discounts on electronics",
    "price": 120,
    "telephoneNo": "0987654321",
    "locationId": 2,
    "categoryId": 2,
    "images": ["http://example.com/image3.jpg", "http://example.com/image4.jpg"]
}
```

#### Delete Advertisement

```http
DELETE /api/advertisements/:id
```

## API Endpoints

### Advertisements

- **POST /api/advertisements**
  - Create a new advertisement
- **GET /api/advertisements**
  - Get all advertisements with pagination
- **GET /api/advertisements/:id**
  - Get a single advertisement by ID
- **PUT /api/advertisements/:id**
  - Update an advertisement by ID
- **DELETE /api/advertisements/:id**
  - Delete an advertisement by ID

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature-branch`)
6. Create a new Pull Request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
