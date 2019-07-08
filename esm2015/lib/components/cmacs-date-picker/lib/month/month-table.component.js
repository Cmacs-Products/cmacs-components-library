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
/** @type {?} */
const MAX_ROW = 4;
/** @type {?} */
const MAX_COL = 3;
export class MonthTableComponent {
    /**
     * @param {?} dateHelper
     */
    constructor(dateHelper) {
        this.dateHelper = dateHelper;
        this.valueChange = new EventEmitter();
        this.prefixCls = 'ant-calendar-month-panel';
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
        if (changes.value || changes.disabledDate) {
            this.render();
        }
    }
    /**
     * @param {?} _index
     * @param {?} monthData
     * @return {?}
     */
    trackPanelMonth(_index, monthData) {
        return monthData.month;
    }
    /**
     * @private
     * @return {?}
     */
    render() {
        if (this.value) {
            this.panelMonths = this.makePanelMonths();
        }
    }
    /**
     * @private
     * @return {?}
     */
    makePanelMonths() {
        /** @type {?} */
        const months = [];
        /** @type {?} */
        const currentMonth = this.value.getMonth();
        /** @type {?} */
        const today = new CandyDate();
        /** @type {?} */
        let monthValue = 0;
        for (let rowIndex = 0; rowIndex < MAX_ROW; rowIndex++) {
            months[rowIndex] = [];
            for (let colIndex = 0; colIndex < MAX_COL; colIndex++) {
                /** @type {?} */
                const month = this.value.setMonth(monthValue);
                /** @type {?} */
                const disabled = this.disabledDate ? this.disabledDate(this.value.setMonth(monthValue).nativeDate) : false;
                /** @type {?} */
                const content = this.dateHelper.format(month.nativeDate, 'MMM');
                /** @type {?} */
                const cell = (months[rowIndex][colIndex] = {
                    disabled,
                    content,
                    month: monthValue,
                    title: content,
                    classMap: null,
                    onClick: (/**
                     * @return {?}
                     */
                    () => this.chooseMonth(cell.month))
                });
                cell.classMap = {
                    [`${this.prefixCls}-cell`]: true,
                    [`${this.prefixCls}-cell-disabled`]: disabled,
                    [`${this.prefixCls}-selected-cell`]: cell.month === currentMonth,
                    [`${this.prefixCls}-current-cell`]: today.getYear() === this.value.getYear() && cell.month === today.getMonth()
                };
                monthValue++;
            }
        }
        return months;
    }
    /**
     * @private
     * @param {?} month
     * @return {?}
     */
    chooseMonth(month) {
        this.value = this.value.setMonth(month);
        this.valueChange.emit(this.value);
        this.render();
    }
}
MonthTableComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'month-table',
                exportAs: 'monthTable',
                template: "<table class=\"{{ prefixCls }}-table\" cellSpacing=\"0\" role=\"grid\">\r\n  <tbody class=\"{{ prefixCls }}-tbody\">\r\n    <tr *ngFor=\"let row of panelMonths\" role=\"row\">\r\n      <td *ngFor=\"let monthCell of row; trackBy: trackPanelMonth\"\r\n        role=\"gridcell\"\r\n        title=\"{{ monthCell.title }}\"\r\n        (click)=\"monthCell.disabled ? null : monthCell.onClick()\"\r\n        [ngClass]=\"monthCell.classMap\"\r\n      >\r\n        <a class=\"{{ prefixCls }}-month\">{{ monthCell.content }}</a>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>"
            }] }
];
/** @nocollapse */
MonthTableComponent.ctorParameters = () => [
    { type: DateHelperService }
];
MonthTableComponent.propDecorators = {
    value: [{ type: Input }],
    valueChange: [{ type: Output }],
    disabledDate: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    MonthTableComponent.prototype.value;
    /** @type {?} */
    MonthTableComponent.prototype.valueChange;
    /** @type {?} */
    MonthTableComponent.prototype.disabledDate;
    /** @type {?} */
    MonthTableComponent.prototype.prefixCls;
    /** @type {?} */
    MonthTableComponent.prototype.panelMonths;
    /**
     * @type {?}
     * @private
     */
    MonthTableComponent.prototype.dateHelper;
}
/**
 * @record
 */
export function PanelMonthData() { }
if (false) {
    /** @type {?} */
    PanelMonthData.prototype.disabled;
    /** @type {?} */
    PanelMonthData.prototype.content;
    /** @type {?} */
    PanelMonthData.prototype.month;
    /** @type {?} */
    PanelMonthData.prototype.title;
    /** @type {?} */
    PanelMonthData.prototype.classMap;
    /** @type {?} */
    PanelMonthData.prototype.onClick;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy1kYXRlLXBpY2tlci9saWIvbW9udGgvbW9udGgtdGFibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBRU4saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7TUFFL0MsT0FBTyxHQUFHLENBQUM7O01BQ1gsT0FBTyxHQUFHLENBQUM7QUFVakIsTUFBTSxPQUFPLG1CQUFtQjs7OztJQVM5QixZQUFvQixVQUE2QjtRQUE3QixlQUFVLEdBQVYsVUFBVSxDQUFtQjtRQVA5QixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7UUFJL0QsY0FBUyxHQUFXLDBCQUEwQixDQUFDO0lBR0ssQ0FBQzs7OztJQUVyRCxRQUFRLEtBQVUsQ0FBQzs7Ozs7SUFFbkIsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUMsWUFBWSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNmO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsZUFBZSxDQUFDLE1BQWMsRUFBRSxTQUF5QjtRQUN2RCxPQUFPLFNBQVMsQ0FBQyxLQUFLLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFTyxNQUFNO1FBQ1osSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FD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OztJQUNsQixpQ0FBZ0I7O0lBQ2hCLCtCQUFjOztJQUNkLCtCQUFjOztJQUNkLGtDQUF3Qjs7SUFDeEIsaUNBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgRGF0ZUhlbHBlclNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5pbXBvcnQgeyBDYW5keURhdGUgfSBmcm9tICcuLi9jYW5keS1kYXRlL2NhbmR5LWRhdGUnO1xyXG5cclxuY29uc3QgTUFYX1JPVyA9IDQ7XHJcbmNvbnN0IE1BWF9DT0wgPSAzO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdtb250aC10YWJsZScsXHJcbiAgZXhwb3J0QXM6ICdtb250aFRhYmxlJyxcclxuICB0ZW1wbGF0ZVVybDogJ21vbnRoLXRhYmxlLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTW9udGhUYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSB2YWx1ZTogQ2FuZHlEYXRlO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpO1xyXG5cclxuICBASW5wdXQoKSBkaXNhYmxlZERhdGU6IChkYXRlOiBEYXRlKSA9PiBib29sZWFuO1xyXG5cclxuICBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbnQtY2FsZW5kYXItbW9udGgtcGFuZWwnO1xyXG4gIHBhbmVsTW9udGhzOiBQYW5lbE1vbnRoRGF0YVtdW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZGF0ZUhlbHBlcjogRGF0ZUhlbHBlclNlcnZpY2UpIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMudmFsdWUgfHwgY2hhbmdlcy5kaXNhYmxlZERhdGUpIHtcclxuICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRyYWNrUGFuZWxNb250aChfaW5kZXg6IG51bWJlciwgbW9udGhEYXRhOiBQYW5lbE1vbnRoRGF0YSk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gbW9udGhEYXRhLm1vbnRoO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW5kZXIoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy52YWx1ZSkge1xyXG4gICAgICB0aGlzLnBhbmVsTW9udGhzID0gdGhpcy5tYWtlUGFuZWxNb250aHMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgbWFrZVBhbmVsTW9udGhzKCk6IFBhbmVsTW9udGhEYXRhW11bXSB7XHJcbiAgICBjb25zdCBtb250aHM6IFBhbmVsTW9udGhEYXRhW11bXSA9IFtdO1xyXG4gICAgY29uc3QgY3VycmVudE1vbnRoID0gdGhpcy52YWx1ZS5nZXRNb250aCgpO1xyXG4gICAgY29uc3QgdG9kYXkgPSBuZXcgQ2FuZHlEYXRlKCk7XHJcblxyXG4gICAgbGV0IG1vbnRoVmFsdWUgPSAwO1xyXG4gICAgZm9yIChsZXQgcm93SW5kZXggPSAwOyByb3dJbmRleCA8IE1BWF9ST1c7IHJvd0luZGV4KyspIHtcclxuICAgICAgbW9udGhzW3Jvd0luZGV4XSA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBjb2xJbmRleCA9IDA7IGNvbEluZGV4IDwgTUFYX0NPTDsgY29sSW5kZXgrKykge1xyXG4gICAgICAgIGNvbnN0IG1vbnRoID0gdGhpcy52YWx1ZS5zZXRNb250aChtb250aFZhbHVlKTtcclxuICAgICAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWREYXRlID8gdGhpcy5kaXNhYmxlZERhdGUodGhpcy52YWx1ZS5zZXRNb250aChtb250aFZhbHVlKS5uYXRpdmVEYXRlKSA6IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmRhdGVIZWxwZXIuZm9ybWF0KG1vbnRoLm5hdGl2ZURhdGUsICdNTU0nKTtcclxuXHJcbiAgICAgICAgY29uc3QgY2VsbDogUGFuZWxNb250aERhdGEgPSAobW9udGhzW3Jvd0luZGV4XVtjb2xJbmRleF0gPSB7XHJcbiAgICAgICAgICBkaXNhYmxlZCxcclxuICAgICAgICAgIGNvbnRlbnQsXHJcbiAgICAgICAgICBtb250aDogbW9udGhWYWx1ZSxcclxuICAgICAgICAgIHRpdGxlOiBjb250ZW50LFxyXG4gICAgICAgICAgY2xhc3NNYXA6IG51bGwsXHJcbiAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB0aGlzLmNob29zZU1vbnRoKGNlbGwubW9udGgpXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNlbGwuY2xhc3NNYXAgPSB7XHJcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWNlbGxgXTogdHJ1ZSxcclxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tY2VsbC1kaXNhYmxlZGBdOiBkaXNhYmxlZCxcclxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tc2VsZWN0ZWQtY2VsbGBdOiBjZWxsLm1vbnRoID09PSBjdXJyZW50TW9udGgsXHJcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWN1cnJlbnQtY2VsbGBdOlxyXG4gICAgICAgICAgICB0b2RheS5nZXRZZWFyKCkgPT09IHRoaXMudmFsdWUuZ2V0WWVhcigpICYmIGNlbGwubW9udGggPT09IHRvZGF5LmdldE1vbnRoKClcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBtb250aFZhbHVlKys7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBtb250aHM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNob29zZU1vbnRoKG1vbnRoOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlLnNldE1vbnRoKG1vbnRoKTtcclxuICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTtcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBhbmVsTW9udGhEYXRhIHtcclxuICBkaXNhYmxlZDogYm9vbGVhbjtcclxuICBjb250ZW50OiBzdHJpbmc7XHJcbiAgbW9udGg6IG51bWJlcjtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGNsYXNzTWFwOiBvYmplY3QgfCBudWxsO1xyXG4gIG9uQ2xpY2s6IFZvaWRGdW5jdGlvbiB8IG51bGw7XHJcbn1cclxuIl19