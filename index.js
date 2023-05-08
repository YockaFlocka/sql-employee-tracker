const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
    {
        type: "input",
        name: "characters",
        message: "Type 3 characters you want for your SVG logo",
        validate: your_title => {
            if (your_title.length === 3) {
                return true;
            } else {
                console.log(": Please enter 3 characters, no more no less.")
                return false;
            }
        } 
    },
    {
        type: "input",
        name: "charcolor",
        message: "What color do you want the text to be? Pick a color or hexidecimal number"
    },
    {
        type: "list",
        name: "shape",
        message: "What shape do you want the logo to have?",
        choices: ['Circle', 'Square', 'Triangle'] 
    },
    {
        type: "input",
        name: "shapecolor",
        message: "What color do you want the shape to be? Pick a color or hexidecimal number",
    }
];