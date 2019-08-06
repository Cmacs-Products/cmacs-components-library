/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { setMonth } from 'date-fns';
import { DateHelperService, NzI18nService as I18n } from 'ng-zorro-antd/i18n';
var CmacsCalendarHeaderComponent = /** @class */ (function () {
    function CmacsCalendarHeaderComponent(i18n, dateHelper) {
        this.i18n = i18n;
        this.dateHelper = dateHelper;
        this.mode = 'month';
        this.modeChange = new EventEmitter();
        this.fullscreen = true;
        this.yearChange = new EventEmitter();
        this.monthChange = new EventEmitter();
        this._activeDate = new Date();
        this.yearOffset = 10;
        this.yearTotal = 20;
    }
    Object.defineProperty(CmacsCalendarHeaderComponent.prototype, "activeDate", {
        get: /**
         * @return {?}
         */
        function () {
            return this._activeDate;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._activeDate = value;
            this.setUpYears();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsCalendarHeaderComponent.prototype, "activeYear", {
        get: /**
         * @return {?}
         */
        function () {
            return this.activeDate.getFullYear();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsCalendarHeaderComponent.prototype, "activeMonth", {
        get: /**
         * @return {?}
         */
        function () {
            return this.activeDate.getMonth();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsCalendarHeaderComponent.prototype, "size", {
        get: /**
         * @return {?}
         */
        function () {
            return this.fullscreen ? 'default' : 'small';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsCalendarHeaderComponent.prototype, "yearTypeText", {
        get: /**
         * @return {?}
         */
        function () {
            return this.i18n.getLocale().Calendar.year;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsCalendarHeaderComponent.prototype, "monthTypeText", {
        get: /**
         * @return {?}
         */
        function () {
            return this.i18n.getLocale().Calendar.month;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CmacsCalendarHeaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setUpYears();
        this.setUpMonths();
    };
    /**
     * @param {?} year
     * @return {?}
     */
    CmacsCalendarHeaderComponent.prototype.updateYear = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        this.yearChange.emit(year);
        this.setUpYears(year);
    };
    /**
     * @private
     * @param {?=} year
     * @return {?}
     */
    CmacsCalendarHeaderComponent.prototype.setUpYears = /**
     * @private
     * @param {?=} year
     * @return {?}
     */
    function (year) {
        /** @type {?} */
        var start = (year || this.activeYear) - this.yearOffset;
        /** @type {?} */
        var end = start + this.yearTotal;
        this.years = [];
        for (var i = start; i < end; i++) {
            this.years.push({ label: "" + i, value: i });
        }
    };
    /**
     * @private
     * @return {?}
     */
    CmacsCalendarHeaderComponent.prototype.setUpMonths = /**
     * @private
     * @return {?}
     */
    function () {
        this.months = [];
        for (var i = 0; i < 12; i++) {
            /** @type {?} */
            var dateInMonth = setMonth(this.activeDate, i);
            /** @type {?} */
            var monthText = this.dateHelper.format(dateInMonth, 'MMM');
            this.months.push({ label: monthText, value: i });
        }
    };
    CmacsCalendarHeaderComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'cmacs-calendar-header',
                    exportAs: 'cmacsCalendarHeader',
                    template: "<nz-select class=\"ant-fullcalendar-year-select\" [nzSize]=\"size\" [nzDropdownMatchSelectWidth]=\"false\"\r\n           [ngModel]=\"activeYear\" (ngModelChange)=\"updateYear($event)\">\r\n  <nz-option *ngFor=\"let year of years\" [nzLabel]=\"year.label\" [nzValue]=\"year.value\"></nz-option>\r\n</nz-select>\r\n\r\n<nz-select *ngIf=\"mode === 'month'\" class=\"ant-fullcalendar-month-select\" [nzSize]=\"size\" [nzDropdownMatchSelectWidth]=\"false\"\r\n           [ngModel]=\"activeMonth\" (ngModelChange)=\"monthChange.emit($event)\">\r\n  <nz-option *ngFor=\"let month of months\" [nzLabel]=\"month.label\" [nzValue]=\"month.value\"></nz-option>\r\n</nz-select>\r\n\r\n<nz-radio-group [(ngModel)]=\"mode\" (ngModelChange)=\"modeChange.emit($event)\" [nzSize]=\"size\">\r\n  <label nz-radio-button nzValue=\"month\">{{ monthTypeText }}</label>\r\n  <label nz-radio-button nzValue=\"year\">{{ yearTypeText }}</label>\r\n</nz-radio-group>",
                    host: {
                        '[style.display]': "'block'",
                        '[class.ant-fullcalendar-header]': "true"
                    }
                }] }
    ];
    /** @nocollapse */
    CmacsCalendarHeaderComponent.ctorParameters = function () { return [
        { type: I18n },
        { type: DateHelperService }
    ]; };
    CmacsCalendarHeaderComponent.propDecorators = {
        mode: [{ type: Input }],
        modeChange: [{ type: Output }],
        fullscreen: [{ type: Input }],
        activeDate: [{ type: Input }],
        yearChange: [{ type: Output }],
        monthChange: [{ type: Output }]
    };
    return CmacsCalendarHeaderComponent;
}());
export { CmacsCalendarHeaderComponent };
if (false) {
    /** @type {?} */
    CmacsCalendarHeaderComponent.prototype.mode;
    /** @type {?} */
    CmacsCalendarHeaderComponent.prototype.modeChange;
    /** @type {?} */
    CmacsCalendarHeaderComponent.prototype.fullscreen;
    /** @type {?} */
    CmacsCalendarHeaderComponent.prototype.yearChange;
    /** @type {?} */
    CmacsCalendarHeaderComponent.prototype.monthChange;
    /** @type {?} */
    CmacsCalendarHeaderComponent.prototype._activeDate;
    /** @type {?} */
    CmacsCalendarHeaderComponent.prototype.yearOffset;
    /** @type {?} */
    CmacsCalendarHeaderComponent.prototype.yearTotal;
    /** @type {?} */
    CmacsCalendarHeaderComponent.prototype.years;
    /** @type {?} */
    CmacsCalendarHeaderComponent.prototype.months;
    /**
     * @type {?}
     * @private
     */
    CmacsCalendarHeaderComponent.prototype.i18n;
    /**
     * @type {?}
     * @private
     */
    CmacsCalendarHeaderComponent.prototype.dateHelper;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY2FsZW5kYXItaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtY2FsZW5kYXIvY21hY3MtY2FsZW5kYXItaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUNILHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBQ04saUJBQWlCLEVBQ3BCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFcEMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGFBQWEsSUFBSSxJQUFJLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUU5RTtJQXdESSxzQ0FBb0IsSUFBVSxFQUFVLFVBQTZCO1FBQWpELFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFtQjtRQTVDNUQsU0FBSSxHQUFxQixPQUFPLENBQUM7UUFDdkIsZUFBVSxHQUFtQyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTFFLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFZUixlQUFVLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdEQsZ0JBQVcsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUxRSxnQkFBVyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDekIsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUN4QixjQUFTLEdBQVcsRUFBRSxDQUFDO0lBd0JpRCxDQUFDO0lBdkN6RSxzQkFDSSxvREFBVTs7OztRQUtkO1lBQ0ksT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVCLENBQUM7Ozs7O1FBUkQsVUFDZSxLQUFXO1lBQ3RCLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxV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Szs2QkFVTCxNQUFNOzhCQUNOLE1BQU07O0lBMkRYLG1DQUFDO0NBQUEsQUF2RkQsSUF1RkM7U0E1RVksNEJBQTRCOzs7SUFDckMsNENBQTBDOztJQUMxQyxrREFBbUY7O0lBRW5GLGtEQUEyQjs7SUFZM0Isa0RBQXlFOztJQUN6RSxtREFBMEU7O0lBRTFFLG1EQUF5Qjs7SUFDekIsa0RBQXdCOztJQUN4QixpREFBdUI7O0lBQ3ZCLDZDQUErQzs7SUFDL0MsOENBQWdEOzs7OztJQXNCcEMsNENBQWtCOzs7OztJQUFFLGtEQUFxQyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQge1xyXG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBJbnB1dCxcclxuICAgIE9uSW5pdCxcclxuICAgIE91dHB1dCxcclxuICAgIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHNldE1vbnRoIH0gZnJvbSAnZGF0ZS1mbnMnO1xyXG5cclxuaW1wb3J0IHsgRGF0ZUhlbHBlclNlcnZpY2UsIE56STE4blNlcnZpY2UgYXMgSTE4biB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcbiBcclxuQENvbXBvbmVudCh7XHJcbiAgICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgICBzZWxlY3RvcjogJ2NtYWNzLWNhbGVuZGFyLWhlYWRlcicsXHJcbiAgICBleHBvcnRBczogJ2NtYWNzQ2FsZW5kYXJIZWFkZXInLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLWNhbGVuZGFyLWhlYWRlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBob3N0OiB7XHJcbiAgICAgICAgJ1tzdHlsZS5kaXNwbGF5XSc6IGAnYmxvY2snYCxcclxuICAgICAgICAnW2NsYXNzLmFudC1mdWxsY2FsZW5kYXItaGVhZGVyXSc6IGB0cnVlYFxyXG4gICAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NDYWxlbmRhckhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgICBASW5wdXQoKSBtb2RlOiAnbW9udGgnIHwgJ3llYXInID0gJ21vbnRoJztcclxuICAgIEBPdXRwdXQoKSByZWFkb25seSBtb2RlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8J21vbnRoJyB8ICd5ZWFyJz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgQElucHV0KCkgZnVsbHNjcmVlbiA9IHRydWU7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHNldCBhY3RpdmVEYXRlKHZhbHVlOiBEYXRlKSB7XHJcbiAgICAgICAgdGhpcy5fYWN0aXZlRGF0ZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuc2V0VXBZZWFycygpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBhY3RpdmVEYXRlKCk6IERhdGUge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hY3RpdmVEYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIEBPdXRwdXQoKSByZWFkb25seSB5ZWFyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAgIEBPdXRwdXQoKSByZWFkb25seSBtb250aENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgX2FjdGl2ZURhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgeWVhck9mZnNldDogbnVtYmVyID0gMTA7XHJcbiAgICB5ZWFyVG90YWw6IG51bWJlciA9IDIwO1xyXG4gICAgeWVhcnM6IEFycmF5PHsgbGFiZWw6IHN0cmluZzsgdmFsdWU6IG51bWJlciB9PjtcclxuICAgIG1vbnRoczogQXJyYXk8eyBsYWJlbDogc3RyaW5nOyB2YWx1ZTogbnVtYmVyIH0+O1xyXG5cclxuICAgIGdldCBhY3RpdmVZZWFyKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0aXZlRGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBhY3RpdmVNb250aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFjdGl2ZURhdGUuZ2V0TW9udGgoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc2l6ZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZ1bGxzY3JlZW4gPyAnZGVmYXVsdCcgOiAnc21hbGwnO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCB5ZWFyVHlwZVRleHQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pMThuLmdldExvY2FsZSgpLkNhbGVuZGFyLnllYXI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1vbnRoVHlwZVRleHQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pMThuLmdldExvY2FsZSgpLkNhbGVuZGFyLm1vbnRoO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaTE4bjogSTE4biwgcHJpdmF0ZSBkYXRlSGVscGVyOiBEYXRlSGVscGVyU2VydmljZSkge31cclxuXHJcbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNldFVwWWVhcnMoKTtcclxuICAgICAgICB0aGlzLnNldFVwTW9udGhzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlWWVhcih5ZWFyOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnllYXJDaGFuZ2UuZW1pdCh5ZWFyKTtcclxuICAgICAgICB0aGlzLnNldFVwWWVhcnMoeWVhcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRVcFllYXJzKHllYXI/OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBzdGFydCA9ICh5ZWFyIHx8IHRoaXMuYWN0aXZlWWVhcikgLSB0aGlzLnllYXJPZmZzZXQ7XHJcbiAgICAgICAgY29uc3QgZW5kID0gc3RhcnQgKyB0aGlzLnllYXJUb3RhbDtcclxuXHJcbiAgICAgICAgdGhpcy55ZWFycyA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydDsgaSA8IGVuZDsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy55ZWFycy5wdXNoKHsgbGFiZWw6IGAke2l9YCwgdmFsdWU6IGkgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0VXBNb250aHMoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5tb250aHMgPSBbXTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMjsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgZGF0ZUluTW9udGggPSBzZXRNb250aCh0aGlzLmFjdGl2ZURhdGUsIGkpO1xyXG4gICAgICAgIGNvbnN0IG1vbnRoVGV4dCA9IHRoaXMuZGF0ZUhlbHBlci5mb3JtYXQoZGF0ZUluTW9udGgsICdNTU0nKTtcclxuICAgICAgICB0aGlzLm1vbnRocy5wdXNoKHsgbGFiZWw6IG1vbnRoVGV4dCwgdmFsdWU6IGkgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==