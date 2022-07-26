export type WomenType = {
    name: string
    age: number
}

const people: Array<WomenType> = [
    {name: 'Ana Kovalenko', age: 33},
    {name: 'Alexandra Yanushkevich', age: 24},
    {name: 'Darya Smak', age: 18}
]

const dimychTransformator = (people: WomenType) => ({
    stack: ['css', 'html', 'js', 'react', 'tdd'],
    firstName: people.name.split(' ')[0],
    lastName: people.name.split(' ')[1]
})


const devs = people.map(p => dimychTransformator(p));

const devs1 = people.map(woman => ({
    stack: ['css', 'html', 'js', 'react', 'tdd'],
    firstName: woman.name.split(' ')[0],
    lastName: woman.name.split(' ')[1]
}))

const messages = people.map(woman => `Hello ${woman.name.split(' ')[0]}.Welcome to the IT-incubator`)

export const createGreetingMessage = (people: Array<WomenType>) => {
    return people.map(woman => `Hello, ${woman.name.split(' ')[0]}.Welcome to the IT-incubator`);
}