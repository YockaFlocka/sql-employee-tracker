DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

CREATE TABLE department (
  id INT NOT NULL,
  department_name VARCHAR(50) NOT NULL
);

CREATE TABLE role (
  id INT NOT NULL,
  job_title VARCHAR(50) NOT NULL,
  salary INT NOT NULL,
  department_id INT NOT NULL
);

CREATE TABLE employee (
  id INT NOT NULL,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  job_title BOOLEAN NOT NULL,
  department_name DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL,
  managers VARCHAR(50) NOT NULL,
);