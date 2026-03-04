import say from "say"
import chalk from "chalk";
import ora from "ora";
import gradient from "gradient-string";
class Speak{
    kitsune = `
          /\\_/\\
        =( °w° )=
          )   (  //
         (__ __)//
        /  | |  \\
       (   | |   )
        \\  |_|  /
         \\_____/

        🦊 Kitsune Spirit
`;
    program;
    constructor(program){
        this.program = program;
    }
    register(){
        this.program
        .command("speak <text>")
        .action((text=>this.talk(text) ))
    }
    talk(text){
        

        console.log(gradient.pastel(this.kitsune));
    const spinner = ora({
      text: chalk.cyan("The Kitsune is channeling ancient wisdom..."),
      spinner: "dots"
    }).start();

    setTimeout(() => {
      spinner.stop();

      console.log(chalk.yellow(`🦊 ${text}`));

      say.speak(text, "Kyoko");

    }, 3000);
    }

}
export default Speak;
