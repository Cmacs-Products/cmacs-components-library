import { AfterViewInit, ElementRef, EventEmitter } from '@angular/core';
export declare class CmacsOpenTextareaComponent implements AfterViewInit {
    value: string;
    valueChange: EventEmitter<string>;
    width: number;
    allowEdition: boolean;
    enableDivider: boolean;
    textarea: ElementRef;
    constructor();
    onClick(event: Event): void;
    isEnabled(): boolean;
    isTextEnabled(): boolean;
    startEdition($event: Event): void;
    ngAfterViewInit(): void;
    updateModel(): void;
}
