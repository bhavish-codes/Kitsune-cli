class Whisper{
    program;
    constructor(program){
        this.program = program;
    }
    register(){
        this.program
        .command("whisper <name>")
        .action((name=>this.sayHello(name) ))
    }
    sayHello(name){
        console.log(`Hello, ${name}!`);
    }

}
export default Whisper;