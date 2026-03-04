class Joke{
    program;
    constructor(program){
        this.program = program;
    }
    register(){
        this.program
        .command("joke <name>")
        .action((name=>this.sayHello(name) ))
    }
    sayHello(name){
        console.log(`Hello, ${name}!`);
    }

}
export default Joke;