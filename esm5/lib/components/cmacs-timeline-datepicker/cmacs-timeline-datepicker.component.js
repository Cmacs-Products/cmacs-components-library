/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewEncapsulation } from '@angular/core';
import { NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { TabChangeEvent } from "../cmacs-tabs/cmacs-tabset.component";
import { getISOWeek, getISOWeeksInYear } from "date-fns";
import { InputBoolean } from "ng-zorro-antd";
var CmacsTimelineDatepickerComponent = /** @class */ (function () {
    function CmacsTimelineDatepickerComponent(renderer, nzUpdateHostClassService, elementRef, cdr) {
        this.renderer = renderer;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.indexToSelect = 0;
        this.el = this.elementRef.nativeElement;
        this._selectedIndex = null;
        this.gutter = 2;
        this.mode = 'week';
        this.restrictMode = false;
        this.onNextClick = new EventEmitter();
        this.onPrevClick = new EventEmitter();
        this.selectChange = new EventEmitter(true);
        this.selectedIndexChange = new EventEmitter();
        this.dateChange = new EventEmitter();
        this.modeOptions = [{ title: 'Week', value: 'week', selected: true },
            { title: 'Month', value: 'month', selected: false }];
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
        return getISOWeek(date);
        /*let now = date;
        let onejan = new Date(now.getFullYear(), 0, 1) as any;
        let day = onejan.getDay() as any;
        return Math.ceil( (((now - onejan) / 86400000) + day + 1) / 7 );*/
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
        if (!disabled) {
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
        /** @type {?} */
        var temp = [];
        this.date = this.date;
        if (this.mode === 'week') {
            /** @type {?} */
            var length_1 = getISOWeeksInYear(this.date);
            for (var i = 0; i <= length_1; i++) {
                temp.push({ title: this.formatWeekNumber(i + 1) });
            }
            return temp;
        }
        else if (this.mode === 'month') {
            return [{ title: 'Jan' }, { title: 'Feb' }, { title: 'Mar' }, { title: 'Apr' }, { title: 'May' }, { title: 'Jun' },
                { title: 'Jul' }, { title: 'Aug' }, { title: 'Sep' }, { title: 'Oct' }, { title: 'Nov' }, { title: 'Dec' }];
        }
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
                    template: "<div class=\"cmacs-timeline-item cmacs-timeline-item-dropdown\" *ngIf=\"!restrictMode\">\r\n  <cmacs-dropdown [trigger]=\"'click'\" [cmacsOpen]=\"true\" style=\"display: inline-flex\">\r\n    <a cmacs-dropdown class=\"cmacs-dropdowm-timeline-datepicker\">\r\n      <div class=\"cmacs-open-dropdown-wrapper\" style=\"width: 80px;\">\r\n        {{getSelected().length ? getSelected()[0].title : 'Select'}} <i class=\"iconArrowLarge-Solid-Down\"></i>\r\n      </div>\r\n    </a>\r\n\r\n    <ul cmacs-menu style=\"min-width: 125px\">\r\n      <li *ngFor=\"let option of modeOptions; index as i\" cmacs-menu-item (click)=\"customSelect(i)\">\r\n        <i [style.opacity]=\"option.selected ? 1 : 0\" nz-icon type=\"check\"></i>\r\n        <span>{{option.title}}</span>\r\n      </li>\r\n    </ul>\r\n  </cmacs-dropdown>\r\n</div>\r\n\r\n<div class=\"cmacs-timeline-item cmacs-timeline-item-dropdown\" *ngIf=\"restrictMode\">\r\n  <a class=\"cmacs-dropdowm-timeline-datepicker\">\r\n    <div class=\"cmacs-open-dropdown-wrapper\" style=\"width: 80px;\">\r\n      {{getSelected().length ? getSelected()[0].title : 'Select'}}\r\n    </div>\r\n  </a>\r\n</div>\r\n\r\n<div class=\"cmacs-timeline-item\" style=\"margin-right: 10px; max-width: calc(100% - 160px - 16px);\">\r\n  <div nz-tabs-nav\r\n       role=\"tablist\"\r\n       tabindex=\"0\"\r\n       class=\"ant-tabs-bar ant-tabs-top-bar cmacs-timeline-datepicker-slider\"\r\n       [nzType]=\"'line'\"\r\n       [nzShowPagination]=\"true\"\r\n       [nzPositionMode]=\"'horizontal'\"\r\n       [nzAnimated]=\"true\"\r\n       [nzHideBar]=\"true\"\r\n       [selectedIndex]=\"selectedIndex\"\r\n       (nzOnNextClick)=\"onNextClick.emit()\"\r\n       (nzOnPrevClick)=\"onPrevClick.emit()\">\r\n    <div nz-tab-label\r\n         role=\"tab\"\r\n         [style.margin-right.px]=\"gutter\"\r\n         class=\"cmacs-timeline-datepicker-label\"\r\n         [class.ant-tabs-tab-active]=\"(selectedIndex === i)\"\r\n         [disabled]=\"tab.disabled\"\r\n         (click)=\"clickLabel(i,tab.disabled)\"\r\n         *ngFor=\"let tab of listOfNzTabComponent; let i = index\">\r\n      <ng-container *cmacsStringTemplateOutlet=\"tab.title\">{{ tab.title }}</ng-container>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"cmacs-timeline-item\">\r\n  <ng-container *ngIf=\"mode === 'week'\">\r\n    <cmacs-week-picker [(ngModel)]=\"date\" (ngModelChange)=\"getWeek($event)\" placeHolder=\"\"></cmacs-week-picker>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"mode === 'month'\">\r\n    <cmacs-month-picker\r\n      [(ngModel)]=\"date\"\r\n      (ngModelChange)=\"getMonth($event)\"\r\n      placeHolder=\"\"\r\n    ></cmacs-month-picker>\r\n  </ng-container>\r\n  <!--<ng-container *ngIf=\"mode === ('week-range' || 'month-range')\">\r\n    <cmacs-range-picker [ranges]=\"date\" ngModel (ngModelChange)=\"onChange($event)\"></cmacs-range-picker>\r\n  </ng-container>-->\r\n</div>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    providers: [NzUpdateHostClassService],
                    styles: [".ant-tabs-tab{padding:5px 9px!important;border-radius:3px;font-family:Roboto;font-size:14px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.29;letter-spacing:normal;color:#656c79}.cmacs-timeline-datepicker-label.ant-tabs-tab-active{background-color:#2a7cff;color:#fff}.ant-tabs-bar{border-bottom:none;margin-bottom:0}.cmacs-timeline-item{display:inline-block}.cmacs-timeline-item-dropdown{position:relative;top:-7px;margin:0 20px}.cmacs-timeline-item-dropdown .cmacs-dropdowm-timeline-datepicker{font-family:Roboto;font-size:14px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.29;letter-spacing:normal;color:#3b3f46}.cmacs-timeline-datepicker-label.ant-tabs-tab-active:hover{color:#fff}.cmacs-timeline-item cmacs-picker .ant-calendar-picker-input{width:0;display:inline-block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;border:none;height:0}.cmacs-timeline-item cmacs-picker .ant-calendar-picker-input:focus,.cmacs-timeline-item cmacs-picker .ant-calendar-picker-input:hover{border:none;box-shadow:none}.cmacs-timeline-item cmacs-picker .ant-calendar-picker:hover .ant-calendar-picker-clear{opacity:0;display:none}.cmacs-timeline-item cmacs-picker .ant-calendar-picker-icon{font-size:16px;position:relative;top:-7px}.cmacs-timeline-item cmacs-picker .ant-calendar-picker-icon:hover{cursor:pointer}.cmacs-timeline-item-dropdown .cmacs-dropdowm-timeline-datepicker .cmacs-open-dropdown-wrapper{border:none;width:auto!important;color:#3b3f46;font-size:14px;font-weight:500}.cmacs-timeline-item-dropdown .cmacs-dropdowm-timeline-datepicker .cmacs-open-dropdown-wrapper i{margin-left:10px;color:#3b3f46}.cmacs-timeline-item cmacs-picker .ant-calendar-picker:focus .ant-calendar-picker-input:not(.ant-input-disabled){box-shadow:none}", "\n      cmacs-timeline-datepicker {\n        display: block;\n        border-radius: 3px;\n        box-shadow: 0 3px 7px 0 rgba(59, 63, 70, 0.15);\n        background-color: #ffffff;\n        padding: 7px 0 4px 0 !important;\n      }\n    "]
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
        onNextClick: [{ type: Output }],
        onPrevClick: [{ type: Output }],
        selectChange: [{ type: Output }],
        selectedIndexChange: [{ type: Output }],
        dateChange: [{ type: Output }],
        selectedIndex: [{ type: Input }],
        date: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], CmacsTimelineDatepickerComponent.prototype, "restrictMode", void 0);
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
    CmacsTimelineDatepickerComponent.prototype._date;
    /** @type {?} */
    CmacsTimelineDatepickerComponent.prototype.listOfNzTabComponent;
    /** @type {?} */
    CmacsTimelineDatepickerComponent.prototype.gutter;
    /** @type {?} */
    CmacsTimelineDatepickerComponent.prototype.mode;
    /** @type {?} */
    CmacsTimelineDatepickerComponent.prototype.restrictMode;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdGltZWxpbmUtZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLXRpbWVsaW5lLWRhdGVwaWNrZXIvY21hY3MtdGltZWxpbmUtZGF0ZXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUNOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDOUQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBRXBFLE9BQU8sRUFBQyxVQUFVLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFDdkQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUkzQztJQWlJRSwwQ0FDVSxRQUFtQixFQUNuQix3QkFBa0QsRUFDbEQsVUFBc0IsRUFDdEIsR0FBc0I7UUFIdEIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUEvR3hCLGtCQUFhLEdBQWtCLENBQUMsQ0FBQztRQUNqQyxPQUFFLEdBQWdCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQ2hELG1CQUFjLEdBQWtCLElBQUksQ0FBQztRQUlwQyxXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLFNBQUksR0FBZ0MsTUFBTSxDQUFDO1FBQzNCLGlCQUFZLEdBQUcsS0FBSyxDQUFDO1FBQzNCLGdC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RTVCLGtEQUE0Qjs7SUFDNUIsZ0RBQW9EOztJQUNwRCx3REFBOEM7O0lBQzlDLHVEQUEwRDs7SUFDMUQsdURBQTBEOztJQUUxRCx3REFBdUc7O0lBQ3ZHLCtEQUEwRjs7SUFDMUYsc0RBQTZFOztJQUM3RSx1REFDcUQ7Ozs7O0lBNEZuRCxvREFBMkI7Ozs7O0lBQzNCLG9FQUEwRDs7Ozs7SUFDMUQsc0RBQThCOzs7OztJQUM5QiwrQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyQ29udGVudENoZWNrZWQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LCBPbkNoYW5nZXMsXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBSZW5kZXJlcjIsIFNpbXBsZUNoYW5nZXMsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7VGFiQ2hhbmdlRXZlbnR9IGZyb20gXCIuLi9jbWFjcy10YWJzL2NtYWNzLXRhYnNldC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtDbWFjc1RhYkNvbXBvbmVudH0gZnJvbSBcIi4uL2NtYWNzLXRhYnMvY21hY3MtdGFiLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge2dldElTT1dlZWssIGdldElTT1dlZWtzSW5ZZWFyfSBmcm9tIFwiZGF0ZS1mbnNcIjtcclxuaW1wb3J0IHtJbnB1dEJvb2xlYW59IGZyb20gXCJuZy16b3Jyby1hbnRkXCI7XHJcblxyXG5leHBvcnQgdHlwZSBDbWFjc1RpbWVsaW5lRGF0ZVBpY2tlck1vZGUgPSAnd2VlaycgfCAncXVhcnRlcicgfCAnbW9udGgnIHwgJ3dlZWstcmFuZ2UnIHwgJ21vbnRoLXJhbmdlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtdGltZWxpbmUtZGF0ZXBpY2tlcicsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc1RpbWVsaW5lRGF0ZXBpY2tlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLXRpbWVsaW5lLWRhdGVwaWNrZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgcHJvdmlkZXJzOiBbTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlXSxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy10aW1lbGluZS1kYXRlcGlja2VyLmNvbXBvbmVudC5jc3MnXSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgY21hY3MtdGltZWxpbmUtZGF0ZXBpY2tlciB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDdweCAwIHJnYmEoNTksIDYzLCA3MCwgMC4xNSk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBwYWRkaW5nOiA3cHggMCA0cHggMCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NUaW1lbGluZURhdGVwaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkLCBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgcHJpdmF0ZSBpbmRleFRvU2VsZWN0OiBudW1iZXIgfCBudWxsID0gMDtcclxuICBwcml2YXRlIGVsOiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG4gIHByaXZhdGUgX3NlbGVjdGVkSW5kZXg6IG51bWJlciB8IG51bGwgPSBudWxsO1xyXG4gIHByaXZhdGUgX2RhdGU6IERhdGUgfCBudWxsO1xyXG4gIGxpc3RPZk56VGFiQ29tcG9uZW50OiBhbnlbXTtcclxuXHJcbiAgQElucHV0KCkgZ3V0dGVyOiBudW1iZXIgPSAyO1xyXG4gIEBJbnB1dCgpIG1vZGU6IENtYWNzVGltZWxpbmVEYXRlUGlja2VyTW9kZSA9ICd3ZWVrJztcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgcmVzdHJpY3RNb2RlID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uTmV4dENsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBvblByZXZDbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHNlbGVjdENoYW5nZTogRXZlbnRFbWl0dGVyPFRhYkNoYW5nZUV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8VGFiQ2hhbmdlRXZlbnQ+KHRydWUpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBzZWxlY3RlZEluZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBkYXRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyPERhdGU+KCk7XHJcbiAgbW9kZU9wdGlvbnMgPSBbIHt0aXRsZTogJ1dlZWsnLCB2YWx1ZTogJ3dlZWsnLCBzZWxlY3RlZDogdHJ1ZX0sXHJcbiAgICB7dGl0bGU6ICdNb250aCcsIHZhbHVlOiAnbW9udGgnLCBzZWxlY3RlZDogZmFsc2V9XTtcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgc2VsZWN0ZWRJbmRleCh2YWx1ZTogbnVtYmVyIHwgbnVsbCkge1xyXG4gICAgdGhpcy5pbmRleFRvU2VsZWN0ID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBnZXQgc2VsZWN0ZWRJbmRleCgpOiBudW1iZXIgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZEluZGV4O1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgZGF0ZSh2YWx1ZTogRGF0ZSB8IG51bGwpIHtcclxuICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLl9kYXRlID0gdmFsdWU7XHJcbiAgICAgIGlmICh0aGlzLm1vZGUgPT09ICd3ZWVrJykge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHRoaXMuZ2V0V2Vla051bWJlcih2YWx1ZSkgLSAxO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMubW9kZSA9PT0gJ21vbnRoJykge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IHZhbHVlLmdldE1vbnRoKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBkYXRlKCk6IERhdGUgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLl9kYXRlO1xyXG4gIH1cclxuXHJcbiAgZ2V0V2VlayhyZXN1bHQ6IERhdGUpOiB2b2lkIHtcclxuICAgIGlmIChyZXN1bHQgIT09IG51bGwpIHtcclxuICAgICAgdGhpcy5kYXRlQ2hhbmdlLmVtaXQocmVzdWx0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldENsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgdGhpcy5uelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UudXBkYXRlSG9zdENsYXNzKHRoaXMuZWwsIHtcclxuICAgICAgW2BhbnQtdGFic2BdOiB0cnVlLFxyXG4gICAgICBbYGFudC10YWJzLWxpbmVgXTogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRXZWVrTnVtYmVyKGRhdGUpe1xyXG4gICAgcmV0dXJuIGdldElTT1dlZWsoZGF0ZSk7XHJcbiAgICAvKmxldCBub3cgPSBkYXRlO1xyXG4gICAgbGV0IG9uZWphbiA9IG5ldyBEYXRlKG5vdy5nZXRGdWxsWWVhcigpLCAwLCAxKSBhcyBhbnk7XHJcbiAgICBsZXQgZGF5ID0gb25lamFuLmdldERheSgpIGFzIGFueTtcclxuICAgIHJldHVybiBNYXRoLmNlaWwoICgoKG5vdyAtIG9uZWphbikgLyA4NjQwMDAwMCkgKyBkYXkgKyAxKSAvIDcgKTsqL1xyXG4gIH1cclxuXHJcbiAgY2xpY2tMYWJlbChpbmRleDogbnVtYmVyLCBkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKCFkaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSBpbmRleDtcclxuXHJcbiAgICAgIGlmICh0aGlzLm1vZGUgPT09ICd3ZWVrJykge1xyXG4gICAgICAgIGxldCBkID0gbmV3IERhdGUodGhpcy5fZGF0ZS5nZXRGdWxsWWVhcigpLCAwLCAxKTtcclxuICAgICAgICBkLnNldERhdGUoZC5nZXREYXRlKCkgKyAoaW5kZXggKiA3KSk7XHJcbiAgICAgICAgdGhpcy5kYXRlID0gZDtcclxuICAgICAgICB0aGlzLmRhdGVDaGFuZ2UuZW1pdCh0aGlzLmRhdGUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5tb2RlID09PSAnbW9udGgnKSB7XHJcbiAgICAgICAgbGV0IGQgPSBuZXcgRGF0ZSh0aGlzLl9kYXRlLmdldEZ1bGxZZWFyKCksIGluZGV4LCAxKTtcclxuICAgICAgICB0aGlzLmRhdGUgPSBkO1xyXG4gICAgICAgIHRoaXMuZGF0ZUNoYW5nZS5lbWl0KHRoaXMuZGF0ZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjcmVhdGVDaGFuZ2VFdmVudChpbmRleDogbnVtYmVyKTogVGFiQ2hhbmdlRXZlbnQge1xyXG4gICAgY29uc3QgZXZlbnQgPSBuZXcgVGFiQ2hhbmdlRXZlbnQoKTtcclxuICAgIGV2ZW50LmluZGV4ID0gaW5kZXg7XHJcbiAgICBpZiAodGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudCAmJiB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50Lmxlbmd0aCkge1xyXG4gICAgICBldmVudC50YWIgPSB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50W2luZGV4XTtcclxuICAgICAgdGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudC5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgaWYgKGkgIT09IGluZGV4KSB7XHJcbiAgICAgICAgICBpdGVtLmRlc2VsZWN0LmVtaXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBldmVudC50YWIuc2VsZWN0LmVtaXQoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBldmVudDtcclxuICB9XHJcblxyXG4gIC8qKiBDbGFtcHMgdGhlIGdpdmVuIGluZGV4IHRvIHRoZSBib3VuZHMgb2YgMCBhbmQgdGhlIHRhYnMgbGVuZ3RoLiAqL1xyXG4gIHByaXZhdGUgY2xhbXBUYWJJbmRleChpbmRleDogbnVtYmVyIHwgbnVsbCk6IG51bWJlciB7XHJcbiAgICAvLyBOb3RlIHRoZSBgfHwgMGAsIHdoaWNoIGVuc3VyZXMgdGhhdCB2YWx1ZXMgbGlrZSBOYU4gY2FuJ3QgZ2V0IHRocm91Z2hcclxuICAgIC8vIGFuZCB3aGljaCB3b3VsZCBvdGhlcndpc2UgdGhyb3cgdGhlIGNvbXBvbmVudCBpbnRvIGFuIGluZmluaXRlIGxvb3BcclxuICAgIC8vIChzaW5jZSBNYXRoLm1heChOYU4sIDApID09PSBOYU4pLlxyXG4gICAgcmV0dXJuIE1hdGgubWluKHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQubGVuZ3RoIC0gMSwgTWF0aC5tYXgoaW5kZXggfHwgMCwgMCkpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIG56VXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcclxuICAgIHRoaXMudXBkYXRlU2VsZWN0ZWRNb2RlKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKXtcclxuICAgIGlmIChjaGFuZ2VzLm1vZGUpIHtcclxuICAgICAgdGhpcy51cGRhdGVTZWxlY3RlZE1vZGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZVNlbGVjdGVkTW9kZSgpe1xyXG4gICAgdGhpcy5tb2RlT3B0aW9ucy5mb3JFYWNoKG1vZGUgPT4ge1xyXG4gICAgICBtb2RlLnNlbGVjdGVkID0gbW9kZS52YWx1ZSA9PT0gdGhpcy5tb2RlO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50ID0gdGhpcy5nZXRWYWx1ZXNTbGlkZXIoKTtcclxuICB9XHJcblxyXG4gIGdldFZhbHVlc1NsaWRlcigpIHtcclxuICAgIGxldCB0ZW1wID0gW107XHJcbiAgICB0aGlzLmRhdGUgPSB0aGlzLmRhdGU7XHJcbiAgICBpZiAodGhpcy5tb2RlID09PSAnd2VlaycpIHtcclxuICAgICAgY29uc3QgbGVuZ3RoID0gZ2V0SVNPV2Vla3NJblllYXIodGhpcy5kYXRlKTtcclxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8PSBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRlbXAucHVzaCh7dGl0bGU6IHRoaXMuZm9ybWF0V2Vla051bWJlcihpICsgMSl9KTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdGVtcDtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5tb2RlID09PSAnbW9udGgnKSB7XHJcbiAgICAgIHJldHVybiBbe3RpdGxlOiAnSmFuJ30sIHt0aXRsZTogJ0ZlYid9LCB7dGl0bGU6ICdNYXInfSwge3RpdGxlOiAnQXByJ30sIHt0aXRsZTogJ01heSd9LCB7dGl0bGU6ICdKdW4nfSxcclxuICAgICAgICB7dGl0bGU6ICdKdWwnfSwge3RpdGxlOiAnQXVnJ30sIHt0aXRsZTogJ1NlcCd9LCB7dGl0bGU6ICdPY3QnfSwge3RpdGxlOiAnTm92J30sIHt0aXRsZTogJ0RlYyd9XTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvcm1hdFdlZWtOdW1iZXIodmFsdWU6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIChcIjBcIiArIHZhbHVlKS5zbGljZSgtMik7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XHJcbiAgICAvL3RoaXMudXBkYXRlU2xpZGVyKCk7XHJcbiAgICBpZiAodGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudCAmJiB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50Lmxlbmd0aCkge1xyXG4gICAgICAvLyBEb24ndCBjbGFtcCB0aGUgYGluZGV4VG9TZWxlY3RgIGltbWVkaWF0ZWx5IGluIHRoZSBzZXR0ZXIgYmVjYXVzZSBpdCBjYW4gaGFwcGVuIHRoYXRcclxuICAgICAgLy8gdGhlIGFtb3VudCBvZiB0YWJzIGNoYW5nZXMgYmVmb3JlIHRoZSBhY3R1YWwgY2hhbmdlIGRldGVjdGlvbiBydW5zLlxyXG4gICAgICBjb25zdCBpbmRleFRvU2VsZWN0ID0gKHRoaXMuaW5kZXhUb1NlbGVjdCA9IHRoaXMuY2xhbXBUYWJJbmRleCh0aGlzLmluZGV4VG9TZWxlY3QpKTtcclxuICAgICAgLy8gSWYgdGhlcmUgaXMgYSBjaGFuZ2UgaW4gc2VsZWN0ZWQgaW5kZXgsIGVtaXQgYSBjaGFuZ2UgZXZlbnQuIFNob3VsZCBub3QgdHJpZ2dlciBpZlxyXG4gICAgICAvLyB0aGUgc2VsZWN0ZWQgaW5kZXggaGFzIG5vdCB5ZXQgYmVlbiBpbml0aWFsaXplZC5cclxuICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkSW5kZXggIT09IGluZGV4VG9TZWxlY3QpIHtcclxuICAgICAgICBjb25zdCBpc0ZpcnN0UnVuID0gdGhpcy5fc2VsZWN0ZWRJbmRleCA9PSBudWxsO1xyXG4gICAgICAgIC8qaWYgKCFpc0ZpcnN0UnVuKSB7XHJcbiAgICAgICAgICB0aGlzLnNlbGVjdENoYW5nZS5lbWl0KHRoaXMuY3JlYXRlQ2hhbmdlRXZlbnQoaW5kZXhUb1NlbGVjdCkpO1xyXG4gICAgICAgIH0qL1xyXG5cclxuICAgICAgICAvLyBDaGFuZ2luZyB0aGVzZSB2YWx1ZXMgYWZ0ZXIgY2hhbmdlIGRldGVjdGlvbiBoYXMgcnVuXHJcbiAgICAgICAgLy8gc2luY2UgdGhlIGNoZWNrZWQgY29udGVudCBtYXkgY29udGFpbiByZWZlcmVuY2VzIHRvIHRoZW0uXHJcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50LmZvckVhY2goKHRhYiwgaW5kZXgpID0+ICh0YWIuaXNBY3RpdmUgPSBpbmRleCA9PT0gaW5kZXhUb1NlbGVjdCkpO1xyXG5cclxuICAgICAgICAgIGlmICghaXNGaXJzdFJ1bikge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXhDaGFuZ2UuZW1pdChpbmRleFRvU2VsZWN0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gU2V0dXAgdGhlIHBvc2l0aW9uIGZvciBlYWNoIHRhYiBhbmQgb3B0aW9uYWxseSBzZXR1cCBhbiBvcmlnaW4gb24gdGhlIG5leHQgc2VsZWN0ZWQgdGFiLlxyXG4gICAgICB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50LmZvckVhY2goKHRhYjogQ21hY3NUYWJDb21wb25lbnQsIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICB0YWIucG9zaXRpb24gPSBpbmRleCAtIGluZGV4VG9TZWxlY3Q7XHJcblxyXG4gICAgICAgIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYSBzZWxlY3RlZCB0YWIsIHRoZW4gc2V0IHVwIGFuIG9yaWdpbiBmb3IgdGhlIG5leHQgc2VsZWN0ZWQgdGFiXHJcbiAgICAgICAgLy8gaWYgaXQgZG9lc24ndCBoYXZlIG9uZSBhbHJlYWR5LlxyXG4gICAgICAgIGlmICh0aGlzLl9zZWxlY3RlZEluZGV4ICE9IG51bGwgJiYgdGFiLnBvc2l0aW9uID09PSAwICYmICF0YWIub3JpZ2luKSB7XHJcbiAgICAgICAgICB0YWIub3JpZ2luID0gaW5kZXhUb1NlbGVjdCAtIHRoaXMuX3NlbGVjdGVkSW5kZXg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmICh0aGlzLl9zZWxlY3RlZEluZGV4ICE9PSBpbmRleFRvU2VsZWN0KSB7XHJcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRJbmRleCA9IGluZGV4VG9TZWxlY3Q7XHJcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGN1c3RvbVNlbGVjdChpbmRleDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLm1vZGVPcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xyXG4gICAgICBvcHRpb24uc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5tb2RlT3B0aW9uc1tpbmRleF0uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5tb2RlID0gdGhpcy5tb2RlT3B0aW9uc1tpbmRleF0udmFsdWUgYXMgQ21hY3NUaW1lbGluZURhdGVQaWNrZXJNb2RlO1xyXG4gICAgdGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudCA9IHRoaXMuZ2V0VmFsdWVzU2xpZGVyKCk7XHJcbiAgfVxyXG5cclxuICBnZXRTZWxlY3RlZCgpe1xyXG4gICAgcmV0dXJuIHRoaXMubW9kZU9wdGlvbnMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5zZWxlY3RlZCk7XHJcbiAgfVxyXG5cclxuICBnZXRNb250aChyZXN1bHQ6IERhdGUpOiB2b2lkIHtcclxuICAgIHRoaXMuZGF0ZUNoYW5nZS5lbWl0KHJlc3VsdCk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuIl19