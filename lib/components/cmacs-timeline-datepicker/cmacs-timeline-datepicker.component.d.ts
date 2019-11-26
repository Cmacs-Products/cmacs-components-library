import { AfterContentChecked, ChangeDetectorRef, ElementRef, EventEmitter, OnInit, Renderer2 } from '@angular/core';
import { NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { TabChangeEvent } from "../cmacs-tabs/cmacs-tabset.component";
export declare class CmacsTimelineDatepickerComponent implements AfterContentChecked, OnInit {
    private renderer;
    private nzUpdateHostClassService;
    private elementRef;
    private cdr;
    private indexToSelect;
    private el;
    private _selectedIndex;
    private _date;
    listOfNzTabComponent: any[];
    gutter: number;
    mode: 'week' | 'quarter' | 'month';
    readonly onNextClick: EventEmitter<void>;
    readonly onPrevClick: EventEmitter<void>;
    readonly selectChange: EventEmitter<TabChangeEvent>;
    readonly selectedIndexChange: EventEmitter<number>;
    readonly dateChange: EventEmitter<Date>;
    modeOptions: {
        title: string;
        selected: boolean;
    }[];
    selectedIndex: number | null;
    date: Date | null;
    getWeek(result: Date): void;
    setClassMap(): void;
    clickLabel(index: number, disabled: boolean): void;
    createChangeEvent(index: number): TabChangeEvent;
    /** Clamps the given index to the bounds of 0 and the tabs length. */
    private clampTabIndex;
    constructor(renderer: Renderer2, nzUpdateHostClassService: NzUpdateHostClassService, elementRef: ElementRef, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    getValuesSlider(): any[];
    formatWeekNumber(value: number): string;
    ngAfterContentChecked(): void;
    customSelect(index: number): void;
    getSelected(): {
        title: string;
        selected: boolean;
    }[];
}
