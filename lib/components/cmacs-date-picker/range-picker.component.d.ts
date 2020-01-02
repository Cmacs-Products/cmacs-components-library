import { ChangeDetectorRef, ElementRef, Renderer2, OnInit } from '@angular/core';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { DateHelperService, NzI18nService } from 'ng-zorro-antd/i18n';
import { CmacsDateRangePickerComponent } from './date-range-picker.component';
export declare class CmacsRangePickerComponent extends CmacsDateRangePickerComponent implements OnInit {
    noAnimation?: NzNoAnimationDirective;
    isRange: boolean;
    showWeek: boolean;
    openPickerTitle: string;
    openPickerLeftRangeSub: string;
    openPickerRightRangeSub: string;
    constructor(i18n: NzI18nService, cdr: ChangeDetectorRef, dateHelper: DateHelperService, renderer: Renderer2, elementRef: ElementRef, noAnimation?: NzNoAnimationDirective);
    ngOnInit(): void;
}
