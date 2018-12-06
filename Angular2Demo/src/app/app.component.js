"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
//@Component({
//  selector: 'my-app',
//  template: `<h1>Hello {{name}}</h1>`,
//})
//export class AppComponent  { name = 'Angular!'; }
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.name = "Paresh";
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            //template: '<list-employee></list-employee>'
            //template: `Your Text: <input type='text' [(ngModel)]='name' />
            //            <br/>
            //            <simple [simpleInput]='name'></simple>
            //           `
            //template: `<list-employee></list-employee>`
            template: "\n                <div style=\"padding:5px\">\n                    <ul class=\"nav nav-tabs\">\n                        <li routerlinkactive=\"Active\"><a routerLink=\"home\">Home</a></li>\n                        <li routerlinkactive=\"Active\"><a routerLink=\"employees\">Employees</a></li>\n                    </ul>\n                    <router-outlet></router-outlet>\n                </div>\n              "
        })
        //@Component({
        //    selector: 'my-app',
        //    template: `Name:<input [(ngModel)]='name'/>
        //                <br/>
        //                You entered: {{name}}
        //                `
        //})
        //export class AppComponent  {
        //    pageHeader: string = "Employee Details";  
        //}
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map