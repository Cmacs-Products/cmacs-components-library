import { FocusMonitor } from '@angular/cdk/a11y';
import { AfterViewInit, ChangeDetectorRef, ElementRef, OnChanges, OnDestroy, Renderer2, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Subject } from 'rxjs';
export declare class CmacsRadioComponent implements ControlValueAccessor, AfterViewInit, OnChanges, OnDestroy {
    private elementRef;
    private renderer;
    private cdr;
    private focusMonitor;
    constructor(elementRef: ElementRef, renderer: Renderer2, cdr: ChangeDetectorRef, focusMonitor: FocusMonitor);
    select$: Subject<CmacsRadioComponent>;
    touched$: Subject<void>;
    checked: boolean;
    name: string;
    isNgModel: boolean;
    inputElement: ElementRef;
    value: any;
    disabled: boolean;
    autoFocus: boolean;
    onChange: (_: boolean) => void;
    onTouched: () => void;
    updateAutoFocus(): void;
    onClick(event: MouseEvent): void;
    focus(): void;
    blur(): void;
    markForCheck(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: boolean): void;
    registerOnChange(fn: (_: boolean) => {}): void;
    registerOnTouched(fn: () => {}): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
