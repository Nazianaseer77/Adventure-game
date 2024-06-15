import inquirer from "inquirer"

class Player{
    name: string;
    fuel: number = 100;
    constructor(name: string){
        this.name = name;
    }
    fuelDecrease(){
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
    fuelIncrease(){
        this.fuel = 100
    }
}

class Opponent{
    name: string;
    fuel: number = 100;
    constructor(name: string){
        this.name = name
    }
    fuelDecrease(){
        let fuel = this.fuel - 25
        this.fuel = fuel
    }
}

let player = await inquirer.prompt([
    {
      name: "name",
      type: "input",
      message: "please Enter your Name:" 

    }
])

let opponent = await inquirer.prompt([

    {
        name:"select",
        type:"list",
        message: "select your opponent",
        choices: ["skeleton","Alien","zombies"]
    }
])

let p1 = new Player(player.name);
let o1 = new Opponent(opponent.select);

do{
    //skeleton

    if(opponent.select == "skeleton"){
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "what would you like to do?",
                choices: ["Attack","Drink portion","Run for your life..."]
            }
        ]);
        if(ask.opt == "Attack"){
            let num = Math.floor(Math.random() *2)
            if(num > 0){
                p1.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if(p1.fuel<= 0){
                    console.log("you loose, Better luck next time");
                    process.exit()
                }
            }
            if(num <= 0){
                o1.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`); 
                if(p1.fuel<= 0){
                    console.log("you win");
                    process.exit()
                }
            }
        }
        if(ask.opt == "Drink portion"){
            p1.fuelIncrease()
            console.log(`you Drink health portion your fuel is ${p1.fuel}`);
        }
        if(ask.opt == "Run for your life..." ){
            console.log("you loose, Better luck next time ")
            process.exit()
        }
        
    }

    //Alien

    if(opponent.select == "Alien"){
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "what would you like to do?",
                choices: ["Attack","Drink portion","Run for your life..."]
            }
        ]);
        if(ask.opt == "Attack"){
            let num = Math.floor(Math.random() *2)
            if(num > 0){
                p1.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if(p1.fuel<= 0){
                    console.log("you loose, Better luck next time");
                    process.exit()
                }
            }
            if(num <= 0){
                o1.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`); 
                if(p1.fuel<= 0){
                    console.log("you win");
                    process.exit()
                }
            }
        }
        if(ask.opt == "Drink portion"){
            p1.fuelIncrease()
            console.log(`you Drink health portion your fuel is ${p1.fuel}`);
        }
        if(ask.opt == "Run for your life..." ){
            console.log("you loose, Better luck next time ")
            process.exit()
        }
        
    }
     //Zoombies

     if(opponent.select == "zombies"){
        let ask = await inquirer.prompt([
            {
                name: "opt",
                type: "list",
                message: "what would you like to do?",
                choices: ["Attack","Drink portion","Run for your life..."]
            }
        ]);
        if(ask.opt == "Attack"){
            let num = Math.floor(Math.random() *2)
            if(num > 0){
                p1.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`);
                if(p1.fuel<= 0){
                    console.log("you lose, Better luck next time");
                    process.exit()
                }
            }
            if(num <= 0){
                o1.fuelDecrease()
                console.log(`${p1.name} fuel is ${p1.fuel}`);
                console.log(`${o1.name} fuel is ${o1.fuel}`); 
                if(o1.fuel<= 0){
                    console.log("you won");
                    process.exit()
                }
            }
        }
        if(ask.opt == "Drink portion"){
            p1.fuelIncrease()
            console.log(`you Drink health portion your fuel is ${p1.fuel}`);
        }
        if(ask.opt == "Run for your life..." ){
            console.log("you loose, Better luck next time ")
            process.exit()
        }
        
    }

}
while(true)

