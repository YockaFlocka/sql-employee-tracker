const inquirer = require("inquirer");
const mysql = require('mysql2');
const express = require('express');
require('dotenv').config();
const cTable = require('console.table');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.urlencoded({extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
  },
  console.log("Connected to the employee tracker database.")
)

function init() {
    inquirer.prompt([
      {
        // Ask the user what option they would like to choose
        type: "list",
        message: "Please select an option:",
        name: 'initQuestions',
        choices: [ "View All Departments", "View All Roles", "View All Employees", "Add A Department", "Add A Role", "Add An Employee", "Update An Employee Role" ],
      },
    ])
    .then((data) => {
      switch(data.initQuestions) {
        case "View All Departments": viewDepartments();
        break;
        case "View All Roles": viewRoles();
        break;
        case "View All Employees": viewEmployees();
        break;
        case "Add A Department": addDepartment();
        break;
        case "Add A Role": addRole();
        break;
        case "Add An Employee": addEmployee();
        break;
        case "Update An Employee Role": updateEmployee();
        break;
      }
    })
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