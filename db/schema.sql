-- create a database called company_db in sql
DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

-- create a table called departments in sql to show the department names
CREATE TABLE departments (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(50) NOT NULL
);

-- create a table called roles in sql to show job title, salary, and department_id
CREATE TABLE roles (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  job_title VARCHAR(50) NOT NULL,
  role_salary INT NOT NULL,
  department_id INT NOT NULL,
  FOREIGN KEY (department_id) REFERENCES departments (id)
);

-- create a table called employees in sql to show employee first name, last name, current manager, and role
CREATE TABLE employees (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  role_id INT,
  manager_id INT,
  FOREIGN KEY (role_id) REFERENCES roles (id),
  FOREIGN KEY (manager_id) REFERENCES employees (id);
);