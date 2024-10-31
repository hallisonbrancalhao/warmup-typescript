// Type guards 

function printValue(value: string | number) {
    if(typeof value === 'string') {
        console.log(value.toUpperCase());
    } else {
        console.log(value.toFixed(2));
    }
}

// ----------------------------

class Dog {
    bark() {
        console.log('Woof!');
    }
}

class Cat {
    meow() {
        console.log('Meow!');
    }
}

function makeSound(pet: Dog | Cat) {
    if(pet instanceof Dog) {
       return pet.bark();
    }
    
    pet.meow();
}

// ---------------------------- IN 

interface Fish {
    swim: () => void;
}

interface Bird {
    fly: () => void;
}

function move(animal: Fish | Bird) {
    if('swim' in animal) {
        return animal.swim();
    }
    
    animal.fly();
}

// ----------------------------

function main(value: string[] | Date) {
    if("push" in value) {
        value.push('Hello ARRAY');
    }
}

// ----------------------------

interface Cheff {
    cook: () => void;
    certifications: string[];
}

interface Teacher {
    teach: () => void;
    diploma: string;
}

interface Driver {
    drive: () => void;
    license: string;
}

type Professionals = Cheff | Teacher | Driver;

// Tipando com type guard
function isCheff(professional: Professionals): professional is Cheff {
    return (professional as Cheff).cook !== undefined;
}
function isTeacher(professional: Professionals): professional is Teacher {
    return (professional as Teacher).teach !== undefined;
}

function execute(professional: Professionals) {
    if(isCheff(professional)) {
        return professional.cook();
    }
 
    if(isTeacher(professional)) {
        return professional.teach();
    }

    return professional.drive();
}

// ----------------------------

class People {
    isStudent(): this is Student {
        return this instanceof Student;
    }

    isWorker(): this is Worker {
        return this instanceof Worker;
    }
}

class Student extends People {
    study(): void {}
}

class Worker extends People {
    work(): void {}
}