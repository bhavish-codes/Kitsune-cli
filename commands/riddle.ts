import gradient from "gradient-string";
import chalk from "chalk";
import dotenv from "dotenv";
import ora from "ora";
import boxen from "boxen";
class Riddle {
  program;
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
      .command("riddle <timer>")
      .action((timer) => this.startrRiddle(timer));
  }
  async startrRiddle(timer) {
    try {
      console.log(gradient.pastel(this.kitsune));
      console.log(
        chalk.red(
          `\n🔥 The Kitsune presents you with a riddle. You have ${timer} seconds to solve it! 🔥\n`,
        ),
      );
      const spinner = ora({
        text: chalk.magenta("🦊 Summoning the Kitsune spirit..."),
        spinner: "dots",
      }).start();
      //Todo timer for riddle
      const res = await fetch(`https://api.api-ninjas.com/v1/riddles`, {
        headers: {
          "X-Api-Key": process.env.API_NINJAS_KEY,
        },
      });
      const data = await res.json();
      spinner.stop();

      const riddle = data[0].question;
      const answer = data[0].answer;
      console.log(chalk.yellow(`🧩 Riddle: ${riddle}\n`));

      let timeLeft = Number(timer);

      await new Promise((resolve) => {
        const interval = setInterval(() => {
            console.clear();
          const message = `
🧩 Riddle:
${riddle}

⏳ Time left: ${timeLeft}s
`;

          console.log(
            boxen(chalk.cyan(message), {
              padding: 1,
              borderStyle: "round",
              borderColor: "magenta",
              title: "🦊 Kitsune Wisdom",
              titleAlignment: "center",
            }),
          );
          timeLeft--;

          if (timeLeft < 0) {
            clearInterval(interval);
            process.stdout.write("\n");
            resolve(null);
          }
        }, 1000);
      });

      //todo after timer show answer
      console.log(chalk.green(`💡 Answer: ${answer}`));
    } catch (error) {
      console.error(
        chalk.red(
          "An error occurred while fetching the riddle. Please try again later.",
        ),
      );
    }
  }
}
export default Riddle;
