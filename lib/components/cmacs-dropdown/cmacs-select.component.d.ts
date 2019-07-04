import { FocusMonitor } from '@angular/cdk/a11y';
import { CdkConnectedOverlay, CdkOverlayOrigin, ConnectedOverlayPositionChange } from '@angular/cdk/overlay';
import { Platform } from '@angular/cdk/platform';
import { AfterContentInit, AfterViewInit, ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, OnInit, QueryList, Renderer2, TemplateRef } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { NzNoAnimationDirective, NzSizeLDSType } from 'ng-zorro-antd/core';
import { NzOptionGroupComponent, TFilterOption, NzSelectService } from 'ng-zorro-antd';
import { CmacsSelectTopControlComponent } from './cmacs-select-top-control.component';
import { CmacsOptionComponent } from './cmacs-option.component';
export declare class CmacsDropdownComponent implements ControlValueAccessor, OnInit, AfterViewInit, OnDestroy, AfterContentInit {
    private renderer;
    nzSelectService: NzSelectService;
    private cdr;
    private focusMonitor;
    private platform;
    noAnimation?: NzNoAnimationDirective;
    nzOpen: boolean;
    value: any | any[];
    onChange: (value: string | string[]) => void;
    onTouched: () => void;
    dropDownPosition: 'top' | 'center' | 'bottom';
    triggerWidth: number;
    private _disabled;
    private _autoFocus;
    private isInit;
    private destroy$;
    cdkOverlayOrigin: CdkOverlayOrigin;
    cdkConnectedOverlay: CdkConnectedOverlay;
    selectTopControlComponent: CmacsSelectTopControlComponent;
    listOfCmacsOptionComponent: QueryList<CmacsOptionComponent>;
    listOfCmacsOptionGroupComponent: QueryList<NzOptionGroupComponent>;
    readonly cmacsOnSearch: EventEmitter<string>;
    readonly scrollToBottom: EventEmitter<void>;
    readonly openChange: EventEmitter<boolean>;
    readonly cmacsBlur: EventEmitter<void>;
    readonly cmacsFocus: EventEmitter<void>;
    size: NzSizeLDSType;
    dropdownClassName: string;
    dropdownMatchSelectWidth: boolean;
    dropdownStyle: {
        [key: string]: string;
    };
    notFoundContent: string;
    allowClear: boolean;
    showSearch: boolean;
    showCustomSearch: boolean;
    loading: boolean;
    placeHolder: string;
    maxTagCount: number;
    dropdownRender: TemplateRef<void>;
    suffixIcon: TemplateRef<void>;
    clearIcon: TemplateRef<void>;
    removeIcon: TemplateRef<void>;
    menuItemSelectedIcon: TemplateRef<void>;
    showArrow: boolean;
    tokenSeparators: string[];
    maxTagPlaceholder: TemplateRef<{
        $implicit: any[];
    }>;
    autoClearSearchValue: boolean;
    maxMultipleCount: number;
    serverSearch: boolean;
    mode: 'default' | 'multiple' | 'tags';
    filterOption: TFilterOption;
    compareWith: (o1: any, o2: any) => boolean;
    autoFocus: boolean;
    cmacsOpen: boolean;
    disabled: boolean;
    updateAutoFocus(): void;
    focus(): void;
    blur(): void;
    onKeyDown(event: KeyboardEvent): void;
    toggleDropDown(): void;
    closeDropDown(): void;
    onPositionChange(position: ConnectedOverlayPositionChange): void;
    updateCdkConnectedOverlayStatus(): void;
    updateCdkConnectedOverlayPositions(): void;
    constructor(renderer: Renderer2, nzSelectService: NzSelectService, cdr: ChangeDetectorRef, focusMonitor: FocusMonitor, platform: Platform, elementRef: ElementRef, noAnimation?: NzNoAnimationDirective);
    /** update ngModel -> update listOfSelectedValue **/
    writeValue(value: any | any[]): void;
    registerOnChange(fn: (value: string | string[]) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngAfterContentInit(): void;
    ngOnDestroy(): void;
}
