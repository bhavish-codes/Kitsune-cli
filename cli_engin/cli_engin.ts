import { Command } from "commander";
class CLI {
program;
constructor() {
    this.program = new Command();
    }
registerCommand(command){
        command.forEach((value) => {
            const cmdInstance = new value(this.program);
            cmdInstance.register();
        })
}
run(){
        this.program.parse();
    }
}
export default CLI;