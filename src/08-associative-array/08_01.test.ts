import exp from "constants";

type UsersObjType = {
    [key: string]: { id: number, name: string }
}

let usersObj: UsersObjType;

beforeEach(() => {
    usersObj = {
        '101': {id: 101, name: 'Ana'},
        '3232312': {id: 3232312, name: 'Vita'},
        '1212': {id: 1212, name: 'Nika'},
        '1': {id: 1, name: 'Angelina'}
    }
})

test('should update corresponding uesr from obj', () => {
    usersObj['1212'].name = 'Veronika'
    expect(usersObj['1212'].name).toBe('Veronika')
    expect(usersObj['1212']).toEqual({id: 1212, name: 'Veronika'})

})

test('should delete corresponding user', () => {
    delete usersObj ['1'];
    expect(usersObj['1']).toBeUndefined()
})