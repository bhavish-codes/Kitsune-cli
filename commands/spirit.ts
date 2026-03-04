class Spirit{
    program;
    constructor(program){
        this.program = program;
    }
    register(){
        this.program
        .command("spirit <name>")
        .action((name=>this.sayHello(name) ))
    }
    sayHello(name){
        console.log(`Hello, ${name}!`);
    }

}
export default Spirit