import { Injectable } from '@angular/core'
import { IEmployee } from './employee'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class EmployeeService {
    constructor(private _http: Http) {

    }
    getEmployees(): Observable<IEmployee[]> {
        return this._http.get("http://localhost:11625/api/employees/")
            .map((response: Response) => <IEmployee[]>response.json())
            .catch(this.handleError);
        //return [
        //    { code: 'emp101', name: 'tom', gender: 'Male', annualSalary: '5000', dateOfBirth: '11-05-1980' },
        //    { code: 'emp102', name: 'herry', gender: 'Male', annualSalary: '3000', dateOfBirth: '12-02-1981' },
        //    { code: 'emp103', name: 'usha', gender: 'Female', annualSalary: '7000', dateOfBirth: '5-03-1982' },
        //    { code: 'emp104', name: 'lisha', gender: 'Female', annualSalary: '2000', dateOfBirth: '5-02-1983' },
        //    { code: 'emp105', name: 'manan', gender: 'Male', annualSalary: '2200', dateOfBirth: '5-02-1989' },
        //];
    }

    getEmployeesByCode(empCode: string): Observable<IEmployee> {
        return this._http.get("http://localhost:11625/api/employees/" + empCode)
            .map((response: Response) => <IEmployee>response.json())
            .catch(this.handleError);
    }
    handleError(error: Response) {
        console.error(error);
        return Observable.throw(error);
    }

}