import { EventEmitter } from '@angular/core';
import { FormControl } from "@angular/forms";
export declare class CmacsPhoneNumberComponent {
    init: object;
    formControlCustom: FormControl;
    hasError: EventEmitter<any>;
    telOutput: EventEmitter<any>;
    inputObject: EventEmitter<any>;
    countryChange: EventEmitter<any>;
    constructor();
    getNumber($event: any): void;
    telInputObject($event: any): void;
    onCountryChange($event: any): void;
    hasErrorEvent($event: any): void;
}
