import { FocusMonitor } from '@angular/cdk/a11y';
import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { CmacsCheckboxWrapperComponent } from './cmacs-checkbox-wrapper.component';
export declare class CmacsCheckboxComponent implements OnInit, ControlValueAccessor, OnChanges, AfterViewInit, OnDestroy {
    private elementRef;
    private renderer;
    private cmacsCheckboxWrapperComponent;
    private cdr;
    private focusMonitor;
    onChange: (value: any) => void;
    onTouched: () => any;
    private inputElement;
    private contentElement;
    readonly checkedChange: EventEmitter<boolean>;
    value: string;
    autoFocus: boolean;
    disabled: boolean;
    indeterminate: boolean;
    checked: boolean;
    hostClick(e: MouseEvent): void;
    innerCheckedChange(checked: boolean): void;
    updateAutoFocus(): void;
    writeValue(value: boolean): void;
    registerOnChange(fn: (_: boolean) => {}): void;
    registerOnTouched(fn: () => {}): void;
    setDisabledState(isDisabled: boolean): void;
    focus(): void;
    blur(): void;
    checkContent(): void;
    constructor(elementRef: ElementRef<HTMLElement>, renderer: Renderer2, cmacsCheckboxWrapperComponent: CmacsCheckboxWrapperComponent, cdr: ChangeDetectorRef, focusMonitor: FocusMonitor);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
