# Eterna Care Medical Institute

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Getting Started](#getting-started)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Running the Application](#running-the-application)
5. [Usage](#usage)
6. [API Documentation](#api-documentation)
7. [Project Structure](#project-structure)
8. [Contributing](#contributing)
9. [License](#license)
10. [Contact](#contact)

## Introduction

Eterna Care Medical Institute is a Blood Bank web application designed to manage and schedule appointments for blood donors . This application helps streamline the process of booking appointments at various laboratories and provides an efficient interface for both donors and administrators.

## Features

- User authentication and authorization
- Schedule appointments with laboratories
- View and manage appointments
- View and manage Blood-bank Inventory
- Responsive UI for a seamless user experience

## Technologies Used

- **Frontend:** React, Next.js, Tailwind CSS, Shadcn UI
- **Backend:** Node.js, Next.js Server Action
- **Database:** Prisma ORM with MongoDB
- **State Management:** React Query (TanStack Query)
- **Validation:** Zod, React Hook Form

## Getting Started

### Prerequisites

Ensure you have the following installed on your local development machine:

- Node.js (>= 14.x)
- pnpm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ciobiano/Eterna-care.git
   cd Eterna-care
   ```

2. Install the dependencies:

   ```bash
   pnpm install
   # or
   yarn install
   ```

### Running the Application

1. Start the development server:

   ```bash
   pnpm run dev
   # or
   yarn dev
   ```

2. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

## Usage

Once the application is running, you can:

- Sign up and log in as a user
- Browse and select laboratories
- Schedule and manage appointments

## API Documentation

The application uses server actions to handle data fetching and mutations. Here are some key endpoints:

- **GET /actions/getLaboratories:** Fetch a list of laboratories
- **POST /actions/getAppointments:** Create a new appointment

For detailed API documentation, refer to the code in the `/actions` directory.

## Project Structure

The project is organized as follows:

```
Eterna-care/
├── actions/              # Next.js 14 server actions
├── app/                  # Next.js app directory
├── components/           # Reusable React components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions and libraries
├── prisma/               # Prisma schema and migrations
├── public/               # Public assets
├── styles/               # Global styles and Tailwind CSS config
├── .env                  # Environment variables
├── next.config.js        # Next.js configuration
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation
```

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add new feature'`)
5. Push to the branch (`git push origin feature/your-feature-name`)
6. Open a pull request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For any questions or inquiries, please contact:

- **Email:** (mailto:Rafaelobiano@yahoo.com)
- **GitHub:** [ciobiano](https://github.com/ciobiano)

---
