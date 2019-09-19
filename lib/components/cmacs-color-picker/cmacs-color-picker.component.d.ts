import { EventEmitter, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
export declare class CmacsColorPickerComponent implements AfterViewInit {
    private ref;
    private cdr;
    type: 'basic' | 'basicWithTransparent';
    color: string;
    colorChange: EventEmitter<string>;
    width: number;
    basicColorList: string[];
    constructor(ref: ElementRef, cdr: ChangeDetectorRef);
    setColor(color: string): void;
    isColorPickerType(type: string): boolean;
    ngAfterViewInit(): void;
}
