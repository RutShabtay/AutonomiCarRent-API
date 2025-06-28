# 🚗 AutonomiCarRent API

A backend API system for managing an **autonomous car rental business**, providing smart car booking, user management, role-based permissions, and secure business operations.

Developed as part of a **Node.js** web development course, focusing on robust architecture, security, testing, and database integration.

---

## 📌 Why This Project?

Autonomous car rentals are revolutionizing the way we move — and this API delivers all the backend functionality needed to manage such a business with clarity, security, and efficiency:

- ✅ **Business** – Create and update the core company information (e.g., name, location, contact)
- ✅ **Services** – Add, update, and delete rental options (e.g., car models, pricing tiers, additional packages)
- ✅ **Meetings** – Schedule rental periods while preventing overlapping appointments
- ✅ **Users** – Allow user registration and handle role-based access (e.g., clients vs. admins)
- ✅ **Security** – Enforce token-based authentication and admin-only permissions for sensitive operations
- ✅ **Authentication** – Supports Google OAuth 2.0 for easy and secure user login  
- ✅ **Testing** – Every service is tested using Jest to ensure stability and reliability  

---

## 🚀 Tech Stack

- **Node.js** – Backend runtime environment
- **Express.js** – HTTP server framework
- **MongoDB Atlas** – Cloud-hosted NoSQL database  
- **Mongoose** – ORM for MongoDB
- **JWT** – Token-based authentication
- **bcrypt** – Password encryption
- **dotenv** – Secure config handling
- **Jest** – Testing framework
- **Swagger** – Interactive API documentation
- **Log4js** – Logger integration
- **ESLint** – Code style enforcement

---

## 📁 Project Structure

```
NODEPROJECT/
├── node_modules/               # Installed dependencies
├── src/                        # Source files
│   ├── config/                 # DB connection, environment config
│   ├── controllers/            # Route controllers (business, services, meeting, users)
│   ├── middleware/             # Auth middlewares, error handling
│   ├── models/                 # Mongoose schemas (e.g. User, Meeting)
│   ├── routes/                 # REST API route definitions
│   ├── services/               # Business logic per entity
│   ├── types/                  # TypeScript interfaces/types
│   ├── app.ts                  # Express app initialization
│   ├── server.ts               # Server start (listening on port)
│   └── swagger.ts              # Swagger documentation setup
├── tests/                      # Unit tests using Jest
├── .env                        # Environment variables
├── .gitignore                  # Git ignored files
├── jest.config.js             # Jest configuration
├── package.json                # Project metadata and scripts
├── package-lock.json           # NPM dependency lock file
├── tsconfig.json               # TypeScript configuration
└── README.md                   # Project documentation (you are here)
```

---

## ⚙️ Setup & Installation

### 1. Clone the Repository
```bash
git clone [https://github.com/your-user/AutonomiCarRent.git](https://github.com/RutShabtay/AutonomiCarRent-API)
cd AutonomiCarRent
```
### 2. Install Dependencies
```bash
npm install
```
### 3. Create .env File
Create a .env file in the root directory with the following variables:
```bash
PORT=3000
MONGO_URI=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
JWT_SECRET=XXXXXXX
GOOGLE_CLIENT_ID=XXXXXXXXXXXX 
GOOGLE_CLIENT_SECRET=XXXXXXXXXXXXXXXXXXXX
```
### 4.  Start the Development Server
```bash
npm run dev
```

---

##✅ Running Tests
Unit tests are written using Jest and located in the tests/ folder.
```bash
npm test
```
Test files are located in the tests/ directory (e.g. user.test.ts ) and include test cases for validation, database save, and default values.


---
## 🔐 Authentication & Authorization

- Signup/Login via `api/auth/signup` and `api/auth/signin`  
- Passwords are hashed using **bcrypt**  
- JWTs are used for all protected API routes.
- Middleware ensures valid tokens and enforces role-based access (e.g., admin).
- Google OAuth 2.0 authentication is supported, allowing users to sign in easily with their Google accounts via api/auth/google routes

---

## 📊 API Documentation

Interactive Swagger docs available at:  
[http://localhost:3000/api-docs](http://localhost:3000/api-docs)


---

## 💡 Idea & Vision

**AutonomiCarRent** is inspired by the need for efficient and intelligent fleet management in a growing autonomous vehicle market.  
It helps small-to-medium rental businesses transition into automated platforms with:

- Simple booking logic  
- Secure multi-role access  
- Expandable architecture  

---


                                  💖 Made with Love by **Ruthi Shabtay** 💖


---

💬 *Questions? Ideas? Bugs? Let’s make it better together!*


