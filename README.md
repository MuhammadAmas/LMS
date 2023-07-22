# LMS Database Project

This repository contains a database project for a Learning Management System (LMS) built using React.js, Express.js, PostgreSQL, and Chakra UI.

## Installation

Clone the repository: ```git clone <https://github.com/MuhammadAmas/LMS.git>```\
Change to the project directory: ```cd LMS```\
Install dependencies for the client:

```
cd client
npm install
```

Install dependencies for the server:

```
cd server
npm install
```

Create a PostgreSQL database for the LMS. Checkout the [Schema.sql](https://github.com/MuhammadAmas/LMS/blob/main/server/schema.sql) file.\
Set up the database connection by creating the `.env` configuration file in the server directory with your PostgreSQL credentials. It must include the following:

```
PG_HOST='127.0.0.1'
PG_USER='postgres'
PG_PASSWORD=''  (Your pgAdmin 4 server's password)
PG_DATABASE='acadist' 
PG_PORT=''   (The port you setup during installation. Usually its 5432)
```

Start the server:

```
cd server
npm run dev
```

Start the client:

```
cd client 
npm run dev
```

Access the LMS application in your browser.

## Project Structure

`client/`: Contains the React.js client application.\
`client/utils/`: Contains the APIs.\
`server/`: Contains the Express.js server application.\
`server/database.js/`: Contains the database queries.\
`server/app.js/`: Contains the API routes for the LMS.

## Features

- User authentication and authorization.
- Course management, including creation, enrollment, and deletion.
- User profile management.
- Teacher dashboard for managing courses.
- Interactive user interface using Chakra UI components.

## Collaborators

This project was developed by the following collaborators:

- **[Muhammad Amas](https://github.com/MuhammadAmas)**
- **[Zain Asif](https://github.com/ZainAsif767)**

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
