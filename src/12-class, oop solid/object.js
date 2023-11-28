/*
const deleteUser = (userId) => {
    const action = {
        type: 'DELETE-USER',
        payload: {
            userId: userId
        }
    }
    return action;
}

const action1 = deleteUser('123132');
const action2 = deleteUser('444444');
console.log(action1)
console.log(action2)*/

const userFabric = (name) => {
    return {
        name,
        site: 'it-incubator.by',
        dateOfBirth: new Date(1988, 1, 2),
        hello() {
            console.log(`I am ${this.name} from ${this.site}`)
        }
    }
}

const u1 = userFabric('Anastasiya')
const u2 = userFabric('Artem')

console.log(u1)
console.log(u2)
