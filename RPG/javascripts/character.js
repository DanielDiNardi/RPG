class Character {
    constructor(name, race, type, health, strength, speed, mana, desc) {
        this.name = name;
        this.race = race;
        this.type = type;
        this.health = health;
        this.strength = strength;
        this.speed = speed;
        this.mana = mana;
        this.desc = desc;
    }
}

function charCreation() {
    //User input
    var nameInput = document.getElementById("name").value;
    var raceInput = document.getElementById("race").value;
    var typeInput = document.getElementById("type").value;
    var descInput = document.getElementById("desc").value;
    
    //character base stats
    var health = 100;
    var strength = 20;
    var speed = 10;
    var mana = 20;

    //race stat calculations
    if(raceInput == "elf") {
        health -= 20;
        speed += 5;
        strength -= 10;
        mana += 10;
    }
    else if(raceInput == "dwarf") {
        health += 20;
        speed -= 5;
        strength += 10;
        mana -= 10;
    }

    //type stat claculations
    if(typeInput == "warrior") {
        health += 5;
        strength += 10;
        mana -= 10;
    }
    else if(typeInput == "bMage") {
        health += 5;
        strength += 5;
        mana += 5;
    }
    else {
        strength -= 10;
        mana += 20;
    }

    //player created
    player = new Character(nameInput, raceInput, typeInput, health, strength, speed, mana, descInput);

    //player creation check
    console.log(player);
}