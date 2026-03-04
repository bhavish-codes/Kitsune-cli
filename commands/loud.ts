class Loud{
    program;
    constructor(program){
        this.program = program;
    }
    register(){
        this.program
        .command("loud <name>")
        .action((name=>this.sayHello(name) ))
    }
    sayHello(name){
        console.log(`Hello, ${name}!`);
    }

}
export default Loud;