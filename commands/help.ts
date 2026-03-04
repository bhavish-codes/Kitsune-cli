class Help{
    program;
    existingCommands = ["spirit", "speak", "riddle", "joke", "loud", "whisper"];
    implimentedCommands = [];
    constructor(program){
        this.program = program;
    }
    register(){
        this.program
        .command("assist <name>")
        .action((name=>this.show(name) ))
    }
    show(name){
        if (this.implimentedCommands.includes(name)){
            console.log(`The command '${name}' is available.`);
        } else if (this.existingCommands.includes(name)){
            console.log(`The command '${name}' is still in development. Please check back later!`);
        }else{
            console.log(`The command '${name}' is not available.`);
        }
    }
}
export default Help;