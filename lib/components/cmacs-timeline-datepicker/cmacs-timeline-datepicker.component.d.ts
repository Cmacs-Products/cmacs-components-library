import { AfterContentChecked, ChangeDetectorRef, ElementRef, EventEmitter, OnChanges, OnInit, Renderer2, SimpleChanges, OnDestroy } from '@angular/core';
import { NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { TabChangeEvent } from "../cmacs-tabs/cmacs-tabset.component";
import { NzI18nService } from "ng-zorro-antd";
import 'moment/locale/en-ie';
export declare type CmacsTimelineDatePickerMode = 'week' | 'quarter' | 'month' | 'week-range' | 'month-range';
export declare class CmacsTimelineDatepickerComponent implements AfterContentChecked, OnInit, OnChanges, OnDestroy {
    private renderer;
    private nzUpdateHostClassService;
    private elementRef;
    private i18n;
    private cdr;
    private indexToSelect;
    private destroy$;
    private el;
    private _selectedIndex;
    private _selectedRangeIdxs;
    private _date;
    private _range;
    listOfNzTabComponent: any[];
    gutter: number;
    mode: CmacsTimelineDatePickerMode;
    restrictMode: boolean;
    ranged: boolean;
    weekLocale: {
        week: {
            dow: number;
            doy: number;
        };
    };
    locale: string;
    readonly onNextClick: EventEmitter<void>;
    readonly onPrevClick: EventEmitter<void>;
    readonly selectChange: EventEmitter<TabChangeEvent>;
    readonly selectedIndexChange: EventEmitter<number>;
    readonly dateChange: EventEmitter<Date>;
    readonly rangeChange: EventEmitter<Date[]>;
    modeChange: EventEmitter<any>;
    showPreviousYearWeek: boolean;
    modeOptions: {
        title: string;
        value: string;
        selected: boolean;
    }[];
    selectedIndex: any;
    selectedRangeIdxs: number[];
    date: Date | null;
    range: Date[];
    onChange(range: Date[]): void;
    getWeek(result: Date): void;
    setClassMap(): void;
    getWeekNumber(date: any): number;
    getWeeksInYearCustom(date: any): number;
    clickLabel(index: number, disabled: boolean): void;
    createChangeEvent(index: number): TabChangeEvent;
    /** Clamps the given index to the bounds of 0 and the tabs length. */
    private clampTabIndex;
    constructor(renderer: Renderer2, nzUpdateHostClassService: NzUpdateHostClassService, elementRef: ElementRef, i18n: NzI18nService, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    updateSelectedMode(): void;
    getValuesSlider(): any[];
    getDefaultMonths(): {
        title: string;
    }[];
    getWeeksInYear(date: Date): any[];
    formatWeekNumber(value: number): string;
    ngAfterContentChecked(): void;
    customSelect(index: number): void;
    getSelected(): {
        title: string;
        value: string;
        selected: boolean;
    }[];
    getMonth(result: Date): void;
    ngOnDestroy(): void;
    checkActiveTab(index: number): boolean;
}
