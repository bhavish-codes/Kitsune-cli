class Speak{
    program;
    constructor(program){
        this.program = program;
    }
    register(){
        this.program
        .command("speak <name>")
        .action((name=>this.sayHello(name) ))
    }
    sayHello(name){
        console.log(`Hello, ${name}!`);
    }

}
export default Speak;
