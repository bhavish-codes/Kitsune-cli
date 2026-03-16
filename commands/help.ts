import chalk from "chalk";
import gradient from "gradient-string";
import boxen from "boxen";
class Help {
  program;
  existingCommands = [
    "spirit",
    "speak",
    "riddle",
    "joke",
    "loud",
    "whisper",
    "weather",
    "fortune",
    "vanish",
  ];
  implimentedCommands = ["speak", "spirit","loud","riddle"];
  kitsune = `
        /\\_/\\
      =( °w° )=
        )   ( 
       (__ __)
    `;
  constructor(program) {
    this.program = program;
  }
  register() {
    this.program
      .command("help <command>")
      .action((command) => this.show(command));
  }
  show(command) {
    console.log(
      gradient.instagram.multiline(`
╔══════════════════════════════╗
     🦊  KITSUNE CLI HELP
╚══════════════════════════════╝
`),
    );
    if (this.implimentedCommands.includes(command)) {
      if (command === "speak") {
        console.log(gradient.pastel(this.kitsune));
        const helpText = `
🦊  Kitsune Speak Command

The Kitsune spirit listens to your words and speaks them aloud.

Usage
  kitsune speak <message>

Description
  Invoke the fox spirit to vocalize a message through your terminal.
  Kitsune will whisper the message using mystical speech.

Examples
  kitsune speak "Hello traveler"
  kitsune speak "Build completed successfully"
  kitsune speak "Your tests have passed"

`;
        console.log(
          boxen(chalk.cyan(helpText), {
            padding: 1,
            borderStyle: "round",
            borderColor: "magenta",
          }),
        );
      }
    } else if (this.existingCommands.includes(command)) {
      console.log(
        `The command '${command}' is still in development. Please check back later!`,
      );
    } else {
      console.log(`The command '${command}' is not available.`);
    }
  }
}
export default Help;
