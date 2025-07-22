README.txt for Stock Management System (React + Laravel + MySQL)
----------------------------------------------------------------

Note:
I am currently facing issues with the backend setup, so the frontend is functional, 
but the backend (API) is not fully working yet. As of now, you can only view the 
frontend of the Stock Management System, which allows for stock management 
but doesn't interact with the backend for CRUD operations. Once the backend 
issue is resolved, full functionality will be available.

----------------------------------------------------------------

Overview:
This is a Stock Management System built using React for the frontend, 
Laravel for the backend API, and MySQL for storing stock data. The application 
allows users to manage stock items, including adding, editing, deleting, and viewing 
the stock with product name, quantity, price, and status.

Technologies Used:
- Frontend: React
- Backend: Laravel
- Database: MySQL
- Additional Libraries: Axios, FontAwesome, CSS3

Requirements:
1. Node.js (for React app)
   - Download Node.js: https://nodejs.org/

2. Composer (for Laravel setup)
   - Download Composer: https://getcomposer.org/

3. MySQL (for Database)
   - Download MySQL: https://dev.mysql.com/downloads/installer/

Frontend Setup (React):

1. Install Dependencies:
   - Open a terminal and navigate to the React project folder (where package.json is located).
   - Run the following command to install required dependencies:
     npm install

2. Start React Development Server:
   - After the dependencies are installed, you can start the React development server with the following command:
     npm start
   - The React app will be accessible at http://localhost:3000 by default.

Backend Setup (Laravel):

Note: The backend setup is not fully functional due to issues with the server. 

However, the backend steps would be as follows once the issue is resolved:

1. Install Laravel:
   - Make sure Composer is installed. Then, navigate to your desired directory and create a new Laravel project:
     composer create-project --prefer-dist laravel/laravel stock-management

2. Set Up Environment:
   - Navigate to the .env file in your Laravel project directory and update the database connection details:
     DB_CONNECTION=mysql
     DB_HOST=127.0.0.1
     DB_PORT=3306
     DB_DATABASE=stock_management  # Make sure you have created this database in MySQL
     DB_USERNAME=root              # Your MySQL username
     DB_PASSWORD=                  # Your MySQL password

3. Create the MySQL Database:
   - Log in to MySQL and create the stock_management database:
     CREATE DATABASE stock_management;

4. Run Migrations:
   - After setting up the database, run the Laravel migrations to create the stocks table:
     php artisan migrate

5. Start Laravel Development Server:
   - Once migrations are complete, you can start the Laravel server with the following command:
     php artisan serve
   - The Laravel backend will be accessible at http://localhost:8000 by default.

Connecting Frontend and Backend:
- In your React application (App.js), ensure that the API URLs are pointing to the correct endpoints:
  - http://127.0.0.1:8000/api/stocks for interacting with the Laravel backend.
  - Adjust the API URL if needed based on your server setup.

Running the Application:

1. Start the Backend (Laravel):
   - Open a terminal in the Laravel project folder and run:
     php artisan serve
   - The Laravel API will be running at http://localhost:8000.

2. Start the Frontend (React):
   - In a new terminal window, navigate to your React project and run:
     npm start
   - The React app will be running at http://localhost:3000.

Testing the Application:
1. Add Stock: On the React frontend, you can add new stock items by filling in the product name, quantity, and price. The item will appear in the stock list after you submit.
2. Edit Stock: You can click the "Edit" button next to any stock item to modify its details. The changes will be reflected in both the React app and the Laravel API (once the backend is fixed).
3. Delete Stock: You can delete any stock item by clicking the "Delete" button next to it.
4. Stock Status: The stock items will display "In Stock" or "Out of Stock" based on the quantity you enter.

Project Structure:
- React (Frontend)
  - src/App.js: Main component for stock management.
  - src/App.css: Styles for the React app.
  - package.json: Contains project dependencies and scripts.

- Laravel (Backend)
  - routes/api.php: API routes for stock CRUD operations.
  - app/Models/Stock.php: Model for interacting with the stocks table in MySQL.
  - database/migrations/xxxx_xx_xx_create_stocks_table.php: Migration to create the stocks table.

Additional Notes:
- Make sure the CORS (Cross-Origin Resource Sharing) settings are correctly configured in your Laravel backend for the React app to communicate with it. Laravel 8 comes with a built-in CORS package. You can set this in app/Http/Middleware/HandleCors.php or use the Laravel CORS package.

Troubleshooting:
- CORS Issues: If you run into CORS errors, make sure you've enabled CORS in Laravel.
- Missing Node Modules: If you encounter errors related to missing node_modules, try running npm install again in the React project folder.
- Database Connection: Ensure that MySQL is running, and the credentials in the .env file are correct.

License:
This project is open source and free to use.
