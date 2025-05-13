# AI In Development: Home Work

This repository contains solutions for three different tasks:

## Task 1: Expense Calculator Web Application

A web-based expense calculator that allows users to:
- Add expenses with categories and amounts
- Calculate the total amount of expenses
- Calculate the average daily expense (based on 30-day month)
- Display the top 3 largest expenses

### How to Use
1. Open `index.html` in any modern web browser
2. Add your expenses using the form
3. Click "Calculate" to see the results
4. Use "Clear All" to reset the application

### Features
- Pre-loaded with sample data (can be cleared)
- Responsive design
- Detailed results with visualizations

## Task 2: API Testing - Identifying Product Data Defects

A JavaScript script that tests the Fake Store API for data defects.

### Functionality
- Verifies server response code (expected 200)
- Checks each product for the following conditions:
  - Title must not be empty
  - Price must not be negative
  - Rating.rate must not exceed 5
- Generates a list of products containing defects

### How to Run
```
node api_test.js
```

## Task 3: SQL Queries - Sales Data Analysis

SQL queries to analyze sales data for an online store.

### Queries Included
1. Calculate the total sales volume for March 2024
2. Find the customer who spent the most overall
3. Calculate the average order value for the last three months

### How to Execute
Run these SQL queries in an SQLite environment (like SQLite Online) after setting up the database with the schema and sample data provided in the `sales_analysis.sql` file.

### Expected Results
- Total sales for March: 27,000
- Top-spending customer: Alice (20,000)
- Average order value: 6,000 