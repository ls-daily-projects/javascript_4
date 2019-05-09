/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
class GameObject {
    constructor({ createdAt, name, dimensions }) {
        this.createdAt = createdAt
        this.name = name
        this.dimensions = dimensions
    }

    destroy() {
        return `${this.name} was removed from the game.`
    }
}

class CharacterStats extends GameObject {
    constructor({ healthPoints = 0, ...rest }) {
        super(rest)
        this.healthPoints = healthPoints
    }

    takeDamage() {
        return `${this.name} took damage.`
    }
}

class Humanoid extends CharacterStats {
    constructor({ team, weapons, language, ...rest }) {
        super(rest)
        this.team = team
        this.weapons = weapons
        this.language = language
    }

    greet() {
        return `${this.name} offers a greeting in ${this.language}.`
    }

    increaseHealth() {
        this.healthPoints++
    }

    decreaseHealth() {
        if (this.healthPoints - 1 < 1) {
            return this.destroy()
        }
        this.healthPoints--
        this.takeDamage()
    }
}

const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 1,
        height: 1
    },
    healthPoints: 5,
    name: "Bruce",
    team: "Mage Guild",
    weapons: ["Staff of Shamalama"],
    language: "Common Tongue"
})

const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 2,
        height: 2
    },
    healthPoints: 15,
    name: "Sir Mustachio",
    team: "The Round Table",
    weapons: ["Giant Sword", "Shield"],
    language: "Common Tongue"
})

const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 4
    },
    healthPoints: 10,
    name: "Lilith",
    team: "Forest Kingdom",
    weapons: ["Bow", "Dagger"],
    language: "Elvish"
})

console.log(mage.createdAt) // Today's date
console.log(archer.dimensions) // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints) // 15
console.log(mage.name) // Bruce
console.log(swordsman.team) // The Round Table
console.log(mage.weapons) // Staff of Shamalama
console.log(archer.language) // Elvish
console.log(archer.greet()) // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()) // Bruce took damage.
console.log(swordsman.destroy()) // Sir Mustachio was removed from the game.

class Villain extends Humanoid {}
class Hero extends Humanoid {}

const villy = new Villain({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 4
    },
    healthPoints: 10,
    name: "Villy",
    team: "Forest Kingdom",
    weapons: ["Bow", "Dagger"],
    language: "Elvish"
})

const hero = new Hero({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 4
    },
    healthPoints: 10,
    name: "Herr",
    team: "Forest Kingdom",
    weapons: ["Bow", "Dagger"],
    language: "Elvish"
})

console.log(villy.takeDamage())
console.log(hero.increaseHealth(), hero.increaseHealth(), hero.healthPoints)
