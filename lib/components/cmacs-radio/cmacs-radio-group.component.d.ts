import { AfterContentInit, ChangeDetectorRef, ElementRef, OnChanges, OnDestroy, QueryList, Renderer2, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NzSizeLDSType } from 'ng-zorro-antd/core';
import { CmacsRadioComponent } from './cmacs-radio.component';
export declare type RadioButtonStyle = 'outline' | 'solid';
export declare class CmacsRadioGroupComponent implements AfterContentInit, ControlValueAccessor, OnDestroy, OnChanges {
    private cdr;
    private value;
    private destroy$;
    private selectSubscription;
    private touchedSubscription;
    onChange: (_: string) => void;
    onTouched: () => void;
    radios: QueryList<CmacsRadioComponent>;
    disabled: boolean;
    buttonStyle: RadioButtonStyle;
    size: NzSizeLDSType;
    name: string;
    updateChildrenStatus(): void;
    constructor(cdr: ChangeDetectorRef, renderer: Renderer2, elementRef: ElementRef);
    ngAfterContentInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    writeValue(value: any): void;
    registerOnChange(fn: (_: string) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
}
