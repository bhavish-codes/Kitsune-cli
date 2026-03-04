class Help{
    program;
    constructor(program){
        this.program = program;
    }
    register(){
        this.program
        .command("assist <name>")
        .action((name=>this.sayHelp(name) ))
    }
    sayHelp(name){
        console.log(`How can I assist you, ${name}?`);
    }

}
export default Help;