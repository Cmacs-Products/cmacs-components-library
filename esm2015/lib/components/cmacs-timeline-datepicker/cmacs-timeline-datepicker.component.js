/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewEncapsulation } from '@angular/core';
import { NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { TabChangeEvent } from "../cmacs-tabs/cmacs-tabset.component";
import { getISOWeek, getISOWeeksInYear, getISOYear, getMonth } from "date-fns";
import { InputBoolean } from "ng-zorro-antd";
import * as moment_ from 'moment';
import 'moment/locale/en-ie';
/** @type {?} */
const moment = moment_;
export class CmacsTimelineDatepickerComponent {
    /**
     * @param {?} renderer
     * @param {?} nzUpdateHostClassService
     * @param {?} elementRef
     * @param {?} cdr
     */
    constructor(renderer, nzUpdateHostClassService, elementRef, cdr) {
        this.renderer = renderer;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.indexToSelect = 0;
        this.el = this.elementRef.nativeElement;
        this._selectedIndex = null;
        this._selectedRangeIdxs = [];
        this._date = new Date();
        this._range = [];
        this.gutter = 2;
        this.mode = 'week';
        this.restrictMode = false;
        this.ranged = false;
        this.weekLocale = { week: { dow: 0, doy: 6 } };
        this.locale = 'en';
        this.onNextClick = new EventEmitter();
        this.onPrevClick = new EventEmitter();
        this.selectChange = new EventEmitter(true);
        this.selectedIndexChange = new EventEmitter();
        this.dateChange = new EventEmitter();
        this.rangeChange = new EventEmitter();
        this.modeChange = new EventEmitter();
        this.modeOptions = [
            { title: 'Week', value: 'week', selected: true },
            { title: 'Month', value: 'month', selected: false }
        ];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set selectedIndex(value) {
        this.indexToSelect = value;
    }
    /**
     * @return {?}
     */
    get selectedIndex() {
        return this._selectedIndex;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set selectedRangeIdxs(value) {
        this._selectedRangeIdxs = value;
    }
    /**
     * @return {?}
     */
    get selectedRangeIdxs() {
        return this._selectedRangeIdxs;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set date(value) {
        if (value !== null) {
            this._date = value;
            if (this.mode === 'week') {
                this.selectedIndex = this.getWeekNumber(value) - 1;
            }
            else if (this.mode === 'month') {
                this.selectedIndex = value.getMonth();
            }
        }
    }
    /**
     * @param {?} range
     * @return {?}
     */
    set range(range) {
        if (range !== null && range.length) {
            this._range = range;
            /** @type {?} */
            let stDateYear = getISOYear(this.range[0]);
            /** @type {?} */
            const ndDateYear = getISOYear(this.range[1]);
            if (getISOYear(this.range[0]) === getISOYear(this.range[1])) {
                if (this.mode === 'week') {
                    this.selectedRangeIdxs = [getISOWeek(this._range[0]) - 1, getISOWeek(this._range[1]) - 1];
                }
                else {
                    this.selectedRangeIdxs = [getMonth(this._range[0]), getMonth(this._range[1])];
                }
            }
            else {
                if (this.mode === 'week') {
                    /** @type {?} */
                    let sumWeeks = 0;
                    while (ndDateYear - stDateYear) {
                        sumWeeks += getISOWeeksInYear(new Date(stDateYear));
                        stDateYear++;
                    }
                    this.selectedRangeIdxs = [getISOWeek(this._range[0]) - 1, sumWeeks + getISOWeek(this._range[1]) - 1];
                }
                else {
                    this.selectedRangeIdxs = [getMonth(this._range[0]), 12 * (ndDateYear - stDateYear) + getMonth(this._range[1])];
                }
            }
            this.selectedIndex = this._selectedRangeIdxs[0];
            this.listOfNzTabComponent = this.getValuesSlider();
        }
    }
    /**
     * @return {?}
     */
    get range() {
        return this._range;
    }
    /**
     * @param {?} range
     * @return {?}
     */
    onChange(range) {
        if (range !== null) {
            this.range = range;
            this.rangeChange.emit(range);
        }
    }
    /**
     * @return {?}
     */
    get date() {
        return this._date;
    }
    /**
     * @param {?} result
     * @return {?}
     */
    getWeek(result) {
        if (result !== null) {
            this.dateChange.emit(result);
        }
    }
    /**
     * @return {?}
     */
    setClassMap() {
        this.nzUpdateHostClassService.updateHostClass(this.el, {
            [`ant-tabs`]: true,
            [`ant-tabs-line`]: true
        });
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getWeekNumber(date) {
        /** @type {?} */
        const month = moment(date).month();
        moment.updateLocale(this.locale, this.weekLocale);
        /** @type {?} */
        const week = moment(date).week();
        /** @type {?} */
        const weeksInYear = getISOWeeksInYear(date);
        if (month === 11 && week === 1) {
            return weeksInYear;
        }
        return week;
    }
    /**
     * @param {?} index
     * @param {?} disabled
     * @return {?}
     */
    clickLabel(index, disabled) {
        if (!disabled && !this.ranged && this._date !== null) {
            this.selectedIndex = index;
            if (this.mode === 'week') {
                /** @type {?} */
                let d = new Date(this._date.getFullYear(), 0, 1);
                d.setDate(d.getDate() + (index * 7));
                this.date = d;
                this.dateChange.emit(this.date);
            }
            if (this.mode === 'month') {
                /** @type {?} */
                let d = new Date(this._date.getFullYear(), index, 1);
                this.date = d;
                this.dateChange.emit(this.date);
            }
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    createChangeEvent(index) {
        /** @type {?} */
        const event = new TabChangeEvent();
        event.index = index;
        if (this.listOfNzTabComponent && this.listOfNzTabComponent.length) {
            event.tab = this.listOfNzTabComponent[index];
            this.listOfNzTabComponent.forEach((/**
             * @param {?} item
             * @param {?} i
             * @return {?}
             */
            (item, i) => {
                if (i !== index) {
                    item.deselect.emit();
                }
            }));
            event.tab.select.emit();
        }
        return event;
    }
    /**
     * Clamps the given index to the bounds of 0 and the tabs length.
     * @private
     * @param {?} index
     * @return {?}
     */
    clampTabIndex(index) {
        // Note the `|| 0`, which ensures that values like NaN can't get through
        // and which would otherwise throw the component into an infinite loop
        // (since Math.max(NaN, 0) === NaN).
        return Math.min(this.listOfNzTabComponent.length - 1, Math.max(index || 0, 0));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setClassMap();
        this.updateSelectedMode();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.mode) {
            this.updateSelectedMode();
        }
    }
    /**
     * @return {?}
     */
    updateSelectedMode() {
        this.modeOptions.forEach((/**
         * @param {?} mode
         * @return {?}
         */
        mode => {
            mode.selected = mode.value === this.mode;
        }));
        this.listOfNzTabComponent = this.getValuesSlider();
        if (this.ranged) {
            this.range = this.range;
        }
    }
    /**
     * @return {?}
     */
    getValuesSlider() {
        if (this.mode === 'week' && !this.ranged) {
            this.date = this.date;
            return this.getWeeksInYear(this.date);
        }
        else if (this.mode === 'month') {
            this.date = this.date;
            if (this.range.length) {
                /** @type {?} */
                let stDateYear = getISOYear(this.range[0]);
                /** @type {?} */
                const ndDateYear = getISOYear(this.range[1]);
                if (stDateYear !== ndDateYear) {
                    /** @type {?} */
                    let rangedMonth = this.getDefaultMonths();
                    while (ndDateYear - stDateYear) {
                        stDateYear++;
                        rangedMonth = rangedMonth.concat(this.getDefaultMonths());
                    }
                    return rangedMonth;
                }
                return this.getDefaultMonths();
            }
            return this.getDefaultMonths();
        }
        else if (this.mode === 'week' && this.ranged) {
            if (this.range.length) {
                /** @type {?} */
                let stDateYear = getISOYear(this.range[0]);
                /** @type {?} */
                const ndDateYear = getISOYear(this.range[1]);
                if (stDateYear !== ndDateYear) {
                    /** @type {?} */
                    let rangedWeeks = this.getWeeksInYear(new Date(stDateYear));
                    while (ndDateYear - stDateYear) {
                        rangedWeeks = rangedWeeks.concat(this.getWeeksInYear(new Date(stDateYear)));
                        stDateYear++;
                    }
                    return rangedWeeks;
                }
                return this.getWeeksInYear(this.range[0]);
            }
            return this.getWeeksInYear(new Date());
        }
    }
    /**
     * @return {?}
     */
    getDefaultMonths() {
        return [{ title: 'Jan' }, { title: 'Feb' }, { title: 'Mar' }, { title: 'Apr' }, { title: 'May' }, { title: 'Jun' },
            { title: 'Jul' }, { title: 'Aug' }, { title: 'Sep' }, { title: 'Oct' }, { title: 'Nov' }, { title: 'Dec' }];
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getWeeksInYear(date) {
        /** @type {?} */
        let temp = [];
        /** @type {?} */
        const length = getISOWeeksInYear(date);
        for (let i = 0; i < length; i++) {
            temp.push({ title: this.formatWeekNumber(i + 1) });
        }
        return temp;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    formatWeekNumber(value) {
        return ("0" + value).slice(-2);
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        //this.updateSlider();
        if (this.listOfNzTabComponent && this.listOfNzTabComponent.length) {
            // Don't clamp the `indexToSelect` immediately in the setter because it can happen that
            // the amount of tabs changes before the actual change detection runs.
            /** @type {?} */
            const indexToSelect = (this.indexToSelect = this.clampTabIndex(this.indexToSelect));
            // If there is a change in selected index, emit a change event. Should not trigger if
            // the selected index has not yet been initialized.
            if (this._selectedIndex !== indexToSelect) {
                /** @type {?} */
                const isFirstRun = this._selectedIndex == null;
                /*if (!isFirstRun) {
                  this.selectChange.emit(this.createChangeEvent(indexToSelect));
                }*/
                // Changing these values after change detection has run
                // since the checked content may contain references to them.
                Promise.resolve().then((/**
                 * @return {?}
                 */
                () => {
                    this.listOfNzTabComponent.forEach((/**
                     * @param {?} tab
                     * @param {?} index
                     * @return {?}
                     */
                    (tab, index) => (tab.isActive = index === indexToSelect)));
                    if (!isFirstRun) {
                        this.selectedIndexChange.emit(indexToSelect);
                    }
                }));
            }
            // Setup the position for each tab and optionally setup an origin on the next selected tab.
            this.listOfNzTabComponent.forEach((/**
             * @param {?} tab
             * @param {?} index
             * @return {?}
             */
            (tab, index) => {
                tab.position = index - indexToSelect;
                // If there is already a selected tab, then set up an origin for the next selected tab
                // if it doesn't have one already.
                if (this._selectedIndex != null && tab.position === 0 && !tab.origin) {
                    tab.origin = indexToSelect - this._selectedIndex;
                }
            }));
            if (this._selectedIndex !== indexToSelect) {
                this._selectedIndex = indexToSelect;
                this.cdr.markForCheck();
            }
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    customSelect(index) {
        this.modeOptions.forEach((/**
         * @param {?} option
         * @return {?}
         */
        (option) => {
            option.selected = false;
        }));
        this.modeOptions[index].selected = true;
        this.mode = (/** @type {?} */ (this.modeOptions[index].value));
        this.modeChange.emit(this.mode);
        this.listOfNzTabComponent = this.getValuesSlider();
        if (this.ranged) {
            this.range = this.range;
        }
    }
    /**
     * @return {?}
     */
    getSelected() {
        return this.modeOptions.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => item.selected));
    }
    /**
     * @param {?} result
     * @return {?}
     */
    getMonth(result) {
        this.dateChange.emit(result);
    }
}
CmacsTimelineDatepickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'cmacs-timeline-datepicker',
                exportAs: 'cmacsTimelineDatepicker',
                template: "<div class=\"cmacs-timeline-item cmacs-timeline-item-dropdown\" *ngIf=\"!restrictMode\">\r\n  <cmacs-dropdown [trigger]=\"'click'\" [cmacsOpen]=\"true\" style=\"display: inline-flex\">\r\n    <a cmacs-dropdown class=\"cmacs-dropdowm-timeline-datepicker\">\r\n      <div class=\"cmacs-open-dropdown-wrapper\" style=\"width: 80px;\">\r\n        {{getSelected().length ? getSelected()[0].title : 'Select'}} <i class=\"iconArrowLarge-Solid-Down\"></i>\r\n      </div>\r\n    </a>\r\n\r\n    <ul cmacs-menu style=\"min-width: 125px\">\r\n      <li *ngFor=\"let option of modeOptions; index as i\" cmacs-menu-item (click)=\"customSelect(i)\">\r\n        <i [style.opacity]=\"option.selected ? 1 : 0\" nz-icon type=\"check\"></i>\r\n        <span>{{option.title}}</span>\r\n      </li>\r\n    </ul>\r\n  </cmacs-dropdown>\r\n</div>\r\n\r\n<div class=\"cmacs-timeline-item cmacs-timeline-item-dropdown\" *ngIf=\"restrictMode\">\r\n  <a class=\"cmacs-dropdowm-timeline-datepicker\">\r\n    <div class=\"cmacs-open-dropdown-wrapper\" style=\"width: 80px;\">\r\n      {{getSelected().length ? getSelected()[0].title : 'Select'}}\r\n    </div>\r\n  </a>\r\n</div>\r\n\r\n<div class=\"cmacs-timeline-item\" style=\"margin-right: 10px; max-width: calc(100% - 160px - 16px);\">\r\n  <div nz-tabs-nav\r\n       role=\"tablist\"\r\n       tabindex=\"0\"\r\n       class=\"ant-tabs-bar ant-tabs-top-bar cmacs-timeline-datepicker-slider\"\r\n       [nzType]=\"'line'\"\r\n       [nzShowPagination]=\"true\"\r\n       [nzPositionMode]=\"'horizontal'\"\r\n       [nzAnimated]=\"true\"\r\n       [nzHideBar]=\"true\"\r\n       [selectedIndex]=\"selectedIndex\"\r\n       (nzOnNextClick)=\"onNextClick.emit()\"\r\n       (nzOnPrevClick)=\"onPrevClick.emit()\">\r\n    <div nz-tab-label\r\n         role=\"tab\"\r\n         [style.margin-right.px]=\"gutter\"\r\n         class=\"cmacs-timeline-datepicker-label\"\r\n         [class.ant-tabs-tab-active]=\"!ranged ? selectedIndex === i :\r\n         selectedRangeIdxs.length ? i >= selectedRangeIdxs[0] && i <= selectedRangeIdxs[1] : 0\"\r\n         [disabled]=\"tab.disabled\"\r\n         (click)=\"clickLabel(i,tab.disabled)\"\r\n         *ngFor=\"let tab of listOfNzTabComponent; let i = index\">\r\n      <ng-container *cmacsStringTemplateOutlet=\"tab.title\">{{ tab.title }}</ng-container>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"cmacs-timeline-item\">\r\n  <ng-container *ngIf=\"mode === 'week' && !ranged\">\r\n    <cmacs-week-picker [(ngModel)]=\"date\" (ngModelChange)=\"getWeek($event)\" placeHolder=\"\"></cmacs-week-picker>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"mode === 'month' && !ranged\">\r\n    <cmacs-month-picker\r\n      [(ngModel)]=\"date\"\r\n      (ngModelChange)=\"getMonth($event)\"\r\n      placeHolder=\"\"\r\n    ></cmacs-month-picker>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"(mode === 'week' || mode === 'month') && ranged\">\r\n    <cmacs-range-picker\r\n      [ranges]=\"range\"\r\n      [mode]=\"'week'\"\r\n      ngModel\r\n      placeHolder=\"\"\r\n      (ngModelChange)=\"onChange($event)\">\r\n    </cmacs-range-picker>\r\n  </ng-container>\r\n</div>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                providers: [NzUpdateHostClassService],
                styles: [".cmacs-timeline-datepicker-label.ant-tabs-tab{padding:5px 9px!important;border-radius:3px;font-family:Roboto-Medium;font-size:14px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.29;letter-spacing:normal;color:#656c79}.cmacs-timeline-datepicker-label.ant-tabs-tab-active{background-color:#2a7cff;color:#fff!important}.cmacs-timeline-datepicker-slider.ant-tabs-bar{border-bottom:none;margin-bottom:0}.cmacs-timeline-item{display:inline-block}.cmacs-timeline-item-dropdown{position:relative;top:-7px;margin:0 20px}.cmacs-timeline-item-dropdown .cmacs-dropdowm-timeline-datepicker{font-family:Roboto-Medium;font-size:14px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.29;letter-spacing:normal;color:#3b3f46}.cmacs-timeline-datepicker-label.ant-tabs-tab-active:hover{color:#fff}.cmacs-timeline-item cmacs-picker .ant-calendar-picker-input{width:0;display:inline-block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;border:none;height:0}.cmacs-timeline-item cmacs-picker .ant-calendar-picker-input:focus,.cmacs-timeline-item cmacs-picker .ant-calendar-picker-input:hover{border:none;box-shadow:none}.cmacs-timeline-item cmacs-picker .ant-calendar-picker:hover .ant-calendar-picker-clear{opacity:0;display:none}.cmacs-timeline-item cmacs-picker .ant-calendar-picker-icon{font-size:16px;position:relative;top:-7px}.cmacs-timeline-item cmacs-picker .ant-calendar-picker-icon:hover{cursor:pointer}.cmacs-timeline-item-dropdown .cmacs-dropdowm-timeline-datepicker .cmacs-open-dropdown-wrapper{border:none;width:auto!important;color:#3b3f46;font-size:14px;font-weight:500}.cmacs-timeline-item-dropdown .cmacs-dropdowm-timeline-datepicker .cmacs-open-dropdown-wrapper i{margin-left:10px;color:#3b3f46}.cmacs-timeline-item cmacs-picker .ant-calendar-picker:focus .ant-calendar-picker-input:not(.ant-input-disabled){box-shadow:none}.cmacs-timeline-item cmacs-picker .ant-calendar-range-picker-input,.cmacs-timeline-item cmacs-picker .ant-calendar-range-picker-separator{display:none}", `
      cmacs-timeline-datepicker {
        display: block;
        border-radius: 3px;
        box-shadow: 0 3px 7px 0 rgba(59, 63, 70, 0.15);
        background-color: #ffffff;
        padding: 7px 0 4px 0 !important;
      }
    `]
            }] }
];
/** @nocollapse */
CmacsTimelineDatepickerComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: NzUpdateHostClassService },
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
CmacsTimelineDatepickerComponent.propDecorators = {
    gutter: [{ type: Input }],
    mode: [{ type: Input }],
    restrictMode: [{ type: Input }],
    ranged: [{ type: Input }],
    weekLocale: [{ type: Input }],
    locale: [{ type: Input }],
    onNextClick: [{ type: Output }],
    onPrevClick: [{ type: Output }],
    selectChange: [{ type: Output }],
    selectedIndexChange: [{ type: Output }],
    dateChange: [{ type: Output }],
    rangeChange: [{ type: Output }],
    modeChange: [{ type: Output }],
    selectedIndex: [{ type: Input }],
    selectedRangeIdxs: [{ type: Input }],
    date: [{ type: Input }],
    range: [{ type: Input }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsTimelineDatepickerComponent.prototype, "restrictMode", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsTimelineDatepickerComponent.prototype, "ranged", void 0);
if (false) {
    /**
     * @type {?}
     * @private
     */
    CmacsTimelineDatepickerComponent.prototype.indexToSelect;
    /**
     * @type {?}
     * @private
     */
    CmacsTimelineDatepickerComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    CmacsTimelineDatepickerComponent.prototype._selectedIndex;
    /**
     * @type {?}
     * @private
     */
    CmacsTimelineDatepickerComponent.prototype._selectedRangeIdxs;
    /**
     * @type {?}
     * @private
     */
    CmacsTimelineDatepickerComponent.prototype._date;
    /**
     * @type {?}
     * @private
     */
    CmacsTimelineDatepickerComponent.prototype._range;
    /** @type {?} */
    CmacsTimelineDatepickerComponent.prototype.listOfNzTabComponent;
    /** @type {?} */
    CmacsTimelineDatepickerComponent.prototype.gutter;
    /** @type {?} */
    CmacsTimelineDatepickerComponent.prototype.mode;
    /** @type {?} */
    CmacsTimelineDatepickerComponent.prototype.restrictMode;
    /** @type {?} */
    CmacsTimelineDatepickerComponent.prototype.ranged;
    /** @type {?} */
    CmacsTimelineDatepickerComponent.prototype.weekLocale;
    /** @type {?} */
    CmacsTimelineDatepickerComponent.prototype.locale;
    /** @type {?} */
    CmacsTimelineDatepickerComponent.prototype.onNextClick;
    /** @type {?} */
    CmacsTimelineDatepickerComponent.prototype.onPrevClick;
    /** @type {?} */
    CmacsTimelineDatepickerComponent.prototype.selectChange;
    /** @type {?} */
    CmacsTimelineDatepickerComponent.prototype.selectedIndexChange;
    /** @type {?} */
    CmacsTimelineDatepickerComponent.prototype.dateChange;
    /** @type {?} */
    CmacsTimelineDatepickerComponent.prototype.rangeChange;
    /** @type {?} */
    CmacsTimelineDatepickerComponent.prototype.modeChange;
    /** @type {?} */
    CmacsTimelineDatepickerComponent.prototype.modeOptions;
    /**
     * @type {?}
     * @private
     */
    CmacsTimelineDatepickerComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    CmacsTimelineDatepickerComponent.prototype.nzUpdateHostClassService;
    /**
     * @type {?}
     * @private
     */
    CmacsTimelineDatepickerComponent.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    CmacsTimelineDatepickerComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdGltZWxpbmUtZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLXRpbWVsaW5lLWRhdGVwaWNrZXIvY21hY3MtdGltZWxpbmUtZGF0ZXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUNOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDOUQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBRXBFLE9BQU8sRUFBQyxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBQyxNQUFNLFVBQVUsQ0FBQztBQUM3RSxPQUFPLEVBQUMsWUFBWSxFQUFlLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sS0FBSyxPQUFPLE1BQU0sUUFBUSxDQUFDO0FBQ2xDLE9BQU8scUJBQXFCLENBQUM7O01BQ3ZCLE1BQU0sR0FBRyxPQUFPO0FBeUJ0QixNQUFNLE9BQU8sZ0NBQWdDOzs7Ozs7O0lBMkszQyxZQUNVLFFBQW1CLEVBQ25CLHdCQUFrRCxFQUNsRCxVQUFzQixFQUN0QixHQUFzQjtRQUh0QixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQTlLeEIsa0JBQWEsR0FBa0IsQ0FBQyxDQUFDO1FBQ2pDLE9BQUUsR0FBZ0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxh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QkFBd0I7WUFUL0IsVUFBVTtZQUZWLGlCQUFpQjs7O3FCQW9EaEIsS0FBSzttQkFDTCxLQUFLOzJCQUNMLEtBQUs7cUJBQ0wsS0FBSzt5QkFDTCxLQUFLO3FCQUNMLEtBQUs7MEJBQ0wsTUFBTTswQkFDTixNQUFNOzJCQUVOLE1BQU07a0NBQ04sTUFBTTt5QkFDTixNQUFNOzBCQUNOLE1BQU07eUJBQ04sTUFBTTs0QkFPTixLQUFLO2dDQVNMLEtBQUs7bUJBU0wsS0FBSztvQkFZTCxLQUFLOztBQWhEbUI7SUFBZixZQUFZLEVBQUU7O3NFQUFzQjtBQUNyQjtJQUFmLFlBQVksRUFBRTs7Z0VBQWdCOzs7Ozs7SUFYeEMseURBQXlDOzs7OztJQUN6Qyw4Q0FBd0Q7Ozs7O0lBQ3hELDBEQUE2Qzs7Ozs7SUFDN0MsOERBQTBDOzs7OztJQUMxQyxpREFBd0M7Ozs7O0lBQ3hDLGtEQUE0Qjs7SUFDNUIsZ0VBQTRCOztJQUU1QixrREFBNEI7O0lBQzVCLGdEQUFvRDs7SUFDcEQsd0RBQThDOztJQUM5QyxrREFBd0M7O0lBQ3hDLHNEQUFpRDs7SUFDakQsa0RBQXVCOztJQUN2Qix1REFBMEQ7O0lBQzFELHVEQUEwRDs7SUFFMUQsd0RBQXVHOztJQUN2RywrREFBMEY7O0lBQzFGLHNEQUE2RTs7SUFDN0UsdURBQWtGOztJQUNsRixzREFBa0U7O0lBRWxFLHVEQUdJOzs7OztJQWlKRixvREFBMkI7Ozs7O0lBQzNCLG9FQUEwRDs7Ozs7SUFDMUQsc0RBQThCOzs7OztJQUM5QiwrQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudENoZWNrZWQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LCBPbkNoYW5nZXMsXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZXMsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7VGFiQ2hhbmdlRXZlbnR9IGZyb20gXCIuLi9jbWFjcy10YWJzL2NtYWNzLXRhYnNldC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtDbWFjc1RhYkNvbXBvbmVudH0gZnJvbSBcIi4uL2NtYWNzLXRhYnMvY21hY3MtdGFiLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge2dldElTT1dlZWssIGdldElTT1dlZWtzSW5ZZWFyLCBnZXRJU09ZZWFyLCBnZXRNb250aH0gZnJvbSBcImRhdGUtZm5zXCI7XHJcbmltcG9ydCB7SW5wdXRCb29sZWFuLCBQcmVzZXRSYW5nZXN9IGZyb20gXCJuZy16b3Jyby1hbnRkXCI7XHJcbmltcG9ydCAqIGFzIG1vbWVudF8gZnJvbSAnbW9tZW50JztcclxuaW1wb3J0ICdtb21lbnQvbG9jYWxlL2VuLWllJztcclxuY29uc3QgbW9tZW50ID0gbW9tZW50XztcclxuXHJcbmV4cG9ydCB0eXBlIENtYWNzVGltZWxpbmVEYXRlUGlja2VyTW9kZSA9ICd3ZWVrJyB8ICdxdWFydGVyJyB8ICdtb250aCcgfCAnd2Vlay1yYW5nZScgfCAnbW9udGgtcmFuZ2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy10aW1lbGluZS1kYXRlcGlja2VyJyxcclxuICBleHBvcnRBczogJ2NtYWNzVGltZWxpbmVEYXRlcGlja2VyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtdGltZWxpbmUtZGF0ZXBpY2tlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBwcm92aWRlcnM6IFtOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2VdLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLXRpbWVsaW5lLWRhdGVwaWNrZXIuY29tcG9uZW50LmNzcyddLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICBjbWFjcy10aW1lbGluZS1kYXRlcGlja2VyIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAzcHggN3B4IDAgcmdiYSg1OSwgNjMsIDcwLCAwLjE1KTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIHBhZGRpbmc6IDdweCAwIDRweCAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1RpbWVsaW5lRGF0ZXBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQsIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBwcml2YXRlIGluZGV4VG9TZWxlY3Q6IG51bWJlciB8IG51bGwgPSAwO1xyXG4gIHByaXZhdGUgZWw6IEhUTUxFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBfc2VsZWN0ZWRJbmRleDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBfc2VsZWN0ZWRSYW5nZUlkeHM6IG51bWJlcltdID0gW107XHJcbiAgcHJpdmF0ZSBfZGF0ZTogRGF0ZSB8IG51bGwgPSBuZXcgRGF0ZSgpO1xyXG4gIHByaXZhdGUgX3JhbmdlOiBEYXRlW10gPSBbXTtcclxuICBsaXN0T2ZOelRhYkNvbXBvbmVudDogYW55W107XHJcblxyXG4gIEBJbnB1dCgpIGd1dHRlcjogbnVtYmVyID0gMjtcclxuICBASW5wdXQoKSBtb2RlOiBDbWFjc1RpbWVsaW5lRGF0ZVBpY2tlck1vZGUgPSAnd2Vlayc7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHJlc3RyaWN0TW9kZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSByYW5nZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSB3ZWVrTG9jYWxlID0ge3dlZWsgOiB7ZG93IDogMCwgZG95OiA2fX07XHJcbiAgQElucHV0KCkgbG9jYWxlID0gJ2VuJztcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25OZXh0Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uUHJldkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgc2VsZWN0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8VGFiQ2hhbmdlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxUYWJDaGFuZ2VFdmVudD4odHJ1ZSk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHNlbGVjdGVkSW5kZXhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGRhdGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZT4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgcmFuZ2VDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEYXRlW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlW10+KCk7XHJcbiAgQE91dHB1dCgpIG1vZGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIG1vZGVPcHRpb25zID0gW1xyXG4gICAge3RpdGxlOiAnV2VlaycsIHZhbHVlOiAnd2VlaycsIHNlbGVjdGVkOiB0cnVlfSxcclxuICAgIHt0aXRsZTogJ01vbnRoJywgdmFsdWU6ICdtb250aCcsIHNlbGVjdGVkOiBmYWxzZX1cclxuICAgIF07XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHNlbGVjdGVkSW5kZXgodmFsdWU6IG51bWJlciB8IG51bGwpIHtcclxuICAgIHRoaXMuaW5kZXhUb1NlbGVjdCA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNlbGVjdGVkSW5kZXgoKTogbnVtYmVyIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRJbmRleDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHNlbGVjdGVkUmFuZ2VJZHhzKHZhbHVlOiBudW1iZXJbXSkge1xyXG4gICAgdGhpcy5fc2VsZWN0ZWRSYW5nZUlkeHMgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGdldCBzZWxlY3RlZFJhbmdlSWR4cygpOiBudW1iZXJbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWRSYW5nZUlkeHM7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBkYXRlKHZhbHVlOiBEYXRlIHwgbnVsbCkge1xyXG4gICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuX2RhdGUgPSB2YWx1ZTtcclxuICAgICAgaWYgKHRoaXMubW9kZSA9PT0gJ3dlZWsnKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gdGhpcy5nZXRXZWVrTnVtYmVyKHZhbHVlKSAtIDE7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5tb2RlID09PSAnbW9udGgnKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gdmFsdWUuZ2V0TW9udGgoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgcmFuZ2UocmFuZ2U6IERhdGVbXSkge1xyXG4gICAgaWYgKHJhbmdlICE9PSBudWxsICYmIHJhbmdlLmxlbmd0aCkge1xyXG4gICAgICB0aGlzLl9yYW5nZSA9IHJhbmdlO1xyXG4gICAgICBsZXQgc3REYXRlWWVhciA9IGdldElTT1llYXIodGhpcy5yYW5nZVswXSk7XHJcbiAgICAgIGNvbnN0IG5kRGF0ZVllYXIgPSBnZXRJU09ZZWFyKHRoaXMucmFuZ2VbMV0pO1xyXG4gICAgICBpZiAoZ2V0SVNPWWVhcih0aGlzLnJhbmdlWzBdKSA9PT0gZ2V0SVNPWWVhcih0aGlzLnJhbmdlWzFdKSkge1xyXG4gICAgICAgIGlmICh0aGlzLm1vZGUgPT09ICd3ZWVrJykge1xyXG4gICAgICAgICAgdGhpcy5zZWxlY3RlZFJhbmdlSWR4cyA9IFtnZXRJU09XZWVrKHRoaXMuX3JhbmdlWzBdKSAtIDEsIGdldElTT1dlZWsodGhpcy5fcmFuZ2VbMV0pIC0gMV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRSYW5nZUlkeHMgPSBbZ2V0TW9udGgodGhpcy5fcmFuZ2VbMF0pLCBnZXRNb250aCh0aGlzLl9yYW5nZVsxXSldO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAodGhpcy5tb2RlID09PSAnd2VlaycpIHtcclxuICAgICAgICAgIGxldCBzdW1XZWVrcyA9IDA7XHJcbiAgICAgICAgICB3aGlsZShuZERhdGVZZWFyIC0gc3REYXRlWWVhcikge1xyXG4gICAgICAgICAgICBzdW1XZWVrcyArPSBnZXRJU09XZWVrc0luWWVhcihuZXcgRGF0ZShzdERhdGVZZWFyKSk7XHJcbiAgICAgICAgICAgIHN0RGF0ZVllYXIrKztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRSYW5nZUlkeHMgPSBbZ2V0SVNPV2Vlayh0aGlzLl9yYW5nZVswXSkgLSAxLCBzdW1XZWVrcyArIGdldElTT1dlZWsodGhpcy5fcmFuZ2VbMV0pIC0gMV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRSYW5nZUlkeHMgPSBbZ2V0TW9udGgodGhpcy5fcmFuZ2VbMF0pLCAxMioobmREYXRlWWVhciAtIHN0RGF0ZVllYXIpICsgZ2V0TW9udGgodGhpcy5fcmFuZ2VbMV0pXTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gdGhpcy5fc2VsZWN0ZWRSYW5nZUlkeHNbMF07XHJcblxyXG4gICAgICB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50ID0gdGhpcy5nZXRWYWx1ZXNTbGlkZXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCByYW5nZSgpOiBEYXRlW10gfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLl9yYW5nZTtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlKHJhbmdlOiBEYXRlW10pOiB2b2lkIHtcclxuICAgIGlmIChyYW5nZSAhPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLnJhbmdlID0gcmFuZ2U7XHJcbiAgICAgIHRoaXMucmFuZ2VDaGFuZ2UuZW1pdChyYW5nZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgZGF0ZSgpOiBEYXRlIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGF0ZTtcclxuICB9XHJcblxyXG4gIGdldFdlZWsocmVzdWx0OiBEYXRlKTogdm9pZCB7XHJcbiAgICBpZiAocmVzdWx0ICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuZGF0ZUNoYW5nZS5lbWl0KHJlc3VsdCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRDbGFzc01hcCgpOiB2b2lkIHtcclxuICAgIHRoaXMubnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsLCB7XHJcbiAgICAgIFtgYW50LXRhYnNgXTogdHJ1ZSxcclxuICAgICAgW2BhbnQtdGFicy1saW5lYF06IHRydWVcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0V2Vla051bWJlcihkYXRlKXtcclxuICAgIGNvbnN0IG1vbnRoID0gbW9tZW50KGRhdGUpLm1vbnRoKCk7XHJcbiAgICBtb21lbnQudXBkYXRlTG9jYWxlKHRoaXMubG9jYWxlLCB0aGlzLndlZWtMb2NhbGUpO1xyXG4gICAgY29uc3Qgd2VlayA9IG1vbWVudChkYXRlKS53ZWVrKCk7XHJcbiAgICBjb25zdCB3ZWVrc0luWWVhciA9IGdldElTT1dlZWtzSW5ZZWFyKGRhdGUpO1xyXG4gICAgaWYgKG1vbnRoID09PSAxMSAmJiB3ZWVrID09PSAxKSB7XHJcbiAgICAgIHJldHVybiB3ZWVrc0luWWVhcjtcclxuICAgIH1cclxuICAgIHJldHVybiB3ZWVrO1xyXG4gIH1cclxuXHJcbiAgY2xpY2tMYWJlbChpbmRleDogbnVtYmVyLCBkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKCFkaXNhYmxlZCAmJiAhdGhpcy5yYW5nZWQgJiYgdGhpcy5fZGF0ZSAhPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBpbmRleDtcclxuXHJcbiAgICAgIGlmICh0aGlzLm1vZGUgPT09ICd3ZWVrJykge1xyXG4gICAgICAgIGxldCBkID0gbmV3IERhdGUodGhpcy5fZGF0ZS5nZXRGdWxsWWVhcigpLCAwLCAxKTtcclxuICAgICAgICBkLnNldERhdGUoZC5nZXREYXRlKCkgKyAoaW5kZXggKiA3KSk7XHJcbiAgICAgICAgdGhpcy5kYXRlID0gZDtcclxuICAgICAgICB0aGlzLmRhdGVDaGFuZ2UuZW1pdCh0aGlzLmRhdGUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5tb2RlID09PSAnbW9udGgnKSB7XHJcbiAgICAgICAgbGV0IGQgPSBuZXcgRGF0ZSh0aGlzLl9kYXRlLmdldEZ1bGxZZWFyKCksIGluZGV4LCAxKTtcclxuICAgICAgICB0aGlzLmRhdGUgPSBkO1xyXG4gICAgICAgIHRoaXMuZGF0ZUNoYW5nZS5lbWl0KHRoaXMuZGF0ZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjcmVhdGVDaGFuZ2VFdmVudChpbmRleDogbnVtYmVyKTogVGFiQ2hhbmdlRXZlbnQge1xyXG4gICAgY29uc3QgZXZlbnQgPSBuZXcgVGFiQ2hhbmdlRXZlbnQoKTtcclxuICAgIGV2ZW50LmluZGV4ID0gaW5kZXg7XHJcbiAgICBpZiAodGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudCAmJiB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50Lmxlbmd0aCkge1xyXG4gICAgICBldmVudC50YWIgPSB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50W2luZGV4XTtcclxuICAgICAgdGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudC5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgaWYgKGkgIT09IGluZGV4KSB7XHJcbiAgICAgICAgICBpdGVtLmRlc2VsZWN0LmVtaXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBldmVudC50YWIuc2VsZWN0LmVtaXQoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBldmVudDtcclxuICB9XHJcblxyXG4gIC8qKiBDbGFtcHMgdGhlIGdpdmVuIGluZGV4IHRvIHRoZSBib3VuZHMgb2YgMCBhbmQgdGhlIHRhYnMgbGVuZ3RoLiAqL1xyXG4gIHByaXZhdGUgY2xhbXBUYWJJbmRleChpbmRleDogbnVtYmVyIHwgbnVsbCk6IG51bWJlciB7XHJcbiAgICAvLyBOb3RlIHRoZSBgfHwgMGAsIHdoaWNoIGVuc3VyZXMgdGhhdCB2YWx1ZXMgbGlrZSBOYU4gY2FuJ3QgZ2V0IHRocm91Z2hcclxuICAgIC8vIGFuZCB3aGljaCB3b3VsZCBvdGhlcndpc2UgdGhyb3cgdGhlIGNvbXBvbmVudCBpbnRvIGFuIGluZmluaXRlIGxvb3BcclxuICAgIC8vIChzaW5jZSBNYXRoLm1heChOYU4sIDApID09PSBOYU4pLlxyXG4gICAgcmV0dXJuIE1hdGgubWluKHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQubGVuZ3RoIC0gMSwgTWF0aC5tYXgoaW5kZXggfHwgMCwgMCkpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIG56VXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICAgIHRoaXMudXBkYXRlU2VsZWN0ZWRNb2RlKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKXtcclxuICAgIGlmIChjaGFuZ2VzLm1vZGUpIHtcclxuICAgICAgdGhpcy51cGRhdGVTZWxlY3RlZE1vZGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZVNlbGVjdGVkTW9kZSgpe1xyXG4gICAgdGhpcy5tb2RlT3B0aW9ucy5mb3JFYWNoKG1vZGUgPT4ge1xyXG4gICAgICBtb2RlLnNlbGVjdGVkID0gbW9kZS52YWx1ZSA9PT0gdGhpcy5tb2RlO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50ID0gdGhpcy5nZXRWYWx1ZXNTbGlkZXIoKTtcclxuICAgIGlmICh0aGlzLnJhbmdlZCkge1xyXG4gICAgICB0aGlzLnJhbmdlID0gdGhpcy5yYW5nZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFZhbHVlc1NsaWRlcigpIHtcclxuICAgIGlmICh0aGlzLm1vZGUgPT09ICd3ZWVrJyAmJiAhdGhpcy5yYW5nZWQpIHtcclxuICAgICAgdGhpcy5kYXRlID0gdGhpcy5kYXRlO1xyXG4gICAgICByZXR1cm4gdGhpcy5nZXRXZWVrc0luWWVhcih0aGlzLmRhdGUpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLm1vZGUgPT09ICdtb250aCcpIHtcclxuICAgICAgdGhpcy5kYXRlID0gdGhpcy5kYXRlO1xyXG4gICAgICBpZiAodGhpcy5yYW5nZS5sZW5ndGgpIHtcclxuICAgICAgICBsZXQgc3REYXRlWWVhciA9IGdldElTT1llYXIodGhpcy5yYW5nZVswXSk7XHJcbiAgICAgICAgY29uc3QgbmREYXRlWWVhciA9IGdldElTT1llYXIodGhpcy5yYW5nZVsxXSk7XHJcbiAgICAgICAgaWYgKHN0RGF0ZVllYXIgIT09IG5kRGF0ZVllYXIpIHtcclxuICAgICAgICAgIGxldCByYW5nZWRNb250aCA9IHRoaXMuZ2V0RGVmYXVsdE1vbnRocygpO1xyXG4gICAgICAgICAgd2hpbGUobmREYXRlWWVhciAtIHN0RGF0ZVllYXIpIHtcclxuICAgICAgICAgICAgc3REYXRlWWVhcisrO1xyXG4gICAgICAgICAgICByYW5nZWRNb250aCA9IHJhbmdlZE1vbnRoLmNvbmNhdCh0aGlzLmdldERlZmF1bHRNb250aHMoKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gcmFuZ2VkTW9udGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmdldERlZmF1bHRNb250aHMoKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdGhpcy5nZXREZWZhdWx0TW9udGhzKCk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMubW9kZSA9PT0gJ3dlZWsnICYmIHRoaXMucmFuZ2VkKSB7XHJcbiAgICAgIGlmICh0aGlzLnJhbmdlLmxlbmd0aCkge1xyXG4gICAgICAgIGxldCBzdERhdGVZZWFyID0gZ2V0SVNPWWVhcih0aGlzLnJhbmdlWzBdKTtcclxuICAgICAgICBjb25zdCBuZERhdGVZZWFyID0gZ2V0SVNPWWVhcih0aGlzLnJhbmdlWzFdKTtcclxuICAgICAgICBpZiAoc3REYXRlWWVhciAhPT0gbmREYXRlWWVhcikge1xyXG4gICAgICAgICAgbGV0IHJhbmdlZFdlZWtzID0gdGhpcy5nZXRXZWVrc0luWWVhcihuZXcgRGF0ZShzdERhdGVZZWFyKSk7XHJcbiAgICAgICAgICB3aGlsZShuZERhdGVZZWFyIC0gc3REYXRlWWVhcikge1xyXG4gICAgICAgICAgICByYW5nZWRXZWVrcyA9IHJhbmdlZFdlZWtzLmNvbmNhdCh0aGlzLmdldFdlZWtzSW5ZZWFyKG5ldyBEYXRlKHN0RGF0ZVllYXIpKSk7XHJcbiAgICAgICAgICAgIHN0RGF0ZVllYXIrKztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiByYW5nZWRXZWVrcztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0V2Vla3NJblllYXIodGhpcy5yYW5nZVswXSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRoaXMuZ2V0V2Vla3NJblllYXIobmV3IERhdGUoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXREZWZhdWx0TW9udGhzKCkge1xyXG4gICAgcmV0dXJuIFt7dGl0bGU6ICdKYW4nfSwge3RpdGxlOiAnRmViJ30sIHt0aXRsZTogJ01hcid9LCB7dGl0bGU6ICdBcHInfSwge3RpdGxlOiAnTWF5J30sIHt0aXRsZTogJ0p1bid9LFxyXG4gICAgICB7dGl0bGU6ICdKdWwnfSwge3RpdGxlOiAnQXVnJ30sIHt0aXRsZTogJ1NlcCd9LCB7dGl0bGU6ICdPY3QnfSwge3RpdGxlOiAnTm92J30sIHt0aXRsZTogJ0RlYyd9XTtcclxuICB9XHJcblxyXG4gIGdldFdlZWtzSW5ZZWFyKGRhdGU6IERhdGUpIHtcclxuICAgIGxldCB0ZW1wID0gW107XHJcbiAgICBjb25zdCBsZW5ndGggPSBnZXRJU09XZWVrc0luWWVhcihkYXRlKTtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xyXG4gICAgICB0ZW1wLnB1c2goe3RpdGxlOiB0aGlzLmZvcm1hdFdlZWtOdW1iZXIoaSArIDEpfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGVtcDtcclxuICB9XHJcblxyXG4gIGZvcm1hdFdlZWtOdW1iZXIodmFsdWU6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIChcIjBcIiArIHZhbHVlKS5zbGljZSgtMik7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XHJcbiAgICAvL3RoaXMudXBkYXRlU2xpZGVyKCk7XHJcbiAgICBpZiAodGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudCAmJiB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50Lmxlbmd0aCkge1xyXG4gICAgICAvLyBEb24ndCBjbGFtcCB0aGUgYGluZGV4VG9TZWxlY3RgIGltbWVkaWF0ZWx5IGluIHRoZSBzZXR0ZXIgYmVjYXVzZSBpdCBjYW4gaGFwcGVuIHRoYXRcclxuICAgICAgLy8gdGhlIGFtb3VudCBvZiB0YWJzIGNoYW5nZXMgYmVmb3JlIHRoZSBhY3R1YWwgY2hhbmdlIGRldGVjdGlvbiBydW5zLlxyXG4gICAgICBjb25zdCBpbmRleFRvU2VsZWN0ID0gKHRoaXMuaW5kZXhUb1NlbGVjdCA9IHRoaXMuY2xhbXBUYWJJbmRleCh0aGlzLmluZGV4VG9TZWxlY3QpKTtcclxuICAgICAgLy8gSWYgdGhlcmUgaXMgYSBjaGFuZ2UgaW4gc2VsZWN0ZWQgaW5kZXgsIGVtaXQgYSBjaGFuZ2UgZXZlbnQuIFNob3VsZCBub3QgdHJpZ2dlciBpZlxyXG4gICAgICAvLyB0aGUgc2VsZWN0ZWQgaW5kZXggaGFzIG5vdCB5ZXQgYmVlbiBpbml0aWFsaXplZC5cclxuICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkSW5kZXggIT09IGluZGV4VG9TZWxlY3QpIHtcclxuICAgICAgICBjb25zdCBpc0ZpcnN0UnVuID0gdGhpcy5fc2VsZWN0ZWRJbmRleCA9PSBudWxsO1xyXG4gICAgICAgIC8qaWYgKCFpc0ZpcnN0UnVuKSB7XHJcbiAgICAgICAgICB0aGlzLnNlbGVjdENoYW5nZS5lbWl0KHRoaXMuY3JlYXRlQ2hhbmdlRXZlbnQoaW5kZXhUb1NlbGVjdCkpO1xyXG4gICAgICAgIH0qL1xyXG5cclxuICAgICAgICAvLyBDaGFuZ2luZyB0aGVzZSB2YWx1ZXMgYWZ0ZXIgY2hhbmdlIGRldGVjdGlvbiBoYXMgcnVuXHJcbiAgICAgICAgLy8gc2luY2UgdGhlIGNoZWNrZWQgY29udGVudCBtYXkgY29udGFpbiByZWZlcmVuY2VzIHRvIHRoZW0uXHJcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50LmZvckVhY2goKHRhYiwgaW5kZXgpID0+ICh0YWIuaXNBY3RpdmUgPSBpbmRleCA9PT0gaW5kZXhUb1NlbGVjdCkpO1xyXG5cclxuICAgICAgICAgIGlmICghaXNGaXJzdFJ1bikge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXhDaGFuZ2UuZW1pdChpbmRleFRvU2VsZWN0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gU2V0dXAgdGhlIHBvc2l0aW9uIGZvciBlYWNoIHRhYiBhbmQgb3B0aW9uYWxseSBzZXR1cCBhbiBvcmlnaW4gb24gdGhlIG5leHQgc2VsZWN0ZWQgdGFiLlxyXG4gICAgICB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50LmZvckVhY2goKHRhYjogQ21hY3NUYWJDb21wb25lbnQsIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICB0YWIucG9zaXRpb24gPSBpbmRleCAtIGluZGV4VG9TZWxlY3Q7XHJcblxyXG4gICAgICAgIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYSBzZWxlY3RlZCB0YWIsIHRoZW4gc2V0IHVwIGFuIG9yaWdpbiBmb3IgdGhlIG5leHQgc2VsZWN0ZWQgdGFiXHJcbiAgICAgICAgLy8gaWYgaXQgZG9lc24ndCBoYXZlIG9uZSBhbHJlYWR5LlxyXG4gICAgICAgIGlmICh0aGlzLl9zZWxlY3RlZEluZGV4ICE9IG51bGwgJiYgdGFiLnBvc2l0aW9uID09PSAwICYmICF0YWIub3JpZ2luKSB7XHJcbiAgICAgICAgICB0YWIub3JpZ2luID0gaW5kZXhUb1NlbGVjdCAtIHRoaXMuX3NlbGVjdGVkSW5kZXg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmICh0aGlzLl9zZWxlY3RlZEluZGV4ICE9PSBpbmRleFRvU2VsZWN0KSB7XHJcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRJbmRleCA9IGluZGV4VG9TZWxlY3Q7XHJcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGN1c3RvbVNlbGVjdChpbmRleDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLm1vZGVPcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xyXG4gICAgICBvcHRpb24uc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5tb2RlT3B0aW9uc1tpbmRleF0uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5tb2RlID0gdGhpcy5tb2RlT3B0aW9uc1tpbmRleF0udmFsdWUgYXMgQ21hY3NUaW1lbGluZURhdGVQaWNrZXJNb2RlO1xyXG4gICAgdGhpcy5tb2RlQ2hhbmdlLmVtaXQodGhpcy5tb2RlKTtcclxuICAgIHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQgPSB0aGlzLmdldFZhbHVlc1NsaWRlcigpO1xyXG4gICAgaWYgKHRoaXMucmFuZ2VkKSB7XHJcbiAgICAgIHRoaXMucmFuZ2UgPSB0aGlzLnJhbmdlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0U2VsZWN0ZWQoKXtcclxuICAgIHJldHVybiB0aGlzLm1vZGVPcHRpb25zLmZpbHRlcihpdGVtID0+IGl0ZW0uc2VsZWN0ZWQpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TW9udGgocmVzdWx0OiBEYXRlKTogdm9pZCB7XHJcbiAgICB0aGlzLmRhdGVDaGFuZ2UuZW1pdChyZXN1bHQpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiJdfQ==