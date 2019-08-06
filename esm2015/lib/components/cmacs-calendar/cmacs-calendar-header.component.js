/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { setMonth } from 'date-fns';
import { DateHelperService, NzI18nService as I18n } from 'ng-zorro-antd/i18n';
export class CmacsCalendarHeaderComponent {
    /**
     * @param {?} i18n
     * @param {?} dateHelper
     */
    constructor(i18n, dateHelper) {
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
    /**
     * @param {?} value
     * @return {?}
     */
    set activeDate(value) {
        this._activeDate = value;
        this.setUpYears();
    }
    /**
     * @return {?}
     */
    get activeDate() {
        return this._activeDate;
    }
    /**
     * @return {?}
     */
    get activeYear() {
        return this.activeDate.getFullYear();
    }
    /**
     * @return {?}
     */
    get activeMonth() {
        return this.activeDate.getMonth();
    }
    /**
     * @return {?}
     */
    get size() {
        return this.fullscreen ? 'default' : 'small';
    }
    /**
     * @return {?}
     */
    get yearTypeText() {
        return this.i18n.getLocale().Calendar.year;
    }
    /**
     * @return {?}
     */
    get monthTypeText() {
        return this.i18n.getLocale().Calendar.month;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setUpYears();
        this.setUpMonths();
    }
    /**
     * @param {?} year
     * @return {?}
     */
    updateYear(year) {
        this.yearChange.emit(year);
        this.setUpYears(year);
    }
    /**
     * @private
     * @param {?=} year
     * @return {?}
     */
    setUpYears(year) {
        /** @type {?} */
        const start = (year || this.activeYear) - this.yearOffset;
        /** @type {?} */
        const end = start + this.yearTotal;
        this.years = [];
        for (let i = start; i < end; i++) {
            this.years.push({ label: `${i}`, value: i });
        }
    }
    /**
     * @private
     * @return {?}
     */
    setUpMonths() {
        this.months = [];
        for (let i = 0; i < 12; i++) {
            /** @type {?} */
            const dateInMonth = setMonth(this.activeDate, i);
            /** @type {?} */
            const monthText = this.dateHelper.format(dateInMonth, 'MMM');
            this.months.push({ label: monthText, value: i });
        }
    }
}
CmacsCalendarHeaderComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'cmacs-calendar-header',
                exportAs: 'cmacsCalendarHeader',
                template: "<nz-select class=\"ant-fullcalendar-year-select\" [nzSize]=\"size\" [nzDropdownMatchSelectWidth]=\"false\"\r\n           [ngModel]=\"activeYear\" (ngModelChange)=\"updateYear($event)\">\r\n  <nz-option *ngFor=\"let year of years\" [nzLabel]=\"year.label\" [nzValue]=\"year.value\"></nz-option>\r\n</nz-select>\r\n\r\n<nz-select *ngIf=\"mode === 'month'\" class=\"ant-fullcalendar-month-select\" [nzSize]=\"size\" [nzDropdownMatchSelectWidth]=\"false\"\r\n           [ngModel]=\"activeMonth\" (ngModelChange)=\"monthChange.emit($event)\">\r\n  <nz-option *ngFor=\"let month of months\" [nzLabel]=\"month.label\" [nzValue]=\"month.value\"></nz-option>\r\n</nz-select>\r\n\r\n<nz-radio-group [(ngModel)]=\"mode\" (ngModelChange)=\"modeChange.emit($event)\" [nzSize]=\"size\">\r\n  <label nz-radio-button nzValue=\"month\">{{ monthTypeText }}</label>\r\n  <label nz-radio-button nzValue=\"year\">{{ yearTypeText }}</label>\r\n</nz-radio-group>",
                host: {
                    '[style.display]': `'block'`,
                    '[class.ant-fullcalendar-header]': `true`
                }
            }] }
];
/** @nocollapse */
CmacsCalendarHeaderComponent.ctorParameters = () => [
    { type: I18n },
    { type: DateHelperService }
];
CmacsCalendarHeaderComponent.propDecorators = {
    mode: [{ type: Input }],
    modeChange: [{ type: Output }],
    fullscreen: [{ type: Input }],
    activeDate: [{ type: Input }],
    yearChange: [{ type: Output }],
    monthChange: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY2FsZW5kYXItaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtY2FsZW5kYXIvY21hY3MtY2FsZW5kYXItaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUNILHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBQ04saUJBQWlCLEVBQ3BCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFcEMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGFBQWEsSUFBSSxJQUFJLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQWE5RSxNQUFNLE9BQU8sNEJBQTRCOzs7OztJQTZDckMsWUFBb0IsSUFBVSxFQUFVLFVBQTZCO1FBQWpELFNBQUksR0FBSixJQUFJLENBQU07UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFtQjtRQTVDNUQsU0FBSSxHQUFxQixPQUFPLENBQUM7UUFDdkIsZUFBVSxHQUFtQyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTFFLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFZUixlQUFVLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDdEQsZ0JBQVcsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUUxRSxnQkFBVyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDekIsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUN4QixjQUFTLEdBQVcsRUFBRSxDQUFDO0lBd0JpRCxDQUFDOzs7OztJQXZDekUsSUFDSSxVQUFVLENBQUMsS0FBVztRQUN0QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7OztJQUVELElB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QTBFOztJQUUxRSxtREFBeUI7O0lBQ3pCLGtEQUF3Qjs7SUFDeEIsaURBQXVCOztJQUN2Qiw2Q0FBK0M7O0lBQy9DLDhDQUFnRDs7Ozs7SUFzQnBDLDRDQUFrQjs7Ozs7SUFBRSxrREFBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHtcclxuICAgIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgRXZlbnRFbWl0dGVyLFxyXG4gICAgSW5wdXQsXHJcbiAgICBPbkluaXQsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBzZXRNb250aCB9IGZyb20gJ2RhdGUtZm5zJztcclxuXHJcbmltcG9ydCB7IERhdGVIZWxwZXJTZXJ2aWNlLCBOekkxOG5TZXJ2aWNlIGFzIEkxOG4gfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG4gXHJcbkBDb21wb25lbnQoe1xyXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gICAgc2VsZWN0b3I6ICdjbWFjcy1jYWxlbmRhci1oZWFkZXInLFxyXG4gICAgZXhwb3J0QXM6ICdjbWFjc0NhbGVuZGFySGVhZGVyJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1jYWxlbmRhci1oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgaG9zdDoge1xyXG4gICAgICAgICdbc3R5bGUuZGlzcGxheV0nOiBgJ2Jsb2NrJ2AsXHJcbiAgICAgICAgJ1tjbGFzcy5hbnQtZnVsbGNhbGVuZGFyLWhlYWRlcl0nOiBgdHJ1ZWBcclxuICAgIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzQ2FsZW5kYXJIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgQElucHV0KCkgbW9kZTogJ21vbnRoJyB8ICd5ZWFyJyA9ICdtb250aCc7XHJcbiAgICBAT3V0cHV0KCkgcmVhZG9ubHkgbW9kZUNoYW5nZTogRXZlbnRFbWl0dGVyPCdtb250aCcgfCAneWVhcic+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIEBJbnB1dCgpIGZ1bGxzY3JlZW4gPSB0cnVlO1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBzZXQgYWN0aXZlRGF0ZSh2YWx1ZTogRGF0ZSkge1xyXG4gICAgICAgIHRoaXMuX2FjdGl2ZURhdGUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnNldFVwWWVhcnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYWN0aXZlRGF0ZSgpOiBEYXRlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYWN0aXZlRGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBAT3V0cHV0KCkgcmVhZG9ubHkgeWVhckNoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgICBAT3V0cHV0KCkgcmVhZG9ubHkgbW9udGhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAgIF9hY3RpdmVEYXRlID0gbmV3IERhdGUoKTtcclxuICAgIHllYXJPZmZzZXQ6IG51bWJlciA9IDEwO1xyXG4gICAgeWVhclRvdGFsOiBudW1iZXIgPSAyMDtcclxuICAgIHllYXJzOiBBcnJheTx7IGxhYmVsOiBzdHJpbmc7IHZhbHVlOiBudW1iZXIgfT47XHJcbiAgICBtb250aHM6IEFycmF5PHsgbGFiZWw6IHN0cmluZzsgdmFsdWU6IG51bWJlciB9PjtcclxuXHJcbiAgICBnZXQgYWN0aXZlWWVhcigpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFjdGl2ZURhdGUuZ2V0RnVsbFllYXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgYWN0aXZlTW9udGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hY3RpdmVEYXRlLmdldE1vbnRoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNpemUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5mdWxsc2NyZWVuID8gJ2RlZmF1bHQnIDogJ3NtYWxsJztcclxuICAgIH1cclxuXHJcbiAgICBnZXQgeWVhclR5cGVUZXh0KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaTE4bi5nZXRMb2NhbGUoKS5DYWxlbmRhci55ZWFyO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBtb250aFR5cGVUZXh0KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaTE4bi5nZXRMb2NhbGUoKS5DYWxlbmRhci5tb250aDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGkxOG46IEkxOG4sIHByaXZhdGUgZGF0ZUhlbHBlcjogRGF0ZUhlbHBlclNlcnZpY2UpIHt9XHJcblxyXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zZXRVcFllYXJzKCk7XHJcbiAgICAgICAgdGhpcy5zZXRVcE1vbnRocygpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVllYXIoeWVhcjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy55ZWFyQ2hhbmdlLmVtaXQoeWVhcik7XHJcbiAgICAgICAgdGhpcy5zZXRVcFllYXJzKHllYXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0VXBZZWFycyh5ZWFyPzogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgc3RhcnQgPSAoeWVhciB8fCB0aGlzLmFjdGl2ZVllYXIpIC0gdGhpcy55ZWFyT2Zmc2V0O1xyXG4gICAgICAgIGNvbnN0IGVuZCA9IHN0YXJ0ICsgdGhpcy55ZWFyVG90YWw7XHJcblxyXG4gICAgICAgIHRoaXMueWVhcnMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnQ7IGkgPCBlbmQ7IGkrKykge1xyXG4gICAgICAgIHRoaXMueWVhcnMucHVzaCh7IGxhYmVsOiBgJHtpfWAsIHZhbHVlOiBpIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldFVwTW9udGhzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMubW9udGhzID0gW107XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTI7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGRhdGVJbk1vbnRoID0gc2V0TW9udGgodGhpcy5hY3RpdmVEYXRlLCBpKTtcclxuICAgICAgICBjb25zdCBtb250aFRleHQgPSB0aGlzLmRhdGVIZWxwZXIuZm9ybWF0KGRhdGVJbk1vbnRoLCAnTU1NJyk7XHJcbiAgICAgICAgdGhpcy5tb250aHMucHVzaCh7IGxhYmVsOiBtb250aFRleHQsIHZhbHVlOiBpIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=