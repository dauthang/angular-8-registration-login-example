import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@/_models';
import { UserService, AuthenticationService } from '@/_services';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
@Component({ 
    selector: 'homeDemo',
    templateUrl: 'homeDemo.component.html' 
})
export class HomeDemoComponent implements OnInit {
    currentUser: User;
    users = [];
    formSave: FormGroup;
    public selectedAlgorithm;
    private formBuilder: FormBuilder;
    orders = [];
    orders1 = [];
    orders2 = [];
    orders3 = [];
    orders4 = [];
    nrSelect = "";
    tabHome = true;
    openPopupAdd = false;
    constructor(
    ) {
        this.formSave = new FormGroup({
            firstName: new FormControl(),
            orders: new FormControl(),
            orders1: new FormControl(),
            orders2: new FormControl(),
            orders3: new FormControl(),
            orders4: new FormControl()
        });
        this.orders = this.getOrders();
        this.orders1 = this.getOrders();
        this.orders2 = this.getOrders();
        this.orders3 = this.getOrders();
        this.orders4 = this.getOrders();
    }

    ngOnInit() {
    
    }

    onSubmit() {
        // TODO: Use EventEmitter with form value
        console.warn(this.formSave.value);
    }

    getOrders() {
        // get data from serivce
        return [
            { id: '', name: "--Hãy chọn--", selected: "true"},
            { id: '1', name: 'Hoài 1' },
            { id: '2', name: 'Hoài 2' },
            { id: '3', name: 'Hoài 3' },
            { id: '4', name: 'Hoài 4' }
        ];
    }
    
    add(){
        this.openPopupAdd = true;
    }

}