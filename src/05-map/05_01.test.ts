import {createGreetingMessage, WomenType} from "./05_01";
import exp from "constants";

let people: Array<WomenType> = [];

beforeEach(() => {
    people = [
        {name: 'Ana Kovalenko', age: 33},
        {name: 'Alexandra Yanushkevich', age: 24},
        {name: 'Darya Smak', age: 18}
    ]
})

test('should get array of greeting messages', () => {
    const messages = createGreetingMessage(people);
    expect(messages.length).toBe(3);
    expect(messages[0]).toBe('Hello, Ana.Welcome to the IT-incubator')
    expect(messages[1]).toBe('Hello, Alexandra.Welcome to the IT-incubator')
    expect(messages[2]).toBe('Hello, Darya.Welcome to the IT-incubator')
})