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
import { DateHelperService } from 'ng-zorro-antd/i18n';
import { CandyDate } from '../candy-date/candy-date';
export class CalendarHeaderComponent {
    // Indicate whether should change to month panel when current is year panel (if referer=month, it should show month panel when choosed a year)
    /**
     * @param {?} dateHelper
     */
    constructor(dateHelper) {
        this.dateHelper = dateHelper;
        this.enablePrev = true;
        this.enableNext = true;
        this.showTimePicker = false;
        this.valueChange = new EventEmitter();
        this.panelModeChange = new EventEmitter();
        this.chooseDecade = new EventEmitter();
        this.chooseYear = new EventEmitter();
        this.chooseMonth = new EventEmitter();
        this.prefixCls = 'ant-calendar';
        this.yearToMonth = false; // Indicate whether should change to month panel when current is year panel (if referer=month, it should show month panel when choosed a year)
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.value) {
            this.value = new CandyDate(); // Show today by default
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.value || changes.showTimePicker || changes.panelMode) {
            this.render();
        }
    }
    /**
     * @return {?}
     */
    previousYear() {
        this.gotoYear(-1);
    }
    /**
     * @return {?}
     */
    nextYear() {
        this.gotoYear(1);
    }
    /**
     * @return {?}
     */
    previousMonth() {
        this.gotoMonth(-1);
    }
    /**
     * @return {?}
     */
    nextMonth() {
        this.gotoMonth(1);
    }
    /**
     * @param {?} mode
     * @param {?=} value
     * @return {?}
     */
    changePanel(mode, value) {
        this.panelModeChange.emit(mode);
        if (value) {
            this.changeValueFromInside(value);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onChooseDecade(value) {
        this.changePanel('year', value);
        this.chooseDecade.emit(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onChooseYear(value) {
        this.changePanel(this.yearToMonth ? 'month' : 'date', value);
        this.yearToMonth = false; // Clear
        this.chooseYear.emit(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onChooseMonth(value) {
        this.changePanel('date', value);
        this.yearToMonth = false; // Clear
        this.chooseMonth.emit(value);
    }
    /**
     * @return {?}
     */
    changeToMonthPanel() {
        this.changePanel('month');
        this.yearToMonth = true;
    }
    /**
     * @private
     * @return {?}
     */
    render() {
        if (this.value) {
            this.yearMonthDaySelectors = this.createYearMonthDaySelectors();
        }
    }
    /**
     * @private
     * @param {?} amount
     * @return {?}
     */
    gotoMonth(amount) {
        this.changeValueFromInside(this.value.addMonths(amount));
    }
    /**
     * @private
     * @param {?} amount
     * @return {?}
     */
    gotoYear(amount) {
        this.changeValueFromInside(this.value.addYears(amount));
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    changeValueFromInside(value) {
        if (this.value !== value) {
            this.value = value;
            this.valueChange.emit(this.value);
            this.render();
        }
    }
    /**
     * @private
     * @param {?} localeFormat
     * @return {?}
     */
    formatDateTime(localeFormat) {
        return this.dateHelper.format(this.value.nativeDate, localeFormat);
    }
    /**
     * @private
     * @return {?}
     */
    createYearMonthDaySelectors() {
        /** @type {?} */
        let year;
        /** @type {?} */
        let month;
        /** @type {?} */
        let day;
        // NOTE: Compat for DatePipe formatting rules
        /** @type {?} */
        let yearFormat = this.locale.yearFormat;
        if (this.dateHelper.relyOnDatePipe) {
            yearFormat = ((/** @type {?} */ (this.dateHelper))).transCompatFormat(yearFormat);
        }
        year = {
            className: `${this.prefixCls}-year-select`,
            title: this.locale.yearSelect,
            onClick: (/**
             * @return {?}
             */
            () => (this.showTimePicker ? null : this.changePanel('year'))),
            label: this.formatDateTime(yearFormat)
        };
        month = {
            className: `${this.prefixCls}-month-select`,
            title: this.locale.monthSelect,
            onClick: (/**
             * @return {?}
             */
            () => (this.showTimePicker ? null : this.changeToMonthPanel())),
            label: this.formatDateTime(this.locale.monthFormat || 'MMM')
        };
        // NOTE: Compat for DatePipe formatting rules
        /** @type {?} */
        let dayFormat = this.locale.dayFormat;
        if (this.dateHelper.relyOnDatePipe) {
            dayFormat = ((/** @type {?} */ (this.dateHelper))).transCompatFormat(dayFormat);
        }
        if (this.showTimePicker) {
            day = {
                className: `${this.prefixCls}-day-select`,
                label: this.formatDateTime(dayFormat)
            };
        }
        /** @type {?} */
        let result;
        if (this.locale.monthBeforeYear) {
            result = [month, (/** @type {?} */ (day)), year];
        }
        else {
            result = [year, month, (/** @type {?} */ (day))];
        }
        return result.filter((/**
         * @param {?} selector
         * @return {?}
         */
        selector => !!selector));
    }
}
CalendarHeaderComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'calendar-header',
                exportAs: 'calendarHeader',
                template: "<div class=\"{{ prefixCls }}-header\">\r\n  <div style=\"position: relative;\">\r\n    <a *ngIf=\"enablePrev && !showTimePicker\"\r\n      class=\"{{ prefixCls }}-prev-year-btn\"\r\n      role=\"button\"\r\n      (click)=\"previousYear()\"\r\n      title=\"{{ locale.previousYear }}\"\r\n    ></a>\r\n    <a *ngIf=\"enablePrev && !showTimePicker\"\r\n      class=\"{{ prefixCls }}-prev-month-btn\"\r\n      role=\"button\"\r\n      (click)=\"previousMonth()\"\r\n      title=\"{{ locale.previousMonth }}\"\r\n    ></a>\r\n\r\n    <span class=\"{{ prefixCls }}-{{ locale.monthBeforeYear ? 'my-select' : 'ym-select' }}\">\r\n      <ng-container *ngFor=\"let selector of yearMonthDaySelectors\">\r\n        <a class=\"{{ selector.className }}\"\r\n          role=\"button\"\r\n          (click)=\"selector.onClick ? selector.onClick() : null\"\r\n          title=\"{{ selector.title || null }}\"\r\n        >\r\n          {{ selector.label }}\r\n        </a>\r\n      </ng-container>\r\n    </span>\r\n\r\n    <a *ngIf=\"enableNext && !showTimePicker\"\r\n      class=\"{{ prefixCls }}-next-month-btn\"\r\n      role=\"button\"\r\n      (click)=\"nextMonth()\"\r\n      title=\"{{ locale.nextMonth }}\"\r\n    ></a>\r\n    <a *ngIf=\"enableNext && !showTimePicker\"\r\n      class=\"{{ prefixCls }}-next-year-btn\"\r\n      role=\"button\"\r\n      (click)=\"nextYear()\"\r\n      title=\"{{ locale.nextYear }}\"\r\n    ></a>\r\n  </div>\r\n\r\n  <ng-container [ngSwitch]=\"panelMode\">\r\n    <ng-container *ngSwitchCase=\"'decade'\">\r\n      <decade-panel\r\n        [locale]=\"locale\"\r\n        [value]=\"value\"\r\n        (valueChange)=\"onChooseDecade($event)\"\r\n      ></decade-panel>\r\n    </ng-container>\r\n    <ng-container *ngSwitchCase=\"'year'\">\r\n      <year-panel\r\n        [locale]=\"locale\"\r\n        [value]=\"value\"\r\n        [disabledDate]=\"disabledYear\"\r\n        (valueChange)=\"onChooseYear($event)\"\r\n        (decadePanelShow)=\"changePanel('decade')\"\r\n      ></year-panel>\r\n    </ng-container>\r\n    <ng-container *ngSwitchCase=\"'month'\">\r\n      <month-panel\r\n        [locale]=\"locale\"\r\n        [value]=\"value\"\r\n        [disabledDate]=\"disabledMonth\"\r\n        (valueChange)=\"onChooseMonth($event)\"\r\n        (yearPanelShow)=\"changePanel('year')\"\r\n      ></month-panel>\r\n    </ng-container>\r\n  </ng-container>\r\n</div>"
            }] }
];
/** @nocollapse */
CalendarHeaderComponent.ctorParameters = () => [
    { type: DateHelperService }
];
CalendarHeaderComponent.propDecorators = {
    locale: [{ type: Input }],
    enablePrev: [{ type: Input }],
    enableNext: [{ type: Input }],
    disabledMonth: [{ type: Input }],
    disabledYear: [{ type: Input }],
    showTimePicker: [{ type: Input }],
    value: [{ type: Input }],
    valueChange: [{ type: Output }],
    panelMode: [{ type: Input }],
    panelModeChange: [{ type: Output }],
    chooseDecade: [{ type: Output }],
    chooseYear: [{ type: Output }],
    chooseMonth: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    CalendarHeaderComponent.prototype.locale;
    /** @type {?} */
    CalendarHeaderComponent.prototype.enablePrev;
    /** @type {?} */
    CalendarHeaderComponent.prototype.enableNext;
    /** @type {?} */
    CalendarHeaderComponent.prototype.disabledMonth;
    /** @type {?} */
    CalendarHeaderComponent.prototype.disabledYear;
    /** @type {?} */
    CalendarHeaderComponent.prototype.showTimePicker;
    /** @type {?} */
    CalendarHeaderComponent.prototype.value;
    /** @type {?} */
    CalendarHeaderComponent.prototype.valueChange;
    /** @type {?} */
    CalendarHeaderComponent.prototype.panelMode;
    /** @type {?} */
    CalendarHeaderComponent.prototype.panelModeChange;
    /** @type {?} */
    CalendarHeaderComponent.prototype.chooseDecade;
    /** @type {?} */
    CalendarHeaderComponent.prototype.chooseYear;
    /** @type {?} */
    CalendarHeaderComponent.prototype.chooseMonth;
    /** @type {?} */
    CalendarHeaderComponent.prototype.prefixCls;
    /** @type {?} */
    CalendarHeaderComponent.prototype.yearMonthDaySelectors;
    /**
     * @type {?}
     * @private
     */
    CalendarHeaderComponent.prototype.yearToMonth;
    /**
     * @type {?}
     * @private
     */
    CalendarHeaderComponent.prototype.dateHelper;
}
/**
 * @record
 */
export function YearMonthDaySelector() { }
if (false) {
    /** @type {?} */
    YearMonthDaySelector.prototype.className;
    /** @type {?|undefined} */
    YearMonthDaySelector.prototype.title;
    /** @type {?} */
    YearMonthDaySelector.prototype.label;
    /**
     * @return {?}
     */
    YearMonthDaySelector.prototype.onClick = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtZGF0ZS1waWNrZXIvbGliL2NhbGVuZGFyL2NhbGVuZGFyLWhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFFTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBMkIsTUFBTSxvQkFBb0IsQ0FBQztBQUd0RyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFVckQsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7SUF1QmxDLFlBQW9CLFVBQTZCO1FBQTdCLGVBQVUsR0FBVixVQUFVLENBQW1CO1FBckJ4QyxlQUFVLEdBQVksSUFBSSxDQUFDO1FBQzNCLGVBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFHdEIsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO1FBRzVDLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQztRQUVoRCxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7UUFDN0MsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7UUFDM0MsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO1FBRS9ELGNBQVMsR0FBVyxjQUFjLENBQUM7UUFHM0IsZ0JBQVcsR0FBWSxLQUFLLENBQUMsQ0FBQyw4SUFBOEk7SUFFaEksQ0FBQzs7OztJQUVyRCxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDZixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksU0FBUyxF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LEtBQUs7NkJBQ0wsS0FBSztvQkFFTCxLQUFLOzBCQUNMLE1BQU07d0JBRU4sS0FBSzs4QkFDTCxNQUFNOzJCQUVOLE1BQU07eUJBQ04sTUFBTTswQkFDTixNQUFNOzs7O0lBZlAseUNBQXlDOztJQUN6Qyw2Q0FBb0M7O0lBQ3BDLDZDQUFvQzs7SUFDcEMsZ0RBQWdEOztJQUNoRCwrQ0FBK0M7O0lBQy9DLGlEQUF5Qzs7SUFFekMsd0NBQTBCOztJQUMxQiw4Q0FBK0Q7O0lBRS9ELDRDQUE4Qjs7SUFDOUIsa0RBQW1FOztJQUVuRSwrQ0FBZ0U7O0lBQ2hFLDZDQUE4RDs7SUFDOUQsOENBQStEOztJQUUvRCw0Q0FBbUM7O0lBQ25DLHdEQUE4Qzs7Ozs7SUFFOUMsOENBQXFDOzs7OztJQUV6Qiw2Q0FBcUM7Ozs7O0FBcUluRCwwQ0FLQzs7O0lBSkMseUNBQWtCOztJQUNsQixxQ0FBZTs7SUFDZixxQ0FBYzs7OztJQUNkLHlEQUFpQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IERhdGVIZWxwZXJCeURhdGVQaXBlLCBEYXRlSGVscGVyU2VydmljZSwgTnpDYWxlbmRhckkxOG5JbnRlcmZhY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5cclxuaW1wb3J0IHsgUGFuZWxNb2RlIH0gZnJvbSAnLi4vLi4vc3RhbmRhcmQtdHlwZXMnO1xyXG5pbXBvcnQgeyBDYW5keURhdGUgfSBmcm9tICcuLi9jYW5keS1kYXRlL2NhbmR5LWRhdGUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdjYWxlbmRhci1oZWFkZXInLFxyXG4gIGV4cG9ydEFzOiAnY2FsZW5kYXJIZWFkZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnY2FsZW5kYXItaGVhZGVyLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgbG9jYWxlOiBOekNhbGVuZGFySTE4bkludGVyZmFjZTtcclxuICBASW5wdXQoKSBlbmFibGVQcmV2OiBib29sZWFuID0gdHJ1ZTtcclxuICBASW5wdXQoKSBlbmFibGVOZXh0OiBib29sZWFuID0gdHJ1ZTtcclxuICBASW5wdXQoKSBkaXNhYmxlZE1vbnRoOiAoZGF0ZTogRGF0ZSkgPT4gYm9vbGVhbjtcclxuICBASW5wdXQoKSBkaXNhYmxlZFllYXI6IChkYXRlOiBEYXRlKSA9PiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHNob3dUaW1lUGlja2VyOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpIHZhbHVlOiBDYW5keURhdGU7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5keURhdGU+KCk7XHJcblxyXG4gIEBJbnB1dCgpIHBhbmVsTW9kZTogUGFuZWxNb2RlO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBwYW5lbE1vZGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFBhbmVsTW9kZT4oKTtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNob29zZURlY2FkZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBjaG9vc2VZZWFyID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5keURhdGU+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNob29zZU1vbnRoID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5keURhdGU+KCk7XHJcblxyXG4gIHByZWZpeENsczogc3RyaW5nID0gJ2FudC1jYWxlbmRhcic7XHJcbiAgeWVhck1vbnRoRGF5U2VsZWN0b3JzOiBZZWFyTW9udGhEYXlTZWxlY3RvcltdO1xyXG5cclxuICBwcml2YXRlIHllYXJUb01vbnRoOiBib29sZWFuID0gZmFsc2U7IC8vIEluZGljYXRlIHdoZXRoZXIgc2hvdWxkIGNoYW5nZSB0byBtb250aCBwYW5lbCB3aGVuIGN1cnJlbnQgaXMgeWVhciBwYW5lbCAoaWYgcmVmZXJlcj1tb250aCwgaXQgc2hvdWxkIHNob3cgbW9udGggcGFuZWwgd2hlbiBjaG9vc2VkIGEgeWVhcilcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBkYXRlSGVscGVyOiBEYXRlSGVscGVyU2VydmljZSkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMudmFsdWUpIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IG5ldyBDYW5keURhdGUoKTsgLy8gU2hvdyB0b2RheSBieSBkZWZhdWx0XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy52YWx1ZSB8fCBjaGFuZ2VzLnNob3dUaW1lUGlja2VyIHx8IGNoYW5nZXMucGFuZWxNb2RlKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcmV2aW91c1llYXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLmdvdG9ZZWFyKC0xKTtcclxuICB9XHJcblxyXG4gIG5leHRZZWFyKCk6IHZvaWQge1xyXG4gICAgdGhpcy5nb3RvWWVhcigxKTtcclxuICB9XHJcblxyXG4gIHByZXZpb3VzTW9udGgoKTogdm9pZCB7XHJcbiAgICB0aGlzLmdvdG9Nb250aCgtMSk7XHJcbiAgfVxyXG5cclxuICBuZXh0TW9udGgoKTogdm9pZCB7XHJcbiAgICB0aGlzLmdvdG9Nb250aCgxKTtcclxuICB9XHJcblxyXG4gIGNoYW5nZVBhbmVsKG1vZGU6IFBhbmVsTW9kZSwgdmFsdWU/OiBDYW5keURhdGUpOiB2b2lkIHtcclxuICAgIHRoaXMucGFuZWxNb2RlQ2hhbmdlLmVtaXQobW9kZSk7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgdGhpcy5jaGFuZ2VWYWx1ZUZyb21JbnNpZGUodmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DaG9vc2VEZWNhZGUodmFsdWU6IENhbmR5RGF0ZSk6IHZvaWQge1xyXG4gICAgdGhpcy5jaGFuZ2VQYW5lbCgneWVhcicsIHZhbHVlKTtcclxuICAgIHRoaXMuY2hvb3NlRGVjYWRlLmVtaXQodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgb25DaG9vc2VZZWFyKHZhbHVlOiBDYW5keURhdGUpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hhbmdlUGFuZWwodGhpcy55ZWFyVG9Nb250aCA/ICdtb250aCcgOiAnZGF0ZScsIHZhbHVlKTtcclxuICAgIHRoaXMueWVhclRvTW9udGggPSBmYWxzZTsgLy8gQ2xlYXJcclxuICAgIHRoaXMuY2hvb3NlWWVhci5lbWl0KHZhbHVlKTtcclxuICB9XHJcblxyXG4gIG9uQ2hvb3NlTW9udGgodmFsdWU6IENhbmR5RGF0ZSk6IHZvaWQge1xyXG4gICAgdGhpcy5jaGFuZ2VQYW5lbCgnZGF0ZScsIHZhbHVlKTtcclxuICAgIHRoaXMueWVhclRvTW9udGggPSBmYWxzZTsgLy8gQ2xlYXJcclxuICAgIHRoaXMuY2hvb3NlTW9udGguZW1pdCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VUb01vbnRoUGFuZWwoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoYW5nZVBhbmVsKCdtb250aCcpO1xyXG4gICAgdGhpcy55ZWFyVG9Nb250aCA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlcigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnZhbHVlKSB7XHJcbiAgICAgIHRoaXMueWVhck1vbnRoRGF5U2VsZWN0b3JzID0gdGhpcy5jcmVhdGVZZWFyTW9udGhEYXlTZWxlY3RvcnMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ290b01vbnRoKGFtb3VudDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoYW5nZVZhbHVlRnJvbUluc2lkZSh0aGlzLnZhbHVlLmFkZE1vbnRocyhhbW91bnQpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ290b1llYXIoYW1vdW50OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hhbmdlVmFsdWVGcm9tSW5zaWRlKHRoaXMudmFsdWUuYWRkWWVhcnMoYW1vdW50KSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNoYW5nZVZhbHVlRnJvbUluc2lkZSh2YWx1ZTogQ2FuZHlEYXRlKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy52YWx1ZSAhPT0gdmFsdWUpIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XHJcbiAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZvcm1hdERhdGVUaW1lKGxvY2FsZUZvcm1hdDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmRhdGVIZWxwZXIuZm9ybWF0KHRoaXMudmFsdWUubmF0aXZlRGF0ZSwgbG9jYWxlRm9ybWF0KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY3JlYXRlWWVhck1vbnRoRGF5U2VsZWN0b3JzKCk6IFllYXJNb250aERheVNlbGVjdG9yW10ge1xyXG4gICAgbGV0IHllYXI6IFllYXJNb250aERheVNlbGVjdG9yO1xyXG4gICAgbGV0IG1vbnRoOiBZZWFyTW9udGhEYXlTZWxlY3RvcjtcclxuICAgIGxldCBkYXk6IFllYXJNb250aERheVNlbGVjdG9yO1xyXG5cclxuICAgIC8vIE5PVEU6IENvbXBhdCBmb3IgRGF0ZVBpcGUgZm9ybWF0dGluZyBydWxlc1xyXG4gICAgbGV0IHllYXJGb3JtYXQ6IHN0cmluZyA9IHRoaXMubG9jYWxlLnllYXJGb3JtYXQ7XHJcbiAgICBpZiAodGhpcy5kYXRlSGVscGVyLnJlbHlPbkRhdGVQaXBlKSB7XHJcbiAgICAgIHllYXJGb3JtYXQgPSAodGhpcy5kYXRlSGVscGVyIGFzIERhdGVIZWxwZXJCeURhdGVQaXBlKS50cmFuc0NvbXBhdEZvcm1hdCh5ZWFyRm9ybWF0KTtcclxuICAgIH1cclxuICAgIHllYXIgPSB7XHJcbiAgICAgIGNsYXNzTmFtZTogYCR7dGhpcy5wcmVmaXhDbHN9LXllYXItc2VsZWN0YCxcclxuICAgICAgdGl0bGU6IHRoaXMubG9jYWxlLnllYXJTZWxlY3QsXHJcbiAgICAgIG9uQ2xpY2s6ICgpID0+ICh0aGlzLnNob3dUaW1lUGlja2VyID8gbnVsbCA6IHRoaXMuY2hhbmdlUGFuZWwoJ3llYXInKSksXHJcbiAgICAgIGxhYmVsOiB0aGlzLmZvcm1hdERhdGVUaW1lKHllYXJGb3JtYXQpXHJcbiAgICB9O1xyXG5cclxuICAgIG1vbnRoID0ge1xyXG4gICAgICBjbGFzc05hbWU6IGAke3RoaXMucHJlZml4Q2xzfS1tb250aC1zZWxlY3RgLFxyXG4gICAgICB0aXRsZTogdGhpcy5sb2NhbGUubW9udGhTZWxlY3QsXHJcbiAgICAgIG9uQ2xpY2s6ICgpID0+ICh0aGlzLnNob3dUaW1lUGlja2VyID8gbnVsbCA6IHRoaXMuY2hhbmdlVG9Nb250aFBhbmVsKCkpLFxyXG4gICAgICBsYWJlbDogdGhpcy5mb3JtYXREYXRlVGltZSh0aGlzLmxvY2FsZS5tb250aEZvcm1hdCB8fCAnTU1NJylcclxuICAgIH07XHJcblxyXG4gICAgLy8gTk9URTogQ29tcGF0IGZvciBEYXRlUGlwZSBmb3JtYXR0aW5nIHJ1bGVzXHJcbiAgICBsZXQgZGF5Rm9ybWF0OiBzdHJpbmcgPSB0aGlzLmxvY2FsZS5kYXlGb3JtYXQ7XHJcbiAgICBpZiAodGhpcy5kYXRlSGVscGVyLnJlbHlPbkRhdGVQaXBlKSB7XHJcbiAgICAgIGRheUZvcm1hdCA9ICh0aGlzLmRhdGVIZWxwZXIgYXMgRGF0ZUhlbHBlckJ5RGF0ZVBpcGUpLnRyYW5zQ29tcGF0Rm9ybWF0KGRheUZvcm1hdCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5zaG93VGltZVBpY2tlcikge1xyXG4gICAgICBkYXkgPSB7XHJcbiAgICAgICAgY2xhc3NOYW1lOiBgJHt0aGlzLnByZWZpeENsc30tZGF5LXNlbGVjdGAsXHJcbiAgICAgICAgbGFiZWw6IHRoaXMuZm9ybWF0RGF0ZVRpbWUoZGF5Rm9ybWF0KVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGxldCByZXN1bHQ6IFllYXJNb250aERheVNlbGVjdG9yW107XHJcblxyXG4gICAgaWYgKHRoaXMubG9jYWxlLm1vbnRoQmVmb3JlWWVhcikge1xyXG4gICAgICByZXN1bHQgPSBbbW9udGgsIGRheSEsIHllYXJdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmVzdWx0ID0gW3llYXIsIG1vbnRoLCBkYXkhXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcmVzdWx0LmZpbHRlcihzZWxlY3RvciA9PiAhIXNlbGVjdG9yKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgWWVhck1vbnRoRGF5U2VsZWN0b3Ige1xyXG4gIGNsYXNzTmFtZTogc3RyaW5nO1xyXG4gIHRpdGxlPzogc3RyaW5nO1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgb25DbGljaz8oKTogdm9pZDtcclxufVxyXG4iXX0=