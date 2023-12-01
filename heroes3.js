class Heroes {
    constructor(name, age, ability, attack) {
        this.name = name;
        this.age = age;
        this.ability = ability;
        this.attack = attack;
    } 

    attacks() {
        if(this.ability == "Mark-42") {
            console.log("The " + this.ability + " attacked using " + this.attack);
        } else if(this.ability == "Spider-Man") {
            console.log("The " + this.ability + " attacked using " + this.attack);
        } else if(this.ability == "Captain-America") {
            console.log("The " + this.ability + " attacked using " + this.attack);
        } else if(this.ability == "Ant-Man") {
            console.log("The " + this.ability + " attacked using " + this.attack);
        } else {
            console.log("Non-existent heroes")
        }
    }
}

let marvel = [ new Heroes("Tony Stark", 40, "Mark-42", "Repulsor\n"),
               new Heroes("Steve Rogers", 40, "Captain-America", "Throwing\n"),
               new Heroes("Scott Lang", 30, "Ant-Man", "Ant contro\n"),
               new Heroes("Peter Parker", 20, "Spider-Man", "Web-Slinging\n") ]

// for(let i = 0; i < marvel.length; i++) {
//     marvel[i].attacks();
// }

for (i in marvel){
    marvel[i].attacks();
}

