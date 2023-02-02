import {
    addNewBooksToUser, addNewBookToUser, addNewCompanyToUser, CompanyType,
    makeHairstyle,
    moveUser,
    moveUserToOtherHouse, removeBook, updateBook, updateCompanyTitle, updateCompanyTitle2, updateSkill,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, UserWithSkillsType, WithCompaniesType
} from "./10_01";


test('reference type test', () => {
    let user: UserType = {
        name: 'Ana',
        hair: 22,
        address: {
            city: 'Minsk'
        },
    }
    const awesomeUser = makeHairstyle(user, 2);

    expect(user.hair).toBe(22);
    expect(awesomeUser.hair).toBe(11);
    expect(awesomeUser.address).toBe(user.address)
})

test('move user to Kiyev', () => {
    let user: UserWithLaptopType = {
        name: 'Ana',
        hair: 22,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Dell'
        }
    }
    const movedUser = moveUser(user, 'Kiyev');

    expect(movedUser.address.city).toBe("Kiyev");
    expect(user.address.city).toBe("Minsk");
    expect(user).not.toBe(movedUser);
    expect(user.address).not.toBe(movedUser.address);
    expect(user.laptop).toBe(movedUser.laptop);
})

test('upgrade laptop to macbook', () => {
    let user: UserWithLaptopType = {
        name: 'Ana',
        hair: 22,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Dell'
        }
    }
    const userWithMacbook = upgradeUserLaptop(user, 'macbook');

    expect(userWithMacbook.laptop.title).toBe('macbook');
    expect(user.laptop.title).toBe('Dell');
    expect(userWithMacbook.laptop).not.toBe(user.laptop);
    expect(userWithMacbook.address).toBe(user.address);
    expect(user).not.toBe(userWithMacbook);

})

test('move user to other house', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Ana',
        hair: 22,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Dell'
        },
        books: ['css', 'js', 'react', 'html']
    }
    const userCopy = moveUserToOtherHouse(user, 32);

    expect(userCopy.address.house).toBe(32);
    expect(user.address.house).toBe(12);
    expect(userCopy.address).not.toBe(user.address);
    expect(userCopy.laptop).toBe(user.laptop);
    expect(userCopy.books).toBe(user.books);

})

test('add new books to user', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Ana',
        hair: 22,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Dell'
        },
        books: ['css', 'js', 'react', 'html']
    }
    const userCopy = addNewBooksToUser(user, ['ts', 'rest api']);

    expect(userCopy.books[4]).toBe('ts');
    expect(userCopy.books[5]).toBe('rest api');
    expect(userCopy.books).not.toBe(user.books);
    expect(userCopy.laptop).toBe(user.laptop);
    expect(userCopy.address).toBe(user.address);

})

test('add new book to user', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Ana',
        hair: 22,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Dell'
        },
        books: ['css', 'js', 'react', 'html']
    }
    const userCopy = addNewBookToUser(user, 'ts');

    expect(userCopy.books[4]).toBe('ts');
    expect(userCopy.books).not.toBe(user.books);
    expect(userCopy.laptop).toBe(user.laptop);
    expect(userCopy.address).toBe(user.address);

})

test('update book js to ts of user', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Ana',
        hair: 22,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Dell'
        },
        books: ['css', 'js', 'react', 'html']
    }
    const userCopy = updateBook(user, 'js', 'ts');

    expect(user).not.toBe(userCopy);
    expect(userCopy.books[1]).toBe('ts');
    expect(userCopy.books).not.toBe(user.books);
    expect(userCopy.laptop).toBe(user.laptop);
    expect(userCopy.address).toBe(user.address);

})

test('update skill 70 to 100 of user', () => {
    let user: UserWithSkillsType = {
        name: 'Ana',
        hair: 22,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Dell'
        },
        books: ['css', 'js', 'react', 'html'],
        skills: [80, 1, 40, 70, 3, 67]
    }
    const userCopy = updateSkill(user, 70, 100);

    expect(user).not.toBe(userCopy);
    expect(userCopy.skills[3]).toBe(100);
    expect(userCopy.books).toBe(user.books);
    expect(userCopy.skills).not.toBe(user.skills);
    expect(userCopy.laptop).toBe(user.laptop);
    expect(userCopy.address).toBe(user.address);

})

test('remove js book', () => {
    let user: UserWithSkillsType = {
        name: 'Ana',
        hair: 22,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Dell'
        },
        books: ['css', 'js', 'react', 'html'],
        skills: [80, 1, 40, 70, 3, 67]
    }
    const userCopy = removeBook(user, 'js');

    expect(user).not.toBe(userCopy);
    expect(userCopy.books[1]).toBe('react');
    expect(userCopy.books).not.toBe(user.books);
    expect(userCopy.skills).toBe(user.skills);
    expect(userCopy.laptop).toBe(user.laptop);
    expect(userCopy.address).toBe(user.address);

})

test('add new company to user', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Ana',
        hair: 22,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Dell'
        },
        companies: [{id: 1, title: 'Epam'}, {id: 2, title: 'IT-INCUBATOR'}]
    }
    const userCopy = addNewCompanyToUser(user, 'Google', 3);

    expect(user).not.toBe(userCopy);
    expect(userCopy.companies[2]).toStrictEqual({id: 3, title: 'Google'});
    expect(userCopy.laptop).toBe(user.laptop);
    expect(userCopy.address).toBe(user.address);
})

test('update company title', () => {
    let user: WithCompaniesType = {
        name: 'Ana',
        hair: 22,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'Dell'
        },
        companies: [{id: 1, title: 'Епам'}, {id: 2, title: 'IT-INCUBATOR'}]
    }
    const userCopy = updateCompanyTitle(user, 1, 'EPAM') as WithCompaniesType

    expect(user).not.toBe(userCopy);
    expect(userCopy.companies[0]).toStrictEqual({id: 1, title: 'EPAM'});
    expect(userCopy.companies[0].title).toStrictEqual('EPAM');
    expect(userCopy.laptop).toBe(user.laptop);
    expect(userCopy.address).toBe(user.address);
    expect(userCopy.companies).not.toBe(user.address);
})

test('update company title2', () => {

    let companies: { [key: string]: Array<CompanyType> } = {
        'Ana': [{id: 1, title: 'Епам'}, {id: 2, title: 'IT-INCUBATOR'}],
        'Artem': [{id: 2, title: 'IT-INCUBATOR'}]
    }

    const userCopy = updateCompanyTitle2(companies, 2, 'Artem', 'EPAM');
    const userCopy2 = updateCompanyTitle2(companies, 1, 'Ana', 'EPAM');

    expect(userCopy['Artem']).not.toBe(companies['Artem']);
    expect(userCopy['Ana']).toBe(companies['Ana']);
    expect(companies).not.toBe(userCopy);
    expect(userCopy['Artem'][0].title).toBe('EPAM');

    expect(userCopy2['Ana']).not.toBe(companies['Ana']);
    expect(userCopy2['Artem']).toBe(companies['Artem']);
    expect(companies).not.toBe(userCopy);
    expect(userCopy2['Ana'][0].title).toBe('EPAM');
})

