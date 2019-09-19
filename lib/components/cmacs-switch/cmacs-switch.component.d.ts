import { FocusMonitor } from '@angular/cdk/a11y';
import { AfterViewInit, ChangeDetectorRef, TemplateRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NzSizeDSType } from 'ng-zorro-antd/core';
export declare class CmacsSwitchComponent implements ControlValueAccessor, AfterViewInit {
    private cdr;
    private focusMonitor;
    checked: boolean;
    onChange: (value: boolean) => void;
    onTouched: () => void;
    private switchElement;
    loading: boolean;
    disabled: boolean;
    control: boolean;
    checkedChildren: string | TemplateRef<void>;
    unCheckedChildren: string | TemplateRef<void>;
    size: NzSizeDSType;
    hostClick(e: MouseEvent): void;
    updateValue(value: boolean): void;
    onKeyDown(e: KeyboardEvent): void;
    focus(): void;
    blur(): void;
    constructor(cdr: ChangeDetectorRef, focusMonitor: FocusMonitor);
    ngAfterViewInit(): void;
    writeValue(value: boolean): void;
    registerOnChange(fn: (_: boolean) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
}
