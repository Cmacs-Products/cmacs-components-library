import { ChangeDetectorRef, ElementRef, Renderer2 } from '@angular/core';
import { NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { DateHelperService, NzI18nService } from 'ng-zorro-antd/i18n';
import { CmacsDateRangePickerComponent } from './date-range-picker.component';
export declare class CmacsDatePickerComponent extends CmacsDateRangePickerComponent {
    noAnimation?: NzNoAnimationDirective;
    isRange: boolean;
    openPickerTitle: string;
    openPickerSubtitle: string;
    openPickerLeftRangeSub: string;
    openPickerRightRangeSub: string;
    constructor(i18n: NzI18nService, cdr: ChangeDetectorRef, dateHelper: DateHelperService, renderer: Renderer2, elementRef: ElementRef, noAnimation?: NzNoAnimationDirective);
}
