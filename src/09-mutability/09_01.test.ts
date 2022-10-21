import exp from "constants";

type UserType = {
    name: string
    age: number
    address: {
        title: string
    }
}

const increaseAge = (user: UserType) => {
    user.age = ++user.age
}

test('reference type user', () => {
    let user: UserType = {
        name: 'Ana',
        age: 22,
        address: {
            title: 'Minsk'
        }
    }

    let superuser = user;


    increaseAge(user);
    expect(user.age).toBe(23)
    superuser.age = 1000;
    expect(user.age).toBe(1000);
})

test('array reference test', () => {
    let users = [
        {
            name: 'Ana',
            age: 22
        },
        {
            name: 'Ana',
            age: 22
        }
    ]

    let admins = users;
    admins.push({name: 'Dm', age: 1})
    expect(users[2]).toEqual({name: 'Dm', age: 1})
})

test('reference type test', () => {
    const address = {
        title: 'Minsk'
    }

    let user: UserType = {
        name: 'Ana',
        age: 22,
        address: address
    }

    let user2: UserType = {
        name: 'Vlad',
        age: 26,
        address: address
    }

    user2.address.title = 'Minsk City'
    expect(user.address).toEqual(user2.address)
    expect(user.address.title).toBe('Minsk City')


})
test('reference array type test', () => {
    const address = {
        title: 'Minsk'
    }

    let user: UserType = {
        name: 'Ana',
        age: 22,
        address: address
    }

    let user2: UserType = {
        name: 'Vlad',
        age: 26,
        address: address
    }

    let users = [user, user2, {name: 'Alex', age: 9, address: address}]
    const admins = [user, user2]
    admins[0].name = 'Anastasiya'
    expect(user.name).toBe('Anastasiya')
    expect(users[0].name).toBe('Anastasiya')


})