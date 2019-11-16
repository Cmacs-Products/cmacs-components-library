import { OnInit, EventEmitter } from '@angular/core';
import { NzSizeLDSType } from 'ng-zorro-antd';
import { ControlValueAccessor } from '@angular/forms';
import { Option } from '../core/interfaces/options';
export declare class CmacsSearchComponent implements ControlValueAccessor, OnInit {
    options: Option[];
    disabled: boolean;
    maxTagCount: number;
    allowClear: boolean;
    showSearch: boolean;
    cmacsOpen: boolean;
    size: NzSizeLDSType;
    placeholder: string;
    selected: any;
    selectedChange: EventEmitter<any>;
    mode: 'default' | 'multiple';
    onChange: (value: string | string[]) => void;
    onTouched: () => void;
    onSelectedChange(): void;
    writeValue(value: any | any[]): void;
    registerOnChange(fn: (value: string | string[]) => void): void;
    registerOnTouched(fn: () => void): void;
    constructor();
    trackByFn(index: any, item: Option): any;
    ngOnInit(): void;
}
