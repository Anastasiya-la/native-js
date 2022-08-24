type UsersType = {
    [key: string]: { id: number, name: string }
}

export const users: UsersType = {
    '101': {id: 101, name: 'Ana'},
    '3232312': {id: 3232312, name: 'Vita'},
    '1212': {id: 1212, name: 'Nika'},
    '1': {id: 1, name: 'Angelina'}
}

//users[1];
let user = {id: 100500, name: 'Katya'}
users[user.id] = user;
delete users[user.id];
users[user.id].name = 'Diana';

export const usersArray = [
    {id: 101, name: 'Ana'},
    {id: 3232312, name: 'Vita'},
    {id: 1212, name: 'Nika'},
    {id: 1, name: 'Angelina'}
];

//usersArray.find(u => u.id === 1);
//usersArray.push(user);
//let usersCopy = [...usersArray.filter(), user]
//let userArray = usersArray.filter(u => u.id !== user.id)