/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, EventEmitter, HostBinding, Input, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { addDays, differenceInCalendarDays, differenceInCalendarMonths, differenceInCalendarWeeks, endOfMonth, isSameDay, isSameMonth, isSameYear, isThisMonth, isThisYear, setMonth, setYear, startOfMonth, startOfWeek, startOfYear } from 'date-fns';
import { DateHelperService, NzI18nService } from 'ng-zorro-antd/i18n';
import { CmacsDateCellDirective as DateCell, CmacsDateFullCellDirective as DateFullCell, CmacsMonthCellDirective as MonthCell, CmacsMonthFullCellDirective as MonthFullCell } from './cmacs-calendar-cell.directive';
var CmacsCalendarComponent = /** @class */ (function () {
    function CmacsCalendarComponent(i18n, cdr, dateHelper) {
        this.i18n = i18n;
        this.cdr = cdr;
        this.dateHelper = dateHelper;
        this.nzMode = 'month';
        this.nzModeChange = new EventEmitter();
        this.nzPanelChange = new EventEmitter();
        this.nzSelectChange = new EventEmitter();
        this.nzValueChange = new EventEmitter();
        this.fullscreen = true;
        this.daysInWeek = [];
        this.monthsInYear = [];
        this.dateMatrix = [];
        this.activeDate = new Date();
        this.currentDateRow = -1;
        this.currentDateCol = -1;
        this.activeDateRow = -1;
        this.activeDateCol = -1;
        this.currentMonthRow = -1;
        this.currentMonthCol = -1;
        this.activeMonthRow = -1;
        this.activeMonthCol = -1;
        this.dateCell = null;
        this.dateFullCell = null;
        this.monthCell = null;
        this.monthFullCell = null;
        this.currentDate = new Date();
        this.onChangeFn = (/**
         * @return {?}
         */
        function () { });
        this.onTouchFn = (/**
         * @return {?}
         */
        function () { });
    }
    Object.defineProperty(CmacsCalendarComponent.prototype, "nzValue", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.updateDate(value, false);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsCalendarComponent.prototype, "nzDateCell", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.dateCell = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsCalendarComponent.prototype, "nzDateFullCell", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.dateFullCell = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsCalendarComponent.prototype, "nzMonthCell", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.monthCell = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsCalendarComponent.prototype, "nzMonthFullCell", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.monthFullCell = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsCalendarComponent.prototype, "nzFullscreen", {
        get: /**
         * @return {?}
         */
        function () {
            return this.fullscreen;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.fullscreen = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsCalendarComponent.prototype, "nzCard", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.fullscreen;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.fullscreen = !coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsCalendarComponent.prototype, "dateCellChild", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this.dateCell = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsCalendarComponent.prototype, "dateFullCellChild", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this.dateFullCell = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsCalendarComponent.prototype, "monthCellChild", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this.monthCell = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsCalendarComponent.prototype, "monthFullCellChild", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value) {
                this.monthFullCell = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsCalendarComponent.prototype, "calendarStart", {
        get: /**
         * @private
         * @return {?}
         */
        function () {
            return startOfWeek(startOfMonth(this.activeDate), { weekStartsOn: this.dateHelper.getFirstDayOfWeek() });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CmacsCalendarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setUpDaysInWeek();
        this.setUpMonthsInYear();
        this.setUpDateMatrix();
        this.calculateCurrentDate();
        this.calculateActiveDate();
        this.calculateCurrentMonth();
        this.calculateActiveMonth();
    };
    /**
     * @param {?} mode
     * @return {?}
     */
    CmacsCalendarComponent.prototype.onModeChange = /**
     * @param {?} mode
     * @return {?}
     */
    function (mode) {
        this.nzModeChange.emit(mode);
        this.nzPanelChange.emit({ date: this.activeDate, mode: mode });
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CmacsCalendarComponent.prototype.onDateSelect = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        this.updateDate(date);
        this.nzSelectChange.emit(date);
    };
    /**
     * @param {?} year
     * @return {?}
     */
    CmacsCalendarComponent.prototype.onYearSelect = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        /** @type {?} */
        var date = setYear(this.activeDate, year);
        this.updateDate(date);
        this.nzSelectChange.emit(date);
    };
    /**
     * @param {?} month
     * @return {?}
     */
    CmacsCalendarComponent.prototype.onMonthSelect = /**
     * @param {?} month
     * @return {?}
     */
    function (month) {
        /** @type {?} */
        var date = setMonth(this.activeDate, month);
        this.updateDate(date);
        this.nzSelectChange.emit(date);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsCalendarComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.updateDate(value || new Date(), false);
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CmacsCalendarComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChangeFn = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CmacsCalendarComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouchFn = fn;
    };
    /**
     * @private
     * @param {?} date
     * @param {?=} touched
     * @return {?}
     */
    CmacsCalendarComponent.prototype.updateDate = /**
     * @private
     * @param {?} date
     * @param {?=} touched
     * @return {?}
     */
    function (date, touched) {
        if (touched === void 0) { touched = true; }
        /** @type {?} */
        var dayChanged = !isSameDay(date, this.activeDate);
        /** @type {?} */
        var monthChanged = !isSameMonth(date, this.activeDate);
        /** @type {?} */
        var yearChanged = !isSameYear(date, this.activeDate);
        this.activeDate = date;
        if (dayChanged) {
            this.calculateActiveDate();
        }
        if (monthChanged) {
            this.setUpDateMatrix();
            this.calculateCurrentDate();
            this.calculateActiveMonth();
        }
        if (yearChanged) {
            this.calculateCurrentMonth();
        }
        if (touched) {
            this.onChangeFn(date);
            this.onTouchFn();
            this.nzValueChange.emit(date);
        }
    };
    /**
     * @private
     * @return {?}
     */
    CmacsCalendarComponent.prototype.setUpDaysInWeek = /**
     * @private
     * @return {?}
     */
    function () {
        this.daysInWeek = [];
        /** @type {?} */
        var weekStart = startOfWeek(this.activeDate, { weekStartsOn: this.dateHelper.getFirstDayOfWeek() });
        for (var i = 0; i < 7; i++) {
            /** @type {?} */
            var date = addDays(weekStart, i);
            /** @type {?} */
            var title = this.dateHelper.format(date, this.dateHelper.relyOnDatePipe ? 'E' : 'ddd');
            /** @type {?} */
            var label = this.dateHelper.format(date, this.dateHelper.relyOnDatePipe ? 'EEEEEE' : 'dd');
            this.daysInWeek.push({ title: title, label: label });
        }
    };
    /**
     * @private
     * @return {?}
     */
    CmacsCalendarComponent.prototype.setUpMonthsInYear = /**
     * @private
     * @return {?}
     */
    function () {
        this.monthsInYear = [];
        for (var i = 0; i < 12; i++) {
            /** @type {?} */
            var date = setMonth(this.activeDate, i);
            /** @type {?} */
            var title = this.dateHelper.format(date, 'MMM');
            /** @type {?} */
            var label = this.dateHelper.format(date, 'MMM');
            /** @type {?} */
            var start = startOfMonth(date);
            this.monthsInYear.push({ title: title, label: label, start: start });
        }
    };
    /**
     * @private
     * @return {?}
     */
    CmacsCalendarComponent.prototype.setUpDateMatrix = /**
     * @private
     * @return {?}
     */
    function () {
        this.dateMatrix = [];
        /** @type {?} */
        var monthStart = startOfMonth(this.activeDate);
        /** @type {?} */
        var monthEnd = endOfMonth(this.activeDate);
        /** @type {?} */
        var weekDiff = differenceInCalendarWeeks(monthEnd, monthStart, { weekStartsOn: this.dateHelper.getFirstDayOfWeek() }) + 2;
        for (var week = 0; week < weekDiff; week++) {
            /** @type {?} */
            var row = [];
            /** @type {?} */
            var weekStart = addDays(this.calendarStart, week * 7);
            for (var day = 0; day < 7; day++) {
                /** @type {?} */
                var date = addDays(weekStart, day);
                /** @type {?} */
                var monthDiff = differenceInCalendarMonths(date, this.activeDate);
                /** @type {?} */
                var dateFormat = this.dateHelper.relyOnDatePipe
                    ? 'longDate'
                    : this.i18n.getLocaleData('DatePicker.lang.dateFormat', 'YYYY-MM-DD');
                /** @type {?} */
                var title = this.dateHelper.format(date, dateFormat);
                /** @type {?} */
                var label = this.dateHelper.format(date, this.dateHelper.relyOnDatePipe ? 'dd' : 'DD');
                /** @type {?} */
                var rel = monthDiff === 0 ? 'current' : monthDiff < 0 ? 'last' : 'next';
                row.push({ title: title, label: label, rel: rel, value: date });
            }
            this.dateMatrix.push(row);
        }
    };
    /**
     * @private
     * @return {?}
     */
    CmacsCalendarComponent.prototype.calculateCurrentDate = /**
     * @private
     * @return {?}
     */
    function () {
        if (isThisMonth(this.activeDate)) {
            this.currentDateRow = differenceInCalendarWeeks(this.currentDate, this.calendarStart, {
                weekStartsOn: this.dateHelper.getFirstDayOfWeek()
            });
            this.currentDateCol = differenceInCalendarDays(this.currentDate, addDays(this.calendarStart, this.currentDateRow * 7));
        }
        else {
            this.currentDateRow = -1;
            this.currentDateCol = -1;
        }
    };
    /**
     * @private
     * @return {?}
     */
    CmacsCalendarComponent.prototype.calculateActiveDate = /**
     * @private
     * @return {?}
     */
    function () {
        this.activeDateRow = differenceInCalendarWeeks(this.activeDate, this.calendarStart, {
            weekStartsOn: this.dateHelper.getFirstDayOfWeek()
        });
        this.activeDateCol = differenceInCalendarDays(this.activeDate, addDays(this.calendarStart, this.activeDateRow * 7));
    };
    /**
     * @private
     * @return {?}
     */
    CmacsCalendarComponent.prototype.calculateCurrentMonth = /**
     * @private
     * @return {?}
     */
    function () {
        if (isThisYear(this.activeDate)) {
            /** @type {?} */
            var yearStart = startOfYear(this.currentDate);
            /** @type {?} */
            var monthDiff = differenceInCalendarMonths(this.currentDate, yearStart);
            this.currentMonthRow = Math.floor(monthDiff / 3);
            this.currentMonthCol = monthDiff % 3;
        }
        else {
            this.currentMonthRow = -1;
            this.currentMonthCol = -1;
        }
    };
    /**
     * @private
     * @return {?}
     */
    CmacsCalendarComponent.prototype.calculateActiveMonth = /**
     * @private
     * @return {?}
     */
    function () {
        this.activeMonthRow = Math.floor(this.activeDate.getMonth() / 3);
        this.activeMonthCol = this.activeDate.getMonth() % 3;
    };
    CmacsCalendarComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'cmacs-calendar',
                    exportAs: 'cmacsCalendar',
                    template: "<cmacs-calendar-header [fullscreen]=\"fullscreen\" [activeDate]=\"activeDate\"\r\n                    [(mode)]=\"nzMode\" (modeChange)=\"onModeChange($event)\"\r\n                    (yearChange)=\"onYearSelect($event)\" (monthChange)=\"onMonthSelect($event)\">\r\n</cmacs-calendar-header>\r\n\r\n<div class=\"ant-fullcalendar ant-fullcalendar-full\" [ngClass]=\"fullscreen ? 'ant-fullcalendar-fullscreen' : ''\">\r\n  <div class=\"ant-fullcalendar-calendar-body\">\r\n    <ng-container *ngIf=\"nzMode === 'month' then monthModeTable else yearModeTable\"></ng-container>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #monthModeTable>\r\n  <table class=\"ant-fullcalendar-table\" cellspacing=\"0\" role=\"grid\">\r\n    <thead>\r\n      <tr role=\"row\">\r\n        <th *ngFor=\"let day of daysInWeek\" class=\"ant-fullcalendar-column-header\" role=\"columnheader\" [title]=\"day.title\">\r\n          <span class=\"ant-fullcalendar-column-header-inner\">{{ day.label }}</span>\r\n        </th>\r\n      </tr>\r\n    </thead>\r\n    <tbody class=\"ant-fullcalendar-tbody\">\r\n      <tr *ngFor=\"let week of dateMatrix; index as row\"\r\n          [class.ant-fullcalendar-current-week]=\"row === currentDateRow\"\r\n          [class.ant-fullcalendar-active-week]=\"row === activeDateRow\">\r\n        <td *ngFor=\"let day of week; index as col\" role=\"gridcell\" class=\"ant-fullcalendar-cell\" [title]=\"day.title\"\r\n            [class.ant-fullcalendar-today]=\"row === currentDateRow && col === currentDateCol\"\r\n            [class.ant-fullcalendar-selected-day]=\"row === activeDateRow && col === activeDateCol\"\r\n            [class.ant-fullcalendar-last-month-cell]=\"day.rel === 'last'\"\r\n            [class.ant-fullcalendar-next-month-btn-day]=\"day.rel === 'next'\"\r\n            (click)=\"onDateSelect(day.value)\">\r\n            <div class=\"ant-fullcalendar-date\">\r\n              <ng-container *ngIf=\"dateFullCell else defaultCell\">\r\n                <ng-container *ngTemplateOutlet=\"dateFullCell; context: {$implicit: day.value}\"></ng-container>\r\n              </ng-container>\r\n              <ng-template #defaultCell>\r\n                <div class=\"ant-fullcalendar-value\">{{ day.label }}</div>\r\n                <div *ngIf=\"dateCell\" class=\"ant-fullcalendar-content\">\r\n                  <ng-container *ngTemplateOutlet=\"dateCell; context: {$implicit: day.value}\"></ng-container>\r\n                </div>\r\n              </ng-template>\r\n            </div>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</ng-template>\r\n\r\n<ng-template #yearModeTable>\r\n  <table class=\"ant-fullcalendar-month-panel-table\" cellspacing=\"0\" role=\"grid\">\r\n    <tbody class=\"ant-fullcalendar-month-panel-tbody\">\r\n      <tr *ngFor=\"let row of [0, 1, 2, 3]\" role=\"row\">\r\n        <td *ngFor=\"let col of [0, 1, 2]\" role=\"gridcell\" [title]=\"monthsInYear[row * 3 + col].title\"\r\n            class=\"ant-fullcalendar-month-panel-cell\"\r\n            [class.ant-fullcalendar-month-panel-current-cell]=\"row === currentMonthRow && col === currentMonthCol\"\r\n            [class.ant-fullcalendar-month-panel-selected-cell]=\"row === activeMonthRow && col === activeMonthCol\"\r\n            (click)=\"onMonthSelect(row * 3 + col)\">\r\n          <div class=\"ant-fullcalendar-month\">\r\n            <ng-container *ngIf=\"monthFullCell else defaultCell\">\r\n              <ng-container *ngTemplateOutlet=\"monthFullCell; context: {$implicit: monthsInYear[row * 3 + col].start}\"></ng-container>\r\n            </ng-container>\r\n            <ng-template #defaultCell>\r\n              <div class=\"ant-fullcalendar-value\">{{ monthsInYear[row * 3 + col].label }}</div>\r\n              <div *ngIf=\"monthCell\" class=\"ant-fullcalendar-content\">\r\n                <ng-container *ngTemplateOutlet=\"monthCell; context: {$implicit: monthsInYear[row * 3 + col].start}\"></ng-container>\r\n              </div>\r\n            </ng-template>\r\n          </div>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</ng-template>\r\n",
                    providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return CmacsCalendarComponent; })), multi: true }]
                }] }
    ];
    /** @nocollapse */
    CmacsCalendarComponent.ctorParameters = function () { return [
        { type: NzI18nService },
        { type: ChangeDetectorRef },
        { type: DateHelperService }
    ]; };
    CmacsCalendarComponent.propDecorators = {
        nzMode: [{ type: Input, args: ['mode',] }],
        nzModeChange: [{ type: Output, args: ['modeChange',] }],
        nzPanelChange: [{ type: Output, args: ['panelChange',] }],
        nzSelectChange: [{ type: Output, args: ['selectChange',] }],
        nzValue: [{ type: Input, args: ['value',] }],
        nzValueChange: [{ type: Output, args: ['valueChange',] }],
        nzDateCell: [{ type: Input, args: ['dateCell',] }],
        nzDateFullCell: [{ type: Input, args: ['dateFullCell',] }],
        nzMonthCell: [{ type: Input, args: ['monthCell',] }],
        nzMonthFullCell: [{ type: Input, args: ['monthFullCell',] }],
        nzFullscreen: [{ type: Input, args: ['fullScreen',] }],
        nzCard: [{ type: Input, args: ['card',] }],
        dateCellChild: [{ type: ContentChild, args: [DateCell, { read: TemplateRef },] }],
        dateFullCellChild: [{ type: ContentChild, args: [DateFullCell, { read: TemplateRef },] }],
        monthCellChild: [{ type: ContentChild, args: [MonthCell, { read: TemplateRef },] }],
        monthFullCellChild: [{ type: ContentChild, args: [MonthFullCell, { read: TemplateRef },] }],
        fullscreen: [{ type: HostBinding, args: ['class.ant-fullcalendar--fullscreen',] }]
    };
    return CmacsCalendarComponent;
}());
export { CmacsCalendarComponent };
if (false) {
    /** @type {?} */
    CmacsCalendarComponent.prototype.nzMode;
    /** @type {?} */
    CmacsCalendarComponent.prototype.nzModeChange;
    /** @type {?} */
    CmacsCalendarComponent.prototype.nzPanelChange;
    /** @type {?} */
    CmacsCalendarComponent.prototype.nzSelectChange;
    /** @type {?} */
    CmacsCalendarComponent.prototype.nzValueChange;
    /** @type {?} */
    CmacsCalendarComponent.prototype.fullscreen;
    /** @type {?} */
    CmacsCalendarComponent.prototype.daysInWeek;
    /** @type {?} */
    CmacsCalendarComponent.prototype.monthsInYear;
    /** @type {?} */
    CmacsCalendarComponent.prototype.dateMatrix;
    /** @type {?} */
    CmacsCalendarComponent.prototype.activeDate;
    /** @type {?} */
    CmacsCalendarComponent.prototype.currentDateRow;
    /** @type {?} */
    CmacsCalendarComponent.prototype.currentDateCol;
    /** @type {?} */
    CmacsCalendarComponent.prototype.activeDateRow;
    /** @type {?} */
    CmacsCalendarComponent.prototype.activeDateCol;
    /** @type {?} */
    CmacsCalendarComponent.prototype.currentMonthRow;
    /** @type {?} */
    CmacsCalendarComponent.prototype.currentMonthCol;
    /** @type {?} */
    CmacsCalendarComponent.prototype.activeMonthRow;
    /** @type {?} */
    CmacsCalendarComponent.prototype.activeMonthCol;
    /** @type {?} */
    CmacsCalendarComponent.prototype.dateCell;
    /** @type {?} */
    CmacsCalendarComponent.prototype.dateFullCell;
    /** @type {?} */
    CmacsCalendarComponent.prototype.monthCell;
    /** @type {?} */
    CmacsCalendarComponent.prototype.monthFullCell;
    /**
     * @type {?}
     * @private
     */
    CmacsCalendarComponent.prototype.currentDate;
    /**
     * @type {?}
     * @private
     */
    CmacsCalendarComponent.prototype.onChangeFn;
    /**
     * @type {?}
     * @private
     */
    CmacsCalendarComponent.prototype.onTouchFn;
    /**
     * @type {?}
     * @private
     */
    CmacsCalendarComponent.prototype.i18n;
    /**
     * @type {?}
     * @private
     */
    CmacsCalendarComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    CmacsCalendarComponent.prototype.dateHelper;
}
/**
 * @record
 */
export function DayCellContext() { }
if (false) {
    /** @type {?} */
    DayCellContext.prototype.title;
    /** @type {?} */
    DayCellContext.prototype.label;
}
/**
 * @record
 */
export function MonthCellContext() { }
if (false) {
    /** @type {?} */
    MonthCellContext.prototype.title;
    /** @type {?} */
    MonthCellContext.prototype.label;
    /** @type {?} */
    MonthCellContext.prototype.start;
}
/**
 * @record
 */
export function DateCellContext() { }
if (false) {
    /** @type {?} */
    DateCellContext.prototype.title;
    /** @type {?} */
    DateCellContext.prototype.label;
    /** @type {?} */
    DateCellContext.prototype.rel;
    /** @type {?} */
    DateCellContext.prototype.value;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy1jYWxlbmRhci9jbWFjcy1jYWxlbmRhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzlELE9BQU8sRUFDTCxVQUFVLEVBQ1YsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLFlBQVksRUFDWixXQUFXLEVBQ1gsS0FBSyxFQUVMLE1BQU0sRUFDTixXQUFXLEVBQ1gsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQ0wsT0FBTyxFQUNQLHdCQUF3QixFQUN4QiwwQkFBMEIsRUFDMUIseUJBQXlCLEVBQ3pCLFVBQVUsRUFDVixTQUFTLEVBQ1QsV0FBVyxFQUNYLFVBQVUsRUFDVixXQUFXLEVBQ1gsVUFBVSxFQUNWLFFBQVEsRUFDUixPQUFPLEVBQ1AsWUFBWSxFQUNaLFdBQVcsRUFDWCxXQUFXLEVBQ1osTUFBTSxVQUFVLENBQUM7QUFFbEIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXRFLE9BQU8sRUFDTCxzQkFBc0IsSUFBSSxRQUFRLEVBQ2xDLDBCQUEwQixJQUFJLFlBQVksRUFDMUMsdUJBQXVCLElBQUksU0FBUyxFQUNwQywyQkFBMkIsSUFBSSxhQUFhLEVBQzdDLE1BQU0saUNBQWlDLENBQUM7QUFJekM7SUFnSEUsZ0NBQW9CLElBQW1CLEVBQVUsR0FBc0IsRUFBVSxVQUE2QjtRQUExRixTQUFJLEdBQUosSUFBSSxDQUFlO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFtQjtRQXZHL0YsV0FBTSxHQUFhLE9BQU8sQ0FBQztRQUNYLGlCQUFZLEdBQTJCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDekQsa0JBQWEsR0FBaUQsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVoRixtQkFBYyxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBS3pELGtCQUFhLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUM7UUFtRXZGLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFFbEIsZUFBVSxHQUFxQixFQUFFLENBQUM7UUFDbEMsaUJBQVksR0FBdUIsRUFBRSxDQUFDO1FBQ3RDLGVBQVUsR0FBd0IsRUFBRSxDQUFDO1FBQ3JDLGVBQVUsR0FBUyxJQUFJLElBQUksRUFBRSxDQUFDO1FBQzlCLG1CQUFjLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDNUIsbUJBQWMsR0FBVyxDQUFDLENBQUMsQ0FBQztRQUM1QixrQkFBYSxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBQzNCLGtCQUFhLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDM0Isb0JBQWUsR0FBVyxDQUFDLENBQUMsQ0FBQztRQUM3QixvQkFBZSxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBQzdCLG1CQUFjLEdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDNUIsbUJBQWMsR0FBVyxDQUFDLENBQUMsQ0FBQztRQUM1QixhQUFRLEdBQTRDLElBQUksQ0FBQztRQUN6RCxpQkFBWSxHQUE0QyxJQUFJLENBQUM7UUFDN0QsY0FBUyxHQUE0QyxJQUFJLENBQUM7UUFDMUQsa0JBQWEsR0FBNEMsSUFBSSxDQUFDO1FBRXRELGdCQUFXLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUN6QixlQUFVOzs7UUFBeUIsY0FBUSxDQUFDLEVBQUM7UUFDN0MsY0FBUzs7O1FBQWUsY0FBUSxDQUFDLEVBQUM7SUFNd0UsQ0FBQztJQWpHbkgsc0JBQW9CLDJDQUFPOzs7OztRQUEzQixVQUE0QixLQUFXO1lBQ3JDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLENBQUM7OztPQUFBO0lBR0Qsc0JBQ0ksOENBQVU7Ozs7O1FBRGQsVUFDZSxLQUF1QztZQUNwRCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUN4QixDQUFDOzs7T0FBQTtJQUVELHNCQUNJLGtEQUFjOzs7OztRQURsQixVQUNtQixLQUF1QztZQUN4RCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUM1QixDQUFDOzs7T0FBQTtJQUVELHNCQUNJLCtDQUFXOzs7OztRQURmLFVBQ2dCLEtBQXVDO1lBQ3JELElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3pCLENBQUM7OztPQUFBO0lBRUQsc0JBQ0ksbURBQWU7Ozs7O1FBRG5CLFVBQ29CLEtBQXVDO1lBQ3pELElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQzdCLENBQUM7OztPQUFBO0lBRUQsc0JBQ0ksZ0RBQVk7Ozs7UUFHaEI7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDekIsQ0FBQzs7Ozs7UUFORCxVQUNpQixLQUFjO1lBQzdCLElBQUksQ0FBQyxVQUFVLEdBQUcscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakQsQ0FBQzs7O09BQUE7SUFLRCxzQkFDSSwwQ0FBTTs7OztRQUdWO1lBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDMUIsQ0FBQzs7Ozs7UUFORCxVQUNXLEtBQWM7WUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xELENBQUM7OztPQUFBO0lBS0Qsc0JBQ0ksaURBQWE7Ozs7O1FBRGpCLFVBQ2tCLEtBQXVDO1lBQ3ZELElBQUksS0FBSyxFQUFFO2dCQUNULElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2FBQ3ZCO1FBQ0gsQ0FBQzs7O09BQUE7SUFFRCxzQkFDSSxxREFBaUI7Ozs7O1FBRHJCLFVBQ3NCLEtBQXVDO1lBQzNELElBQUksS0FBSyxFQUFFO2dCQUNULElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO2FBQzNCO1FBQ0gsQ0FBQzs7O09BQUE7SUFFRCxzQkFDSSxrREFBYzs7Ozs7UUFEbEIsVUFDbUIsS0FBdUM7WUFDeEQsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7YUFDeEI7UUFDSCxDQUFDOzs7T0FBQTtJQUVELHNCQUNJLHNEQUFrQjs7Ozs7UUFEdEIsVUFDdUIsS0FBdUM7WUFDNUQsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7YUFDNUI7UUFDSCxDQUFDOzs7T0FBQTtJQTBCRCxzQkFBWSxpREFBYTs7Ozs7UUFBekI7WUFDRSxPQUFPLFdBQVcsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDM0csQ0FBQzs7O09BQUE7Ozs7SUFJRCx5Q0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7Ozs7O0lBRUQsNkNBQVk7Ozs7SUFBWixVQUFhLElBQWM7UUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLE1BQUEsRUFBRSxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7Ozs7SUFFRCw2Q0FBWTs7OztJQUFaLFVBQWEsSUFBVTtRQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7O0lBRUQsNkNBQVk7Ozs7SUFBWixVQUFhLElBQVk7O1lBQ2pCLElBQUksR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUM7UUFDM0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7OztJQUVELDhDQUFhOzs7O0lBQWIsVUFBYyxLQUFhOztZQUNuQixJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDO1FBQzdDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Ozs7SUFFRCwyQ0FBVTs7OztJQUFWLFVBQVcsS0FBa0I7UUFDM0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLElBQUksSUFBSSxJQUFJLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsaURBQWdCOzs7O0lBQWhCLFVBQWlCLEVBQXdCO1FBQ3ZDLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7Ozs7O0lBRUQsa0RBQWlCOzs7O0lBQWpCLFVBQWtCLEVBQWM7UUFDOUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDdEIsQ0FBQzs7Ozs7OztJQUVPLDJDQUFVOzs7Ozs7SUFBbEIsVUFBbUIsSUFBVSxFQUFFLE9BQXVCO1FBQXZCLHdCQUFBLEVBQUEsY0FBdUI7O1lBQzlDLFVBQVUsR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQzs7WUFDOUMsWUFBWSxHQUFHLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDOztZQUNsRCxXQUFXLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUM7UUFFdEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFFdkIsSUFBSSxVQUFVLEVBQUU7WUFDZCxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztTQUM1QjtRQUNELElBQUksWUFBWSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUN2QixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztZQUM1QixJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztTQUM3QjtRQUNELElBQUksV0FBVyxFQUFFO1lBQ2YsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7U0FDOUI7UUFFRCxJQUFJLE9BQU8sRUFBRTtZQUNYLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQ2pCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQy9CO0lBQ0gsQ0FBQzs7Ozs7SUFFTyxnREFBZTs7OztJQUF2QjtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDOztZQUNmLFNBQVMsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGlCQUFpQixFQUFFLEVBQUUsQ0FBQztRQUNyRyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFOztnQkFDcEIsSUFBSSxHQUFHLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDOztnQkFDNUIsS0FBSyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7O2dCQUNsRixLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUM1RixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssT0FBQSxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQztTQUN4QztJQUNILENBQUM7Ozs7O0lBRU8sa0RBQWlCOzs7O0lBQXpCO1FBQ0UsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDdkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTs7Z0JBQ3JCLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUM7O2dCQUNuQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQzs7Z0JBQzNDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDOztnQkFDM0MsS0FBSyxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUM7WUFDaEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLE9BQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLENBQUM7U0FDakQ7SUFDSCxDQUFDOzs7OztJQUVPLGdEQUFlOzs7O0lBQXZCO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7O1lBQ2YsVUFBVSxHQUFHLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDOztZQUMxQyxRQUFRLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7O1lBQ3RDLFFBQVEsR0FDWix5QkFBeUIsQ0FBQyxRQUFRLEVBQUUsVUFBVSxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQztRQUU1RyxLQUFLLElBQUksSUFBSSxHQUFHLENBQUMsRUFBRSxJQUFJLEdBQUcsUUFBUSxFQUFFLElBQUksRUFBRSxFQUFFOztnQkFDcEMsR0FBRyxHQUFzQixFQUFFOztnQkFDM0IsU0FBUyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksR0FBRyxDQUFDLENBQUM7WUFFdkQsS0FBSyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsRUFBRTs7b0JBQzFCLElBQUksR0FBRyxPQUFPLENBQUMsU0FBUyxFQUFFLEdBQUcsQ0FBQzs7b0JBQzlCLFNBQVMsR0FBRywwQkFBMEIsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQzs7b0JBQzdELFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWM7b0JBQy9DLENBQUMsQ0FBQyxVQUFVO29CQUNaLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyw0QkFBNEIsRUFBRSxZQUFZLENBQUM7O29CQUNqRSxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLFVBQVUsQ0FBQzs7b0JBQ2hELEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDOztvQkFDbEYsR0FBRyxHQUFHLFNBQVMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNO2dCQUN6RSxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxPQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsR0FBRyxLQUFBLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7YUFDOUM7WUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUMzQjtJQUNILENBQUM7Ozs7O0lBRU8scURBQW9COzs7O0lBQTVCO1FBQ0UsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ2hDLElBQUksQ0FBQyxjQUFjLEdBQUcseUJBQXlCLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUNwRixZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxpQkFBaUIsRUFBRTthQUNsRCxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsY0FBYyxHQUFHLHdCQUF3QixDQUM1QyxJQUFJLENBQUMsV0FBVyxFQUNoQixPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQyxDQUNyRCxDQUFDO1NBQ0g7YUFBTTtZQUNMLElBQUksQ0FBQyxjQUFjLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUMxQjtJQUNILENBQUM7Ozs7O0lBRU8sb0RBQW1COzs7O0lBQTNCO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDbEYsWUFBWSxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsaUJBQWlCLEVBQUU7U0FDbEQsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGFBQWEsR0FBRyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0SCxDQUFDOzs7OztJQUVPLHNEQUFxQjs7OztJQUE3QjtRQUNFLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTs7Z0JBQ3pCLFNBQVMsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzs7Z0JBQ3pDLFNBQVMsR0FBRywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQztZQUN6RSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ2pELElBQUksQ0FBQyxlQUFlLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQztTQUN0QzthQUFNO1lBQ0wsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQzNCO0lBQ0gsQ0FBQzs7Ozs7SUFFTyxxREFBb0I7Ozs7SUFBNUI7UUFDRSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7O2dCQTlRRixTQUFTLFNBQUM7b0JBQ1QsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUUsZUFBZTtvQkFDekIscWhJQUE4QztvQkFDOUMsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLFVBQVU7Ozs0QkFBQyxjQUFNLE9BQUEsc0JBQXNCLEVBQXRCLENBQXNCLEVBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUM7aUJBQ2hIOzs7O2dCQWxCMkIsYUFBYTtnQkE5QnZDLGlCQUFpQjtnQkE4QlYsaUJBQWlCOzs7eUJBb0J2QixLQUFLLFNBQUMsTUFBTTsrQkFDWixNQUFNLFNBQUMsWUFBWTtnQ0FDbkIsTUFBTSxTQUFDLGFBQWE7aUNBRXBCLE1BQU0sU0FBQyxjQUFjOzBCQUVyQixLQUFLLFNBQUMsT0FBTztnQ0FHYixNQUFNLFNBQUMsYUFBYTs2QkFFcEIsS0FBSyxTQUFDLFVBQVU7aUNBS2hCLEtBQUssU0FBQyxjQUFjOzhCQUtwQixLQUFLLFNBQUMsV0FBVztrQ0FLakIsS0FBSyxTQUFDLGVBQWU7K0JBS3JCLEtBQUssU0FBQyxZQUFZO3lCQVFsQixLQUFLLFNBQUMsTUFBTTtnQ0FRWixZQUFZLFNBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTtvQ0FPNUMsWUFBWSxTQUFDLFlBQVksRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7aUNBT2hELFlBQVksU0FBQyxTQUFTLEVBQUUsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFO3FDQU83QyxZQUFZLFNBQUMsYUFBYSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRTs2QkFPakQsV0FBVyxTQUFDLG9DQUFvQzs7SUEyTG5ELDZCQUFDO0NBQUEsQUEvUUQsSUErUUM7U0F2UVksc0JBQXNCOzs7SUFDakMsd0NBQTBDOztJQUMxQyw4Q0FBeUY7O0lBQ3pGLCtDQUFpSDs7SUFFakgsZ0RBQXlGOztJQUt6RiwrQ0FBdUY7O0lBa0V2Riw0Q0FDa0I7O0lBRWxCLDRDQUFrQzs7SUFDbEMsOENBQXNDOztJQUN0Qyw0Q0FBcUM7O0lBQ3JDLDRDQUE4Qjs7SUFDOUIsZ0RBQTRCOztJQUM1QixnREFBNEI7O0lBQzVCLCtDQUEyQjs7SUFDM0IsK0NBQTJCOztJQUMzQixpREFBNkI7O0lBQzdCLGlEQUE2Qjs7SUFDN0IsZ0RBQTRCOztJQUM1QixnREFBNEI7O0lBQzVCLDBDQUF5RDs7SUFDekQsOENBQTZEOztJQUM3RCwyQ0FBMEQ7O0lBQzFELCtDQUE4RDs7Ozs7SUFFOUQsNkNBQWlDOzs7OztJQUNqQyw0Q0FBcUQ7Ozs7O0lBQ3JELDJDQUEwQzs7Ozs7SUFNOUIsc0NBQTJCOzs7OztJQUFFLHFDQUE4Qjs7Ozs7SUFBRSw0Q0FBcUM7Ozs7O0FBaUtoSCxvQ0FHQzs7O0lBRkMsK0JBQWM7O0lBQ2QsK0JBQWM7Ozs7O0FBR2hCLHNDQUlDOzs7SUFIQyxpQ0FBYzs7SUFDZCxpQ0FBYzs7SUFDZCxpQ0FBWTs7Ozs7QUFHZCxxQ0FLQzs7O0lBSkMsZ0NBQWM7O0lBQ2QsZ0NBQWM7O0lBQ2QsOEJBQWlDOztJQUNqQyxnQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBjb2VyY2VCb29sZWFuUHJvcGVydHkgfSBmcm9tICdAYW5ndWxhci9jZGsvY29lcmNpb24nO1xyXG5pbXBvcnQge1xyXG4gIGZvcndhcmRSZWYsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7XHJcbiAgYWRkRGF5cyxcclxuICBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMsXHJcbiAgZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMsXHJcbiAgZGlmZmVyZW5jZUluQ2FsZW5kYXJXZWVrcyxcclxuICBlbmRPZk1vbnRoLFxyXG4gIGlzU2FtZURheSxcclxuICBpc1NhbWVNb250aCxcclxuICBpc1NhbWVZZWFyLFxyXG4gIGlzVGhpc01vbnRoLFxyXG4gIGlzVGhpc1llYXIsXHJcbiAgc2V0TW9udGgsXHJcbiAgc2V0WWVhcixcclxuICBzdGFydE9mTW9udGgsXHJcbiAgc3RhcnRPZldlZWssXHJcbiAgc3RhcnRPZlllYXJcclxufSBmcm9tICdkYXRlLWZucyc7XHJcblxyXG5pbXBvcnQgeyBEYXRlSGVscGVyU2VydmljZSwgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcblxyXG5pbXBvcnQge1xyXG4gIENtYWNzRGF0ZUNlbGxEaXJlY3RpdmUgYXMgRGF0ZUNlbGwsXHJcbiAgQ21hY3NEYXRlRnVsbENlbGxEaXJlY3RpdmUgYXMgRGF0ZUZ1bGxDZWxsLFxyXG4gIENtYWNzTW9udGhDZWxsRGlyZWN0aXZlIGFzIE1vbnRoQ2VsbCxcclxuICBDbWFjc01vbnRoRnVsbENlbGxEaXJlY3RpdmUgYXMgTW9udGhGdWxsQ2VsbFxyXG59IGZyb20gJy4vY21hY3MtY2FsZW5kYXItY2VsbC5kaXJlY3RpdmUnO1xyXG5cclxuZXhwb3J0IHR5cGUgTW9kZVR5cGUgPSAnbW9udGgnIHwgJ3llYXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBzZWxlY3RvcjogJ2NtYWNzLWNhbGVuZGFyJyxcclxuICBleHBvcnRBczogJ2NtYWNzQ2FsZW5kYXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1jYWxlbmRhci5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUiwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ21hY3NDYWxlbmRhckNvbXBvbmVudCksIG11bHRpOiB0cnVlIH1dXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0NhbGVuZGFyQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCB7XHJcbiAgQElucHV0KCdtb2RlJykgbnpNb2RlOiBNb2RlVHlwZSA9ICdtb250aCc7XHJcbiAgQE91dHB1dCgnbW9kZUNoYW5nZScpIHJlYWRvbmx5IG56TW9kZUNoYW5nZTogRXZlbnRFbWl0dGVyPE1vZGVUeXBlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBAT3V0cHV0KCdwYW5lbENoYW5nZScpIHJlYWRvbmx5IG56UGFuZWxDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGRhdGU6IERhdGU7IG1vZGU6IE1vZGVUeXBlIH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBAT3V0cHV0KCdzZWxlY3RDaGFuZ2UnKSByZWFkb25seSBuelNlbGVjdENoYW5nZTogRXZlbnRFbWl0dGVyPERhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBASW5wdXQoJ3ZhbHVlJykgc2V0IG56VmFsdWUodmFsdWU6IERhdGUpIHtcclxuICAgIHRoaXMudXBkYXRlRGF0ZSh2YWx1ZSwgZmFsc2UpO1xyXG4gIH1cclxuICBAT3V0cHV0KCd2YWx1ZUNoYW5nZScpIHJlYWRvbmx5IG56VmFsdWVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgQElucHV0KCdkYXRlQ2VsbCcpXHJcbiAgc2V0IG56RGF0ZUNlbGwodmFsdWU6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBEYXRlIH0+KSB7XHJcbiAgICB0aGlzLmRhdGVDZWxsID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoJ2RhdGVGdWxsQ2VsbCcpXHJcbiAgc2V0IG56RGF0ZUZ1bGxDZWxsKHZhbHVlOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogRGF0ZSB9Pikge1xyXG4gICAgdGhpcy5kYXRlRnVsbENlbGwgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgnbW9udGhDZWxsJylcclxuICBzZXQgbnpNb250aENlbGwodmFsdWU6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBEYXRlIH0+KSB7XHJcbiAgICB0aGlzLm1vbnRoQ2VsbCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCdtb250aEZ1bGxDZWxsJylcclxuICBzZXQgbnpNb250aEZ1bGxDZWxsKHZhbHVlOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogRGF0ZSB9Pikge1xyXG4gICAgdGhpcy5tb250aEZ1bGxDZWxsID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoJ2Z1bGxTY3JlZW4nKVxyXG4gIHNldCBuekZ1bGxzY3JlZW4odmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuZnVsbHNjcmVlbiA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XHJcbiAgfVxyXG4gIGdldCBuekZ1bGxzY3JlZW4oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5mdWxsc2NyZWVuO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCdjYXJkJylcclxuICBzZXQgbnpDYXJkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmZ1bGxzY3JlZW4gPSAhY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcclxuICB9XHJcbiAgZ2V0IG56Q2FyZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhdGhpcy5mdWxsc2NyZWVuO1xyXG4gIH1cclxuXHJcbiAgQENvbnRlbnRDaGlsZChEYXRlQ2VsbCwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KVxyXG4gIHNldCBkYXRlQ2VsbENoaWxkKHZhbHVlOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogRGF0ZSB9Pikge1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuZGF0ZUNlbGwgPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoRGF0ZUZ1bGxDZWxsLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pXHJcbiAgc2V0IGRhdGVGdWxsQ2VsbENoaWxkKHZhbHVlOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogRGF0ZSB9Pikge1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuZGF0ZUZ1bGxDZWxsID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAQ29udGVudENoaWxkKE1vbnRoQ2VsbCwgeyByZWFkOiBUZW1wbGF0ZVJlZiB9KVxyXG4gIHNldCBtb250aENlbGxDaGlsZCh2YWx1ZTogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IERhdGUgfT4pIHtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICB0aGlzLm1vbnRoQ2VsbCA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQENvbnRlbnRDaGlsZChNb250aEZ1bGxDZWxsLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pXHJcbiAgc2V0IG1vbnRoRnVsbENlbGxDaGlsZCh2YWx1ZTogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IERhdGUgfT4pIHtcclxuICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICB0aGlzLm1vbnRoRnVsbENlbGwgPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LWZ1bGxjYWxlbmRhci0tZnVsbHNjcmVlbicpXHJcbiAgZnVsbHNjcmVlbiA9IHRydWU7XHJcblxyXG4gIGRheXNJbldlZWs6IERheUNlbGxDb250ZXh0W10gPSBbXTtcclxuICBtb250aHNJblllYXI6IE1vbnRoQ2VsbENvbnRleHRbXSA9IFtdO1xyXG4gIGRhdGVNYXRyaXg6IERhdGVDZWxsQ29udGV4dFtdW10gPSBbXTtcclxuICBhY3RpdmVEYXRlOiBEYXRlID0gbmV3IERhdGUoKTtcclxuICBjdXJyZW50RGF0ZVJvdzogbnVtYmVyID0gLTE7XHJcbiAgY3VycmVudERhdGVDb2w6IG51bWJlciA9IC0xO1xyXG4gIGFjdGl2ZURhdGVSb3c6IG51bWJlciA9IC0xO1xyXG4gIGFjdGl2ZURhdGVDb2w6IG51bWJlciA9IC0xO1xyXG4gIGN1cnJlbnRNb250aFJvdzogbnVtYmVyID0gLTE7XHJcbiAgY3VycmVudE1vbnRoQ29sOiBudW1iZXIgPSAtMTtcclxuICBhY3RpdmVNb250aFJvdzogbnVtYmVyID0gLTE7XHJcbiAgYWN0aXZlTW9udGhDb2w6IG51bWJlciA9IC0xO1xyXG4gIGRhdGVDZWxsOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogRGF0ZSB9PiB8IG51bGwgPSBudWxsO1xyXG4gIGRhdGVGdWxsQ2VsbDogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IERhdGUgfT4gfCBudWxsID0gbnVsbDtcclxuICBtb250aENlbGw6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBEYXRlIH0+IHwgbnVsbCA9IG51bGw7XHJcbiAgbW9udGhGdWxsQ2VsbDogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IERhdGUgfT4gfCBudWxsID0gbnVsbDtcclxuXHJcbiAgcHJpdmF0ZSBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgcHJpdmF0ZSBvbkNoYW5nZUZuOiAoZGF0ZTogRGF0ZSkgPT4gdm9pZCA9ICgpID0+IHsgfTtcclxuICBwcml2YXRlIG9uVG91Y2hGbjogKCkgPT4gdm9pZCA9ICgpID0+IHsgfTtcclxuXHJcbiAgcHJpdmF0ZSBnZXQgY2FsZW5kYXJTdGFydCgpOiBEYXRlIHtcclxuICAgIHJldHVybiBzdGFydE9mV2VlayhzdGFydE9mTW9udGgodGhpcy5hY3RpdmVEYXRlKSwgeyB3ZWVrU3RhcnRzT246IHRoaXMuZGF0ZUhlbHBlci5nZXRGaXJzdERheU9mV2VlaygpIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpMThuOiBOekkxOG5TZXJ2aWNlLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgZGF0ZUhlbHBlcjogRGF0ZUhlbHBlclNlcnZpY2UpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0VXBEYXlzSW5XZWVrKCk7XHJcbiAgICB0aGlzLnNldFVwTW9udGhzSW5ZZWFyKCk7XHJcbiAgICB0aGlzLnNldFVwRGF0ZU1hdHJpeCgpO1xyXG4gICAgdGhpcy5jYWxjdWxhdGVDdXJyZW50RGF0ZSgpO1xyXG4gICAgdGhpcy5jYWxjdWxhdGVBY3RpdmVEYXRlKCk7XHJcbiAgICB0aGlzLmNhbGN1bGF0ZUN1cnJlbnRNb250aCgpO1xyXG4gICAgdGhpcy5jYWxjdWxhdGVBY3RpdmVNb250aCgpO1xyXG4gIH1cclxuXHJcbiAgb25Nb2RlQ2hhbmdlKG1vZGU6IE1vZGVUeXBlKTogdm9pZCB7XHJcbiAgICB0aGlzLm56TW9kZUNoYW5nZS5lbWl0KG1vZGUpO1xyXG4gICAgdGhpcy5uelBhbmVsQ2hhbmdlLmVtaXQoeyBkYXRlOiB0aGlzLmFjdGl2ZURhdGUsIG1vZGUgfSk7XHJcbiAgfVxyXG5cclxuICBvbkRhdGVTZWxlY3QoZGF0ZTogRGF0ZSk6IHZvaWQge1xyXG4gICAgdGhpcy51cGRhdGVEYXRlKGRhdGUpO1xyXG4gICAgdGhpcy5uelNlbGVjdENoYW5nZS5lbWl0KGRhdGUpO1xyXG4gIH1cclxuXHJcbiAgb25ZZWFyU2VsZWN0KHllYXI6IG51bWJlcik6IHZvaWQge1xyXG4gICAgY29uc3QgZGF0ZSA9IHNldFllYXIodGhpcy5hY3RpdmVEYXRlLCB5ZWFyKTtcclxuICAgIHRoaXMudXBkYXRlRGF0ZShkYXRlKTtcclxuICAgIHRoaXMubnpTZWxlY3RDaGFuZ2UuZW1pdChkYXRlKTtcclxuICB9XHJcblxyXG4gIG9uTW9udGhTZWxlY3QobW9udGg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgY29uc3QgZGF0ZSA9IHNldE1vbnRoKHRoaXMuYWN0aXZlRGF0ZSwgbW9udGgpO1xyXG4gICAgdGhpcy51cGRhdGVEYXRlKGRhdGUpO1xyXG4gICAgdGhpcy5uelNlbGVjdENoYW5nZS5lbWl0KGRhdGUpO1xyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogRGF0ZSB8IG51bGwpOiB2b2lkIHtcclxuICAgIHRoaXMudXBkYXRlRGF0ZSh2YWx1ZSB8fCBuZXcgRGF0ZSgpLCBmYWxzZSk7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChkYXRlOiBEYXRlKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlRm4gPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hGbiA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB1cGRhdGVEYXRlKGRhdGU6IERhdGUsIHRvdWNoZWQ6IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XHJcbiAgICBjb25zdCBkYXlDaGFuZ2VkID0gIWlzU2FtZURheShkYXRlLCB0aGlzLmFjdGl2ZURhdGUpO1xyXG4gICAgY29uc3QgbW9udGhDaGFuZ2VkID0gIWlzU2FtZU1vbnRoKGRhdGUsIHRoaXMuYWN0aXZlRGF0ZSk7XHJcbiAgICBjb25zdCB5ZWFyQ2hhbmdlZCA9ICFpc1NhbWVZZWFyKGRhdGUsIHRoaXMuYWN0aXZlRGF0ZSk7XHJcblxyXG4gICAgdGhpcy5hY3RpdmVEYXRlID0gZGF0ZTtcclxuXHJcbiAgICBpZiAoZGF5Q2hhbmdlZCkge1xyXG4gICAgICB0aGlzLmNhbGN1bGF0ZUFjdGl2ZURhdGUoKTtcclxuICAgIH1cclxuICAgIGlmIChtb250aENoYW5nZWQpIHtcclxuICAgICAgdGhpcy5zZXRVcERhdGVNYXRyaXgoKTtcclxuICAgICAgdGhpcy5jYWxjdWxhdGVDdXJyZW50RGF0ZSgpO1xyXG4gICAgICB0aGlzLmNhbGN1bGF0ZUFjdGl2ZU1vbnRoKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoeWVhckNoYW5nZWQpIHtcclxuICAgICAgdGhpcy5jYWxjdWxhdGVDdXJyZW50TW9udGgoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodG91Y2hlZCkge1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlRm4oZGF0ZSk7XHJcbiAgICAgIHRoaXMub25Ub3VjaEZuKCk7XHJcbiAgICAgIHRoaXMubnpWYWx1ZUNoYW5nZS5lbWl0KGRhdGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRVcERheXNJbldlZWsoKTogdm9pZCB7XHJcbiAgICB0aGlzLmRheXNJbldlZWsgPSBbXTtcclxuICAgIGNvbnN0IHdlZWtTdGFydCA9IHN0YXJ0T2ZXZWVrKHRoaXMuYWN0aXZlRGF0ZSwgeyB3ZWVrU3RhcnRzT246IHRoaXMuZGF0ZUhlbHBlci5nZXRGaXJzdERheU9mV2VlaygpIH0pO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcclxuICAgICAgY29uc3QgZGF0ZSA9IGFkZERheXMod2Vla1N0YXJ0LCBpKTtcclxuICAgICAgY29uc3QgdGl0bGUgPSB0aGlzLmRhdGVIZWxwZXIuZm9ybWF0KGRhdGUsIHRoaXMuZGF0ZUhlbHBlci5yZWx5T25EYXRlUGlwZSA/ICdFJyA6ICdkZGQnKTtcclxuICAgICAgY29uc3QgbGFiZWwgPSB0aGlzLmRhdGVIZWxwZXIuZm9ybWF0KGRhdGUsIHRoaXMuZGF0ZUhlbHBlci5yZWx5T25EYXRlUGlwZSA/ICdFRUVFRUUnIDogJ2RkJyk7XHJcbiAgICAgIHRoaXMuZGF5c0luV2Vlay5wdXNoKHsgdGl0bGUsIGxhYmVsIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRVcE1vbnRoc0luWWVhcigpOiB2b2lkIHtcclxuICAgIHRoaXMubW9udGhzSW5ZZWFyID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEyOyBpKyspIHtcclxuICAgICAgY29uc3QgZGF0ZSA9IHNldE1vbnRoKHRoaXMuYWN0aXZlRGF0ZSwgaSk7XHJcbiAgICAgIGNvbnN0IHRpdGxlID0gdGhpcy5kYXRlSGVscGVyLmZvcm1hdChkYXRlLCAnTU1NJyk7XHJcbiAgICAgIGNvbnN0IGxhYmVsID0gdGhpcy5kYXRlSGVscGVyLmZvcm1hdChkYXRlLCAnTU1NJyk7XHJcbiAgICAgIGNvbnN0IHN0YXJ0ID0gc3RhcnRPZk1vbnRoKGRhdGUpO1xyXG4gICAgICB0aGlzLm1vbnRoc0luWWVhci5wdXNoKHsgdGl0bGUsIGxhYmVsLCBzdGFydCB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0VXBEYXRlTWF0cml4KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kYXRlTWF0cml4ID0gW107XHJcbiAgICBjb25zdCBtb250aFN0YXJ0ID0gc3RhcnRPZk1vbnRoKHRoaXMuYWN0aXZlRGF0ZSk7XHJcbiAgICBjb25zdCBtb250aEVuZCA9IGVuZE9mTW9udGgodGhpcy5hY3RpdmVEYXRlKTtcclxuICAgIGNvbnN0IHdlZWtEaWZmID1cclxuICAgICAgZGlmZmVyZW5jZUluQ2FsZW5kYXJXZWVrcyhtb250aEVuZCwgbW9udGhTdGFydCwgeyB3ZWVrU3RhcnRzT246IHRoaXMuZGF0ZUhlbHBlci5nZXRGaXJzdERheU9mV2VlaygpIH0pICsgMjtcclxuXHJcbiAgICBmb3IgKGxldCB3ZWVrID0gMDsgd2VlayA8IHdlZWtEaWZmOyB3ZWVrKyspIHtcclxuICAgICAgY29uc3Qgcm93OiBEYXRlQ2VsbENvbnRleHRbXSA9IFtdO1xyXG4gICAgICBjb25zdCB3ZWVrU3RhcnQgPSBhZGREYXlzKHRoaXMuY2FsZW5kYXJTdGFydCwgd2VlayAqIDcpO1xyXG5cclxuICAgICAgZm9yIChsZXQgZGF5ID0gMDsgZGF5IDwgNzsgZGF5KyspIHtcclxuICAgICAgICBjb25zdCBkYXRlID0gYWRkRGF5cyh3ZWVrU3RhcnQsIGRheSk7XHJcbiAgICAgICAgY29uc3QgbW9udGhEaWZmID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMoZGF0ZSwgdGhpcy5hY3RpdmVEYXRlKTtcclxuICAgICAgICBjb25zdCBkYXRlRm9ybWF0ID0gdGhpcy5kYXRlSGVscGVyLnJlbHlPbkRhdGVQaXBlXHJcbiAgICAgICAgICA/ICdsb25nRGF0ZSdcclxuICAgICAgICAgIDogdGhpcy5pMThuLmdldExvY2FsZURhdGEoJ0RhdGVQaWNrZXIubGFuZy5kYXRlRm9ybWF0JywgJ1lZWVktTU0tREQnKTtcclxuICAgICAgICBjb25zdCB0aXRsZSA9IHRoaXMuZGF0ZUhlbHBlci5mb3JtYXQoZGF0ZSwgZGF0ZUZvcm1hdCk7XHJcbiAgICAgICAgY29uc3QgbGFiZWwgPSB0aGlzLmRhdGVIZWxwZXIuZm9ybWF0KGRhdGUsIHRoaXMuZGF0ZUhlbHBlci5yZWx5T25EYXRlUGlwZSA/ICdkZCcgOiAnREQnKTtcclxuICAgICAgICBjb25zdCByZWwgPSBtb250aERpZmYgPT09IDAgPyAnY3VycmVudCcgOiBtb250aERpZmYgPCAwID8gJ2xhc3QnIDogJ25leHQnO1xyXG4gICAgICAgIHJvdy5wdXNoKHsgdGl0bGUsIGxhYmVsLCByZWwsIHZhbHVlOiBkYXRlIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZGF0ZU1hdHJpeC5wdXNoKHJvdyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNhbGN1bGF0ZUN1cnJlbnREYXRlKCk6IHZvaWQge1xyXG4gICAgaWYgKGlzVGhpc01vbnRoKHRoaXMuYWN0aXZlRGF0ZSkpIHtcclxuICAgICAgdGhpcy5jdXJyZW50RGF0ZVJvdyA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyV2Vla3ModGhpcy5jdXJyZW50RGF0ZSwgdGhpcy5jYWxlbmRhclN0YXJ0LCB7XHJcbiAgICAgICAgd2Vla1N0YXJ0c09uOiB0aGlzLmRhdGVIZWxwZXIuZ2V0Rmlyc3REYXlPZldlZWsoKVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5jdXJyZW50RGF0ZUNvbCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhcclxuICAgICAgICB0aGlzLmN1cnJlbnREYXRlLFxyXG4gICAgICAgIGFkZERheXModGhpcy5jYWxlbmRhclN0YXJ0LCB0aGlzLmN1cnJlbnREYXRlUm93ICogNylcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY3VycmVudERhdGVSb3cgPSAtMTtcclxuICAgICAgdGhpcy5jdXJyZW50RGF0ZUNvbCA9IC0xO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjYWxjdWxhdGVBY3RpdmVEYXRlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5hY3RpdmVEYXRlUm93ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJXZWVrcyh0aGlzLmFjdGl2ZURhdGUsIHRoaXMuY2FsZW5kYXJTdGFydCwge1xyXG4gICAgICB3ZWVrU3RhcnRzT246IHRoaXMuZGF0ZUhlbHBlci5nZXRGaXJzdERheU9mV2VlaygpXHJcbiAgICB9KTtcclxuICAgIHRoaXMuYWN0aXZlRGF0ZUNvbCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyh0aGlzLmFjdGl2ZURhdGUsIGFkZERheXModGhpcy5jYWxlbmRhclN0YXJ0LCB0aGlzLmFjdGl2ZURhdGVSb3cgKiA3KSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNhbGN1bGF0ZUN1cnJlbnRNb250aCgpOiB2b2lkIHtcclxuICAgIGlmIChpc1RoaXNZZWFyKHRoaXMuYWN0aXZlRGF0ZSkpIHtcclxuICAgICAgY29uc3QgeWVhclN0YXJ0ID0gc3RhcnRPZlllYXIodGhpcy5jdXJyZW50RGF0ZSk7XHJcbiAgICAgIGNvbnN0IG1vbnRoRGlmZiA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzKHRoaXMuY3VycmVudERhdGUsIHllYXJTdGFydCk7XHJcbiAgICAgIHRoaXMuY3VycmVudE1vbnRoUm93ID0gTWF0aC5mbG9vcihtb250aERpZmYgLyAzKTtcclxuICAgICAgdGhpcy5jdXJyZW50TW9udGhDb2wgPSBtb250aERpZmYgJSAzO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jdXJyZW50TW9udGhSb3cgPSAtMTtcclxuICAgICAgdGhpcy5jdXJyZW50TW9udGhDb2wgPSAtMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2FsY3VsYXRlQWN0aXZlTW9udGgoKTogdm9pZCB7XHJcbiAgICB0aGlzLmFjdGl2ZU1vbnRoUm93ID0gTWF0aC5mbG9vcih0aGlzLmFjdGl2ZURhdGUuZ2V0TW9udGgoKSAvIDMpO1xyXG4gICAgdGhpcy5hY3RpdmVNb250aENvbCA9IHRoaXMuYWN0aXZlRGF0ZS5nZXRNb250aCgpICUgMztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGF5Q2VsbENvbnRleHQge1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgbGFiZWw6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNb250aENlbGxDb250ZXh0IHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgc3RhcnQ6IERhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGF0ZUNlbGxDb250ZXh0IHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgcmVsOiAnbGFzdCcgfCAnY3VycmVudCcgfCAnbmV4dCc7XHJcbiAgdmFsdWU6IERhdGU7XHJcbn1cclxuIl19