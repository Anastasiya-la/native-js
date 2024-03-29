export type CityType = {
    title: string
    houses: HouseType[]
    governmentBuildings: Array<GovernmentBuildingType>
    citizensNumber: number
}

export type AddressType = {
    number?: number
    street: StreetType
}
type StreetType = {
    title: string
}

export type HouseType = {
    id?: number
    buildedAt: number
    repaired: boolean
    address: AddressType
}

export type GovernmentBuildingType = {
    type: 'HOSPITAL' | 'FIRE-STATION'
    budget: number
    staffCount: number
    address: AddressType
}