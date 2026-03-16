# express-project-03-route-params-api

A simple Express.js backend project demonstrating how to use route parameters in an API.

## Concept

This project shows how dynamic route parameters work in Express.js using the following pattern:

```
/users/:id
```

The `id` is captured from the URL and accessed using:

```
req.params.id
```

## Tech Stack

- Node.js
- Express.js

## Project Structure

```
express-project-03-route-params-api
│
├─ src
│  ├─ controllers
│  │  └─ user.controller.js
│  │
│  └─ routes
│     └─ user.routes.js
│
├─ index.js
├─ package.json
└─ .gitignore
```

## Installation

Clone the repository

```bash
git clone https://github.com/a2rp/express-project-03-route-params-api.git
cd express-project-03-route-params-api
```

Install dependencies

```bash
npm install
```

## Run the Server

```bash
node index.js
```

Server runs at:

```
http://localhost:3000
```

## API Endpoint

### Get User by ID

```
GET /users/:id
```

Example:

```
http://localhost:3000/users/25
```

![alt text](image.png)

Response:

```json
{
    "id": "25",
    "name": "User 25",
    "message": "User data fetched successfully for id 25"
}
```

## Learning Outcome

This project demonstrates:

- Express route parameters
- Dynamic API routes
- Controllers and route separation
- Basic backend architecture

## Author

Ashish Ranjan

---

Follow me:

- GitHub: https://github.com/a2rp
- Portfolio: https://www.ashishranjan.net
- LinkedIn: https://www.linkedin.com/in/aashishranjan
- Facebook: https://www.facebook.com/theash.ashish/
