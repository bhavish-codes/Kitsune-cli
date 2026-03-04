class Weather{
    program;
    constructor(program){
        this.program = program;
    }
    register(){
        this.program
        .command("weather <name>")
        .action((name=>this.sayHello(name) ))
    }
    sayHello(name){
        console.log(`Hello, ${name}!`);
    }

}
export default Weather;