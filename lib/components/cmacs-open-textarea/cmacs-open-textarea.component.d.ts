import { AfterViewInit, ElementRef } from '@angular/core';
import { FormControl } from "@angular/forms";
export declare class CmacsOpenTextareaComponent implements AfterViewInit {
    formControlCustom: FormControl;
    width: number;
    placeholder: string;
    allowEdition: boolean;
    enableDivider: boolean;
    textarea: ElementRef;
    constructor();
    onClick(event: Event): void;
    isEnabled(): boolean;
    isTextEnabled(): any;
    startEdition($event: Event): void;
    ngAfterViewInit(): void;
}
