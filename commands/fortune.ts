class Fortune{
    program;
    constructor(program){
        this.program = program;
    }
    register(){
        this.program
        .command("fortune <name>")
        .action((name=>this.sayHello(name) ))
    }
    sayHello(name){
        console.log(`Hello, ${name}!`);
    }

}
export default Fortune;