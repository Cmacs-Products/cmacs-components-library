import { ElementRef, EventEmitter, Renderer2 } from '@angular/core';
import { CmacsCheckboxComponent } from './cmacs-checkbox.component';
export declare class CmacsCheckboxWrapperComponent {
    readonly nzOnChange: EventEmitter<string[]>;
    private checkboxList;
    addCheckbox(value: CmacsCheckboxComponent): void;
    removeCheckbox(value: CmacsCheckboxComponent): void;
    outputValue(): string[];
    onChange(): void;
    constructor(renderer: Renderer2, elementRef: ElementRef);
}
