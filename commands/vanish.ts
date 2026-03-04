class Vanish{
    program;
    constructor(program){
        this.program = program;
    }
    register(){
        this.program
        .command("vanish <name>")
        .action((name=>this.sayHello(name) ))
    }
    sayHello(name){
        console.log(`Hello, ${name}!`);
    }

}
export default Vanish;