import { ChangeDetectorRef, EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Subject } from 'rxjs';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { DateHelperService, NzDatePickerI18nInterface, NzI18nService } from 'ng-zorro-antd/i18n';
import { CandyDate } from './lib/candy-date/candy-date';
import { CmacsPickerComponent } from './picker.component';
/**
 * The base picker for all common APIs
 */
export declare abstract class AbstractPickerComponent implements OnInit, OnChanges, OnDestroy, ControlValueAccessor {
    protected i18n: NzI18nService;
    protected cdr: ChangeDetectorRef;
    protected dateHelper: DateHelperService;
    noAnimation?: NzNoAnimationDirective;
    readonly realOpenState: boolean;
    constructor(i18n: NzI18nService, cdr: ChangeDetectorRef, dateHelper: DateHelperService, noAnimation?: NzNoAnimationDirective);
    allowClear: boolean;
    autoFocus: boolean;
    disabled: boolean;
    open: boolean;
    className: string;
    disabledDate: (d: Date) => boolean;
    locale: NzDatePickerI18nInterface;
    placeHolder: string | string[];
    popupStyle: object;
    dropdownClassName: string;
    size: 'large' | 'small';
    cmacsStyle: object;
    format: string;
    cmacsOpen: boolean;
    value: any;
    width: any;
    readonly cmacsOnOpenChange: EventEmitter<boolean>;
    protected picker: CmacsPickerComponent;
    isRange: boolean;
    protected destroyed$: Subject<void>;
    protected isCustomPlaceHolder: boolean;
    initValue(): void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    closeOverlay(): void;
    /**
     * Common handle for value changes
     * @param value changed value
     */
    onValueChange(value: CompatibleValue): void;
    /**
     * Triggered when overlayOpen changes (different with realOpenState)
     * @param open The overlayOpen in picker component
     */
    onOpenChange(open: boolean): void;
    onChangeFn: (val: CompatibleDate | null) => void;
    onTouchedFn: () => void;
    writeValue(value: CompatibleDate): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(disabled: boolean): void;
    private setLocale;
    private setDefaultPlaceHolder;
    private setValue;
}
export declare type CompatibleValue = CandyDate | CandyDate[];
export declare type CompatibleDate = Date | Date[];
