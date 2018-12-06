"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var employee_service_1 = require("./employee.service");
var userPreferences_service_1 = require("../Employee/userPreferences.service");
var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent(_employeeService, _userPrefereceService) {
        this._employeeService = _employeeService;
        this._userPrefereceService = _userPrefereceService;
        this.selectedEmployeeCountRadioButton = 'All';
        this.statusMessage = 'Loading Data.Please Wait..';
        //this.employees = this._employeeService.getEmployees();
    }
    Object.defineProperty(EmployeeListComponent.prototype, "colour", {
        get: function () {
            return this._userPrefereceService.colourPreference;
        },
        set: function (value) {
            this._userPrefereceService.colourPreference = value;
        },
        enumerable: true,
        configurable: true
    });
    EmployeeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._employeeService.getEmployees()
            .subscribe(function (employeeData) { return _this.employees = employeeData; }, function (error) {
            _this.statusMessage = 'Problem with the service. Please try after sometime.';
            console.error(error);
        });
    };
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
    EmployeeListComponent.prototype.getTotalEmployeesCount = function () {
        return this.employees.length;
    };
    EmployeeListComponent.prototype.getTotalMaleEmployeesCount = function () {
        return this.employees.filter(function (e) { return e.gender === "Male"; }).length;
    };
    EmployeeListComponent.prototype.getTotalFemaleEmployeesCount = function () {
        return this.employees.filter(function (e) { return e.gender === "Female"; }).length;
    };
    EmployeeListComponent.prototype.onEmployeeCountRadioButtonChange = function (selectedRadioButtonValue) {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    };
    EmployeeListComponent = __decorate([
        core_1.Component({
            selector: 'list-employee',
            templateUrl: 'app/Employee/employeeList.component.html',
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService, userPreferences_service_1.UserPreferncesService])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=employeelist.component.js.map