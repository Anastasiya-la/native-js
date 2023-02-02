export type UserType = {
    name: string
    hair: number
    address: { city: string, house?: number }
}

export type laptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: laptopType
}

export type UserWithBooksType = UserWithLaptopType & {
    books: Array<string>
}

export type UserWithSkillsType = UserWithBooksType & {
    skills: Array<number>
}

export type WithCompaniesType = UserWithLaptopType & {
    companies: Array<{ id: number, title: string }>
}

export type CompanyType = { id: number, title: string };

export const makeHairstyle = (u: UserType, power: number) => {
    const copy: UserType = {
        ...u,
        hair: u.hair / power
    }
    // copy.hair = u.hair / power;
    return copy
}

export const moveUser = (u: UserWithLaptopType, city: string) => {
    const copy: UserWithLaptopType = {
        ...u,
        address: {...u.address, city: city}
    }
    return copy
}

export const upgradeUserLaptop = (u: UserWithLaptopType, laptop: string) => {
    return {
        ...u,
        laptop: {...u.laptop, title: laptop}
    }
}

export const moveUserToOtherHouse = (u: UserWithLaptopType & UserWithBooksType, house: number) => {
    return {
        ...u,
        address: {
            ...u.address, house: house
        }
    }
}

export const addNewBooksToUser = (u: UserWithLaptopType & UserWithBooksType, books: Array<string>) => {
    return {
        ...u,
        books: u.books.concat(books)
    }

}

export const addNewBookToUser = (u: UserWithLaptopType & UserWithBooksType, book: string) => {
    return {
        ...u,
        books: [...u.books, book]
    }
}

export const updateBook = (u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string) => ({
    ...u,
    books: u.books.map(b => b === oldBook ? newBook : b)
})

export const updateSkill = (u: UserWithSkillsType, oldSkill: number, newSkill: number) => ({
    ...u,
    skills: u.skills.map(s => s === oldSkill ? newSkill : s)
})

export const removeBook = (u: UserWithSkillsType, bookForDelete: string) => {
    return {
        ...u,
        books: u.books.filter(b => b !== bookForDelete)
    }
}

export const addNewCompanyToUser = (u: UserWithLaptopType & WithCompaniesType, nameOfCompany: string, id: number) => {
    return {
        ...u,
        companies: [...u.companies, {id: id, title: nameOfCompany}]
    }
}


export const updateCompanyTitle = (u: WithCompaniesType, id: number, nameOfCompanyForUpdate: string) => {
    return {
        ...u,
        companies: u.companies.map(c => c.id === id ? {...c, title: nameOfCompanyForUpdate} : c)
    }
}
export const updateCompanyTitle2 = (companies: { [key: string]: Array<CompanyType> }, userId: number, userName: string, newTitle: string) => {
    let companyCopy = {...companies}
    companyCopy[userName] = companyCopy[userName].map(c => c.id === userId ? {...c, title: newTitle} : c)
    return companyCopy;


}