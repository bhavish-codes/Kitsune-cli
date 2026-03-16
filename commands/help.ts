import chalk from "chalk";
import gradient from "gradient-string";
import boxen from "boxen";

interface CommandHelp {
  title: string;
  summary: string;
  usage: string;
  description: string;
  examples: string[];
}

class Help {
  program: any;

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

  implementedCommands = ["speak", "spirit", "loud", "riddle"];

  commandHelpData: Record<string, CommandHelp> = {
    speak: {
      title: "🦊  Kitsune Speak Command",
      summary: "The Kitsune spirit listens to your words and speaks them aloud.",
      usage: "kitsune speak <message>",
      description: "Invoke the fox spirit to vocalize a message through your terminal.\n  Kitsune will whisper the message using mystical speech.",
      examples: [
        'kitsune speak "Hello traveler"',
        'kitsune speak "Build completed successfully"',
        'kitsune speak "Your tests have passed"',
      ],
    },
    spirit: {
      title: "🦊  Kitsune Spirit Command",
      summary: "Summon the Kitsune spirit.",
      usage: "kitsune spirit",
      description: "Calls upon the fox spirit to guide your terminal journey.",
      examples: [
        "kitsune spirit"
      ],
    },
    loud: {
      title: "🦊  Kitsune Loud Command",
      summary: "The Kitsune spirit speaks loudly.",
      usage: "kitsune loud <message>",
      description: "Make the Kitsune shout your message across the digital realm.",
      examples: [
        'kitsune loud "Wake up!"',
      ],
    },
    riddle: {
      title: "🦊  Kitsune Riddle Command",
      summary: "The Kitsune spirit shares a mysterious riddle.",
      usage: "kitsune riddle",
      description: "Bored? Let the cunning fox present a puzzle for your mind.",
      examples: [
        "kitsune riddle"
      ],
    }
  };

  kitsune = `
        /\\_/\\
      =( °w° )=
        )   ( 
       (__ __)
    `;

  constructor(program: any) {
    this.program = program;
  }

  register() {
    this.program
      .command("help <command>")
      .description("Display help information for a specific command")
      .action((command: string) => this.show(command));
  }

  show(command: string) {
    console.log(
      gradient.instagram.multiline(`
╔══════════════════════════════╗
     🦊  KITSUNE CLI HELP
╚══════════════════════════════╝
`),
    );

    if (this.implementedCommands.includes(command)) {
      const details = this.commandHelpData[command];
      
      if (details) {
        console.log(gradient.pastel(this.kitsune));
        
        const examplesText = details.examples.map(ex => `  ${ex}`).join("\n");
        const helpText = `
${details.title}

${details.summary}

Usage
  ${details.usage}

Description
  ${details.description}

Examples
${examplesText}
`;

        console.log(
          boxen(chalk.cyan(helpText), {
            padding: 1,
            borderStyle: "round",
            borderColor: "magenta",
          }),
        );
      } else {
        console.log(chalk.yellow(`\nHelp documentation for '${command}' is being written by the spirits...`));
      }
    } else if (this.existingCommands.includes(command)) {
      console.log(
        chalk.yellow(`\nThe command '${command}' is still in development. Please check back later!`),
      );
    } else {
      console.log(chalk.red(`\nThe command '${command}' is not available.`));
    }
  }
}

export default Help;
