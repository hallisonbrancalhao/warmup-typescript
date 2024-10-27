import { readFile } from "fs/promises";

// Union Types

type Primitives = string | number | boolean;

function logValue(value: Primitives) {
    // type narrowing
    if (typeof value === "string") {
        return console.log(value.toUpperCase());
    } 
    if (typeof value === "number") {
        return console.log(value.toFixed(2));
    }
    console.log(value);
}
// ------------------------------------------------

enum TrafficLightType {
    Yellow,
    Red,
    Green
}

interface YellowCollor {
    type: TrafficLightType.Yellow;
    wait(): void;
}

interface RedColor {
    type: TrafficLightType.Red;
    stop(): void;
}

interface GreenColor {
    type: TrafficLightType.Green;
    drive(): void;
}

type TrafficLight = YellowCollor | RedColor | GreenColor;

const trafficLight: TrafficLight = {
    type: TrafficLightType.Yellow,
    wait() {
        console.log("Waiting...");
    },
}

// ------------------------------------------------

type Action = "Create" | "Read" | "Update" | "Delete";

function menage(action: Action) {
    return;
}
menage("Create");

type ImageSize = 8 | 16 | 32 | 64 | 128;
interface Image {
    src: string,
    size: ImageSize
}

const image: Image = {
    src: "image.png",
    size: 32
}


// ------------------------------------------------

type JsonValue = string | number | boolean | null | JsonValue[] | { [key: string]: JsonValue };

const jsonString = await readFile("data.json", "utf-8");
const json: JsonValue = JSON.parse(jsonString);

if(typeof json === "string") {
    console.log(json.toUpperCase());
}

if(Array.isArray(json)) {
    console.log(json.length);
}

type FindItemPredicated = (number) | ( (value: string, index: number) => boolean )

function findItem(array: string[], predicated: FindItemPredicated) {
    if (typeof predicated === "number") {
        return array[predicated];
    }

    array.find((value, index) => {
        return predicated(value, index);
    });
}

findItem(["a", "b", "c"], 1);
findItem(["a", "b", "c"], (value) => value === "b");