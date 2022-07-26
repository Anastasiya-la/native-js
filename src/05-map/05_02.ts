import {GovernmentBuildingType, HouseType} from "../02-objects/02_02";

export const getStreetsTitlesOfGovernmentBuildings = (buildings: Array<GovernmentBuildingType>) => {
    return buildings.map(b => b.address.street.title);
}

export const getStreetsTitlesOfHouses = (houses: HouseType[]) => {
    return houses.map(h => h.address.street.title);
}

export const createMessage = (houses: HouseType[]) => {
    return houses.map(h => `Hello people from the ${h.address.street.title}`)
}