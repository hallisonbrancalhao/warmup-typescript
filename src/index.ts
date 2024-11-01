// Narrowing

function printValue(value: number | string) {
    if (typeof value === 'number') {
        value;
        return;
    }
    value;
}

// ---------------------------------------------

function printValue2(value: number | string | boolean) {
    if (typeof value === 'number' || typeof value === 'string') {
        value;
        return;
    }
    value;
}

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
    if (pet instanceof Dog) {
        pet.bark();
        return;
    }
    pet.meow();
}

// ---------------------------------------------

interface Fish {
    swim: () => void;
}

interface Bird {
    fly: () => void;
}

function move(animal: Fish | Bird) {
    if ('swim' in animal) {
        animal.swim();
        return;
    }
    animal.fly();
}

// ---------------------------------------------

function main(value: string | null) {
    if(!value) {
        return;
    }
    value;
}   

// ---------------------------------------------

interface Usuario{
    id: string;
    email: string;
    telefone?: string;
}
 
function handle(user?: Usuario) {
    if(!user) return;

    user.telefone;

}