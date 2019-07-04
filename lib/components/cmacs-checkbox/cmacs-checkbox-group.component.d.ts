import { FocusMonitor } from '@angular/cdk/a11y';
import { ChangeDetectorRef, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export interface CmacsCheckBoxOptionInterface {
    label: string;
    value: string;
    checked?: boolean;
    disabled?: boolean;
}
export declare class CmacsCheckboxGroupComponent implements ControlValueAccessor, OnInit {
    private elementRef;
    private focusMonitor;
    private cdr;
    onChange: (value: any) => void;
    onTouched: () => any;
    options: CmacsCheckBoxOptionInterface[];
    disabled: boolean;
    onOptionChange(): void;
    trackByOption(_index: number, option: CmacsCheckBoxOptionInterface): string;
    constructor(elementRef: ElementRef, focusMonitor: FocusMonitor, cdr: ChangeDetectorRef, renderer: Renderer2);
    ngOnInit(): void;
    writeValue(value: CmacsCheckBoxOptionInterface[]): void;
    registerOnChange(fn: (_: CmacsCheckBoxOptionInterface[]) => {}): void;
    registerOnTouched(fn: () => {}): void;
    setDisabledState(isDisabled: boolean): void;
}
