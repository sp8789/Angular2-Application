export interface IEmployee {
    code: string;
    name: string;
    gender: string;
    annualSalary: string;
    dateOfBirth: string;
    //department?: string;
    //computeMonthlySalary(annualSalary: number): number
}

export class Employee implements IEmployee {
    //shorhandsyntex
    constructor(public code: string, public name: string, public gender: string,
        public annualSalary: string, public dateOfBirth: string) {

    }

    //computeMonthlySalary(annualSalary: number): number{
    //    return annualSalary/12;
    //}
}