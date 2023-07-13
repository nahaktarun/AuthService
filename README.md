# Node.js MySQL Flight Booking System - Microservice Architecture

This project is a Flight Booking System built using Node.js and MySQL, following a microservice architecture. It consists of multiple microservices such as authentication, API gateway, booking service, flight and search service, and reminder service. The communication between the microservices is facilitated by RabbitMQ, which acts as the message queue.

## Microservices

1. [Authentication Service](https://github.com/nahaktarun/AuthService)

   - Responsible for user authentication and authorization.
   - Manages user accounts, login, and registration.
   - Generates and verifies JSON Web Tokens (JWT) for secure API access.

2. [API Gateway](https://github.com/nahaktarun/API_Gateway)

   - Serves as the entry point for external requests to the system.
   - Provides a unified API interface for clients to communicate with various microservices.
   - Performs request validation, rate limiting, and routing to the appropriate microservice.

3. [Booking Service](https://github.com/nahaktarun/BookingService)

   - Handles flight bookings and related operations.
   - Allows users to search for available flights, select seats, and make reservations.
   - Manages booking details and communicates with the flight and search service.

4. [Flight and Search Service](https://github.com/nahaktarun/flightsAndSearchService)

   - Manages flight information, including available seats, prices, and schedules.
   - Provides search functionality for users to find flights based on criteria such as origin, destination, and date.
   - Sends notifications to the booking service about flight availability and updates.

5. [Reminder Service](https://github.com/nahaktarun/ReminderService)

   - Sends reminders and notifications to users about upcoming flights, check-in details, and booking updates.
   - Integrates with external notification systems (e.g., email, SMS) to deliver messages.

## Communication via RabbitMQ

RabbitMQ is used as the message queue to facilitate communication between the microservices. It provides a reliable and scalable messaging system for asynchronous communication and decouples the services. The microservices use RabbitMQ to send and receive messages, ensuring reliable and efficient communication between different components of the system.

### Setup and Configuration

#### To run this Flight Booking System, follow these steps:

    * Install Node.js and MySQL if they are not already installed.

### Authentication Service

The Authentication Service is responsible for user authentication and authorization.
API Endpoints:

1. POST /api/auth/register

   - Register a new user account.
   - Request body parameters: username, email, password.
   - Returns the user object and a JWT token for authentication.

2. POST /api/auth/login

   - Authenticate and log in a user.
   - Request body parameters: email, password.
   - Returns the user object and a JWT token for authentication.

3. GET /api/auth/profile
   - Get the current user's profile.
   - Requires a valid JWT token in the request headers for authentication.
   - Returns the user object.

### Acknowledgments

We would like to acknowledge the following resources and libraries that contributed to the development of this Flight Booking System:

- Node.js: https://nodejs.org/
- MySQL: https://www.mysql.com/
- RabbitMQ: https://www.rabbitmq.com/
- Express.js: https://expressjs.com/
- JWT: https://jwt.io/
- Other dependencies mentioned in the individual microservices' package.json files.
