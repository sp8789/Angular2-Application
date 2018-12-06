import { Component } from "@angular/core";

//@Component({
//  selector: 'my-app',
//  template: `<h1>Hello {{name}}</h1>`,
//})
//export class AppComponent  { name = 'Angular!'; }

@Component({
    selector: 'my-app',
    //template: '<list-employee></list-employee>'
    //template: `Your Text: <input type='text' [(ngModel)]='name' />
    //            <br/>
    //            <simple [simpleInput]='name'></simple>
    //           `

    //template: `<list-employee></list-employee>`

    template: `
                <div style="padding:5px">
                    <ul class="nav nav-tabs">
                        <li routerlinkactive="Active"><a routerLink="home">Home</a></li>
                        <li routerlinkactive="Active"><a routerLink="employees">Employees</a></li>
                    </ul>
                    <router-outlet></router-outlet>
                </div>
              `
    
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
export class AppComponent {
    name: string = "Paresh";
}