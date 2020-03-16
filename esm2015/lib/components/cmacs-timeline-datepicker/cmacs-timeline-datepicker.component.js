/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewEncapsulation } from '@angular/core';
import { NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { TabChangeEvent } from "../cmacs-tabs/cmacs-tabset.component";
import { getISOWeek, getISOWeeksInYear, getISOYear } from "date-fns";
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
            if (getISOYear(this.range[0]) === getISOYear(this.range[1])) {
                this.selectedRangeIdxs = [getISOWeek(this._range[0]) - 1, getISOWeek(this._range[1]) - 1];
            }
            else {
                this.selectedRangeIdxs = [getISOWeek(this._range[0]) - 1, getISOWeeksInYear(this._range[0]) + getISOWeek(this._range[1]) - 1];
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
            return [{ title: 'Jan' }, { title: 'Feb' }, { title: 'Mar' }, { title: 'Apr' }, { title: 'May' }, { title: 'Jun' },
                { title: 'Jul' }, { title: 'Aug' }, { title: 'Sep' }, { title: 'Oct' }, { title: 'Nov' }, { title: 'Dec' }];
        }
        else if (this.mode === 'week' && this.ranged) {
            if (this.range.length) {
                /** @type {?} */
                const stDateYear = getISOYear(this.range[0]);
                /** @type {?} */
                const ndDateYear = getISOYear(this.range[1]);
                if (stDateYear !== ndDateYear) {
                    return this.getWeeksInYear(this.range[0]).concat(this.getWeeksInYear(this.range[1]));
                }
                return this.getWeeksInYear(this.range[0]);
            }
            return this.getWeeksInYear(new Date());
        }
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
                template: "<div class=\"cmacs-timeline-item cmacs-timeline-item-dropdown\" *ngIf=\"!restrictMode\">\r\n  <cmacs-dropdown [trigger]=\"'click'\" [cmacsOpen]=\"true\" style=\"display: inline-flex\">\r\n    <a cmacs-dropdown class=\"cmacs-dropdowm-timeline-datepicker\">\r\n      <div class=\"cmacs-open-dropdown-wrapper\" style=\"width: 80px;\">\r\n        {{getSelected().length ? getSelected()[0].title : 'Select'}} <i class=\"iconArrowLarge-Solid-Down\"></i>\r\n      </div>\r\n    </a>\r\n\r\n    <ul cmacs-menu style=\"min-width: 125px\">\r\n      <li *ngFor=\"let option of modeOptions; index as i\" cmacs-menu-item (click)=\"customSelect(i)\">\r\n        <i [style.opacity]=\"option.selected ? 1 : 0\" nz-icon type=\"check\"></i>\r\n        <span>{{option.title}}</span>\r\n      </li>\r\n    </ul>\r\n  </cmacs-dropdown>\r\n</div>\r\n\r\n<div class=\"cmacs-timeline-item cmacs-timeline-item-dropdown\" *ngIf=\"restrictMode\">\r\n  <a class=\"cmacs-dropdowm-timeline-datepicker\">\r\n    <div class=\"cmacs-open-dropdown-wrapper\" style=\"width: 80px;\">\r\n      {{getSelected().length ? getSelected()[0].title : 'Select'}}\r\n    </div>\r\n  </a>\r\n</div>\r\n\r\n<div class=\"cmacs-timeline-item\" style=\"margin-right: 10px; max-width: calc(100% - 160px - 16px);\">\r\n  <div nz-tabs-nav\r\n       role=\"tablist\"\r\n       tabindex=\"0\"\r\n       class=\"ant-tabs-bar ant-tabs-top-bar cmacs-timeline-datepicker-slider\"\r\n       [nzType]=\"'line'\"\r\n       [nzShowPagination]=\"true\"\r\n       [nzPositionMode]=\"'horizontal'\"\r\n       [nzAnimated]=\"true\"\r\n       [nzHideBar]=\"true\"\r\n       [selectedIndex]=\"selectedIndex\"\r\n       (nzOnNextClick)=\"onNextClick.emit()\"\r\n       (nzOnPrevClick)=\"onPrevClick.emit()\">\r\n    <div nz-tab-label\r\n         role=\"tab\"\r\n         [style.margin-right.px]=\"gutter\"\r\n         class=\"cmacs-timeline-datepicker-label\"\r\n         [class.ant-tabs-tab-active]=\"!ranged ? selectedIndex === i :\r\n         selectedRangeIdxs.length ? i >= selectedRangeIdxs[0] && i <= selectedRangeIdxs[1] : 0\"\r\n         [disabled]=\"tab.disabled\"\r\n         (click)=\"clickLabel(i,tab.disabled)\"\r\n         *ngFor=\"let tab of listOfNzTabComponent; let i = index\">\r\n      <ng-container *cmacsStringTemplateOutlet=\"tab.title\">{{ tab.title }}</ng-container>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"cmacs-timeline-item\">\r\n  <ng-container *ngIf=\"mode === 'week' && !ranged\">\r\n    <cmacs-week-picker [(ngModel)]=\"date\" (ngModelChange)=\"getWeek($event)\" placeHolder=\"\"></cmacs-week-picker>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"mode === 'month'\">\r\n    <cmacs-month-picker\r\n      [(ngModel)]=\"date\"\r\n      (ngModelChange)=\"getMonth($event)\"\r\n      placeHolder=\"\"\r\n    ></cmacs-month-picker>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"mode === 'week' && ranged\">\r\n    <cmacs-range-picker\r\n      [ranges]=\"range\"\r\n      [mode]=\"'week'\"\r\n      ngModel\r\n      placeHolder=\"\"\r\n      (ngModelChange)=\"onChange($event)\">\r\n    </cmacs-range-picker>\r\n  </ng-container>\r\n</div>\r\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdGltZWxpbmUtZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLXRpbWVsaW5lLWRhdGVwaWNrZXIvY21hY3MtdGltZWxpbmUtZGF0ZXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUNOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDOUQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBRXBFLE9BQU8sRUFBQyxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxFQUFDLE1BQU0sVUFBVSxDQUFDO0FBQ25FLE9BQU8sRUFBQyxZQUFZLEVBQWUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxLQUFLLE9BQU8sTUFBTSxRQUFRLENBQUM7QUFDbEMsT0FBTyxxQkFBcUIsQ0FBQzs7TUFDdkIsTUFBTSxHQUFHLE9BQU87QUF5QnRCLE1BQU0sT0FBTyxnQ0FBZ0M7Ozs7Ozs7SUE0SjNDLFlBQ1UsUUFBbUIsRUFDbkIsd0JBQWtELEVBQ2xELFVBQXNCLEVBQ3RCLEdBQXNCO1FBSHRCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBL0p4QixrQkFBYSxHQUFrQixDQUFDLENBQUM7UUFDakMsT0FBRSxHQUFnQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztR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MUYsc0RBQTZFOztJQUM3RSx1REFBa0Y7O0lBQ2xGLHNEQUFrRTs7SUFFbEUsdURBR0k7Ozs7O0lBa0lGLG9EQUEyQjs7Ozs7SUFDM0Isb0VBQTBEOzs7OztJQUMxRCxzREFBOEI7Ozs7O0lBQzlCLCtDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50Q2hlY2tlZCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsIE9uQ2hhbmdlcyxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMiwgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHtUYWJDaGFuZ2VFdmVudH0gZnJvbSBcIi4uL2NtYWNzLXRhYnMvY21hY3MtdGFic2V0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0NtYWNzVGFiQ29tcG9uZW50fSBmcm9tIFwiLi4vY21hY3MtdGFicy9jbWFjcy10YWIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7Z2V0SVNPV2VlaywgZ2V0SVNPV2Vla3NJblllYXIsIGdldElTT1llYXJ9IGZyb20gXCJkYXRlLWZuc1wiO1xyXG5pbXBvcnQge0lucHV0Qm9vbGVhbiwgUHJlc2V0UmFuZ2VzfSBmcm9tIFwibmctem9ycm8tYW50ZFwiO1xyXG5pbXBvcnQgKiBhcyBtb21lbnRfIGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCAnbW9tZW50L2xvY2FsZS9lbi1pZSc7XHJcbmNvbnN0IG1vbWVudCA9IG1vbWVudF87XHJcblxyXG5leHBvcnQgdHlwZSBDbWFjc1RpbWVsaW5lRGF0ZVBpY2tlck1vZGUgPSAnd2VlaycgfCAncXVhcnRlcicgfCAnbW9udGgnIHwgJ3dlZWstcmFuZ2UnIHwgJ21vbnRoLXJhbmdlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtdGltZWxpbmUtZGF0ZXBpY2tlcicsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc1RpbWVsaW5lRGF0ZXBpY2tlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLXRpbWVsaW5lLWRhdGVwaWNrZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgcHJvdmlkZXJzOiBbTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlXSxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy10aW1lbGluZS1kYXRlcGlja2VyLmNvbXBvbmVudC5jc3MnXSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgY21hY3MtdGltZWxpbmUtZGF0ZXBpY2tlciB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDdweCAwIHJnYmEoNTksIDYzLCA3MCwgMC4xNSk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBwYWRkaW5nOiA3cHggMCA0cHggMCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NUaW1lbGluZURhdGVwaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkLCBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgcHJpdmF0ZSBpbmRleFRvU2VsZWN0OiBudW1iZXIgfCBudWxsID0gMDtcclxuICBwcml2YXRlIGVsOiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gIHByaXZhdGUgX3NlbGVjdGVkSW5kZXg6IG51bWJlciB8IG51bGwgPSBudWxsO1xyXG4gIHByaXZhdGUgX3NlbGVjdGVkUmFuZ2VJZHhzOiBudW1iZXJbXSA9IFtdO1xyXG4gIHByaXZhdGUgX2RhdGU6IERhdGUgfCBudWxsID0gbmV3IERhdGUoKTtcclxuICBwcml2YXRlIF9yYW5nZTogRGF0ZVtdID0gW107XHJcbiAgbGlzdE9mTnpUYWJDb21wb25lbnQ6IGFueVtdO1xyXG5cclxuICBASW5wdXQoKSBndXR0ZXI6IG51bWJlciA9IDI7XHJcbiAgQElucHV0KCkgbW9kZTogQ21hY3NUaW1lbGluZURhdGVQaWNrZXJNb2RlID0gJ3dlZWsnO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSByZXN0cmljdE1vZGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgcmFuZ2VkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgd2Vla0xvY2FsZSA9IHt3ZWVrIDoge2RvdyA6IDAsIGRveTogNn19O1xyXG4gIEBJbnB1dCgpIGxvY2FsZSA9ICdlbic7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uTmV4dENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvblByZXZDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHNlbGVjdENoYW5nZTogRXZlbnRFbWl0dGVyPFRhYkNoYW5nZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8VGFiQ2hhbmdlRXZlbnQ+KHRydWUpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBzZWxlY3RlZEluZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBkYXRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyPERhdGU+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHJhbmdlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGF0ZVtdPiA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZVtdPigpO1xyXG4gIEBPdXRwdXQoKSBtb2RlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBtb2RlT3B0aW9ucyA9IFtcclxuICAgIHt0aXRsZTogJ1dlZWsnLCB2YWx1ZTogJ3dlZWsnLCBzZWxlY3RlZDogdHJ1ZX0sXHJcbiAgICB7dGl0bGU6ICdNb250aCcsIHZhbHVlOiAnbW9udGgnLCBzZWxlY3RlZDogZmFsc2V9XHJcbiAgICBdO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBzZWxlY3RlZEluZGV4KHZhbHVlOiBudW1iZXIgfCBudWxsKSB7XHJcbiAgICB0aGlzLmluZGV4VG9TZWxlY3QgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGdldCBzZWxlY3RlZEluZGV4KCk6IG51bWJlciB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkSW5kZXg7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBzZWxlY3RlZFJhbmdlSWR4cyh2YWx1ZTogbnVtYmVyW10pIHtcclxuICAgIHRoaXMuX3NlbGVjdGVkUmFuZ2VJZHhzID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgc2VsZWN0ZWRSYW5nZUlkeHMoKTogbnVtYmVyW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkUmFuZ2VJZHhzO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgZGF0ZSh2YWx1ZTogRGF0ZSB8IG51bGwpIHtcclxuICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLl9kYXRlID0gdmFsdWU7XHJcbiAgICAgIGlmICh0aGlzLm1vZGUgPT09ICd3ZWVrJykge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHRoaXMuZ2V0V2Vla051bWJlcih2YWx1ZSkgLSAxO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMubW9kZSA9PT0gJ21vbnRoJykge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHZhbHVlLmdldE1vbnRoKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IHJhbmdlKHJhbmdlOiBEYXRlW10pIHtcclxuICAgIGlmIChyYW5nZSAhPT0gbnVsbCAmJiByYW5nZS5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5fcmFuZ2UgPSByYW5nZTtcclxuICAgICAgaWYgKGdldElTT1llYXIodGhpcy5yYW5nZVswXSkgPT09IGdldElTT1llYXIodGhpcy5yYW5nZVsxXSkpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkUmFuZ2VJZHhzID0gW2dldElTT1dlZWsodGhpcy5fcmFuZ2VbMF0pIC0gMSwgZ2V0SVNPV2Vlayh0aGlzLl9yYW5nZVsxXSkgLSAxXTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkUmFuZ2VJZHhzID0gW2dldElTT1dlZWsodGhpcy5fcmFuZ2VbMF0pIC0gMSwgZ2V0SVNPV2Vla3NJblllYXIodGhpcy5fcmFuZ2VbMF0pICsgZ2V0SVNPV2Vlayh0aGlzLl9yYW5nZVsxXSkgLSAxXTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSB0aGlzLl9zZWxlY3RlZFJhbmdlSWR4c1swXTtcclxuXHJcbiAgICAgIHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQgPSB0aGlzLmdldFZhbHVlc1NsaWRlcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IHJhbmdlKCk6IERhdGVbXSB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuX3JhbmdlO1xyXG4gIH1cclxuXHJcbiAgb25DaGFuZ2UocmFuZ2U6IERhdGVbXSk6IHZvaWQge1xyXG4gICAgaWYgKHJhbmdlICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMucmFuZ2UgPSByYW5nZTtcclxuICAgICAgdGhpcy5yYW5nZUNoYW5nZS5lbWl0KHJhbmdlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBkYXRlKCk6IERhdGUgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLl9kYXRlO1xyXG4gIH1cclxuXHJcbiAgZ2V0V2VlayhyZXN1bHQ6IERhdGUpOiB2b2lkIHtcclxuICAgIGlmIChyZXN1bHQgIT09IG51bGwpIHtcclxuICAgICAgdGhpcy5kYXRlQ2hhbmdlLmVtaXQocmVzdWx0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldENsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgdGhpcy5uelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UudXBkYXRlSG9zdENsYXNzKHRoaXMuZWwsIHtcclxuICAgICAgW2BhbnQtdGFic2BdOiB0cnVlLFxyXG4gICAgICBbYGFudC10YWJzLWxpbmVgXTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRXZWVrTnVtYmVyKGRhdGUpe1xyXG4gICAgY29uc3QgbW9udGggPSBtb21lbnQoZGF0ZSkubW9udGgoKTtcclxuICAgIG1vbWVudC51cGRhdGVMb2NhbGUodGhpcy5sb2NhbGUsIHRoaXMud2Vla0xvY2FsZSk7XHJcbiAgICBjb25zdCB3ZWVrID0gbW9tZW50KGRhdGUpLndlZWsoKTtcclxuICAgIGNvbnN0IHdlZWtzSW5ZZWFyID0gZ2V0SVNPV2Vla3NJblllYXIoZGF0ZSk7XHJcbiAgICBpZiAobW9udGggPT09IDExICYmIHdlZWsgPT09IDEpIHtcclxuICAgICAgcmV0dXJuIHdlZWtzSW5ZZWFyO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHdlZWs7XHJcbiAgfVxyXG5cclxuICBjbGlja0xhYmVsKGluZGV4OiBudW1iZXIsIGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAoIWRpc2FibGVkICYmICF0aGlzLnJhbmdlZCAmJiB0aGlzLl9kYXRlICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xyXG5cclxuICAgICAgaWYgKHRoaXMubW9kZSA9PT0gJ3dlZWsnKSB7XHJcbiAgICAgICAgbGV0IGQgPSBuZXcgRGF0ZSh0aGlzLl9kYXRlLmdldEZ1bGxZZWFyKCksIDAsIDEpO1xyXG4gICAgICAgIGQuc2V0RGF0ZShkLmdldERhdGUoKSArIChpbmRleCAqIDcpKTtcclxuICAgICAgICB0aGlzLmRhdGUgPSBkO1xyXG4gICAgICAgIHRoaXMuZGF0ZUNoYW5nZS5lbWl0KHRoaXMuZGF0ZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLm1vZGUgPT09ICdtb250aCcpIHtcclxuICAgICAgICBsZXQgZCA9IG5ldyBEYXRlKHRoaXMuX2RhdGUuZ2V0RnVsbFllYXIoKSwgaW5kZXgsIDEpO1xyXG4gICAgICAgIHRoaXMuZGF0ZSA9IGQ7XHJcbiAgICAgICAgdGhpcy5kYXRlQ2hhbmdlLmVtaXQodGhpcy5kYXRlKTtcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNyZWF0ZUNoYW5nZUV2ZW50KGluZGV4OiBudW1iZXIpOiBUYWJDaGFuZ2VFdmVudCB7XHJcbiAgICBjb25zdCBldmVudCA9IG5ldyBUYWJDaGFuZ2VFdmVudCgpO1xyXG4gICAgZXZlbnQuaW5kZXggPSBpbmRleDtcclxuICAgIGlmICh0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50ICYmIHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQubGVuZ3RoKSB7XHJcbiAgICAgIGV2ZW50LnRhYiA9IHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnRbaW5kZXhdO1xyXG4gICAgICB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50LmZvckVhY2goKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICBpZiAoaSAhPT0gaW5kZXgpIHtcclxuICAgICAgICAgIGl0ZW0uZGVzZWxlY3QuZW1pdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGV2ZW50LnRhYi5zZWxlY3QuZW1pdCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGV2ZW50O1xyXG4gIH1cclxuXHJcbiAgLyoqIENsYW1wcyB0aGUgZ2l2ZW4gaW5kZXggdG8gdGhlIGJvdW5kcyBvZiAwIGFuZCB0aGUgdGFicyBsZW5ndGguICovXHJcbiAgcHJpdmF0ZSBjbGFtcFRhYkluZGV4KGluZGV4OiBudW1iZXIgfCBudWxsKTogbnVtYmVyIHtcclxuICAgIC8vIE5vdGUgdGhlIGB8fCAwYCwgd2hpY2ggZW5zdXJlcyB0aGF0IHZhbHVlcyBsaWtlIE5hTiBjYW4ndCBnZXQgdGhyb3VnaFxyXG4gICAgLy8gYW5kIHdoaWNoIHdvdWxkIG90aGVyd2lzZSB0aHJvdyB0aGUgY29tcG9uZW50IGludG8gYW4gaW5maW5pdGUgbG9vcFxyXG4gICAgLy8gKHNpbmNlIE1hdGgubWF4KE5hTiwgMCkgPT09IE5hTikuXHJcbiAgICByZXR1cm4gTWF0aC5taW4odGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudC5sZW5ndGggLSAxLCBNYXRoLm1heChpbmRleCB8fCAwLCAwKSk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gICAgdGhpcy51cGRhdGVTZWxlY3RlZE1vZGUoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpe1xyXG4gICAgaWYgKGNoYW5nZXMubW9kZSkge1xyXG4gICAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkTW9kZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlU2VsZWN0ZWRNb2RlKCl7XHJcbiAgICB0aGlzLm1vZGVPcHRpb25zLmZvckVhY2gobW9kZSA9PiB7XHJcbiAgICAgIG1vZGUuc2VsZWN0ZWQgPSBtb2RlLnZhbHVlID09PSB0aGlzLm1vZGU7XHJcbiAgICB9KTtcclxuICAgIHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQgPSB0aGlzLmdldFZhbHVlc1NsaWRlcigpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VmFsdWVzU2xpZGVyKCkge1xyXG4gICAgaWYgKHRoaXMubW9kZSA9PT0gJ3dlZWsnICYmICF0aGlzLnJhbmdlZCkge1xyXG4gICAgICB0aGlzLmRhdGUgPSB0aGlzLmRhdGU7XHJcbiAgICAgIHJldHVybiB0aGlzLmdldFdlZWtzSW5ZZWFyKHRoaXMuZGF0ZSk7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMubW9kZSA9PT0gJ21vbnRoJykge1xyXG4gICAgICB0aGlzLmRhdGUgPSB0aGlzLmRhdGU7XHJcbiAgICAgIHJldHVybiBbe3RpdGxlOiAnSmFuJ30sIHt0aXRsZTogJ0ZlYid9LCB7dGl0bGU6ICdNYXInfSwge3RpdGxlOiAnQXByJ30sIHt0aXRsZTogJ01heSd9LCB7dGl0bGU6ICdKdW4nfSxcclxuICAgICAgICB7dGl0bGU6ICdKdWwnfSwge3RpdGxlOiAnQXVnJ30sIHt0aXRsZTogJ1NlcCd9LCB7dGl0bGU6ICdPY3QnfSwge3RpdGxlOiAnTm92J30sIHt0aXRsZTogJ0RlYyd9XTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5tb2RlID09PSAnd2VlaycgJiYgdGhpcy5yYW5nZWQpIHtcclxuICAgICAgaWYgKHRoaXMucmFuZ2UubGVuZ3RoKSB7XHJcbiAgICAgICAgY29uc3Qgc3REYXRlWWVhciA9IGdldElTT1llYXIodGhpcy5yYW5nZVswXSk7XHJcbiAgICAgICAgY29uc3QgbmREYXRlWWVhciA9IGdldElTT1llYXIodGhpcy5yYW5nZVsxXSk7XHJcbiAgICAgICAgaWYgKHN0RGF0ZVllYXIgIT09IG5kRGF0ZVllYXIpIHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLmdldFdlZWtzSW5ZZWFyKHRoaXMucmFuZ2VbMF0pLmNvbmNhdCh0aGlzLmdldFdlZWtzSW5ZZWFyKHRoaXMucmFuZ2VbMV0pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0V2Vla3NJblllYXIodGhpcy5yYW5nZVswXSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRoaXMuZ2V0V2Vla3NJblllYXIobmV3IERhdGUoKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRXZWVrc0luWWVhcihkYXRlOiBEYXRlKSB7XHJcbiAgICBsZXQgdGVtcCA9IFtdO1xyXG4gICAgY29uc3QgbGVuZ3RoID0gZ2V0SVNPV2Vla3NJblllYXIoZGF0ZSk7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcclxuICAgICAgdGVtcC5wdXNoKHt0aXRsZTogdGhpcy5mb3JtYXRXZWVrTnVtYmVyKGkgKyAxKX0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRlbXA7XHJcbiAgfVxyXG5cclxuICBmb3JtYXRXZWVrTnVtYmVyKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHJldHVybiAoXCIwXCIgKyB2YWx1ZSkuc2xpY2UoLTIpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xyXG4gICAgLy90aGlzLnVwZGF0ZVNsaWRlcigpO1xyXG4gICAgaWYgKHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQgJiYgdGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudC5sZW5ndGgpIHtcclxuICAgICAgLy8gRG9uJ3QgY2xhbXAgdGhlIGBpbmRleFRvU2VsZWN0YCBpbW1lZGlhdGVseSBpbiB0aGUgc2V0dGVyIGJlY2F1c2UgaXQgY2FuIGhhcHBlbiB0aGF0XHJcbiAgICAgIC8vIHRoZSBhbW91bnQgb2YgdGFicyBjaGFuZ2VzIGJlZm9yZSB0aGUgYWN0dWFsIGNoYW5nZSBkZXRlY3Rpb24gcnVucy5cclxuICAgICAgY29uc3QgaW5kZXhUb1NlbGVjdCA9ICh0aGlzLmluZGV4VG9TZWxlY3QgPSB0aGlzLmNsYW1wVGFiSW5kZXgodGhpcy5pbmRleFRvU2VsZWN0KSk7XHJcbiAgICAgIC8vIElmIHRoZXJlIGlzIGEgY2hhbmdlIGluIHNlbGVjdGVkIGluZGV4LCBlbWl0IGEgY2hhbmdlIGV2ZW50LiBTaG91bGQgbm90IHRyaWdnZXIgaWZcclxuICAgICAgLy8gdGhlIHNlbGVjdGVkIGluZGV4IGhhcyBub3QgeWV0IGJlZW4gaW5pdGlhbGl6ZWQuXHJcbiAgICAgIGlmICh0aGlzLl9zZWxlY3RlZEluZGV4ICE9PSBpbmRleFRvU2VsZWN0KSB7XHJcbiAgICAgICAgY29uc3QgaXNGaXJzdFJ1biA9IHRoaXMuX3NlbGVjdGVkSW5kZXggPT0gbnVsbDtcclxuICAgICAgICAvKmlmICghaXNGaXJzdFJ1bikge1xyXG4gICAgICAgICAgdGhpcy5zZWxlY3RDaGFuZ2UuZW1pdCh0aGlzLmNyZWF0ZUNoYW5nZUV2ZW50KGluZGV4VG9TZWxlY3QpKTtcclxuICAgICAgICB9Ki9cclxuXHJcbiAgICAgICAgLy8gQ2hhbmdpbmcgdGhlc2UgdmFsdWVzIGFmdGVyIGNoYW5nZSBkZXRlY3Rpb24gaGFzIHJ1blxyXG4gICAgICAgIC8vIHNpbmNlIHRoZSBjaGVja2VkIGNvbnRlbnQgbWF5IGNvbnRhaW4gcmVmZXJlbmNlcyB0byB0aGVtLlxyXG4gICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudC5mb3JFYWNoKCh0YWIsIGluZGV4KSA9PiAodGFiLmlzQWN0aXZlID0gaW5kZXggPT09IGluZGV4VG9TZWxlY3QpKTtcclxuXHJcbiAgICAgICAgICBpZiAoIWlzRmlyc3RSdW4pIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4Q2hhbmdlLmVtaXQoaW5kZXhUb1NlbGVjdCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIFNldHVwIHRoZSBwb3NpdGlvbiBmb3IgZWFjaCB0YWIgYW5kIG9wdGlvbmFsbHkgc2V0dXAgYW4gb3JpZ2luIG9uIHRoZSBuZXh0IHNlbGVjdGVkIHRhYi5cclxuICAgICAgdGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudC5mb3JFYWNoKCh0YWI6IENtYWNzVGFiQ29tcG9uZW50LCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgdGFiLnBvc2l0aW9uID0gaW5kZXggLSBpbmRleFRvU2VsZWN0O1xyXG5cclxuICAgICAgICAvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IGEgc2VsZWN0ZWQgdGFiLCB0aGVuIHNldCB1cCBhbiBvcmlnaW4gZm9yIHRoZSBuZXh0IHNlbGVjdGVkIHRhYlxyXG4gICAgICAgIC8vIGlmIGl0IGRvZXNuJ3QgaGF2ZSBvbmUgYWxyZWFkeS5cclxuICAgICAgICBpZiAodGhpcy5fc2VsZWN0ZWRJbmRleCAhPSBudWxsICYmIHRhYi5wb3NpdGlvbiA9PT0gMCAmJiAhdGFiLm9yaWdpbikge1xyXG4gICAgICAgICAgdGFiLm9yaWdpbiA9IGluZGV4VG9TZWxlY3QgLSB0aGlzLl9zZWxlY3RlZEluZGV4O1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAodGhpcy5fc2VsZWN0ZWRJbmRleCAhPT0gaW5kZXhUb1NlbGVjdCkge1xyXG4gICAgICAgIHRoaXMuX3NlbGVjdGVkSW5kZXggPSBpbmRleFRvU2VsZWN0O1xyXG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjdXN0b21TZWxlY3QoaW5kZXg6IG51bWJlcikge1xyXG4gICAgdGhpcy5tb2RlT3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcclxuICAgICAgb3B0aW9uLnNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICB9KTtcclxuICAgIHRoaXMubW9kZU9wdGlvbnNbaW5kZXhdLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgIHRoaXMubW9kZSA9IHRoaXMubW9kZU9wdGlvbnNbaW5kZXhdLnZhbHVlIGFzIENtYWNzVGltZWxpbmVEYXRlUGlja2VyTW9kZTtcclxuICAgIHRoaXMubW9kZUNoYW5nZS5lbWl0KHRoaXMubW9kZSk7XHJcbiAgICB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50ID0gdGhpcy5nZXRWYWx1ZXNTbGlkZXIoKTtcclxuICB9XHJcblxyXG4gIGdldFNlbGVjdGVkKCl7XHJcbiAgICByZXR1cm4gdGhpcy5tb2RlT3B0aW9ucy5maWx0ZXIoaXRlbSA9PiBpdGVtLnNlbGVjdGVkKTtcclxuICB9XHJcblxyXG4gIGdldE1vbnRoKHJlc3VsdDogRGF0ZSk6IHZvaWQge1xyXG4gICAgdGhpcy5kYXRlQ2hhbmdlLmVtaXQocmVzdWx0KTtcclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG4iXX0=