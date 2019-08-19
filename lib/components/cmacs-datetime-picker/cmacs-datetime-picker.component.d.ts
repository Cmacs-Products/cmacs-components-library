/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { CdkOverlayOrigin, ConnectionPositionPair } from '@angular/cdk/overlay';
import { AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnInit, Renderer2, SimpleChanges, TemplateRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NzUpdateHostClassService as UpdateCls } from 'ng-zorro-antd/core';
export declare class CmacsDateTimePickerComponent implements ControlValueAccessor, OnInit, AfterViewInit, OnChanges {
    private element;
    private renderer;
    private updateCls;
    cdr: ChangeDetectorRef;
    private _disabled;
    private _value;
    private _allowEmpty;
    private _autoFocus;
    private _onChange;
    private _onTouched;
    private _hideDisabledOptions;
    isInit: boolean;
    origin: CdkOverlayOrigin;
    overlayPositions: ConnectionPositionPair[];
    inputRef: ElementRef;
    size: string | null;
    hourStep: number;
    minuteStep: number;
    secondStep: number;
    clearText: string;
    popupClassName: string;
    placeHolder: string;
    addOn: TemplateRef<void>;
    defaultOpenValue: Date;
    disabledHours: () => number[];
    disabledMinutes: (hour: number) => number[];
    disabledSeconds: (hour: number, minute: number) => number[];
    format: string;
    cmacsOpen: boolean;
    use12Hours: boolean;
    readonly openChange: EventEmitter<boolean>;
    hideDisabledOptions: boolean;
    allowEmpty: boolean;
    autoFocus: boolean;
    disabled: boolean | string;
    value: Date | null;
    open(): void;
    close(): void;
    updateAutoFocus(): void;
    onClickClearBtn(): void;
    private setClassMap;
    focus(): void;
    blur(): void;
    constructor(element: ElementRef, renderer: Renderer2, updateCls: UpdateCls, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    writeValue(time: Date | null): void;
    registerOnChange(fn: (time: Date | null) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
}
