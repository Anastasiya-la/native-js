type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechType>
}

type AddressType = {
    streetTitle: string
    city: LocalCityType
}

type LocalCityType = {
    title: number
    countryTitle: string
}

type TechType = {
    id: number
    title: string
}


const student = {
    id: 1,
    name: 'Ana',
    age: 21,
    isActive: true,
    address: {
        streetTitle: 'Surganova 2',
        city: {
            title: 'Minsk',
            countryTitle: 'Belarus'
        }
    },
    technologies: [
        {
            id: 1,
            title: 'HTML'
        },
        {
            id: 2,
            title: 'CSS'
        },
        {
            id: 3,
            title: 'React'
        }
    ]
}
console.log(student.name);
console.log(student['name']);
console.log(student.age);
console.log(student.address.city.title);
console.log(student.technologies[2].title)