// Generics

function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

// --------------------------------------------

interface ApiResponse<T> {
    data: T[];
    success: boolean;
    error: boolean;
}

interface User {
    name: string;
    age: number;
}

function fetchUser(): ApiResponse<User> {
    return {
        data: [{ name: 'John', age: 30 }],
        success: true,
        error: false
    };
}

const { data } = fetchUser();
data.forEach(user => {
    user.name;
    user.age;
});

// --------------------------------------------

class MyCustomArray<T> {
    private items: T[] = [];

    push(item: T) {
        this.items.unshift(item);
    }

    remove():T | undefined {
        return this.items.shift();
    }

    get(): T[] {
        return this.items;
    }
}


const myCustomArray = new MyCustomArray<number>();
myCustomArray.push(1);
myCustomArray.remove();

// --------------------------------------------

interface HasName { name: string }

function logLength<T extends HasName>(arr: T): void {
    console.log(arr.name);
}

logLength({
    name: 'John',
    length: 10
});