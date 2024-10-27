// Tuplas
type NameList = string[];

type CalendarDate = [day: number, monthName: string];

const list: NameList = []
list.push("lista");

const tupla: CalendarDate = [20, "Dezembro"];

function createDate(...date: CalendarDate) {
    const [day, month] = date;
}

createDate(1, "janeiro");