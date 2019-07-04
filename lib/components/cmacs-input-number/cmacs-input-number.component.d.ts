import { FocusMonitor } from '@angular/cdk/a11y';
import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NzSizeLDSType } from 'ng-zorro-antd/core';
export declare class CmacsInputNumberComponent implements ControlValueAccessor, AfterViewInit, OnChanges, OnInit, OnDestroy {
    private elementRef;
    private renderer;
    private cdr;
    private focusMonitor;
    private autoStepTimer;
    private actualValue;
    private value;
    displayValue: string | number;
    isFocused: boolean;
    disabledUp: boolean;
    disabledDown: boolean;
    onChange: (value: number) => void;
    onTouched: () => void;
    readonly cmacsBlur: EventEmitter<{}>;
    readonly cmacsFocus: EventEmitter<{}>;
    inputElement: ElementRef;
    size: NzSizeLDSType;
    min: number;
    max: number;
    parser: (value: any) => any;
    precision: number;
    placeHolder: string;
    cmacsStep: number;
    disabled: boolean;
    autoFocus: boolean;
    formatter: (value: number) => string | number;
    [property: string]: any;
    updateAutoFocus(): void;
    onModelChange(value: string): void;
    getCurrentValidValue(value: string | number): number;
    isNotCompleteNumber(num: string | number): boolean;
    getValidValue(value?: string | number): string | number | undefined;
    toNumber(num: string | number): number;
    setValidateValue(): void;
    onBlur(): void;
    onFocus(): void;
    getRatio(e: KeyboardEvent): number;
    down(e: MouseEvent | KeyboardEvent, ratio?: number): void;
    up(e: MouseEvent | KeyboardEvent, ratio?: number): void;
    getPrecision(value: number): number;
    getMaxPrecision(currentValue: string | number, ratio: number): number;
    getPrecisionFactor(currentValue: string | number, ratio: number): number;
    upStep(val: string | number, rat: number): number;
    downStep(val: string | number, rat: number): number;
    step(type: string, e: MouseEvent | KeyboardEvent, ratio?: number): void;
    stop(): void;
    setValue(value: number, emit: boolean): void;
    onKeyDown(e: KeyboardEvent): void;
    onKeyUp(): void;
    writeValue(value: number): void;
    registerOnChange(fn: (_: number) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    focus(): void;
    blur(): void;
    constructor(elementRef: ElementRef, renderer: Renderer2, cdr: ChangeDetectorRef, focusMonitor: FocusMonitor);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
