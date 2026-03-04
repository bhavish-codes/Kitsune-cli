import chalk from "chalk";
import dotenv from "dotenv";
import say from "say";
import boxen from "boxen";
import gradient from "gradient-string";
import ora from "ora";
dotenv.config();
class Spirit {
  program;
  constructor(program) {
    this.program = program;
  }
  register() {
    this.program
      .command("spirit [speak]")
      .action((speak) => this.invoke(speak));
  }
  async invoke(speak) {
    try {
      const spinner = ora({
        text: chalk.magenta("🦊 Summoning the Kitsune spirit..."),
        spinner: "dots",
      }).start();
      const categories = [
      "wisdom","philosophy","life","truth","inspirational",
      "relationships","love","faith","humor","success",
      "courage","happiness","art","writing","fear",
      "nature","time","freedom","death","leadership"
    ];

    const shuffled = [...categories].sort(() => 0.5 - Math.random());
    const count = Math.floor(Math.random() * 3) + 1;
    const selected = shuffled.slice(0, count);

    const categoryParam = encodeURIComponent(selected.join(","));

    const res = await fetch(
      `https://api.api-ninjas.com/v2/quotes?categories=${categoryParam}`,
      {
        headers: {
          "X-Api-Key": process.env.API_NINJAS_KEY
        }
      }
    );

      const data = await res.json();
      spinner.stop();

      const quote = data[0].quote;
      const author = data[0].author;

      const fox = `
        /\\_/\\
      =( °w° )=
        )   ( 
       (__ __)
    `;

      console.log(gradient.pastel(fox));

      const message = `
"${quote}"

— ${author}
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

      console.log(chalk.gray("\n✨ The fox spirit fades into the forest...\n"));

      if (speak) {
        say.speak(quote, "Kyoko");
      }
    } catch (err) {
      console.log("🦊 The spirit could not be summoned...");
    }
  }
}
export default Spirit;
