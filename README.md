# Hospital Management Application

This project is a web-based hospital management application designed to manage patient records efficiently. It provides functionalities for adding, updating, and retrieving patient information.

## Project Structure

```
hospital-management-app
├── public
│   ├── css
│   │   └── hospital.css       # Styles for the application
│   ├── js
│   │   └── main.js            # Client-side JavaScript functionality
│   └── index.html             # Main entry point for the web application
├── src
│   ├── controllers
│   │   └── patientController.js # Handles patient-related requests
│   ├── models
│   │   └── patientModel.js      # Defines patient data structure
│   ├── routes
│   │   └── patientRoutes.js      # Sets up patient-related routes
│   ├── views
│   │   ├── detail.html          # Displays detailed patient information
│   │   └── addPatient.html      # Form for adding a new patient
│   └── app.js                   # Main application file
├── package.json                  # npm configuration file
├── .gitignore                    # Files to be ignored by version control
└── README.md                     # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd hospital-management-app
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```

4. **Access the application:**
   Open your web browser and navigate to `http://localhost:3000`.

## Usage

- Use the main page to navigate to different functionalities.
- Add new patients using the "Add Patient" form.
- View patient details by selecting a patient from the list.

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License.