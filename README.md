# AMSINDIA Dashboard

AMSINDIA Dashboard is a comprehensive web application developed using ReactJS, CSS, Tailwind CSS, Spring Boot, and MySQL. It provides a robust platform for monitoring and managing various aspects of industrial machinery and operations.

## Features

- **User Authentication:**
  - Implemented JWT authentication for secure user registration and sign-in.

- **Role-Based Access:**
  - Supports Operator and Supervisor roles with different permissions for accessing features.

- **Real-Time Monitoring:**
  - Utilizes circular gauges to display real-time data such as temperature (PT 100 RTD, Thermo Couple), energy consumption, power, voltage, current, and PF (average) of spindle and machine.

- **Graphical Data Representation:**
  - Provides capabilities to plot real-time graphs and log-graphs for historical data of temperature, energy consumption, power, voltage, current, frequency, and RPM.

- **OEE Calculation:**
  - Calculates Overall Equipment Effectiveness (OEE) based on user-provided data and visualizes it with:
    - Bar charts for production metrics.
    - Circular charts for Availability, Performance, and Quality.
    - Pi charts for additional insights.

- **Calendar Component:**
  - Includes a Calendar module where Supervisors can perform CRUD operations for scheduling events with start-time and end-time.

- **Reporting:**
  - Enables users to download comprehensive reports containing real-time and historical data about machines or specific modules.

## Technologies Used

- **Frontend:**
  - ReactJS
  - CSS
  - Tailwind CSS

- **Backend:**
  - Spring Boot
  - MySQL

## Getting Started

To get a local copy up and running, follow these simple steps:

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your/repository.git](https://github.com/CodeWithPrat/AMS-India_Dashboard.git
   cd repository

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your improvements.

## License

This project is licensed under the [MIT License](LICENSE).
