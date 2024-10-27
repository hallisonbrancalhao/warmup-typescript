// Classes

export class Player {
    #name: string;
    #heath: number;

    constructor(name: string) {
        this.#name = name;
        this.#heath = 100;
    }

    get health() {
        return this.#heath;
    }

    get name() {
        return this.#name;
    }

    damage(amount: number, damager?: Player) {
        const updatedHeath = this.#heath - amount;
        
        console.log(
            damager ?
            `${this.name} was damaged by ${damager.name} for ${amount} damage` :
            `${this.name} was damaged for ${amount} damage`
        )

        if(updatedHeath <= 0) {
            this.#heath = 0;
            this.#die();
            return;
        }

        this.#heath = updatedHeath;
    } 

    #die(damager?: Player) {
        damager && console.log(`${damager.name} killed ${this.#name}`);
        console.log(`${this.#name} died`);
    }
    
}

const player = new Player("John Doe");
player.damage(10);

const player2 = new Player("Jane Doe 2");

player.damage(10, player2);

// ----------------------------------------

class Animal {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    makeSound() {
        console.log(this.name + " makes a sound");
    }
}

class Dog extends Animal {
    breed: string;
    constructor(name: string, age: number, breed: string) {
        super(name, age);
        this.breed = breed;
    }

    makeSound() {
        console.log("Woof");
    }
}

const dog = new Dog("Dog", 10, "Bulldog");
dog.makeSound();

// ----------------------------------------

interface Drivable {
    startEngine(): void;
    drive(): void;
}

export class Car implements Drivable {
    startEngine() {
        console.log("Engine started");
    }

    drive() {
        console.log("Driving");
    }
}

// ----------------------------------------

abstract class Shape {
    abstract area(): number;

    describe(): void {
        console.log("I am a shape");
    }
}

export class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius ** 2;
    }

    describe() {
        console.log("I am a circle");
    }
}

// ----------------------------------------

class Person {
    protected age: number;

    constructor(age: number) {
        this.age = age;
    }

    protected getAge() {
        return this.age;
    }
 }

class Employee extends Person {
    private name;

    constructor(name: string, age: number) {
        super(age);
        this.name = name;
    }

    introduce(): void {
        console.log(`Hi, I am ${this.name} and I am ${this.getAge()} years old`);
    }
}

const employee = new Employee("John Doe", 30);
employee.introduce();