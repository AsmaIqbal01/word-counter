#! /usr/bin/env node
//this line is called shebang, It is the operating system to run it with node.js
// import the 'inquirer' module, which is a command line interface for node.js
import inquirer from "inquirer";
//Declare a const 'answer' and assign it to the result of 'inquirer.prompt' function
const answers: {
    sentence: string
        }= await inquirer.prompt([
            {
             name: "sentence",
             type: "input",
             message: "Enter your sentence to count the word:"
            }
        ])
        const words = answers.sentence.trim().split(" ");
        //print the aaray of the words to the console
        console.log(words);
        // print the word count of the sentence to the console
        console.log(`Your sentence word count is ${words.length}`);