import { Component, OnInit } from '@angular/core'
import { IEmployee } from './employee'
import { EmployeeService } from './employee.service'
import { UserPreferncesService } from '../Employee/userPreferences.service';

@Component({
    selector: 'list-employee',
    templateUrl: 'app/Employee/employeeList.component.html',
    
    
})
export class EmployeeListComponent implements OnInit {
    //employees: any[] = [
    //    { code: 'emp101', name: 'tom', gender: 'male', annualSalary: '5000', dateOfBirth: '15-02-1980' },
    //    { code: 'emp102', name: 'herry', gender: 'male', annualSalary: '3000', dateOfBirth: '12-02-1981' },
    //    { code: 'emp103', name: 'usha', gender: 'female', annualSalary: '7000', dateOfBirth: '5-03-1982' },
    //    { code: 'emp104', name: 'lisha', gender: 'female', annualSalary: '2000', dateOfBirth: '5-02-1983' },
    //];

    //employees: any[];
    //implementing interface
    employees: IEmployee[];
    selectedEmployeeCountRadioButton: string = 'All';
    statusMessage: string = 'Loading Data.Please Wait..';
    
    
    constructor(private _employeeService: EmployeeService, private _userPrefereceService: UserPreferncesService) {
        //this.employees = this._employeeService.getEmployees();
    }
    get colour(): string {
        return this._userPrefereceService.colourPreference;
    }
    set colour(value: string) {
        this._userPrefereceService.colourPreference = value;
    }
    ngOnInit() {
        this._employeeService.getEmployees()
            .subscribe((employeeData) => this.employees = employeeData,
            (error) => {
            this.statusMessage = 'Problem with the service. Please try after sometime.'
                console.error(error)}); 
        
    }
    //constructor() {
    //    this.employees = [
    //        { code: 'emp101', name: 'tom', gender: 'Male', annualSalary: '5000', dateOfBirth: '11-05-1980' },
    //        { code: 'emp102', name: 'herry', gender: 'Male', annualSalary: '3000', dateOfBirth: '12-02-1981' },
    //        { code: 'emp103', name: 'usha', gender: 'Female', annualSalary: '7000', dateOfBirth: '5-03-1982' },
    //        { code: 'emp104', name: 'lisha', gender: 'Female', annualSalary: '2000', dateOfBirth: '5-02-1983' },
    //        { code: 'emp105', name: 'manan', gender: 'Male', annualSalary: '2200', dateOfBirth: '5-02-1989' },
    //    ];
    //}

    //getEmployees(): void {
    //    this.employees = [
    //        { code: 'emp101', name: 'tom', gender: 'male', annualSalary: '5000', dateOfBirth: '11-05-1980' },
    //        { code: 'emp102', name: 'herry', gender: 'male', annualSalary: '3000', dateOfBirth: '12-02-1981' },
    //        { code: 'emp103', name: 'usha', gender: 'female', annualSalary: '7000', dateOfBirth: '5-03-1982' },
    //        { code: 'emp104', name: 'lisha', gender: 'female', annualSalary: '2000', dateOfBirth: '5-02-1983' },
    //        { code: 'emp105', name: 'manan', gender: 'male', annualSalary: '2200', dateOfBirth: '5-02-1989' },
    //    ];
    //}

    //trackByEmpCode(index: number, employee: any): string {
    //    return employee.code;
    //}

    getTotalEmployeesCount(): number {
        return this.employees.length;
    }
    getTotalMaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender === "Male").length;
    }
    getTotalFemaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender === "Female").length;
    }

    onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue
    }
}