#!/usr/bin/env node

import dotenv from "dotenv";
import chalk from "chalk";
import figlet from "figlet";

import { Command } from "commander";

dotenv.config()

async function main() {
    // Display a banner 
    console.log(
        chalk.cyan(
            figlet.textSync("Cliq", {
                font: "Standard",
                horizontalLayout: "default"
            })
        )
    )

    console.log(chalk.green("A CLI based AI Agent \n"));

    const program = new Command("cliq");
    program.version("0.0.1")
    .description("Cliq - A CLI based AI Agent")

    program.action(() => {
        program.help();
    });

    program.parse();
}

main().catch((err) => {
    console.log(chalk.red("Error running Cliq: "), err);
    process.exit(1);
})