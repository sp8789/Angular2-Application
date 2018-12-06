﻿import { Component,Input,Output,EventEmitter } from "@angular/core";

@Component({
    selector: 'employee-count',
    templateUrl: 'app/Employee/employeeCount.component.html',
    styleUrls: ['app/Employee/employeeCount.component.css']
})
export class EmployeeCountComponent {
    selectedRadioButtonValue: string = 'All';

    @Output()
    countRadioButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

    @Input()
    all: number;

    @Input()
    male: number;

    @Input()
    female: number;
    
    OnRadioButtonSelectionChange() {
        this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
        console.log(this.selectedRadioButtonValue);
    }

}