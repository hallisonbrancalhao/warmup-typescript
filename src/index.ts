// Overload

/**
 * Criar uma nova data a partir de outra
 */
function createDate(value: Date): Date;
/**
 * Create uma nova data a partir de uma string
 */
function createDate(value: string): Date;
/**
 * Create uma nova data a partir de um número
 */
function createDate(value: number): Date;
/**
 * Create uma nova data a partir de um valor
 */
function createDate(value: Date | string | number): Date {
  return new Date(value);
}

const date = createDate(13123123);

// --------------------------------------------

interface Person {
    name: string;
    age: number;
}

interface Dog {
    name: string;
    breed: string;
}

interface House {
    address: string;
    size: number;
}

function generate(type: "person"): Person;
function generate(type: "dog"): Dog;
function generate(type: "house"): House;
function generate(type: "person" | "dog" | "house") {
 switch (type) {
    case "person":
      return { name: "Luiz", age: 20 };
    case "dog":
      return { name: "Dog", breed: "Bulldog" };
    case "house":
      return { address: "Rua 1", size: 50 };
     }
}

const house = generate("house");
house.address;

// --------------------------------------------

interface Component { id: string; label: string; }

interface Button extends Component { 
    style: string;
}

interface SelectMenu extends Component {
    options: string[];
}

enum InputType {
    String,
    Number,
    Date,
    Email,
    Password
}


interface Input extends Component {
    type: InputType;
}

function buildComponent(id: string, label: string, style: string): Button;
function buildComponent(id: string, label: string, options: string[]): SelectMenu;
function buildComponent(id: string, label: string, type: InputType): Input;
function buildComponent(id: string, label: string, arg: string | string[] | InputType ) {
    if(typeof arg === "string") {
        return { id, label, style: arg };
    }
    if(Array.isArray(arg)) {
        return { id, label, options: arg };
    }
    return { id, label, type: arg };
}

const button = buildComponent("myButton", "Click me", "primary");
const selectMenu = buildComponent("mySelect", "Select", ["Option 1", "Option 2"]);
const input = buildComponent("myInput", "Type something", InputType.String);

// --------------------------------------------

interface Triangle {
    sideA: number;
    sideB: number;
    sideC: number;
}

interface Equilateral extends Triangle {
    type: "equilateral";
}

interface Isosceles extends Triangle {
    type: "isosceles";
}

interface Scalene extends Triangle {
    type: "scalene";
}

type Triagles = Equilateral | Isosceles | Scalene;

function triangle(sides: number): Equilateral
function triangle(sideA: number, sideB: number): Isosceles
function triangle(sideA: number, sideB: number, sideC: number): Scalene
function triangle(A: number, B?:number, C?: number) {
    if( B && C ) {
        return { sideA: A, sideB: B, sideC: C, type: "scalene" };
    }
    if( B && !C ) {
        return { sideA: A, sideB: B, sideC: B, type: "isosceles" };
    }
    return { sideA: A, sideB: A, sideC: A, type: "equilateral" };
}

class TrianglesBuilder {
    static build(sides: number): Equilateral
    static build(sideA: number, sideB: number): Isosceles
    static build(sideA: number, sideB: number, sideC: number): Scalene
    static build(A: number, B?:number, C?: number) {
        if( B && C ) {
            return { sideA: A, sideB: B, sideC: C, type: "scalene" };
        }
        if( B && !C ) {
            return { sideA: A, sideB: B, sideC: B, type: "isosceles" };
        }
        return { sideA: A, sideB: A, sideC: A, type: "equilateral" };
    }
}

// --------------------------------------------

class Player {
    public name: string;
    public nickname: string;
    public health: number;

    constructor(name: string, nickname: string)
    constructor(name: string, health: number)
    constructor(name: string, args: string | number) {
        this.name = name;
        if(typeof args === "string") {
            this.nickname = args;
            this.health = 100;
        } else {
            this.health = args;
            this.nickname = name;
        }
    }
}

const player1 = new Player("Luiz", "Luizinho");
const player2 = new Player("Luiz", 100);

// --------------------------------------------

