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
export class CmacsCalendarComponent {
    /**
     * @param {?} i18n
     * @param {?} cdr
     * @param {?} dateHelper
     */
    constructor(i18n, cdr, dateHelper) {
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
        () => { });
        this.onTouchFn = (/**
         * @return {?}
         */
        () => { });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzValue(value) {
        this.updateDate(value, false);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzDateCell(value) {
        this.dateCell = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzDateFullCell(value) {
        this.dateFullCell = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzMonthCell(value) {
        this.monthCell = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzMonthFullCell(value) {
        this.monthFullCell = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzFullscreen(value) {
        this.fullscreen = coerceBooleanProperty(value);
    }
    /**
     * @return {?}
     */
    get nzFullscreen() {
        return this.fullscreen;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzCard(value) {
        this.fullscreen = !coerceBooleanProperty(value);
    }
    /**
     * @return {?}
     */
    get nzCard() {
        return !this.fullscreen;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dateCellChild(value) {
        if (value) {
            this.dateCell = value;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set dateFullCellChild(value) {
        if (value) {
            this.dateFullCell = value;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set monthCellChild(value) {
        if (value) {
            this.monthCell = value;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set monthFullCellChild(value) {
        if (value) {
            this.monthFullCell = value;
        }
    }
    /**
     * @private
     * @return {?}
     */
    get calendarStart() {
        return startOfWeek(startOfMonth(this.activeDate), { weekStartsOn: this.dateHelper.getFirstDayOfWeek() });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setUpDaysInWeek();
        this.setUpMonthsInYear();
        this.setUpDateMatrix();
        this.calculateCurrentDate();
        this.calculateActiveDate();
        this.calculateCurrentMonth();
        this.calculateActiveMonth();
    }
    /**
     * @param {?} mode
     * @return {?}
     */
    onModeChange(mode) {
        this.nzModeChange.emit(mode);
        this.nzPanelChange.emit({ date: this.activeDate, mode });
    }
    /**
     * @param {?} date
     * @return {?}
     */
    onDateSelect(date) {
        this.updateDate(date);
        this.nzSelectChange.emit(date);
    }
    /**
     * @param {?} year
     * @return {?}
     */
    onYearSelect(year) {
        /** @type {?} */
        const date = setYear(this.activeDate, year);
        this.updateDate(date);
        this.nzSelectChange.emit(date);
    }
    /**
     * @param {?} month
     * @return {?}
     */
    onMonthSelect(month) {
        /** @type {?} */
        const date = setMonth(this.activeDate, month);
        this.updateDate(date);
        this.nzSelectChange.emit(date);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.updateDate(value || new Date(), false);
        this.cdr.markForCheck();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChangeFn = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouchFn = fn;
    }
    /**
     * @private
     * @param {?} date
     * @param {?=} touched
     * @return {?}
     */
    updateDate(date, touched = true) {
        /** @type {?} */
        const dayChanged = !isSameDay(date, this.activeDate);
        /** @type {?} */
        const monthChanged = !isSameMonth(date, this.activeDate);
        /** @type {?} */
        const yearChanged = !isSameYear(date, this.activeDate);
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
    }
    /**
     * @private
     * @return {?}
     */
    setUpDaysInWeek() {
        this.daysInWeek = [];
        /** @type {?} */
        const weekStart = startOfWeek(this.activeDate, { weekStartsOn: this.dateHelper.getFirstDayOfWeek() });
        for (let i = 0; i < 7; i++) {
            /** @type {?} */
            const date = addDays(weekStart, i);
            /** @type {?} */
            const title = this.dateHelper.format(date, this.dateHelper.relyOnDatePipe ? 'E' : 'ddd');
            /** @type {?} */
            const label = this.dateHelper.format(date, this.dateHelper.relyOnDatePipe ? 'EEEEEE' : 'dd');
            this.daysInWeek.push({ title, label });
        }
    }
    /**
     * @private
     * @return {?}
     */
    setUpMonthsInYear() {
        this.monthsInYear = [];
        for (let i = 0; i < 12; i++) {
            /** @type {?} */
            const date = setMonth(this.activeDate, i);
            /** @type {?} */
            const title = this.dateHelper.format(date, 'MMM');
            /** @type {?} */
            const label = this.dateHelper.format(date, 'MMM');
            /** @type {?} */
            const start = startOfMonth(date);
            this.monthsInYear.push({ title, label, start });
        }
    }
    /**
     * @private
     * @return {?}
     */
    setUpDateMatrix() {
        this.dateMatrix = [];
        /** @type {?} */
        const monthStart = startOfMonth(this.activeDate);
        /** @type {?} */
        const monthEnd = endOfMonth(this.activeDate);
        /** @type {?} */
        const weekDiff = differenceInCalendarWeeks(monthEnd, monthStart, { weekStartsOn: this.dateHelper.getFirstDayOfWeek() }) + 2;
        for (let week = 0; week < weekDiff; week++) {
            /** @type {?} */
            const row = [];
            /** @type {?} */
            const weekStart = addDays(this.calendarStart, week * 7);
            for (let day = 0; day < 7; day++) {
                /** @type {?} */
                const date = addDays(weekStart, day);
                /** @type {?} */
                const monthDiff = differenceInCalendarMonths(date, this.activeDate);
                /** @type {?} */
                const dateFormat = this.dateHelper.relyOnDatePipe
                    ? 'longDate'
                    : this.i18n.getLocaleData('DatePicker.lang.dateFormat', 'YYYY-MM-DD');
                /** @type {?} */
                const title = this.dateHelper.format(date, dateFormat);
                /** @type {?} */
                const label = this.dateHelper.format(date, this.dateHelper.relyOnDatePipe ? 'dd' : 'DD');
                /** @type {?} */
                const rel = monthDiff === 0 ? 'current' : monthDiff < 0 ? 'last' : 'next';
                row.push({ title, label, rel, value: date });
            }
            this.dateMatrix.push(row);
        }
    }
    /**
     * @private
     * @return {?}
     */
    calculateCurrentDate() {
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
    }
    /**
     * @private
     * @return {?}
     */
    calculateActiveDate() {
        this.activeDateRow = differenceInCalendarWeeks(this.activeDate, this.calendarStart, {
            weekStartsOn: this.dateHelper.getFirstDayOfWeek()
        });
        this.activeDateCol = differenceInCalendarDays(this.activeDate, addDays(this.calendarStart, this.activeDateRow * 7));
    }
    /**
     * @private
     * @return {?}
     */
    calculateCurrentMonth() {
        if (isThisYear(this.activeDate)) {
            /** @type {?} */
            const yearStart = startOfYear(this.currentDate);
            /** @type {?} */
            const monthDiff = differenceInCalendarMonths(this.currentDate, yearStart);
            this.currentMonthRow = Math.floor(monthDiff / 3);
            this.currentMonthCol = monthDiff % 3;
        }
        else {
            this.currentMonthRow = -1;
            this.currentMonthCol = -1;
        }
    }
    /**
     * @private
     * @return {?}
     */
    calculateActiveMonth() {
        this.activeMonthRow = Math.floor(this.activeDate.getMonth() / 3);
        this.activeMonthCol = this.activeDate.getMonth() % 3;
    }
}
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
                        () => CmacsCalendarComponent)), multi: true }]
            }] }
];
/** @nocollapse */
CmacsCalendarComponent.ctorParameters = () => [
    { type: NzI18nService },
    { type: ChangeDetectorRef },
    { type: DateHelperService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy1jYWxlbmRhci9jbWFjcy1jYWxlbmRhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzlELE9BQU8sRUFDTCxVQUFVLEVBQ1YsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLFlBQVksRUFDWixXQUFXLEVBQ1gsS0FBSyxFQUVMLE1BQU0sRUFDTixXQUFXLEVBQ1gsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN6RSxPQUFPLEVBQ0wsT0FBTyxFQUNQLHdCQUF3QixFQUN4QiwwQkFBMEIsRUFDMUIseUJBQXlCLEVBQ3pCLFVBQVUsRUFDVixTQUFTLEVBQ1QsV0FBVyxFQUNYLFVBQVUsRUFDVixXQUFXLEVBQ1gsVUFBVSxFQUNWLFFBQVEsRUFDUixPQUFPLEVBQ1AsWUFBWSxFQUNaLFdBQVcsRUFDWCxXQUFXLEVBQ1osTUFBTSxVQUFVLENBQUM7QUFFbEIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLGFBQWEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRXRFLE9BQU8sRUFDTCxzQkFBc0IsSUFBSSxRQUFRLEVBQ2xDLDBCQUEwQixJQUFJLFlBQVksRUFDMUMsdUJBQXVCLElBQUksU0FBUyxFQUNwQywyQkFBMkIsSUFBSSxhQUFhLEVBQzdDLE1BQU0saUNBQWlDLENBQUM7QUFZekMsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7O0lBd0dqQyxZQUFvQixJQUFtQixFQUFVLEdBQXNCLEVBQVUsVUFBNkI7UUFBMUYsU0FBSSxHQUFKLElBQUksQ0FBZTtRQUFV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Q0FBYzs7SUFDZCw4QkFBaUM7O0lBQ2pDLGdDQUFZIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XHJcbmltcG9ydCB7XHJcbiAgZm9yd2FyZFJlZixcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgQ29udGVudENoaWxkLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBIb3N0QmluZGluZyxcclxuICBJbnB1dCxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHtcclxuICBhZGREYXlzLFxyXG4gIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyxcclxuICBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocyxcclxuICBkaWZmZXJlbmNlSW5DYWxlbmRhcldlZWtzLFxyXG4gIGVuZE9mTW9udGgsXHJcbiAgaXNTYW1lRGF5LFxyXG4gIGlzU2FtZU1vbnRoLFxyXG4gIGlzU2FtZVllYXIsXHJcbiAgaXNUaGlzTW9udGgsXHJcbiAgaXNUaGlzWWVhcixcclxuICBzZXRNb250aCxcclxuICBzZXRZZWFyLFxyXG4gIHN0YXJ0T2ZNb250aCxcclxuICBzdGFydE9mV2VlayxcclxuICBzdGFydE9mWWVhclxyXG59IGZyb20gJ2RhdGUtZm5zJztcclxuXHJcbmltcG9ydCB7IERhdGVIZWxwZXJTZXJ2aWNlLCBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuXHJcbmltcG9ydCB7XHJcbiAgQ21hY3NEYXRlQ2VsbERpcmVjdGl2ZSBhcyBEYXRlQ2VsbCxcclxuICBDbWFjc0RhdGVGdWxsQ2VsbERpcmVjdGl2ZSBhcyBEYXRlRnVsbENlbGwsXHJcbiAgQ21hY3NNb250aENlbGxEaXJlY3RpdmUgYXMgTW9udGhDZWxsLFxyXG4gIENtYWNzTW9udGhGdWxsQ2VsbERpcmVjdGl2ZSBhcyBNb250aEZ1bGxDZWxsXHJcbn0gZnJvbSAnLi9jbWFjcy1jYWxlbmRhci1jZWxsLmRpcmVjdGl2ZSc7XHJcblxyXG5leHBvcnQgdHlwZSBNb2RlVHlwZSA9ICdtb250aCcgfCAneWVhcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHNlbGVjdG9yOiAnY21hY3MtY2FsZW5kYXInLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NDYWxlbmRhcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLWNhbGVuZGFyLmNvbXBvbmVudC5odG1sJyxcclxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDbWFjc0NhbGVuZGFyQ29tcG9uZW50KSwgbXVsdGk6IHRydWUgfV1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzQ2FsZW5kYXJDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0IHtcclxuICBASW5wdXQoJ21vZGUnKSBuek1vZGU6IE1vZGVUeXBlID0gJ21vbnRoJztcclxuICBAT3V0cHV0KCdtb2RlQ2hhbmdlJykgcmVhZG9ubHkgbnpNb2RlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TW9kZVR5cGU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBPdXRwdXQoJ3BhbmVsQ2hhbmdlJykgcmVhZG9ubHkgbnpQYW5lbENoYW5nZTogRXZlbnRFbWl0dGVyPHsgZGF0ZTogRGF0ZTsgbW9kZTogTW9kZVR5cGUgfT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIEBPdXRwdXQoJ3NlbGVjdENoYW5nZScpIHJlYWRvbmx5IG56U2VsZWN0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8RGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIEBJbnB1dCgndmFsdWUnKSBzZXQgbnpWYWx1ZSh2YWx1ZTogRGF0ZSkge1xyXG4gICAgdGhpcy51cGRhdGVEYXRlKHZhbHVlLCBmYWxzZSk7XHJcbiAgfVxyXG4gIEBPdXRwdXQoJ3ZhbHVlQ2hhbmdlJykgcmVhZG9ubHkgbnpWYWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPERhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBASW5wdXQoJ2RhdGVDZWxsJylcclxuICBzZXQgbnpEYXRlQ2VsbCh2YWx1ZTogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IERhdGUgfT4pIHtcclxuICAgIHRoaXMuZGF0ZUNlbGwgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgnZGF0ZUZ1bGxDZWxsJylcclxuICBzZXQgbnpEYXRlRnVsbENlbGwodmFsdWU6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBEYXRlIH0+KSB7XHJcbiAgICB0aGlzLmRhdGVGdWxsQ2VsbCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KCdtb250aENlbGwnKVxyXG4gIHNldCBuek1vbnRoQ2VsbCh2YWx1ZTogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IERhdGUgfT4pIHtcclxuICAgIHRoaXMubW9udGhDZWxsID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoJ21vbnRoRnVsbENlbGwnKVxyXG4gIHNldCBuek1vbnRoRnVsbENlbGwodmFsdWU6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBEYXRlIH0+KSB7XHJcbiAgICB0aGlzLm1vbnRoRnVsbENlbGwgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgnZnVsbFNjcmVlbicpXHJcbiAgc2V0IG56RnVsbHNjcmVlbih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5mdWxsc2NyZWVuID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcclxuICB9XHJcbiAgZ2V0IG56RnVsbHNjcmVlbigpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmZ1bGxzY3JlZW47XHJcbiAgfVxyXG5cclxuICBASW5wdXQoJ2NhcmQnKVxyXG4gIHNldCBuekNhcmQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuZnVsbHNjcmVlbiA9ICFjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xyXG4gIH1cclxuICBnZXQgbnpDYXJkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICF0aGlzLmZ1bGxzY3JlZW47XHJcbiAgfVxyXG5cclxuICBAQ29udGVudENoaWxkKERhdGVDZWxsLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pXHJcbiAgc2V0IGRhdGVDZWxsQ2hpbGQodmFsdWU6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBEYXRlIH0+KSB7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgdGhpcy5kYXRlQ2VsbCA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQENvbnRlbnRDaGlsZChEYXRlRnVsbENlbGwsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSlcclxuICBzZXQgZGF0ZUZ1bGxDZWxsQ2hpbGQodmFsdWU6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBEYXRlIH0+KSB7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgdGhpcy5kYXRlRnVsbENlbGwgPSB2YWx1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoTW9udGhDZWxsLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pXHJcbiAgc2V0IG1vbnRoQ2VsbENoaWxkKHZhbHVlOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogRGF0ZSB9Pikge1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMubW9udGhDZWxsID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAQ29udGVudENoaWxkKE1vbnRoRnVsbENlbGwsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSlcclxuICBzZXQgbW9udGhGdWxsQ2VsbENoaWxkKHZhbHVlOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogRGF0ZSB9Pikge1xyXG4gICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgIHRoaXMubW9udGhGdWxsQ2VsbCA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtZnVsbGNhbGVuZGFyLS1mdWxsc2NyZWVuJylcclxuICBmdWxsc2NyZWVuID0gdHJ1ZTtcclxuXHJcbiAgZGF5c0luV2VlazogRGF5Q2VsbENvbnRleHRbXSA9IFtdO1xyXG4gIG1vbnRoc0luWWVhcjogTW9udGhDZWxsQ29udGV4dFtdID0gW107XHJcbiAgZGF0ZU1hdHJpeDogRGF0ZUNlbGxDb250ZXh0W11bXSA9IFtdO1xyXG4gIGFjdGl2ZURhdGU6IERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gIGN1cnJlbnREYXRlUm93OiBudW1iZXIgPSAtMTtcclxuICBjdXJyZW50RGF0ZUNvbDogbnVtYmVyID0gLTE7XHJcbiAgYWN0aXZlRGF0ZVJvdzogbnVtYmVyID0gLTE7XHJcbiAgYWN0aXZlRGF0ZUNvbDogbnVtYmVyID0gLTE7XHJcbiAgY3VycmVudE1vbnRoUm93OiBudW1iZXIgPSAtMTtcclxuICBjdXJyZW50TW9udGhDb2w6IG51bWJlciA9IC0xO1xyXG4gIGFjdGl2ZU1vbnRoUm93OiBudW1iZXIgPSAtMTtcclxuICBhY3RpdmVNb250aENvbDogbnVtYmVyID0gLTE7XHJcbiAgZGF0ZUNlbGw6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBEYXRlIH0+IHwgbnVsbCA9IG51bGw7XHJcbiAgZGF0ZUZ1bGxDZWxsOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogRGF0ZSB9PiB8IG51bGwgPSBudWxsO1xyXG4gIG1vbnRoQ2VsbDogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6IERhdGUgfT4gfCBudWxsID0gbnVsbDtcclxuICBtb250aEZ1bGxDZWxsOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogRGF0ZSB9PiB8IG51bGwgPSBudWxsO1xyXG5cclxuICBwcml2YXRlIGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcclxuICBwcml2YXRlIG9uQ2hhbmdlRm46IChkYXRlOiBEYXRlKSA9PiB2b2lkID0gKCkgPT4geyB9O1xyXG4gIHByaXZhdGUgb25Ub3VjaEZuOiAoKSA9PiB2b2lkID0gKCkgPT4geyB9O1xyXG5cclxuICBwcml2YXRlIGdldCBjYWxlbmRhclN0YXJ0KCk6IERhdGUge1xyXG4gICAgcmV0dXJuIHN0YXJ0T2ZXZWVrKHN0YXJ0T2ZNb250aCh0aGlzLmFjdGl2ZURhdGUpLCB7IHdlZWtTdGFydHNPbjogdGhpcy5kYXRlSGVscGVyLmdldEZpcnN0RGF5T2ZXZWVrKCkgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBkYXRlSGVscGVyOiBEYXRlSGVscGVyU2VydmljZSkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRVcERheXNJbldlZWsoKTtcclxuICAgIHRoaXMuc2V0VXBNb250aHNJblllYXIoKTtcclxuICAgIHRoaXMuc2V0VXBEYXRlTWF0cml4KCk7XHJcbiAgICB0aGlzLmNhbGN1bGF0ZUN1cnJlbnREYXRlKCk7XHJcbiAgICB0aGlzLmNhbGN1bGF0ZUFjdGl2ZURhdGUoKTtcclxuICAgIHRoaXMuY2FsY3VsYXRlQ3VycmVudE1vbnRoKCk7XHJcbiAgICB0aGlzLmNhbGN1bGF0ZUFjdGl2ZU1vbnRoKCk7XHJcbiAgfVxyXG5cclxuICBvbk1vZGVDaGFuZ2UobW9kZTogTW9kZVR5cGUpOiB2b2lkIHtcclxuICAgIHRoaXMubnpNb2RlQ2hhbmdlLmVtaXQobW9kZSk7XHJcbiAgICB0aGlzLm56UGFuZWxDaGFuZ2UuZW1pdCh7IGRhdGU6IHRoaXMuYWN0aXZlRGF0ZSwgbW9kZSB9KTtcclxuICB9XHJcblxyXG4gIG9uRGF0ZVNlbGVjdChkYXRlOiBEYXRlKTogdm9pZCB7XHJcbiAgICB0aGlzLnVwZGF0ZURhdGUoZGF0ZSk7XHJcbiAgICB0aGlzLm56U2VsZWN0Q2hhbmdlLmVtaXQoZGF0ZSk7XHJcbiAgfVxyXG5cclxuICBvblllYXJTZWxlY3QoeWVhcjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBjb25zdCBkYXRlID0gc2V0WWVhcih0aGlzLmFjdGl2ZURhdGUsIHllYXIpO1xyXG4gICAgdGhpcy51cGRhdGVEYXRlKGRhdGUpO1xyXG4gICAgdGhpcy5uelNlbGVjdENoYW5nZS5lbWl0KGRhdGUpO1xyXG4gIH1cclxuXHJcbiAgb25Nb250aFNlbGVjdChtb250aDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBjb25zdCBkYXRlID0gc2V0TW9udGgodGhpcy5hY3RpdmVEYXRlLCBtb250aCk7XHJcbiAgICB0aGlzLnVwZGF0ZURhdGUoZGF0ZSk7XHJcbiAgICB0aGlzLm56U2VsZWN0Q2hhbmdlLmVtaXQoZGF0ZSk7XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBEYXRlIHwgbnVsbCk6IHZvaWQge1xyXG4gICAgdGhpcy51cGRhdGVEYXRlKHZhbHVlIHx8IG5ldyBEYXRlKCksIGZhbHNlKTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKGRhdGU6IERhdGUpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2VGbiA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaEZuID0gZm47XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZURhdGUoZGF0ZTogRGF0ZSwgdG91Y2hlZDogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcclxuICAgIGNvbnN0IGRheUNoYW5nZWQgPSAhaXNTYW1lRGF5KGRhdGUsIHRoaXMuYWN0aXZlRGF0ZSk7XHJcbiAgICBjb25zdCBtb250aENoYW5nZWQgPSAhaXNTYW1lTW9udGgoZGF0ZSwgdGhpcy5hY3RpdmVEYXRlKTtcclxuICAgIGNvbnN0IHllYXJDaGFuZ2VkID0gIWlzU2FtZVllYXIoZGF0ZSwgdGhpcy5hY3RpdmVEYXRlKTtcclxuXHJcbiAgICB0aGlzLmFjdGl2ZURhdGUgPSBkYXRlO1xyXG5cclxuICAgIGlmIChkYXlDaGFuZ2VkKSB7XHJcbiAgICAgIHRoaXMuY2FsY3VsYXRlQWN0aXZlRGF0ZSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKG1vbnRoQ2hhbmdlZCkge1xyXG4gICAgICB0aGlzLnNldFVwRGF0ZU1hdHJpeCgpO1xyXG4gICAgICB0aGlzLmNhbGN1bGF0ZUN1cnJlbnREYXRlKCk7XHJcbiAgICAgIHRoaXMuY2FsY3VsYXRlQWN0aXZlTW9udGgoKTtcclxuICAgIH1cclxuICAgIGlmICh5ZWFyQ2hhbmdlZCkge1xyXG4gICAgICB0aGlzLmNhbGN1bGF0ZUN1cnJlbnRNb250aCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0b3VjaGVkKSB7XHJcbiAgICAgIHRoaXMub25DaGFuZ2VGbihkYXRlKTtcclxuICAgICAgdGhpcy5vblRvdWNoRm4oKTtcclxuICAgICAgdGhpcy5uelZhbHVlQ2hhbmdlLmVtaXQoZGF0ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFVwRGF5c0luV2VlaygpOiB2b2lkIHtcclxuICAgIHRoaXMuZGF5c0luV2VlayA9IFtdO1xyXG4gICAgY29uc3Qgd2Vla1N0YXJ0ID0gc3RhcnRPZldlZWsodGhpcy5hY3RpdmVEYXRlLCB7IHdlZWtTdGFydHNPbjogdGhpcy5kYXRlSGVscGVyLmdldEZpcnN0RGF5T2ZXZWVrKCkgfSk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xyXG4gICAgICBjb25zdCBkYXRlID0gYWRkRGF5cyh3ZWVrU3RhcnQsIGkpO1xyXG4gICAgICBjb25zdCB0aXRsZSA9IHRoaXMuZGF0ZUhlbHBlci5mb3JtYXQoZGF0ZSwgdGhpcy5kYXRlSGVscGVyLnJlbHlPbkRhdGVQaXBlID8gJ0UnIDogJ2RkZCcpO1xyXG4gICAgICBjb25zdCBsYWJlbCA9IHRoaXMuZGF0ZUhlbHBlci5mb3JtYXQoZGF0ZSwgdGhpcy5kYXRlSGVscGVyLnJlbHlPbkRhdGVQaXBlID8gJ0VFRUVFRScgOiAnZGQnKTtcclxuICAgICAgdGhpcy5kYXlzSW5XZWVrLnB1c2goeyB0aXRsZSwgbGFiZWwgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFVwTW9udGhzSW5ZZWFyKCk6IHZvaWQge1xyXG4gICAgdGhpcy5tb250aHNJblllYXIgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTI7IGkrKykge1xyXG4gICAgICBjb25zdCBkYXRlID0gc2V0TW9udGgodGhpcy5hY3RpdmVEYXRlLCBpKTtcclxuICAgICAgY29uc3QgdGl0bGUgPSB0aGlzLmRhdGVIZWxwZXIuZm9ybWF0KGRhdGUsICdNTU0nKTtcclxuICAgICAgY29uc3QgbGFiZWwgPSB0aGlzLmRhdGVIZWxwZXIuZm9ybWF0KGRhdGUsICdNTU0nKTtcclxuICAgICAgY29uc3Qgc3RhcnQgPSBzdGFydE9mTW9udGgoZGF0ZSk7XHJcbiAgICAgIHRoaXMubW9udGhzSW5ZZWFyLnB1c2goeyB0aXRsZSwgbGFiZWwsIHN0YXJ0IH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRVcERhdGVNYXRyaXgoKTogdm9pZCB7XHJcbiAgICB0aGlzLmRhdGVNYXRyaXggPSBbXTtcclxuICAgIGNvbnN0IG1vbnRoU3RhcnQgPSBzdGFydE9mTW9udGgodGhpcy5hY3RpdmVEYXRlKTtcclxuICAgIGNvbnN0IG1vbnRoRW5kID0gZW5kT2ZNb250aCh0aGlzLmFjdGl2ZURhdGUpO1xyXG4gICAgY29uc3Qgd2Vla0RpZmYgPVxyXG4gICAgICBkaWZmZXJlbmNlSW5DYWxlbmRhcldlZWtzKG1vbnRoRW5kLCBtb250aFN0YXJ0LCB7IHdlZWtTdGFydHNPbjogdGhpcy5kYXRlSGVscGVyLmdldEZpcnN0RGF5T2ZXZWVrKCkgfSkgKyAyO1xyXG5cclxuICAgIGZvciAobGV0IHdlZWsgPSAwOyB3ZWVrIDwgd2Vla0RpZmY7IHdlZWsrKykge1xyXG4gICAgICBjb25zdCByb3c6IERhdGVDZWxsQ29udGV4dFtdID0gW107XHJcbiAgICAgIGNvbnN0IHdlZWtTdGFydCA9IGFkZERheXModGhpcy5jYWxlbmRhclN0YXJ0LCB3ZWVrICogNyk7XHJcblxyXG4gICAgICBmb3IgKGxldCBkYXkgPSAwOyBkYXkgPCA3OyBkYXkrKykge1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBhZGREYXlzKHdlZWtTdGFydCwgZGF5KTtcclxuICAgICAgICBjb25zdCBtb250aERpZmYgPSBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocyhkYXRlLCB0aGlzLmFjdGl2ZURhdGUpO1xyXG4gICAgICAgIGNvbnN0IGRhdGVGb3JtYXQgPSB0aGlzLmRhdGVIZWxwZXIucmVseU9uRGF0ZVBpcGVcclxuICAgICAgICAgID8gJ2xvbmdEYXRlJ1xyXG4gICAgICAgICAgOiB0aGlzLmkxOG4uZ2V0TG9jYWxlRGF0YSgnRGF0ZVBpY2tlci5sYW5nLmRhdGVGb3JtYXQnLCAnWVlZWS1NTS1ERCcpO1xyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gdGhpcy5kYXRlSGVscGVyLmZvcm1hdChkYXRlLCBkYXRlRm9ybWF0KTtcclxuICAgICAgICBjb25zdCBsYWJlbCA9IHRoaXMuZGF0ZUhlbHBlci5mb3JtYXQoZGF0ZSwgdGhpcy5kYXRlSGVscGVyLnJlbHlPbkRhdGVQaXBlID8gJ2RkJyA6ICdERCcpO1xyXG4gICAgICAgIGNvbnN0IHJlbCA9IG1vbnRoRGlmZiA9PT0gMCA/ICdjdXJyZW50JyA6IG1vbnRoRGlmZiA8IDAgPyAnbGFzdCcgOiAnbmV4dCc7XHJcbiAgICAgICAgcm93LnB1c2goeyB0aXRsZSwgbGFiZWwsIHJlbCwgdmFsdWU6IGRhdGUgfSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5kYXRlTWF0cml4LnB1c2gocm93KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2FsY3VsYXRlQ3VycmVudERhdGUoKTogdm9pZCB7XHJcbiAgICBpZiAoaXNUaGlzTW9udGgodGhpcy5hY3RpdmVEYXRlKSkge1xyXG4gICAgICB0aGlzLmN1cnJlbnREYXRlUm93ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJXZWVrcyh0aGlzLmN1cnJlbnREYXRlLCB0aGlzLmNhbGVuZGFyU3RhcnQsIHtcclxuICAgICAgICB3ZWVrU3RhcnRzT246IHRoaXMuZGF0ZUhlbHBlci5nZXRGaXJzdERheU9mV2VlaygpXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmN1cnJlbnREYXRlQ29sID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKFxyXG4gICAgICAgIHRoaXMuY3VycmVudERhdGUsXHJcbiAgICAgICAgYWRkRGF5cyh0aGlzLmNhbGVuZGFyU3RhcnQsIHRoaXMuY3VycmVudERhdGVSb3cgKiA3KVxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jdXJyZW50RGF0ZVJvdyA9IC0xO1xyXG4gICAgICB0aGlzLmN1cnJlbnREYXRlQ29sID0gLTE7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNhbGN1bGF0ZUFjdGl2ZURhdGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLmFjdGl2ZURhdGVSb3cgPSBkaWZmZXJlbmNlSW5DYWxlbmRhcldlZWtzKHRoaXMuYWN0aXZlRGF0ZSwgdGhpcy5jYWxlbmRhclN0YXJ0LCB7XHJcbiAgICAgIHdlZWtTdGFydHNPbjogdGhpcy5kYXRlSGVscGVyLmdldEZpcnN0RGF5T2ZXZWVrKClcclxuICAgIH0pO1xyXG4gICAgdGhpcy5hY3RpdmVEYXRlQ29sID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKHRoaXMuYWN0aXZlRGF0ZSwgYWRkRGF5cyh0aGlzLmNhbGVuZGFyU3RhcnQsIHRoaXMuYWN0aXZlRGF0ZVJvdyAqIDcpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2FsY3VsYXRlQ3VycmVudE1vbnRoKCk6IHZvaWQge1xyXG4gICAgaWYgKGlzVGhpc1llYXIodGhpcy5hY3RpdmVEYXRlKSkge1xyXG4gICAgICBjb25zdCB5ZWFyU3RhcnQgPSBzdGFydE9mWWVhcih0aGlzLmN1cnJlbnREYXRlKTtcclxuICAgICAgY29uc3QgbW9udGhEaWZmID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHModGhpcy5jdXJyZW50RGF0ZSwgeWVhclN0YXJ0KTtcclxuICAgICAgdGhpcy5jdXJyZW50TW9udGhSb3cgPSBNYXRoLmZsb29yKG1vbnRoRGlmZiAvIDMpO1xyXG4gICAgICB0aGlzLmN1cnJlbnRNb250aENvbCA9IG1vbnRoRGlmZiAlIDM7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmN1cnJlbnRNb250aFJvdyA9IC0xO1xyXG4gICAgICB0aGlzLmN1cnJlbnRNb250aENvbCA9IC0xO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjYWxjdWxhdGVBY3RpdmVNb250aCgpOiB2b2lkIHtcclxuICAgIHRoaXMuYWN0aXZlTW9udGhSb3cgPSBNYXRoLmZsb29yKHRoaXMuYWN0aXZlRGF0ZS5nZXRNb250aCgpIC8gMyk7XHJcbiAgICB0aGlzLmFjdGl2ZU1vbnRoQ29sID0gdGhpcy5hY3RpdmVEYXRlLmdldE1vbnRoKCkgJSAzO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEYXlDZWxsQ29udGV4dCB7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBsYWJlbDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1vbnRoQ2VsbENvbnRleHQge1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgbGFiZWw6IHN0cmluZztcclxuICBzdGFydDogRGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEYXRlQ2VsbENvbnRleHQge1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgbGFiZWw6IHN0cmluZztcclxuICByZWw6ICdsYXN0JyB8ICdjdXJyZW50JyB8ICduZXh0JztcclxuICB2YWx1ZTogRGF0ZTtcclxufVxyXG4iXX0=