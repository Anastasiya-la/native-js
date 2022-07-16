import {StudentType} from "../02-objects/02";
import {GovernmentBuildingType, HouseType} from "../02-objects/02_02";

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(st: StudentType) {
    st.isActive = true;
}

export const doesStudentLiveIn = (s: StudentType, cityName: string) => {
    return s.address.city.title === cityName;
}

export function addMoneyToBudget(building: GovernmentBuildingType, budget: number) {
    building.budget += budget;
}

export const repairHouse = (house: HouseType) => {
    house.repaired = true;
}

export function toFireStaff(building: GovernmentBuildingType, staffToIncrease: number) {
    building.staffCount -= staffToIncrease;
}

export const toHireStaff = (building: GovernmentBuildingType, staffToHire: number) => {
    building.staffCount += staffToHire;
}