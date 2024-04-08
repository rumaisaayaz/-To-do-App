#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import Choices from "inquirer/lib/objects/choices.js";
// MAIN ARRAY
let list = [];
console.log(
  chalk.bgRed.yellowBright.bold("            TO DO LIST              ")
);
// TO BREAK THE LOOP
let shouldExit = false;
// mainMenu
while (!shouldExit) {
  const select = await inquirer.prompt([
    {
      name: "choice",
      type: "list",
      message: chalk.yellow("Choose an Option"),
      choices: [
        "Add Task",
        "Update Task",
        "Delete Task",
        "View All Tasks",
        "Mark Task as Completed",
        "exit",
      ],
    },
  ]);
  // OPTIONS
  const choice = select.choice;
  // ADD TASK
  if (choice === "Add Task") {
    const newTask = await inquirer.prompt([
      {
        name: "addedTask",
        type: "input",
        message: chalk.green("Enter The Task"),
      },
    ]);
    var taskadded = ([] = newTask.addedTask);
    list.push(newTask.addedTask);
    console.log(chalk.red("Task Added successfully ✔"));
  }
  // UPDATE TASK
  else if (choice === "Update Task") {
    list.push();
    // DELETE TASK
  } else if (choice === "Delete Task") {
    list.pop();
    console.log("View all Tasks to see the Updated list ⬇ ");
    // VIEW ALL
  } else if (choice === "View All Tasks") {
    console.log(chalk.bgCyan.blackBright.bold("All Tasks"));
    list.forEach((task, index) =>
      console.log(chalk.blueBright(`${index + 1}.${task}`))
    );
    // MARK AS DONE
  } else if (choice === "Mark Task as Completed") {
    let done = await inquirer.prompt({
      type: "list",
      message: chalk.green("Select the Task"),
      name: "done",
      choices: list.map((task) => task),
    });
    console.log(chalk.bgGreen.blue(`Task ${done.done},is Done ✅`));
  }
  // EXIT
  else if (choice === "exit") {
    console.log(chalk.green("Exiting Program....."));
    shouldExit = true;
  }
}
