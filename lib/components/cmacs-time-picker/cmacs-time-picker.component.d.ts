import { OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class CmacsTimePickerComponent implements ControlValueAccessor, OnInit {
    defaultOpenValue: Date;
    disabled: boolean;
    allowEmpty: boolean;
    use12Hours: boolean;
    placeholder: string;
    format: string;
    _open: boolean;
    _value: Date | null;
    private _onChange;
    private _onTouched;
    onModelChange(value: any): void;
    value: Date | null;
    constructor();
    ngOnInit(): void;
    writeValue(time: Date | null): void;
    registerOnChange(fn: (time: Date | null) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
}
