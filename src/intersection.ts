interface Robot { 
    material: string,
    fuel: string
}

interface Human {
    name: string,
    age: number
}

type Cyborg = Robot & Human;

const cyborg: Cyborg = {
    material: "steel",
    fuel: "battery",
    name: "John",
    age: 25
}

// ------------------------------------------------

interface MyFetchOptions {
    printInput?: boolean,
    printTime?: boolean
}

type RequestOptions = MyFetchOptions & RequestInit;

export function myFetch(input: string, options?: RequestOptions) {
    options?.printInput && console.log("Input: ", input);
    options?.printTime && console.log("Date: ",new Date());

    fetch(input, options)
        .then(response => response.json())
        .catch(error => console.error(error));
}

myFetch("https://jsonplaceholder.typicode.com/posts/1", {
    printInput: true,
    printTime: false,
    method: "GET"
})