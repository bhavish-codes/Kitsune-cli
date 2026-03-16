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
      summary: "Have the Kitsune channel ancient wisdom and speak your words aloud.",
      usage: "kitsune speak <message>",
      description: "Invoke the fox spirit to vocalize a message through your terminal.\nThe spirit uses TTS (Text-to-Speech) to clearly enunciate your thoughts.",
      examples: [
        'kit speak "Hello traveler"',
        'kit speak "Build completed successfully"',
        'kit speak "The spiritual realm awaits"',
      ],
    },
    spirit: {
      title: "🦊  Kitsune Spirit Command",
      summary: "Summon the Kitsune spirit to receive quotes of philosophy and truth.",
      usage: "kitsune spirit [speak]",
      description: "Calls upon the fox spirit to guide your terminal journey with timeless wisdom.\nPass the optional `speak` argument to hear the spirit read the quote aloud.",
      examples: [
        "kit spirit",
        "kit spirit speak"
      ],
    },
    loud: {
      title: "🦊  Kitsune Loud Command",
      summary: "Make the Kitsune shout your message across the digital realm.",
      usage: "kitsune loud <text> [speak]",
      description: "Proclaim a grand message with large, shadow-styled ASCII text.\nPass the optional `speak` argument to have the spirit announce it out loud.",
      examples: [
        'kit loud "Wake up!"',
        'kit loud "Tests Passing!" speak',
      ],
    },
    riddle: {
      title: "🦊  Kitsune Riddle Command",
      summary: "The Kitsune spirit shares a mysterious riddle.",
      usage: "kitsune riddle <timer>",
      description: "The cunning fox tests your wits by presenting a riddle.\nYou have the given time (in seconds) to contemplate the answer.",
      examples: [
        "kit riddle 30",
        "kit riddle 60"
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
