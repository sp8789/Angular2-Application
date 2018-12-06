import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';
import { ActivatedRoute, Router, Route } from '@angular/router';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/scan';
import { ISubscription } from 'rxjs/Subscription';

@Component({
    selector: 'my-employee',
    templateUrl: 'app/Employee/employee.component.html',
})
export class EmployeeComponent implements OnInit {
    employee: IEmployee
    statusMessage: string = 'Loading Data. Please wait.';

    subscription: ISubscription;
    constructor(private _employeeService: EmployeeService,
        private _activatedRoute: ActivatedRoute,
        private _router: Router ) {
    }

    onBackButtonClick(): void {
        this._router.navigate(['/employees']);
    }
    onCancelButtonClick(): void {
        this.statusMessage = "Request Cancelled."
        this.subscription.unsubscribe();
        
    }
    ngOnInit() {
        let empcode: string = this._activatedRoute.snapshot.params['code'];

        this.subscription= this._employeeService.getEmployeesByCode(empcode)
            .retryWhen((err) => {
                return err.scan((retryCount) => {
                    retryCount += 1;
                    if (retryCount < 6) {
                        this.statusMessage = 'Retrying.. Attemp #' + retryCount;
                        return retryCount;
                    }
                    else {
                        throw (err)
                    }
                },0).delay(1000)
                })
            .subscribe(
            (employeeData) => {
                if (employeeData == null) {
                    this.statusMessage = "Employee does not exist."
                }
                else {
                    this.employee = employeeData
                }
            },
            (error) => {
                this.statusMessage = "Problem with the service. Please try again later."
                console.log(error);
            }
        )
    }
    //firstName: string = 'Paresh';
    //lastName: string = 'Prajapati';
    //Gender: string = 'Male';
    //Age: number = 29;
    //ShowDetails: boolean = false;
    //toogleDetails(): void {
    //    this.ShowDetails = !this.ShowDetails;
    //    }
}