/*
class DeleteUserAction {
    constructor(userId) {
        this.type = 'DELETE-USER';
        this.payload = {
            userId: userId
        }
    }
}

const action1 = new DeleteUserAction(23223)
const action2 = new DeleteUserAction(24354545)

console.log(action1)
console.log(action2)*/


class User {
    #name = ''

    constructor(name, site, dob) {
        this.#name = name;
        this.site = site;
        this.dateOfBirth = dob;
        this.counter = 0;
    }

    get name() {
        return this.#name
    }

    set name(value) {
        this.#name = value
    }


    hello() {
        this.counter++;
        console.log(`I am ${this.#name} from ${this.site}`)
    }
}


const u1 = new User('Dimych', 'it-incubator.by', new Date(1988, 1, 2))
const u2 = new User('Artem', 'it-incubator.by', new Date(1989, 10, 12))

console.log(u1)
console.log(u2)

u1.hello();
u2.hello();

console.log(u1.hello === User.prototype.hello)

u1.site = 'google.com'
console.log(u1.site)

// наследование
class Coder extends User {
    constructor(name, site, dob, tech) {
        super(name, site, dob); // User's constructor
        this.tech = tech
    }

    code() {
        console.log(`I am ${this.name} coder, here is my ${this.tech}  code: const sum = (a, b) => a + b`)
    }

    hello() {
        super.hello()
        console.log('Go away')
    }
}

const c1 = new Coder('Anastasiya', 'it-incubator.by', new Date(1988, 1, 2), 'c#')

c1.code()
c1.hello()

let users = [u1, u2, c1]
users.forEach(u => u.hello())


/*
class ProfilePage extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return 'IT-KAMASUTRA SUBSCRIBE'
    }
}

// @@@@@@@@@@REACT

// <ProfilePage age={1}/>
// const comp1 = new ProfilePage({age: 1})
// const jsx = comp1.render()
//jsx => html
// comp1.componentDidMount()*/


// const newJSx = comp1.render()
// jsx=>html
// comp1.componentdDidUpdate()

