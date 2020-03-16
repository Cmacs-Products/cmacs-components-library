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
var moment = moment_;
var CmacsTimelineDatepickerComponent = /** @class */ (function () {
    function CmacsTimelineDatepickerComponent(renderer, nzUpdateHostClassService, elementRef, cdr) {
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
    Object.defineProperty(CmacsTimelineDatepickerComponent.prototype, "selectedIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selectedIndex;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.indexToSelect = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsTimelineDatepickerComponent.prototype, "selectedRangeIdxs", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selectedRangeIdxs;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._selectedRangeIdxs = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsTimelineDatepickerComponent.prototype, "date", {
        get: /**
         * @return {?}
         */
        function () {
            return this._date;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value !== null) {
                this._date = value;
                if (this.mode === 'week') {
                    this.selectedIndex = this.getWeekNumber(value) - 1;
                }
                else if (this.mode === 'month') {
                    this.selectedIndex = value.getMonth();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsTimelineDatepickerComponent.prototype, "range", {
        get: /**
         * @return {?}
         */
        function () {
            return this._range;
        },
        set: /**
         * @param {?} range
         * @return {?}
         */
        function (range) {
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
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} range
     * @return {?}
     */
    CmacsTimelineDatepickerComponent.prototype.onChange = /**
     * @param {?} range
     * @return {?}
     */
    function (range) {
        if (range !== null) {
            this.range = range;
            this.rangeChange.emit(range);
        }
    };
    /**
     * @param {?} result
     * @return {?}
     */
    CmacsTimelineDatepickerComponent.prototype.getWeek = /**
     * @param {?} result
     * @return {?}
     */
    function (result) {
        if (result !== null) {
            this.dateChange.emit(result);
        }
    };
    /**
     * @return {?}
     */
    CmacsTimelineDatepickerComponent.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        this.nzUpdateHostClassService.updateHostClass(this.el, (_a = {},
            _a["ant-tabs"] = true,
            _a["ant-tabs-line"] = true,
            _a));
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CmacsTimelineDatepickerComponent.prototype.getWeekNumber = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        /** @type {?} */
        var month = moment(date).month();
        moment.updateLocale(this.locale, this.weekLocale);
        /** @type {?} */
        var week = moment(date).week();
        /** @type {?} */
        var weeksInYear = getISOWeeksInYear(date);
        if (month === 11 && week === 1) {
            return weeksInYear;
        }
        return week;
    };
    /**
     * @param {?} index
     * @param {?} disabled
     * @return {?}
     */
    CmacsTimelineDatepickerComponent.prototype.clickLabel = /**
     * @param {?} index
     * @param {?} disabled
     * @return {?}
     */
    function (index, disabled) {
        if (!disabled && !this.ranged && this._date !== null) {
            this.selectedIndex = index;
            if (this.mode === 'week') {
                /** @type {?} */
                var d = new Date(this._date.getFullYear(), 0, 1);
                d.setDate(d.getDate() + (index * 7));
                this.date = d;
                this.dateChange.emit(this.date);
            }
            if (this.mode === 'month') {
                /** @type {?} */
                var d = new Date(this._date.getFullYear(), index, 1);
                this.date = d;
                this.dateChange.emit(this.date);
            }
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    CmacsTimelineDatepickerComponent.prototype.createChangeEvent = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var event = new TabChangeEvent();
        event.index = index;
        if (this.listOfNzTabComponent && this.listOfNzTabComponent.length) {
            event.tab = this.listOfNzTabComponent[index];
            this.listOfNzTabComponent.forEach((/**
             * @param {?} item
             * @param {?} i
             * @return {?}
             */
            function (item, i) {
                if (i !== index) {
                    item.deselect.emit();
                }
            }));
            event.tab.select.emit();
        }
        return event;
    };
    /** Clamps the given index to the bounds of 0 and the tabs length. */
    /**
     * Clamps the given index to the bounds of 0 and the tabs length.
     * @private
     * @param {?} index
     * @return {?}
     */
    CmacsTimelineDatepickerComponent.prototype.clampTabIndex = /**
     * Clamps the given index to the bounds of 0 and the tabs length.
     * @private
     * @param {?} index
     * @return {?}
     */
    function (index) {
        // Note the `|| 0`, which ensures that values like NaN can't get through
        // and which would otherwise throw the component into an infinite loop
        // (since Math.max(NaN, 0) === NaN).
        return Math.min(this.listOfNzTabComponent.length - 1, Math.max(index || 0, 0));
    };
    /**
     * @return {?}
     */
    CmacsTimelineDatepickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClassMap();
        this.updateSelectedMode();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CmacsTimelineDatepickerComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.mode) {
            this.updateSelectedMode();
        }
    };
    /**
     * @return {?}
     */
    CmacsTimelineDatepickerComponent.prototype.updateSelectedMode = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.modeOptions.forEach((/**
         * @param {?} mode
         * @return {?}
         */
        function (mode) {
            mode.selected = mode.value === _this.mode;
        }));
        this.listOfNzTabComponent = this.getValuesSlider();
    };
    /**
     * @return {?}
     */
    CmacsTimelineDatepickerComponent.prototype.getValuesSlider = /**
     * @return {?}
     */
    function () {
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
                var stDateYear = getISOYear(this.range[0]);
                /** @type {?} */
                var ndDateYear = getISOYear(this.range[1]);
                if (stDateYear !== ndDateYear) {
                    return this.getWeeksInYear(this.range[0]).concat(this.getWeeksInYear(this.range[1]));
                }
                return this.getWeeksInYear(this.range[0]);
            }
            return this.getWeeksInYear(new Date());
        }
    };
    /**
     * @param {?} date
     * @return {?}
     */
    CmacsTimelineDatepickerComponent.prototype.getWeeksInYear = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        /** @type {?} */
        var temp = [];
        /** @type {?} */
        var length = getISOWeeksInYear(date);
        for (var i = 0; i < length; i++) {
            temp.push({ title: this.formatWeekNumber(i + 1) });
        }
        return temp;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsTimelineDatepickerComponent.prototype.formatWeekNumber = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return ("0" + value).slice(-2);
    };
    /**
     * @return {?}
     */
    CmacsTimelineDatepickerComponent.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        var _this = this;
        //this.updateSlider();
        if (this.listOfNzTabComponent && this.listOfNzTabComponent.length) {
            // Don't clamp the `indexToSelect` immediately in the setter because it can happen that
            // the amount of tabs changes before the actual change detection runs.
            /** @type {?} */
            var indexToSelect_1 = (this.indexToSelect = this.clampTabIndex(this.indexToSelect));
            // If there is a change in selected index, emit a change event. Should not trigger if
            // the selected index has not yet been initialized.
            if (this._selectedIndex !== indexToSelect_1) {
                /** @type {?} */
                var isFirstRun_1 = this._selectedIndex == null;
                /*if (!isFirstRun) {
                  this.selectChange.emit(this.createChangeEvent(indexToSelect));
                }*/
                // Changing these values after change detection has run
                // since the checked content may contain references to them.
                Promise.resolve().then((/**
                 * @return {?}
                 */
                function () {
                    _this.listOfNzTabComponent.forEach((/**
                     * @param {?} tab
                     * @param {?} index
                     * @return {?}
                     */
                    function (tab, index) { return (tab.isActive = index === indexToSelect_1); }));
                    if (!isFirstRun_1) {
                        _this.selectedIndexChange.emit(indexToSelect_1);
                    }
                }));
            }
            // Setup the position for each tab and optionally setup an origin on the next selected tab.
            this.listOfNzTabComponent.forEach((/**
             * @param {?} tab
             * @param {?} index
             * @return {?}
             */
            function (tab, index) {
                tab.position = index - indexToSelect_1;
                // If there is already a selected tab, then set up an origin for the next selected tab
                // if it doesn't have one already.
                if (_this._selectedIndex != null && tab.position === 0 && !tab.origin) {
                    tab.origin = indexToSelect_1 - _this._selectedIndex;
                }
            }));
            if (this._selectedIndex !== indexToSelect_1) {
                this._selectedIndex = indexToSelect_1;
                this.cdr.markForCheck();
            }
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    CmacsTimelineDatepickerComponent.prototype.customSelect = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.modeOptions.forEach((/**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            option.selected = false;
        }));
        this.modeOptions[index].selected = true;
        this.mode = (/** @type {?} */ (this.modeOptions[index].value));
        this.modeChange.emit(this.mode);
        this.listOfNzTabComponent = this.getValuesSlider();
    };
    /**
     * @return {?}
     */
    CmacsTimelineDatepickerComponent.prototype.getSelected = /**
     * @return {?}
     */
    function () {
        return this.modeOptions.filter((/**
         * @param {?} item
         * @return {?}
         */
        function (item) { return item.selected; }));
    };
    /**
     * @param {?} result
     * @return {?}
     */
    CmacsTimelineDatepickerComponent.prototype.getMonth = /**
     * @param {?} result
     * @return {?}
     */
    function (result) {
        this.dateChange.emit(result);
    };
    CmacsTimelineDatepickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-timeline-datepicker',
                    exportAs: 'cmacsTimelineDatepicker',
                    template: "<div class=\"cmacs-timeline-item cmacs-timeline-item-dropdown\" *ngIf=\"!restrictMode\">\r\n  <cmacs-dropdown [trigger]=\"'click'\" [cmacsOpen]=\"true\" style=\"display: inline-flex\">\r\n    <a cmacs-dropdown class=\"cmacs-dropdowm-timeline-datepicker\">\r\n      <div class=\"cmacs-open-dropdown-wrapper\" style=\"width: 80px;\">\r\n        {{getSelected().length ? getSelected()[0].title : 'Select'}} <i class=\"iconArrowLarge-Solid-Down\"></i>\r\n      </div>\r\n    </a>\r\n\r\n    <ul cmacs-menu style=\"min-width: 125px\">\r\n      <li *ngFor=\"let option of modeOptions; index as i\" cmacs-menu-item (click)=\"customSelect(i)\">\r\n        <i [style.opacity]=\"option.selected ? 1 : 0\" nz-icon type=\"check\"></i>\r\n        <span>{{option.title}}</span>\r\n      </li>\r\n    </ul>\r\n  </cmacs-dropdown>\r\n</div>\r\n\r\n<div class=\"cmacs-timeline-item cmacs-timeline-item-dropdown\" *ngIf=\"restrictMode\">\r\n  <a class=\"cmacs-dropdowm-timeline-datepicker\">\r\n    <div class=\"cmacs-open-dropdown-wrapper\" style=\"width: 80px;\">\r\n      {{getSelected().length ? getSelected()[0].title : 'Select'}}\r\n    </div>\r\n  </a>\r\n</div>\r\n\r\n<div class=\"cmacs-timeline-item\" style=\"margin-right: 10px; max-width: calc(100% - 160px - 16px);\">\r\n  <div nz-tabs-nav\r\n       role=\"tablist\"\r\n       tabindex=\"0\"\r\n       class=\"ant-tabs-bar ant-tabs-top-bar cmacs-timeline-datepicker-slider\"\r\n       [nzType]=\"'line'\"\r\n       [nzShowPagination]=\"true\"\r\n       [nzPositionMode]=\"'horizontal'\"\r\n       [nzAnimated]=\"true\"\r\n       [nzHideBar]=\"true\"\r\n       [selectedIndex]=\"selectedIndex\"\r\n       (nzOnNextClick)=\"onNextClick.emit()\"\r\n       (nzOnPrevClick)=\"onPrevClick.emit()\">\r\n    <div nz-tab-label\r\n         role=\"tab\"\r\n         [style.margin-right.px]=\"gutter\"\r\n         class=\"cmacs-timeline-datepicker-label\"\r\n         [class.ant-tabs-tab-active]=\"!ranged ? selectedIndex === i :\r\n         selectedRangeIdxs.length ? i >= selectedRangeIdxs[0] && i <= selectedRangeIdxs[1] : 0\"\r\n         [disabled]=\"tab.disabled\"\r\n         (click)=\"clickLabel(i,tab.disabled)\"\r\n         *ngFor=\"let tab of listOfNzTabComponent; let i = index\">\r\n      <ng-container *cmacsStringTemplateOutlet=\"tab.title\">{{ tab.title }}</ng-container>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"cmacs-timeline-item\">\r\n  <ng-container *ngIf=\"mode === 'week' && !ranged\">\r\n    <cmacs-week-picker [(ngModel)]=\"date\" (ngModelChange)=\"getWeek($event)\" placeHolder=\"\"></cmacs-week-picker>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"mode === 'month'\">\r\n    <cmacs-month-picker\r\n      [(ngModel)]=\"date\"\r\n      (ngModelChange)=\"getMonth($event)\"\r\n      placeHolder=\"\"\r\n    ></cmacs-month-picker>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"mode === 'week' && ranged\">\r\n    <cmacs-range-picker\r\n      [ranges]=\"range\"\r\n      [mode]=\"'week'\"\r\n      ngModel\r\n      placeHolder=\"\"\r\n      (ngModelChange)=\"onChange($event)\">\r\n    </cmacs-range-picker>\r\n  </ng-container>\r\n</div>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    providers: [NzUpdateHostClassService],
                    styles: [".cmacs-timeline-datepicker-label.ant-tabs-tab{padding:5px 9px!important;border-radius:3px;font-family:Roboto-Medium;font-size:14px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.29;letter-spacing:normal;color:#656c79}.cmacs-timeline-datepicker-label.ant-tabs-tab-active{background-color:#2a7cff;color:#fff!important}.cmacs-timeline-datepicker-slider.ant-tabs-bar{border-bottom:none;margin-bottom:0}.cmacs-timeline-item{display:inline-block}.cmacs-timeline-item-dropdown{position:relative;top:-7px;margin:0 20px}.cmacs-timeline-item-dropdown .cmacs-dropdowm-timeline-datepicker{font-family:Roboto-Medium;font-size:14px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.29;letter-spacing:normal;color:#3b3f46}.cmacs-timeline-datepicker-label.ant-tabs-tab-active:hover{color:#fff}.cmacs-timeline-item cmacs-picker .ant-calendar-picker-input{width:0;display:inline-block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;border:none;height:0}.cmacs-timeline-item cmacs-picker .ant-calendar-picker-input:focus,.cmacs-timeline-item cmacs-picker .ant-calendar-picker-input:hover{border:none;box-shadow:none}.cmacs-timeline-item cmacs-picker .ant-calendar-picker:hover .ant-calendar-picker-clear{opacity:0;display:none}.cmacs-timeline-item cmacs-picker .ant-calendar-picker-icon{font-size:16px;position:relative;top:-7px}.cmacs-timeline-item cmacs-picker .ant-calendar-picker-icon:hover{cursor:pointer}.cmacs-timeline-item-dropdown .cmacs-dropdowm-timeline-datepicker .cmacs-open-dropdown-wrapper{border:none;width:auto!important;color:#3b3f46;font-size:14px;font-weight:500}.cmacs-timeline-item-dropdown .cmacs-dropdowm-timeline-datepicker .cmacs-open-dropdown-wrapper i{margin-left:10px;color:#3b3f46}.cmacs-timeline-item cmacs-picker .ant-calendar-picker:focus .ant-calendar-picker-input:not(.ant-input-disabled){box-shadow:none}.cmacs-timeline-item cmacs-picker .ant-calendar-range-picker-input,.cmacs-timeline-item cmacs-picker .ant-calendar-range-picker-separator{display:none}", "\n      cmacs-timeline-datepicker {\n        display: block;\n        border-radius: 3px;\n        box-shadow: 0 3px 7px 0 rgba(59, 63, 70, 0.15);\n        background-color: #ffffff;\n        padding: 7px 0 4px 0 !important;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    CmacsTimelineDatepickerComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: NzUpdateHostClassService },
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
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
    return CmacsTimelineDatepickerComponent;
}());
export { CmacsTimelineDatepickerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdGltZWxpbmUtZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLXRpbWVsaW5lLWRhdGVwaWNrZXIvY21hY3MtdGltZWxpbmUtZGF0ZXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUNOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDOUQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBRXBFLE9BQU8sRUFBQyxVQUFVLEVBQUUsaUJBQWlCLEVBQUUsVUFBVSxFQUFDLE1BQU0sVUFBVSxDQUFDO0FBQ25FLE9BQU8sRUFBQyxZQUFZLEVBQWUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxLQUFLLE9BQU8sTUFBTSxRQUFRLENBQUM7QUFDbEMsT0FBTyxxQkFBcUIsQ0FBQzs7SUFDdkIsTUFBTSxHQUFHLE9BQU87QUFJdEI7SUFpTEUsMENBQ1UsUUFBbUIsRUFDbkIsd0JBQWtELEVBQ2xELFVBQXNCLEVBQ3RCLEdBQXNCO1FBSHRCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBL0p4QixrQkFBYSxHQUFrQixDQUFDLENBQUM7UUFDakMsT0FBRSxHQUFnQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztRQUNoRCxtQkFBYyxHQUFrQixJQUFJLENB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OztJQUMxQyxpREFBd0M7Ozs7O0lBQ3hDLGtEQUE0Qjs7SUFDNUIsZ0VBQTRCOztJQUU1QixrREFBNEI7O0lBQzVCLGdEQUFvRDs7SUFDcEQsd0RBQThDOztJQUM5QyxrREFBd0M7O0lBQ3hDLHNEQUFpRDs7SUFDakQsa0RBQXVCOztJQUN2Qix1REFBMEQ7O0lBQzFELHVEQUEwRDs7SUFFMUQsd0RBQXVHOztJQUN2RywrREFBMEY7O0lBQzFGLHNEQUE2RTs7SUFDN0UsdURBQWtGOztJQUNsRixzREFBa0U7O0lBRWxFLHVEQUdJOzs7OztJQWtJRixvREFBMkI7Ozs7O0lBQzNCLG9FQUEwRDs7Ozs7SUFDMUQsc0RBQThCOzs7OztJQUM5QiwrQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudENoZWNrZWQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LCBPbkNoYW5nZXMsXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZXMsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7VGFiQ2hhbmdlRXZlbnR9IGZyb20gXCIuLi9jbWFjcy10YWJzL2NtYWNzLXRhYnNldC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtDbWFjc1RhYkNvbXBvbmVudH0gZnJvbSBcIi4uL2NtYWNzLXRhYnMvY21hY3MtdGFiLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge2dldElTT1dlZWssIGdldElTT1dlZWtzSW5ZZWFyLCBnZXRJU09ZZWFyfSBmcm9tIFwiZGF0ZS1mbnNcIjtcclxuaW1wb3J0IHtJbnB1dEJvb2xlYW4sIFByZXNldFJhbmdlc30gZnJvbSBcIm5nLXpvcnJvLWFudGRcIjtcclxuaW1wb3J0ICogYXMgbW9tZW50XyBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgJ21vbWVudC9sb2NhbGUvZW4taWUnO1xyXG5jb25zdCBtb21lbnQgPSBtb21lbnRfO1xyXG5cclxuZXhwb3J0IHR5cGUgQ21hY3NUaW1lbGluZURhdGVQaWNrZXJNb2RlID0gJ3dlZWsnIHwgJ3F1YXJ0ZXInIHwgJ21vbnRoJyB8ICd3ZWVrLXJhbmdlJyB8ICdtb250aC1yYW5nZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLXRpbWVsaW5lLWRhdGVwaWNrZXInLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NUaW1lbGluZURhdGVwaWNrZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy10aW1lbGluZS1kYXRlcGlja2VyLmNvbXBvbmVudC5odG1sJyxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHByb3ZpZGVyczogW056VXBkYXRlSG9zdENsYXNzU2VydmljZV0sXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtdGltZWxpbmUtZGF0ZXBpY2tlci5jb21wb25lbnQuY3NzJ10sXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIGNtYWNzLXRpbWVsaW5lLWRhdGVwaWNrZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDNweCA3cHggMCByZ2JhKDU5LCA2MywgNzAsIDAuMTUpO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgcGFkZGluZzogN3B4IDAgNHB4IDAgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzVGltZWxpbmVEYXRlcGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50Q2hlY2tlZCwgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIHByaXZhdGUgaW5kZXhUb1NlbGVjdDogbnVtYmVyIHwgbnVsbCA9IDA7XHJcbiAgcHJpdmF0ZSBlbDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICBwcml2YXRlIF9zZWxlY3RlZEluZGV4OiBudW1iZXIgfCBudWxsID0gbnVsbDtcclxuICBwcml2YXRlIF9zZWxlY3RlZFJhbmdlSWR4czogbnVtYmVyW10gPSBbXTtcclxuICBwcml2YXRlIF9kYXRlOiBEYXRlIHwgbnVsbCA9IG5ldyBEYXRlKCk7XHJcbiAgcHJpdmF0ZSBfcmFuZ2U6IERhdGVbXSA9IFtdO1xyXG4gIGxpc3RPZk56VGFiQ29tcG9uZW50OiBhbnlbXTtcclxuXHJcbiAgQElucHV0KCkgZ3V0dGVyOiBudW1iZXIgPSAyO1xyXG4gIEBJbnB1dCgpIG1vZGU6IENtYWNzVGltZWxpbmVEYXRlUGlja2VyTW9kZSA9ICd3ZWVrJztcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgcmVzdHJpY3RNb2RlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHJhbmdlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHdlZWtMb2NhbGUgPSB7d2VlayA6IHtkb3cgOiAwLCBkb3k6IDZ9fTtcclxuICBASW5wdXQoKSBsb2NhbGUgPSAnZW4nO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvbk5leHRDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25QcmV2Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBzZWxlY3RDaGFuZ2U6IEV2ZW50RW1pdHRlcjxUYWJDaGFuZ2VFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPFRhYkNoYW5nZUV2ZW50Pih0cnVlKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgc2VsZWN0ZWRJbmRleENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgZGF0ZUNoYW5nZTogRXZlbnRFbWl0dGVyPERhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSByYW5nZUNoYW5nZTogRXZlbnRFbWl0dGVyPERhdGVbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPERhdGVbXT4oKTtcclxuICBAT3V0cHV0KCkgbW9kZUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgbW9kZU9wdGlvbnMgPSBbXHJcbiAgICB7dGl0bGU6ICdXZWVrJywgdmFsdWU6ICd3ZWVrJywgc2VsZWN0ZWQ6IHRydWV9LFxyXG4gICAge3RpdGxlOiAnTW9udGgnLCB2YWx1ZTogJ21vbnRoJywgc2VsZWN0ZWQ6IGZhbHNlfVxyXG4gICAgXTtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgc2VsZWN0ZWRJbmRleCh2YWx1ZTogbnVtYmVyIHwgbnVsbCkge1xyXG4gICAgdGhpcy5pbmRleFRvU2VsZWN0ID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgc2VsZWN0ZWRJbmRleCgpOiBudW1iZXIgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZEluZGV4O1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgc2VsZWN0ZWRSYW5nZUlkeHModmFsdWU6IG51bWJlcltdKSB7XHJcbiAgICB0aGlzLl9zZWxlY3RlZFJhbmdlSWR4cyA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNlbGVjdGVkUmFuZ2VJZHhzKCk6IG51bWJlcltdIHtcclxuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZFJhbmdlSWR4cztcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGRhdGUodmFsdWU6IERhdGUgfCBudWxsKSB7XHJcbiAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcclxuICAgICAgdGhpcy5fZGF0ZSA9IHZhbHVlO1xyXG4gICAgICBpZiAodGhpcy5tb2RlID09PSAnd2VlaycpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSB0aGlzLmdldFdlZWtOdW1iZXIodmFsdWUpIC0gMTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLm1vZGUgPT09ICdtb250aCcpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSB2YWx1ZS5nZXRNb250aCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCByYW5nZShyYW5nZTogRGF0ZVtdKSB7XHJcbiAgICBpZiAocmFuZ2UgIT09IG51bGwgJiYgcmFuZ2UubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuX3JhbmdlID0gcmFuZ2U7XHJcbiAgICAgIGlmIChnZXRJU09ZZWFyKHRoaXMucmFuZ2VbMF0pID09PSBnZXRJU09ZZWFyKHRoaXMucmFuZ2VbMV0pKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFJhbmdlSWR4cyA9IFtnZXRJU09XZWVrKHRoaXMuX3JhbmdlWzBdKSAtIDEsIGdldElTT1dlZWsodGhpcy5fcmFuZ2VbMV0pIC0gMV07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFJhbmdlSWR4cyA9IFtnZXRJU09XZWVrKHRoaXMuX3JhbmdlWzBdKSAtIDEsIGdldElTT1dlZWtzSW5ZZWFyKHRoaXMuX3JhbmdlWzBdKSArIGdldElTT1dlZWsodGhpcy5fcmFuZ2VbMV0pIC0gMV07XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gdGhpcy5fc2VsZWN0ZWRSYW5nZUlkeHNbMF07XHJcblxyXG4gICAgICB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50ID0gdGhpcy5nZXRWYWx1ZXNTbGlkZXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCByYW5nZSgpOiBEYXRlW10gfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLl9yYW5nZTtcclxuICB9XHJcblxyXG4gIG9uQ2hhbmdlKHJhbmdlOiBEYXRlW10pOiB2b2lkIHtcclxuICAgIGlmIChyYW5nZSAhPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLnJhbmdlID0gcmFuZ2U7XHJcbiAgICAgIHRoaXMucmFuZ2VDaGFuZ2UuZW1pdChyYW5nZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgZGF0ZSgpOiBEYXRlIHwgbnVsbCB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGF0ZTtcclxuICB9XHJcblxyXG4gIGdldFdlZWsocmVzdWx0OiBEYXRlKTogdm9pZCB7XHJcbiAgICBpZiAocmVzdWx0ICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuZGF0ZUNoYW5nZS5lbWl0KHJlc3VsdCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRDbGFzc01hcCgpOiB2b2lkIHtcclxuICAgIHRoaXMubnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsLCB7XHJcbiAgICAgIFtgYW50LXRhYnNgXTogdHJ1ZSxcclxuICAgICAgW2BhbnQtdGFicy1saW5lYF06IHRydWVcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0V2Vla051bWJlcihkYXRlKXtcclxuICAgIGNvbnN0IG1vbnRoID0gbW9tZW50KGRhdGUpLm1vbnRoKCk7XHJcbiAgICBtb21lbnQudXBkYXRlTG9jYWxlKHRoaXMubG9jYWxlLCB0aGlzLndlZWtMb2NhbGUpO1xyXG4gICAgY29uc3Qgd2VlayA9IG1vbWVudChkYXRlKS53ZWVrKCk7XHJcbiAgICBjb25zdCB3ZWVrc0luWWVhciA9IGdldElTT1dlZWtzSW5ZZWFyKGRhdGUpO1xyXG4gICAgaWYgKG1vbnRoID09PSAxMSAmJiB3ZWVrID09PSAxKSB7XHJcbiAgICAgIHJldHVybiB3ZWVrc0luWWVhcjtcclxuICAgIH1cclxuICAgIHJldHVybiB3ZWVrO1xyXG4gIH1cclxuXHJcbiAgY2xpY2tMYWJlbChpbmRleDogbnVtYmVyLCBkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKCFkaXNhYmxlZCAmJiAhdGhpcy5yYW5nZWQgJiYgdGhpcy5fZGF0ZSAhPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBpbmRleDtcclxuXHJcbiAgICAgIGlmICh0aGlzLm1vZGUgPT09ICd3ZWVrJykge1xyXG4gICAgICAgIGxldCBkID0gbmV3IERhdGUodGhpcy5fZGF0ZS5nZXRGdWxsWWVhcigpLCAwLCAxKTtcclxuICAgICAgICBkLnNldERhdGUoZC5nZXREYXRlKCkgKyAoaW5kZXggKiA3KSk7XHJcbiAgICAgICAgdGhpcy5kYXRlID0gZDtcclxuICAgICAgICB0aGlzLmRhdGVDaGFuZ2UuZW1pdCh0aGlzLmRhdGUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5tb2RlID09PSAnbW9udGgnKSB7XHJcbiAgICAgICAgbGV0IGQgPSBuZXcgRGF0ZSh0aGlzLl9kYXRlLmdldEZ1bGxZZWFyKCksIGluZGV4LCAxKTtcclxuICAgICAgICB0aGlzLmRhdGUgPSBkO1xyXG4gICAgICAgIHRoaXMuZGF0ZUNoYW5nZS5lbWl0KHRoaXMuZGF0ZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjcmVhdGVDaGFuZ2VFdmVudChpbmRleDogbnVtYmVyKTogVGFiQ2hhbmdlRXZlbnQge1xyXG4gICAgY29uc3QgZXZlbnQgPSBuZXcgVGFiQ2hhbmdlRXZlbnQoKTtcclxuICAgIGV2ZW50LmluZGV4ID0gaW5kZXg7XHJcbiAgICBpZiAodGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudCAmJiB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50Lmxlbmd0aCkge1xyXG4gICAgICBldmVudC50YWIgPSB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50W2luZGV4XTtcclxuICAgICAgdGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudC5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgaWYgKGkgIT09IGluZGV4KSB7XHJcbiAgICAgICAgICBpdGVtLmRlc2VsZWN0LmVtaXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBldmVudC50YWIuc2VsZWN0LmVtaXQoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBldmVudDtcclxuICB9XHJcblxyXG4gIC8qKiBDbGFtcHMgdGhlIGdpdmVuIGluZGV4IHRvIHRoZSBib3VuZHMgb2YgMCBhbmQgdGhlIHRhYnMgbGVuZ3RoLiAqL1xyXG4gIHByaXZhdGUgY2xhbXBUYWJJbmRleChpbmRleDogbnVtYmVyIHwgbnVsbCk6IG51bWJlciB7XHJcbiAgICAvLyBOb3RlIHRoZSBgfHwgMGAsIHdoaWNoIGVuc3VyZXMgdGhhdCB2YWx1ZXMgbGlrZSBOYU4gY2FuJ3QgZ2V0IHRocm91Z2hcclxuICAgIC8vIGFuZCB3aGljaCB3b3VsZCBvdGhlcndpc2UgdGhyb3cgdGhlIGNvbXBvbmVudCBpbnRvIGFuIGluZmluaXRlIGxvb3BcclxuICAgIC8vIChzaW5jZSBNYXRoLm1heChOYU4sIDApID09PSBOYU4pLlxyXG4gICAgcmV0dXJuIE1hdGgubWluKHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQubGVuZ3RoIC0gMSwgTWF0aC5tYXgoaW5kZXggfHwgMCwgMCkpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIG56VXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICAgIHRoaXMudXBkYXRlU2VsZWN0ZWRNb2RlKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKXtcclxuICAgIGlmIChjaGFuZ2VzLm1vZGUpIHtcclxuICAgICAgdGhpcy51cGRhdGVTZWxlY3RlZE1vZGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZVNlbGVjdGVkTW9kZSgpe1xyXG4gICAgdGhpcy5tb2RlT3B0aW9ucy5mb3JFYWNoKG1vZGUgPT4ge1xyXG4gICAgICBtb2RlLnNlbGVjdGVkID0gbW9kZS52YWx1ZSA9PT0gdGhpcy5tb2RlO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50ID0gdGhpcy5nZXRWYWx1ZXNTbGlkZXIoKTtcclxuICB9XHJcblxyXG4gIGdldFZhbHVlc1NsaWRlcigpIHtcclxuICAgIGlmICh0aGlzLm1vZGUgPT09ICd3ZWVrJyAmJiAhdGhpcy5yYW5nZWQpIHtcclxuICAgICAgdGhpcy5kYXRlID0gdGhpcy5kYXRlO1xyXG4gICAgICByZXR1cm4gdGhpcy5nZXRXZWVrc0luWWVhcih0aGlzLmRhdGUpO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLm1vZGUgPT09ICdtb250aCcpIHtcclxuICAgICAgdGhpcy5kYXRlID0gdGhpcy5kYXRlO1xyXG4gICAgICByZXR1cm4gW3t0aXRsZTogJ0phbid9LCB7dGl0bGU6ICdGZWInfSwge3RpdGxlOiAnTWFyJ30sIHt0aXRsZTogJ0Fwcid9LCB7dGl0bGU6ICdNYXknfSwge3RpdGxlOiAnSnVuJ30sXHJcbiAgICAgICAge3RpdGxlOiAnSnVsJ30sIHt0aXRsZTogJ0F1Zyd9LCB7dGl0bGU6ICdTZXAnfSwge3RpdGxlOiAnT2N0J30sIHt0aXRsZTogJ05vdid9LCB7dGl0bGU6ICdEZWMnfV07XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMubW9kZSA9PT0gJ3dlZWsnICYmIHRoaXMucmFuZ2VkKSB7XHJcbiAgICAgIGlmICh0aGlzLnJhbmdlLmxlbmd0aCkge1xyXG4gICAgICAgIGNvbnN0IHN0RGF0ZVllYXIgPSBnZXRJU09ZZWFyKHRoaXMucmFuZ2VbMF0pO1xyXG4gICAgICAgIGNvbnN0IG5kRGF0ZVllYXIgPSBnZXRJU09ZZWFyKHRoaXMucmFuZ2VbMV0pO1xyXG4gICAgICAgIGlmIChzdERhdGVZZWFyICE9PSBuZERhdGVZZWFyKSB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5nZXRXZWVrc0luWWVhcih0aGlzLnJhbmdlWzBdKS5jb25jYXQodGhpcy5nZXRXZWVrc0luWWVhcih0aGlzLnJhbmdlWzFdKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmdldFdlZWtzSW5ZZWFyKHRoaXMucmFuZ2VbMF0pO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0aGlzLmdldFdlZWtzSW5ZZWFyKG5ldyBEYXRlKCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0V2Vla3NJblllYXIoZGF0ZTogRGF0ZSkge1xyXG4gICAgbGV0IHRlbXAgPSBbXTtcclxuICAgIGNvbnN0IGxlbmd0aCA9IGdldElTT1dlZWtzSW5ZZWFyKGRhdGUpO1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHRlbXAucHVzaCh7dGl0bGU6IHRoaXMuZm9ybWF0V2Vla051bWJlcihpICsgMSl9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB0ZW1wO1xyXG4gIH1cclxuXHJcbiAgZm9ybWF0V2Vla051bWJlcih2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gKFwiMFwiICsgdmFsdWUpLnNsaWNlKC0yKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcclxuICAgIC8vdGhpcy51cGRhdGVTbGlkZXIoKTtcclxuICAgIGlmICh0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50ICYmIHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQubGVuZ3RoKSB7XHJcbiAgICAgIC8vIERvbid0IGNsYW1wIHRoZSBgaW5kZXhUb1NlbGVjdGAgaW1tZWRpYXRlbHkgaW4gdGhlIHNldHRlciBiZWNhdXNlIGl0IGNhbiBoYXBwZW4gdGhhdFxyXG4gICAgICAvLyB0aGUgYW1vdW50IG9mIHRhYnMgY2hhbmdlcyBiZWZvcmUgdGhlIGFjdHVhbCBjaGFuZ2UgZGV0ZWN0aW9uIHJ1bnMuXHJcbiAgICAgIGNvbnN0IGluZGV4VG9TZWxlY3QgPSAodGhpcy5pbmRleFRvU2VsZWN0ID0gdGhpcy5jbGFtcFRhYkluZGV4KHRoaXMuaW5kZXhUb1NlbGVjdCkpO1xyXG4gICAgICAvLyBJZiB0aGVyZSBpcyBhIGNoYW5nZSBpbiBzZWxlY3RlZCBpbmRleCwgZW1pdCBhIGNoYW5nZSBldmVudC4gU2hvdWxkIG5vdCB0cmlnZ2VyIGlmXHJcbiAgICAgIC8vIHRoZSBzZWxlY3RlZCBpbmRleCBoYXMgbm90IHlldCBiZWVuIGluaXRpYWxpemVkLlxyXG4gICAgICBpZiAodGhpcy5fc2VsZWN0ZWRJbmRleCAhPT0gaW5kZXhUb1NlbGVjdCkge1xyXG4gICAgICAgIGNvbnN0IGlzRmlyc3RSdW4gPSB0aGlzLl9zZWxlY3RlZEluZGV4ID09IG51bGw7XHJcbiAgICAgICAgLyppZiAoIWlzRmlyc3RSdW4pIHtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0Q2hhbmdlLmVtaXQodGhpcy5jcmVhdGVDaGFuZ2VFdmVudChpbmRleFRvU2VsZWN0KSk7XHJcbiAgICAgICAgfSovXHJcblxyXG4gICAgICAgIC8vIENoYW5naW5nIHRoZXNlIHZhbHVlcyBhZnRlciBjaGFuZ2UgZGV0ZWN0aW9uIGhhcyBydW5cclxuICAgICAgICAvLyBzaW5jZSB0aGUgY2hlY2tlZCBjb250ZW50IG1heSBjb250YWluIHJlZmVyZW5jZXMgdG8gdGhlbS5cclxuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQuZm9yRWFjaCgodGFiLCBpbmRleCkgPT4gKHRhYi5pc0FjdGl2ZSA9IGluZGV4ID09PSBpbmRleFRvU2VsZWN0KSk7XHJcblxyXG4gICAgICAgICAgaWYgKCFpc0ZpcnN0UnVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleENoYW5nZS5lbWl0KGluZGV4VG9TZWxlY3QpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBTZXR1cCB0aGUgcG9zaXRpb24gZm9yIGVhY2ggdGFiIGFuZCBvcHRpb25hbGx5IHNldHVwIGFuIG9yaWdpbiBvbiB0aGUgbmV4dCBzZWxlY3RlZCB0YWIuXHJcbiAgICAgIHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQuZm9yRWFjaCgodGFiOiBDbWFjc1RhYkNvbXBvbmVudCwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHRhYi5wb3NpdGlvbiA9IGluZGV4IC0gaW5kZXhUb1NlbGVjdDtcclxuXHJcbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgYWxyZWFkeSBhIHNlbGVjdGVkIHRhYiwgdGhlbiBzZXQgdXAgYW4gb3JpZ2luIGZvciB0aGUgbmV4dCBzZWxlY3RlZCB0YWJcclxuICAgICAgICAvLyBpZiBpdCBkb2Vzbid0IGhhdmUgb25lIGFscmVhZHkuXHJcbiAgICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkSW5kZXggIT0gbnVsbCAmJiB0YWIucG9zaXRpb24gPT09IDAgJiYgIXRhYi5vcmlnaW4pIHtcclxuICAgICAgICAgIHRhYi5vcmlnaW4gPSBpbmRleFRvU2VsZWN0IC0gdGhpcy5fc2VsZWN0ZWRJbmRleDtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkSW5kZXggIT09IGluZGV4VG9TZWxlY3QpIHtcclxuICAgICAgICB0aGlzLl9zZWxlY3RlZEluZGV4ID0gaW5kZXhUb1NlbGVjdDtcclxuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3VzdG9tU2VsZWN0KGluZGV4OiBudW1iZXIpIHtcclxuICAgIHRoaXMubW9kZU9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XHJcbiAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLm1vZGVPcHRpb25zW2luZGV4XS5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICB0aGlzLm1vZGUgPSB0aGlzLm1vZGVPcHRpb25zW2luZGV4XS52YWx1ZSBhcyBDbWFjc1RpbWVsaW5lRGF0ZVBpY2tlck1vZGU7XHJcbiAgICB0aGlzLm1vZGVDaGFuZ2UuZW1pdCh0aGlzLm1vZGUpO1xyXG4gICAgdGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudCA9IHRoaXMuZ2V0VmFsdWVzU2xpZGVyKCk7XHJcbiAgfVxyXG5cclxuICBnZXRTZWxlY3RlZCgpe1xyXG4gICAgcmV0dXJuIHRoaXMubW9kZU9wdGlvbnMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5zZWxlY3RlZCk7XHJcbiAgfVxyXG5cclxuICBnZXRNb250aChyZXN1bHQ6IERhdGUpOiB2b2lkIHtcclxuICAgIHRoaXMuZGF0ZUNoYW5nZS5lbWl0KHJlc3VsdCk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuIl19