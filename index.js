const inquirer = require("inquirer");
const mysql = require("mysql2");
const express = require("express");
require("dotenv").config();
const consoleTable = require("console.table");

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
  console.log("Connected to the employee tracker database.")
);

function init() {
  inquirer
    .prompt([
      {
        // Ask the user what option they would like to choose
        type: "list",
        message: "Please select an option:",
        name: "initQuestions",
        choices: [
          "View All Departments",
          "View All Roles",
          "View All Employees",
          "Add A Department",
          "Add A Role",
          "Add An Employee",
          "Update An Employee Role",
        ],
      },
    ])
    .then((data) => {
      switch (data.initQuestions) {
        case "View All Departments":
          viewDepartments();
          break;
        case "View All Roles":
          viewRoles();
          break;
        case "View All Employees":
          viewEmployees();
          break;
        case "Add A Department":
          addDepartment();
          break;
        case "Add A Role":
          addRole();
          break;
        case "Add An Employee":
          addEmployee();
          break;
        case "Update An Employee Role":
          updateEmployee();
          break;
      }
    });
}

// Call the function
init();

// Show departments table
function viewDepartments() {
  db.query("SELECT * FROM departments", function (err, results) {
    console.table(results);
    init();
  });
}

// Show roles table
function viewRoles() {
  db.query("SELECT * FROM roles", function (err, results) {
    console.table(results);
    init();
  });
}

// Show employees table
function viewEmployees() {
  db.query("SELECT * FROM employees", function (err, results) {
    console.table(results);
    init();
  });
}

// Prompt to add new dept name and add it to the db
function addDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the new department name?",
        name: "newDepartment",
      },
    ])
    .then((data) => {
      db.query(
        `INSERT INTO departments (department_name) VALUES (?)`,
        [data.newDepartment],
        function (err, results) {
          if (err) throw err;
          console.table(results);
          init();
        }
      );
    });
}

// Prompt to enter the name, salary, and dept for the new role and add to db
function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the new role called?",
        name: "newRole",
      },
      {
        type: "input",
        message: "What is the salary for this role?",
        name: "newSalary",
      },
      {
        type: "input",
        message: "What is the department id this role belongs to?",
        name: "newDepartment",
      },
    ])
    .then((data) => {
      db.query(
        `INSERT INTO roles (job_title, role_salary, department_id) VALUES (?, ?, ?)`,
        [data.newRole, data.newSalary, data.newDepartment],
        function (err, results) {
          if (err) throw err;
          console.table(results);
          init();
        }
      );
    });
}

// Prompt to enter a new employee's first name, last name, role, and manager. Add to db
function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the employee's first name?",
        name: "newEmployeeFirstName",
      },
      {
        type: "input",
        message: "What is the employee's last name?",
        name: "newEmployeeLastName",
      },
      {
        type: "input",
        message: "What is the employee's role ID?",
        name: "newEmployeeRole",
      },
      {
        type: "input",
        message: "What is the role ID of the employee's manager?",
        name: "newEmployeeManagerRoleId",
      },
    ])
    .then((data) => {
      db.query(
        `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`,
        [
          data.newEmployeeFirstName,
          data.newEmployeeLastName,
          data.newEmployeeRole,
          data.newEmployeeManagerRoleId,
        ],
        function (err, results) {
          if (err) throw err;
          console.table(results);
          init();
        }
      );
    });
}

// Prompt to select an employee to update, add their role, and update the db
function updateEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the employee's id?",
        name: "employeeUpdate",
      },
      {
        type: "input",
        message: "What is the employee's new role?",
        name: "roleUpdate",
      },
    ])
    .then((data) => {
      db.query(
        `UPDATE employees SET job_title = ? WHERE id = ?`,
        [data.roleUpdate, data.employeeUpdate],
        function (err, results) {
          if (err) throw err;
          console.table(results);
          init();
        }
      );
    });
}
