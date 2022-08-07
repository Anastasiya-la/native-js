type HumanType = {
    name: string,
    age: number
    lessons: Array<{ title: string }>
    address: {
        street: {
            title: string
        }
    }
}


type PropsType = {
    title: string
    man: HumanType
    food: Array<string>
    car: { model: string }
}

export const HumanComponent: React.FC<PropsType> = ({title, man, ...props}) => {

    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>{props.car.model}</div>
        <div>{man.name}</div>
    </div>
}

