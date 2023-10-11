# Legacy BloodBank
A Blood Bank Donation System built using React, Tailwind CSS, Node.js, Express, and MongoDB. This system manages three user types: organizations, donors, and hospitals. Hospitals can request blood donations from organizations, while donors can donate blood to organizations.

## Table of Contents
- Description
- Features
- Technologies
- Installation
- Contributions

## Description
It is a comprehensive web application designed to facilitate blood donation processes. It serves as a platform connecting organizations, donors, and hospitals in managing blood donations efficiently. Organizations can register, manage their inventory, and respond to blood requests from hospitals. Donors can sign up, view nearby organizations, and schedule blood donation appointments. Hospitals can request blood units from organizations and track their inventory in real-time.

## Features
- **User Authentication:** 
Secure user registration and login for organizations, donors, and hospitals.
- **Dashboard:** 
Personalized dashboards for each user type, displaying relevant information and actions.
- **Inventory Management:** 
Organizations can manage their blood inventory, track donations, and update stock levels.
- **Blood Requests:** 
Hospitals can request blood units from organizations with real-time tracking.
- **Donor Management:**
Donors can search for nearby organizations, schedule appointments, and track donation history.
- **Responsive Design:**
User-friendly interface accessible on various devices.

## Technologies Used
- **React:**
- **Tailwind CSS**
- **ReduxToolKit**
- **Axios**
- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**

## Installation
**Clone this repository:** 
```bash
git clone https://github.com/Emmyojile/BloodBank-App.git
```
**Install dependencies for the frontend and backend:**
```bash
cd client
npm install
cd ../server
npm install
 ```
**Create a .env file in the server directory and configure environment variables (e.g., database connection, JWT secret):**
```bash
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
JWT_SECRET=YOUR_JWT_SECRET
PORT=YOUR_PORT_NUMBER
```
**Run the development server for the frontend and backend:**
```bash
cd client
npm run dev

cd server
npm start
```

## Contributions
Contributions are welcome! To contribute to this project, follow these steps:

- Fork the repository.
- Create a branch for your feature or bug fix.
- Make your changes and commit them.
- Push to your fork and submit a pull request.
- Please make sure to update the README if necessary and include tests for your changes.
## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/Emmyojile/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/ojile-emmanuel-6847a524b/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/EmmanuelOjile7?t=KIx7XpTtGbiSs75UUrUJfQ&s=09)


## License

[MIT](https://choosealicense.com/licenses/mit/)

