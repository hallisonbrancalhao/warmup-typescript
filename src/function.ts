type Args = string | number | boolean;

function bootstrap(dirname: string, args?: Args[]): boolean {
  return typeof args !== 'undefined';
}

type MainFunction = (args: string[]) => void;

const main: MainFunction = (args) => {
    console.log
}

interface Function {
    run(args: string[]): void;
    execute(): boolean;
    handle(req: Request, res: Response): void;
}

const func: Function = {
    execute() {
        return true;
    },
    handle(req, res) {
        res.json();
    },
    run(args) {
        console.log(args);
    }
}

function customLog(text: string, color: string = "green", time?: Date, author?: string) {
    time && console.log("at: ", time.toString());
    author && console.log("by: ", author);
}

customLog("Hello World");