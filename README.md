#!/bin/bash

cat << 'EOF' > README.md
# General Auth System

A reusable, scalable, and modular full-stack authentication boilerplate built with the MERN stack. This project includes features such as OTP verification, login throttling, token expiration, and more — designed to help backend developers quickly implement secure authentication.

## Features

- **OTP (One-Time Password) Verification** for user signup and login security
- **Login Throttling** to prevent brute-force attacks
- **Token Expiration** management with JWT for secure session handling
- Modular and reusable backend and frontend architecture
- Easy to integrate into other projects or use as a starter template

## Tech Stack

- **Frontend:** React
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens), OTP via email
- **Others:** Nodemailer for sending emails

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB instance running (local or cloud)

### Installation

1. Clone the repo:

   \`\`\`bash
   git clone https://github.com/DakshAsati/GENERAL-AUTH-SYSTEM.git
   \`\`\`

2. Navigate to the project directory:

   \`\`\`bash
   cd GENERAL-AUTH-SYSTEM
   \`\`\`

3. Install dependencies for backend and frontend:

   \`\`\`bash
   cd backend
   npm install

   cd ../frontend
   npm install
   \`\`\`

### Configuration

- Create a \`.env\` file in the backend directory with the following variables:

  \`\`\`
  MONGODB_URI=your_mongodb_connection_string
  JWT_SECRET=your_jwt_secret_key
  EMAIL_USER=your_email_address
  EMAIL_PASS=your_email_password
  \`\`\`

### Running the Project

- Start backend server:

  \`\`\`bash
  cd backend
  npm start
  \`\`\`

- Start frontend server:

  \`\`\`bash
  cd frontend
  npm start
  \`\`\`

The app will be available at \`http://localhost:3000\`.

## Usage

- Register a new user with OTP verification.
- Login with email and password.
- Explore features like login throttling and token expiry for enhanced security.

## Contribution

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the MIT License.

EOF

echo "README.md file generated successfully!"
