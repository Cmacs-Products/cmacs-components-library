/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { CandyDate } from '../candy-date/candy-date';
export class InnerPopupComponent {
    constructor() {
        this.panelModeChange = new EventEmitter();
        this.headerChange = new EventEmitter(); // Emitted when user changed the header's value
        // Emitted when user changed the header's value
        this.selectDate = new EventEmitter(); // Emitted when the date is selected by click the date panel
        // Emitted when the date is selected by click the date panel
        this.selectTime = new EventEmitter();
        this.dayHover = new EventEmitter(); // Emitted when hover on a day by mouse enter
        // Emitted when hover on a day by mouse enter
        this.prefixCls = 'ant-calendar';
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.value && !this.value) {
            this.value = new CandyDate();
        }
    }
    /**
     * @param {?} date
     * @return {?}
     */
    onSelectTime(date) {
        this.selectTime.emit(new CandyDate(date));
    }
    // The value real changed to outside
    /**
     * @param {?} date
     * @return {?}
     */
    onSelectDate(date) {
        /** @type {?} */
        const value = date instanceof CandyDate ? date : new CandyDate(date);
        this.selectDate.emit(value);
    }
}
InnerPopupComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'inner-popup',
                exportAs: 'innerPopup',
                template: "<calendar-header\n  [(panelMode)]=\"panelMode\"\n  (panelModeChange)=\"panelModeChange.emit($event)\"\n  [(value)]=\"value\"\n  (valueChange)=\"headerChange.emit($event)\"\n  [locale]=\"locale\"\n  [showTimePicker]=\"showTimePicker\"\n  [enablePrev]=\"enablePrev\"\n  [enableNext]=\"enableNext\"\n></calendar-header>\n\n<ng-container *ngIf=\"showTimePicker && timeOptions\">\n  <nz-time-picker-panel\n    [nzInDatePicker]=\"true\"\n    [ngModel]=\"value.nativeDate\"\n    (ngModelChange)=\"onSelectTime($event)\"\n    [format]=\"timeOptions.nzFormat\"\n    [nzHourStep]=\"timeOptions.nzHourStep\"\n    [nzMinuteStep]=\"timeOptions.nzMinuteStep\"\n    [nzSecondStep]=\"timeOptions.nzSecondStep\"\n    [nzDisabledHours]=\"timeOptions.nzDisabledHours\"\n    [nzDisabledMinutes]=\"timeOptions.nzDisabledMinutes\"\n    [nzDisabledSeconds]=\"timeOptions.nzDisabledSeconds\"\n    [nzHideDisabledOptions]=\"timeOptions.nzHideDisabledOptions\"\n    [nzDefaultOpenValue]=\"timeOptions.nzDefaultOpenValue\"\n    [nzAddOn]=\"timeOptions.nzAddOn\"\n  ></nz-time-picker-panel>\n</ng-container>\n\n<div class=\"{{ prefixCls }}-body\">\n  <date-table\n    [locale]=\"locale\"\n    [showWeek]=\"showWeek\"\n    [value]=\"value\"\n    (valueChange)=\"onSelectDate($event)\"\n    showWeekNumber=\"false\"\n    [disabledDate]=\"disabledDate\"\n    [dateRender]=\"dateRender\"\n    [selectedValue]=\"selectedValue\"\n    [hoverValue]=\"hoverValue\"\n    (dayHover)=\"dayHover.emit($event)\"\n  ></date-table>\n</div>"
            }] }
];
/** @nocollapse */
InnerPopupComponent.ctorParameters = () => [];
InnerPopupComponent.propDecorators = {
    showWeek: [{ type: Input }],
    locale: [{ type: Input }],
    showTimePicker: [{ type: Input }],
    timeOptions: [{ type: Input }],
    enablePrev: [{ type: Input }],
    enableNext: [{ type: Input }],
    disabledDate: [{ type: Input }],
    dateRender: [{ type: Input }],
    selectedValue: [{ type: Input }],
    hoverValue: [{ type: Input }],
    panelMode: [{ type: Input }],
    panelModeChange: [{ type: Output }],
    value: [{ type: Input }],
    headerChange: [{ type: Output }],
    selectDate: [{ type: Output }],
    selectTime: [{ type: Output }],
    dayHover: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    InnerPopupComponent.prototype.showWeek;
    /** @type {?} */
    InnerPopupComponent.prototype.locale;
    /** @type {?} */
    InnerPopupComponent.prototype.showTimePicker;
    /** @type {?} */
    InnerPopupComponent.prototype.timeOptions;
    /** @type {?} */
    InnerPopupComponent.prototype.enablePrev;
    /** @type {?} */
    InnerPopupComponent.prototype.enableNext;
    /** @type {?} */
    InnerPopupComponent.prototype.disabledDate;
    /** @type {?} */
    InnerPopupComponent.prototype.dateRender;
    /** @type {?} */
    InnerPopupComponent.prototype.selectedValue;
    /** @type {?} */
    InnerPopupComponent.prototype.hoverValue;
    /** @type {?} */
    InnerPopupComponent.prototype.panelMode;
    /** @type {?} */
    InnerPopupComponent.prototype.panelModeChange;
    /** @type {?} */
    InnerPopupComponent.prototype.value;
    /** @type {?} */
    InnerPopupComponent.prototype.headerChange;
    /** @type {?} */
    InnerPopupComponent.prototype.selectDate;
    /** @type {?} */
    InnerPopupComponent.prototype.selectTime;
    /** @type {?} */
    InnerPopupComponent.prototype.dayHover;
    /** @type {?} */
    InnerPopupComponent.prototype.prefixCls;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5uZXItcG9wdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy1kYXRlLXBpY2tlci9saWIvcG9wdXBzL2lubmVyLXBvcHVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUdOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUt2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFVckQsTUFBTSxPQUFPLG1CQUFtQjtJQTBCOUI7UUFYbUIsb0JBQWUsR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO1FBSWhELGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQyxDQUFDLCtDQUErQzs7UUFDN0YsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFhLENBQUMsQ0FBQyw0REFBNEQ7O1FBQ3hHLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO1FBQzNDLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDLENBQUMsNkNBQTZDOztRQUUxRyxjQUFTLEdBQVcsY0FBYyxDQUFDO0lBRXBCLENBQUM7Ozs7SUFFaEIsUUFBUSxLQUFVLENBQUM7Ozs7O0lBRW5CLFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztTQUM5QjtJQUNILENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLElBQVU7UUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7Ozs7SUFHRCxZQUFZLENBQUMsSUFBc0I7O2NBQzNCLEtBQUssR0FBRyxJQUFJLFlBQVksU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQztRQUNwRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7WUFwREYsU0FBUyxTQUFDO2dCQUNULGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7Z0JBRS9DLFFBQVEsRUFBRSxhQUFhO2dCQUN2QixRQUFRLEVBQUUsWUFBWTtnQkFDdEIsbStDQUF5QzthQUMxQzs7Ozs7dUJBRUUsS0FBSztxQkFFTCxLQUFLOzZCQUNMLEtBQUs7MEJBRUwsS0FBSzt5QkFDTCxLQUFLO3lCQUNMLEtBQUs7MkJBQ0wsS0FBSzt5QkFDTCxLQUFLOzRCQUNMLEtBQUs7eUJBQ0wsS0FBSzt3QkFFTCxLQUFLOzhCQUNMLE1BQU07b0JBRU4sS0FBSzsyQkFFTCxNQUFNO3lCQUNOLE1BQU07eUJBQ04sTUFBTTt1QkFDTixNQUFNOzs7O0lBckJQLHVDQUEyQjs7SUFFM0IscUNBQXlDOztJQUN6Qyw2Q0FBaUM7O0lBRWpDLDBDQUEwQjs7SUFDMUIseUNBQTZCOztJQUM3Qix5Q0FBNkI7O0lBQzdCLDJDQUFzQzs7SUFDdEMseUNBQThEOztJQUM5RCw0Q0FBb0M7O0lBQ3BDLHlDQUFpQzs7SUFFakMsd0NBQThCOztJQUM5Qiw4Q0FBbUU7O0lBRW5FLG9DQUEwQjs7SUFFMUIsMkNBQWdFOztJQUNoRSx5Q0FBOEQ7O0lBQzlELHlDQUE4RDs7SUFDOUQsdUNBQTREOztJQUU1RCx3Q0FBbUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGdW5jdGlvblByb3AgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xuaW1wb3J0IHsgTnpDYWxlbmRhckkxOG5JbnRlcmZhY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xuaW1wb3J0IHsgRGlzYWJsZWREYXRlRm4sIFBhbmVsTW9kZSB9IGZyb20gJy4uLy4uL3N0YW5kYXJkLXR5cGVzJztcbmltcG9ydCB7IENhbmR5RGF0ZSB9IGZyb20gJy4uL2NhbmR5LWRhdGUvY2FuZHktZGF0ZSc7XG5cbkBDb21wb25lbnQoe1xuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogJ2lubmVyLXBvcHVwJyxcbiAgZXhwb3J0QXM6ICdpbm5lclBvcHVwJyxcbiAgdGVtcGxhdGVVcmw6ICdpbm5lci1wb3B1cC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgSW5uZXJQb3B1cENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgc2hvd1dlZWs6IGJvb2xlYW47XG5cbiAgQElucHV0KCkgbG9jYWxlOiBOekNhbGVuZGFySTE4bkludGVyZmFjZTtcbiAgQElucHV0KCkgc2hvd1RpbWVQaWNrZXI6IGJvb2xlYW47XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgQElucHV0KCkgdGltZU9wdGlvbnM6IGFueTtcbiAgQElucHV0KCkgZW5hYmxlUHJldjogYm9vbGVhbjtcbiAgQElucHV0KCkgZW5hYmxlTmV4dDogYm9vbGVhbjtcbiAgQElucHV0KCkgZGlzYWJsZWREYXRlOiBEaXNhYmxlZERhdGVGbjtcbiAgQElucHV0KCkgZGF0ZVJlbmRlcjogRnVuY3Rpb25Qcm9wPFRlbXBsYXRlUmVmPERhdGU+IHwgc3RyaW5nPjtcbiAgQElucHV0KCkgc2VsZWN0ZWRWYWx1ZTogQ2FuZHlEYXRlW107IC8vIFJhbmdlIE9OTFlcbiAgQElucHV0KCkgaG92ZXJWYWx1ZTogQ2FuZHlEYXRlW107IC8vIFJhbmdlIE9OTFlcblxuICBASW5wdXQoKSBwYW5lbE1vZGU6IFBhbmVsTW9kZTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHBhbmVsTW9kZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8UGFuZWxNb2RlPigpO1xuXG4gIEBJbnB1dCgpIHZhbHVlOiBDYW5keURhdGU7XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IGhlYWRlckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpOyAvLyBFbWl0dGVkIHdoZW4gdXNlciBjaGFuZ2VkIHRoZSBoZWFkZXIncyB2YWx1ZVxuICBAT3V0cHV0KCkgcmVhZG9ubHkgc2VsZWN0RGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpOyAvLyBFbWl0dGVkIHdoZW4gdGhlIGRhdGUgaXMgc2VsZWN0ZWQgYnkgY2xpY2sgdGhlIGRhdGUgcGFuZWxcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHNlbGVjdFRpbWUgPSBuZXcgRXZlbnRFbWl0dGVyPENhbmR5RGF0ZT4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGRheUhvdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5keURhdGU+KCk7IC8vIEVtaXR0ZWQgd2hlbiBob3ZlciBvbiBhIGRheSBieSBtb3VzZSBlbnRlclxuXG4gIHByZWZpeENsczogc3RyaW5nID0gJ2FudC1jYWxlbmRhcic7XG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMudmFsdWUgJiYgIXRoaXMudmFsdWUpIHtcbiAgICAgIHRoaXMudmFsdWUgPSBuZXcgQ2FuZHlEYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgb25TZWxlY3RUaW1lKGRhdGU6IERhdGUpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdFRpbWUuZW1pdChuZXcgQ2FuZHlEYXRlKGRhdGUpKTtcbiAgfVxuXG4gIC8vIFRoZSB2YWx1ZSByZWFsIGNoYW5nZWQgdG8gb3V0c2lkZVxuICBvblNlbGVjdERhdGUoZGF0ZTogQ2FuZHlEYXRlIHwgRGF0ZSk6IHZvaWQge1xuICAgIGNvbnN0IHZhbHVlID0gZGF0ZSBpbnN0YW5jZW9mIENhbmR5RGF0ZSA/IGRhdGUgOiBuZXcgQ2FuZHlEYXRlKGRhdGUpO1xuICAgIHRoaXMuc2VsZWN0RGF0ZS5lbWl0KHZhbHVlKTtcbiAgfVxufVxuIl19