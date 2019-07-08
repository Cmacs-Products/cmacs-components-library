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
/** @type {?} */
var MAX_ROW = 4;
/** @type {?} */
var MAX_COL = 3;
var YearPanelComponent = /** @class */ (function () {
    function YearPanelComponent() {
        this.valueChange = new EventEmitter();
        this.decadePanelShow = new EventEmitter();
        this.prefixCls = 'ant-calendar-year-panel';
    }
    Object.defineProperty(YearPanelComponent.prototype, "currentYear", {
        get: /**
         * @return {?}
         */
        function () {
            return this.value.getYear();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(YearPanelComponent.prototype, "startYear", {
        get: /**
         * @return {?}
         */
        function () {
            return parseInt("" + this.currentYear / 10, 10) * 10;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(YearPanelComponent.prototype, "endYear", {
        get: /**
         * @return {?}
         */
        function () {
            return this.startYear + 9;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    YearPanelComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.value || changes.disabledDate) {
            this.render();
        }
    };
    /**
     * @return {?}
     */
    YearPanelComponent.prototype.previousDecade = /**
     * @return {?}
     */
    function () {
        this.gotoYear(-10);
    };
    /**
     * @return {?}
     */
    YearPanelComponent.prototype.nextDecade = /**
     * @return {?}
     */
    function () {
        this.gotoYear(10);
    };
    /**
     * @param {?} _index
     * @param {?} yearData
     * @return {?}
     */
    YearPanelComponent.prototype.trackPanelYear = /**
     * @param {?} _index
     * @param {?} yearData
     * @return {?}
     */
    function (_index, yearData) {
        return yearData.content;
    };
    /**
     * @private
     * @return {?}
     */
    YearPanelComponent.prototype.render = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.value) {
            this.panelYears = this.makePanelYears();
        }
    };
    // Re-render panel content by the header's buttons (NOTE: Do not try to trigger final value change)
    // Re-render panel content by the header's buttons (NOTE: Do not try to trigger final value change)
    /**
     * @private
     * @param {?} amount
     * @return {?}
     */
    YearPanelComponent.prototype.gotoYear = 
    // Re-render panel content by the header's buttons (NOTE: Do not try to trigger final value change)
    /**
     * @private
     * @param {?} amount
     * @return {?}
     */
    function (amount) {
        this.value = this.value.addYears(amount);
        // this.valueChange.emit(this.value); // Do not trigger final value change
        this.render();
    };
    /**
     * @private
     * @param {?} year
     * @return {?}
     */
    YearPanelComponent.prototype.chooseYear = /**
     * @private
     * @param {?} year
     * @return {?}
     */
    function (year) {
        this.value = this.value.setYear(year);
        this.valueChange.emit(this.value);
        this.render();
    };
    /**
     * @private
     * @return {?}
     */
    YearPanelComponent.prototype.makePanelYears = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var years = [];
        /** @type {?} */
        var currentYear = this.currentYear;
        /** @type {?} */
        var startYear = this.startYear;
        /** @type {?} */
        var endYear = this.endYear;
        /** @type {?} */
        var previousYear = startYear - 1;
        /** @type {?} */
        var index = 0;
        for (var rowIndex = 0; rowIndex < MAX_ROW; rowIndex++) {
            years[rowIndex] = [];
            var _loop_1 = function (colIndex) {
                var _a;
                /** @type {?} */
                var year = previousYear + index;
                /** @type {?} */
                var content = String(year);
                /** @type {?} */
                var disabled = this_1.disabledDate ? this_1.disabledDate(this_1.value.setYear(year).nativeDate) : false;
                /** @type {?} */
                var cell = (years[rowIndex][colIndex] = {
                    disabled: disabled,
                    content: content,
                    year: year,
                    title: content,
                    isCurrent: year === currentYear,
                    isLowerThanStart: year < startYear,
                    isBiggerThanEnd: year > endYear,
                    classMap: null,
                    onClick: null
                });
                cell.classMap = (_a = {},
                    _a[this_1.prefixCls + "-cell"] = true,
                    _a[this_1.prefixCls + "-selected-cell"] = cell.isCurrent,
                    _a[this_1.prefixCls + "-cell-disabled"] = disabled,
                    _a[this_1.prefixCls + "-last-decade-cell"] = cell.isLowerThanStart,
                    _a[this_1.prefixCls + "-next-decade-cell"] = cell.isBiggerThanEnd,
                    _a);
                if (cell.isLowerThanStart) {
                    cell.onClick = (/**
                     * @return {?}
                     */
                    function () { return _this.previousDecade(); });
                }
                else if (cell.isBiggerThanEnd) {
                    cell.onClick = (/**
                     * @return {?}
                     */
                    function () { return _this.nextDecade(); });
                }
                else {
                    cell.onClick = (/**
                     * @return {?}
                     */
                    function () { return _this.chooseYear(cell.year); });
                }
                index++;
            };
            var this_1 = this;
            for (var colIndex = 0; colIndex < MAX_COL; colIndex++) {
                _loop_1(colIndex);
            }
        }
        return years;
    };
    YearPanelComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    // tslint:disable-next-line:component-selector
                    selector: 'year-panel',
                    exportAs: 'yearPanel',
                    template: "<div class=\"{{ prefixCls }}\">\r\n  <div>\r\n    <div class=\"{{ prefixCls }}-header\">\r\n      <a\r\n        class=\"{{ prefixCls }}-prev-decade-btn\"\r\n        role=\"button\"\r\n        (click)=\"previousDecade()\"\r\n        title=\"{{ locale.previousDecade }}\"\r\n      ></a>\r\n      <a\r\n        class=\"{{ prefixCls }}-decade-select\"\r\n        role=\"button\"\r\n        (click)=\"decadePanelShow.emit()\"\r\n        title=\"{{ locale.decadeSelect }}\"\r\n      >\r\n        <span class=\"{{ prefixCls }}-decade-select-content\">\r\n          {{ startYear }}-{{ endYear }}\r\n        </span>\r\n        <span class=\"{{ prefixCls }}-decade-select-arrow\">x</span>\r\n      </a>\r\n\r\n      <a class=\"{{ prefixCls }}-next-decade-btn\" (click)=\"nextDecade()\" title=\"{{ locale.nextDecade }}\" role=\"button\"></a>\r\n    </div>\r\n    <div class=\"{{ prefixCls }}-body\">\r\n      <table class=\"{{ prefixCls }}-table\" cellSpacing=\"0\" role=\"grid\">\r\n        <tbody class=\"{{ prefixCls }}-tbody\">\r\n          <tr *ngFor=\"let row of panelYears\" role=\"row\">\r\n            <td *ngFor=\"let yearCell of row; trackBy: trackPanelYear\"\r\n              role=\"gridcell\"\r\n              title=\"{{ yearCell.title }}\"\r\n              (click)=\"yearCell.disabled ? null : yearCell.onClick()\"\r\n              [ngClass]=\"yearCell.classMap\"\r\n            >\r\n              <a class=\"{{ prefixCls }}-year\">{{ yearCell.content }}</a>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</div>",
                    styles: [
                        // Support disabledDate
                        "\n      .ant-calendar-year-panel-cell-disabled .ant-calendar-year-panel-year,\n      .ant-calendar-year-panel-cell-disabled .ant-calendar-year-panel-year:hover {\n        color: rgba(0, 0, 0, 0.25);\n        background: #f5f5f5;\n        cursor: not-allowed;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    YearPanelComponent.ctorParameters = function () { return []; };
    YearPanelComponent.propDecorators = {
        locale: [{ type: Input }],
        value: [{ type: Input }],
        valueChange: [{ type: Output }],
        disabledDate: [{ type: Input }],
        decadePanelShow: [{ type: Output }]
    };
    return YearPanelComponent;
}());
export { YearPanelComponent };
if (false) {
    /** @type {?} */
    YearPanelComponent.prototype.locale;
    /** @type {?} */
    YearPanelComponent.prototype.value;
    /** @type {?} */
    YearPanelComponent.prototype.valueChange;
    /** @type {?} */
    YearPanelComponent.prototype.disabledDate;
    /** @type {?} */
    YearPanelComponent.prototype.decadePanelShow;
    /** @type {?} */
    YearPanelComponent.prototype.prefixCls;
    /** @type {?} */
    YearPanelComponent.prototype.panelYears;
}
/**
 * @record
 */
export function PanelYearData() { }
if (false) {
    /** @type {?} */
    PanelYearData.prototype.disabled;
    /** @type {?} */
    PanelYearData.prototype.content;
    /** @type {?} */
    PanelYearData.prototype.year;
    /** @type {?} */
    PanelYearData.prototype.title;
    /** @type {?} */
    PanelYearData.prototype.isCurrent;
    /** @type {?} */
    PanelYearData.prototype.isLowerThanStart;
    /** @type {?} */
    PanelYearData.prototype.isBiggerThanEnd;
    /** @type {?} */
    PanelYearData.prototype.classMap;
    /** @type {?} */
    PanelYearData.prototype.onClick;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVhci1wYW5lbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLWRhdGUtcGlja2VyL2xpYi95ZWFyL3llYXItcGFuZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBRU4saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBSXZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQzs7SUFFL0MsT0FBTyxHQUFHLENBQUM7O0lBQ1gsT0FBTyxHQUFHLENBQUM7QUFFakI7SUEwQ0U7UUFuQm1CLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQWEsQ0FBQztRQUk1QyxvQkFBZSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFZOUQsY0FBUyxHQUFXLHlCQUF5QixDQUFDO0lBRy9CLENBQUM7SUFiaEIsc0JBQUksMkNBQVc7Ozs7UUFBZjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM5QixDQUFDOzs7T0FBQTtJQUNELHNCQUFJLHlDQUFTOzs7O1FBQWI7WUFDRSxPQUFPLFFBQVEsQ0FBQyxLQUFHLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBSSxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUN2RCxDQUFDOzs7T0FBQTtJQUNELHNCQUFJLHVDQUFPOzs7O1FBQVg7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLENBQUM7OztPQUFBOzs7OztJQU9ELHdDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLFlBQVksRUFBRTtZQUN6QyxJQUFJ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QUE4RDs7SUFZOUQsdUNBQThDOztJQUM5Qyx3Q0FBOEI7Ozs7O0FBMEZoQyxtQ0FVQzs7O0lBVEMsaUNBQWtCOztJQUNsQixnQ0FBZ0I7O0lBQ2hCLDZCQUFhOztJQUNiLDhCQUFjOztJQUNkLGtDQUFtQjs7SUFDbkIseUNBQTBCOztJQUMxQix3Q0FBeUI7O0lBQ3pCLGlDQUF3Qjs7SUFDeEIsZ0NBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE91dHB1dCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOekNhbGVuZGFySTE4bkludGVyZmFjZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcblxyXG5pbXBvcnQgeyBDYW5keURhdGUgfSBmcm9tICcuLi9jYW5keS1kYXRlL2NhbmR5LWRhdGUnO1xyXG5cclxuY29uc3QgTUFYX1JPVyA9IDQ7XHJcbmNvbnN0IE1BWF9DT0wgPSAzO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICd5ZWFyLXBhbmVsJyxcclxuICBleHBvcnRBczogJ3llYXJQYW5lbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICd5ZWFyLXBhbmVsLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZXM6IFtcclxuICAgIC8vIFN1cHBvcnQgZGlzYWJsZWREYXRlXHJcbiAgICBgXHJcbiAgICAgIC5hbnQtY2FsZW5kYXIteWVhci1wYW5lbC1jZWxsLWRpc2FibGVkIC5hbnQtY2FsZW5kYXIteWVhci1wYW5lbC15ZWFyLFxyXG4gICAgICAuYW50LWNhbGVuZGFyLXllYXItcGFuZWwtY2VsbC1kaXNhYmxlZCAuYW50LWNhbGVuZGFyLXllYXItcGFuZWwteWVhcjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgWWVhclBhbmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBsb2NhbGU6IE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlO1xyXG5cclxuICBASW5wdXQoKSB2YWx1ZTogQ2FuZHlEYXRlO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpO1xyXG5cclxuICBASW5wdXQoKSBkaXNhYmxlZERhdGU6IChkYXRlOiBEYXRlKSA9PiBib29sZWFuO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgZGVjYWRlUGFuZWxTaG93ID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICBnZXQgY3VycmVudFllYXIoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLnZhbHVlLmdldFllYXIoKTtcclxuICB9XHJcbiAgZ2V0IHN0YXJ0WWVhcigpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHBhcnNlSW50KGAke3RoaXMuY3VycmVudFllYXIgLyAxMH1gLCAxMCkgKiAxMDtcclxuICB9XHJcbiAgZ2V0IGVuZFllYXIoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLnN0YXJ0WWVhciArIDk7XHJcbiAgfVxyXG5cclxuICBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbnQtY2FsZW5kYXIteWVhci1wYW5lbCc7XHJcbiAgcGFuZWxZZWFyczogUGFuZWxZZWFyRGF0YVtdW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMudmFsdWUgfHwgY2hhbmdlcy5kaXNhYmxlZERhdGUpIHtcclxuICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByZXZpb3VzRGVjYWRlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5nb3RvWWVhcigtMTApO1xyXG4gIH1cclxuXHJcbiAgbmV4dERlY2FkZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZ290b1llYXIoMTApO1xyXG4gIH1cclxuXHJcbiAgdHJhY2tQYW5lbFllYXIoX2luZGV4OiBudW1iZXIsIHllYXJEYXRhOiBQYW5lbFllYXJEYXRhKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB5ZWFyRGF0YS5jb250ZW50O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW5kZXIoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy52YWx1ZSkge1xyXG4gICAgICB0aGlzLnBhbmVsWWVhcnMgPSB0aGlzLm1ha2VQYW5lbFllYXJzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBSZS1yZW5kZXIgcGFuZWwgY29udGVudCBieSB0aGUgaGVhZGVyJ3MgYnV0dG9ucyAoTk9URTogRG8gbm90IHRyeSB0byB0cmlnZ2VyIGZpbmFsIHZhbHVlIGNoYW5nZSlcclxuICBwcml2YXRlIGdvdG9ZZWFyKGFtb3VudDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLnZhbHVlID0gdGhpcy52YWx1ZS5hZGRZZWFycyhhbW91bnQpO1xyXG4gICAgLy8gdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMudmFsdWUpOyAvLyBEbyBub3QgdHJpZ2dlciBmaW5hbCB2YWx1ZSBjaGFuZ2VcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNob29zZVllYXIoeWVhcjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLnZhbHVlID0gdGhpcy52YWx1ZS5zZXRZZWFyKHllYXIpO1xyXG4gICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbWFrZVBhbmVsWWVhcnMoKTogUGFuZWxZZWFyRGF0YVtdW10ge1xyXG4gICAgY29uc3QgeWVhcnM6IFBhbmVsWWVhckRhdGFbXVtdID0gW107XHJcbiAgICBjb25zdCBjdXJyZW50WWVhciA9IHRoaXMuY3VycmVudFllYXI7XHJcbiAgICBjb25zdCBzdGFydFllYXIgPSB0aGlzLnN0YXJ0WWVhcjtcclxuICAgIGNvbnN0IGVuZFllYXIgPSB0aGlzLmVuZFllYXI7XHJcbiAgICBjb25zdCBwcmV2aW91c1llYXIgPSBzdGFydFllYXIgLSAxO1xyXG4gICAgbGV0IGluZGV4ID0gMDtcclxuICAgIGZvciAobGV0IHJvd0luZGV4ID0gMDsgcm93SW5kZXggPCBNQVhfUk9XOyByb3dJbmRleCsrKSB7XHJcbiAgICAgIHllYXJzW3Jvd0luZGV4XSA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBjb2xJbmRleCA9IDA7IGNvbEluZGV4IDwgTUFYX0NPTDsgY29sSW5kZXgrKykge1xyXG4gICAgICAgIGNvbnN0IHllYXIgPSBwcmV2aW91c1llYXIgKyBpbmRleDtcclxuICAgICAgICBjb25zdCBjb250ZW50ID0gU3RyaW5nKHllYXIpO1xyXG4gICAgICAgIGNvbnN0IGRpc2FibGVkID0gdGhpcy5kaXNhYmxlZERhdGUgPyB0aGlzLmRpc2FibGVkRGF0ZSh0aGlzLnZhbHVlLnNldFllYXIoeWVhcikubmF0aXZlRGF0ZSkgOiBmYWxzZTtcclxuXHJcbiAgICAgICAgY29uc3QgY2VsbDogUGFuZWxZZWFyRGF0YSA9ICh5ZWFyc1tyb3dJbmRleF1bY29sSW5kZXhdID0ge1xyXG4gICAgICAgICAgZGlzYWJsZWQsXHJcbiAgICAgICAgICBjb250ZW50LFxyXG4gICAgICAgICAgeWVhcixcclxuICAgICAgICAgIHRpdGxlOiBjb250ZW50LFxyXG4gICAgICAgICAgaXNDdXJyZW50OiB5ZWFyID09PSBjdXJyZW50WWVhcixcclxuICAgICAgICAgIGlzTG93ZXJUaGFuU3RhcnQ6IHllYXIgPCBzdGFydFllYXIsXHJcbiAgICAgICAgICBpc0JpZ2dlclRoYW5FbmQ6IHllYXIgPiBlbmRZZWFyLFxyXG4gICAgICAgICAgY2xhc3NNYXA6IG51bGwsXHJcbiAgICAgICAgICBvbkNsaWNrOiBudWxsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNlbGwuY2xhc3NNYXAgPSB7XHJcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWNlbGxgXTogdHJ1ZSxcclxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tc2VsZWN0ZWQtY2VsbGBdOiBjZWxsLmlzQ3VycmVudCxcclxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tY2VsbC1kaXNhYmxlZGBdOiBkaXNhYmxlZCxcclxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbGFzdC1kZWNhZGUtY2VsbGBdOiBjZWxsLmlzTG93ZXJUaGFuU3RhcnQsXHJcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LW5leHQtZGVjYWRlLWNlbGxgXTogY2VsbC5pc0JpZ2dlclRoYW5FbmRcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAoY2VsbC5pc0xvd2VyVGhhblN0YXJ0KSB7XHJcbiAgICAgICAgICBjZWxsLm9uQ2xpY2sgPSAoKSA9PiB0aGlzLnByZXZpb3VzRGVjYWRlKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChjZWxsLmlzQmlnZ2VyVGhhbkVuZCkge1xyXG4gICAgICAgICAgY2VsbC5vbkNsaWNrID0gKCkgPT4gdGhpcy5uZXh0RGVjYWRlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNlbGwub25DbGljayA9ICgpID0+IHRoaXMuY2hvb3NlWWVhcihjZWxsLnllYXIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5kZXgrKztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHllYXJzO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQYW5lbFllYXJEYXRhIHtcclxuICBkaXNhYmxlZDogYm9vbGVhbjtcclxuICBjb250ZW50OiBzdHJpbmc7XHJcbiAgeWVhcjogbnVtYmVyO1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgaXNDdXJyZW50OiBib29sZWFuO1xyXG4gIGlzTG93ZXJUaGFuU3RhcnQ6IGJvb2xlYW47XHJcbiAgaXNCaWdnZXJUaGFuRW5kOiBib29sZWFuO1xyXG4gIGNsYXNzTWFwOiBvYmplY3QgfCBudWxsO1xyXG4gIG9uQ2xpY2s6IFZvaWRGdW5jdGlvbiB8IG51bGw7XHJcbn1cclxuIl19