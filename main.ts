#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import Choices from "inquirer/lib/objects/choices.js";
// MAIN ARRAY
let list: any[] = [];
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
    const update = await inquirer.prompt([
      {
        name: "change",
        type: "list",
        message: chalk.yellow("Select to update"),
        choices: list,
      },

      {
        type: "input",
        name: "updatedTask",
        message: "edit task:",
      },
    ]);
    // Replace the chosen task with the updated task
    const index = list.indexOf(update.change);
    if (index !== -1) {
      list[index] = update.updatedTask;
    }

    // Display the updated list
    console.log("Updated Task List:");
    list.forEach((task) => console.log(task));

    // var updatedtask = update.change;
    // // updatedtask.pop()
    // let edited = update.updatedTask;
    // list.push(edited);
    // list.push();
    // DELETE TASK
  } else if (choice === "Delete Task") {
    {
      const cut = await inquirer.prompt([
        {
          name: "change",
          type: "list",
          message: chalk.yellow("Select to update"),
          choices: list,
        },
      ]);
      const index = list.indexOf(cut.change);
      if (index !== -1) {
        list.splice(index, 1);
      }
      console.log("View all Tasks to see the Updated list ⬇ ");
      // VIEW ALL
    }
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
    const index = list.indexOf(done.done);
    if (index !== -1) {
      list.splice(index, 1);
    }
    console.log(chalk.bgGreen.blue(`Task ${done.done},is completed ✅`));
  }
  // EXIT
  else if (choice === "exit") {
    console.log(chalk.green("Exiting Program....."));
    shouldExit = true;
  }
}
