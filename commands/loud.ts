import figlet from "figlet";
import chalk from "chalk";
import say from "say";
import gradient from "gradient-string";
class Loud {
    kitsune = `
        /\\_/\\
      =( °w° )=
        )   ( 
       (__ __)
    `;
  program;
  constructor(program) {
    this.program = program;
  }
  register() {
    this.program.command("loud <text> [speak]").action((text, speak) => this.loud(text, speak));
  }
  async loud(text, speak) {
    console.log(gradient.pastel(this.kitsune));
    console.log(chalk.red("\n🔥 KITSUNE PROCLAMATION 🔥\n"));

    figlet(text.toUpperCase(), {font: "ANSI Shadow"},(err, data) => {
      console.log(gradient.passion(data));

      if (speak) {
        say.speak(text, "Kyoko",1.8);
      }
    });
  }
}
export default Loud;
