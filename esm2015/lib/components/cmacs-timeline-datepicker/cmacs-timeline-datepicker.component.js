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
        return getISOWeek(date);
        /*let now = date;
        let onejan = new Date(now.getFullYear(), 0, 1) as any;
        let day = onejan.getDay() as any;
        return Math.ceil( (((now - onejan) / 86400000) + day + 1) / 7 );*/
    }
    /**
     * @param {?} index
     * @param {?} disabled
     * @return {?}
     */
    clickLabel(index, disabled) {
        if (!disabled) {
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
        /** @type {?} */
        let temp = [];
        this.date = this.date;
        if (this.mode === 'week') {
            /** @type {?} */
            const length = getISOWeeksInYear(this.date);
            for (let i = 0; i <= length; i++) {
                temp.push({ title: this.formatWeekNumber(i + 1) });
            }
            return temp;
        }
        else if (this.mode === 'month') {
            return [{ title: 'Jan' }, { title: 'Feb' }, { title: 'Mar' }, { title: 'Apr' }, { title: 'May' }, { title: 'Jun' },
                { title: 'Jul' }, { title: 'Aug' }, { title: 'Sep' }, { title: 'Oct' }, { title: 'Nov' }, { title: 'Dec' }];
        }
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
                template: "<div class=\"cmacs-timeline-item cmacs-timeline-item-dropdown\" *ngIf=\"!restrictMode\">\r\n  <cmacs-dropdown [trigger]=\"'click'\" [cmacsOpen]=\"true\" style=\"display: inline-flex\">\r\n    <a cmacs-dropdown class=\"cmacs-dropdowm-timeline-datepicker\">\r\n      <div class=\"cmacs-open-dropdown-wrapper\" style=\"width: 80px;\">\r\n        {{getSelected().length ? getSelected()[0].title : 'Select'}} <i class=\"iconArrowLarge-Solid-Down\"></i>\r\n      </div>\r\n    </a>\r\n\r\n    <ul cmacs-menu style=\"min-width: 125px\">\r\n      <li *ngFor=\"let option of modeOptions; index as i\" cmacs-menu-item (click)=\"customSelect(i)\">\r\n        <i [style.opacity]=\"option.selected ? 1 : 0\" nz-icon type=\"check\"></i>\r\n        <span>{{option.title}}</span>\r\n      </li>\r\n    </ul>\r\n  </cmacs-dropdown>\r\n</div>\r\n\r\n<div class=\"cmacs-timeline-item cmacs-timeline-item-dropdown\" *ngIf=\"restrictMode\">\r\n  <a class=\"cmacs-dropdowm-timeline-datepicker\">\r\n    <div class=\"cmacs-open-dropdown-wrapper\" style=\"width: 80px;\">\r\n      {{getSelected().length ? getSelected()[0].title : 'Select'}}\r\n    </div>\r\n  </a>\r\n</div>\r\n\r\n<div class=\"cmacs-timeline-item\" style=\"margin-right: 10px; max-width: calc(100% - 160px - 16px);\">\r\n  <div nz-tabs-nav\r\n       role=\"tablist\"\r\n       tabindex=\"0\"\r\n       class=\"ant-tabs-bar ant-tabs-top-bar cmacs-timeline-datepicker-slider\"\r\n       [nzType]=\"'line'\"\r\n       [nzShowPagination]=\"true\"\r\n       [nzPositionMode]=\"'horizontal'\"\r\n       [nzAnimated]=\"true\"\r\n       [nzHideBar]=\"true\"\r\n       [selectedIndex]=\"selectedIndex\"\r\n       (nzOnNextClick)=\"onNextClick.emit()\"\r\n       (nzOnPrevClick)=\"onPrevClick.emit()\">\r\n    <div nz-tab-label\r\n         role=\"tab\"\r\n         [style.margin-right.px]=\"gutter\"\r\n         class=\"cmacs-timeline-datepicker-label\"\r\n         [class.ant-tabs-tab-active]=\"(selectedIndex === i)\"\r\n         [disabled]=\"tab.disabled\"\r\n         (click)=\"clickLabel(i,tab.disabled)\"\r\n         *ngFor=\"let tab of listOfNzTabComponent; let i = index\">\r\n      <ng-container *cmacsStringTemplateOutlet=\"tab.title\">{{ tab.title }}</ng-container>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"cmacs-timeline-item\">\r\n  <ng-container *ngIf=\"mode === 'week'\">\r\n    <cmacs-week-picker [(ngModel)]=\"date\" (ngModelChange)=\"getWeek($event)\" placeHolder=\"\"></cmacs-week-picker>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"mode === 'month'\">\r\n    <cmacs-month-picker\r\n      [(ngModel)]=\"date\"\r\n      (ngModelChange)=\"getMonth($event)\"\r\n      placeHolder=\"\"\r\n    ></cmacs-month-picker>\r\n  </ng-container>\r\n  <!--<ng-container *ngIf=\"mode === ('week-range' || 'month-range')\">\r\n    <cmacs-range-picker [ranges]=\"date\" ngModel (ngModelChange)=\"onChange($event)\"></cmacs-range-picker>\r\n  </ng-container>-->\r\n</div>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                providers: [NzUpdateHostClassService],
                styles: [".ant-tabs-tab{padding:5px 9px!important;border-radius:3px;font-family:Roboto;font-size:14px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.29;letter-spacing:normal;color:#656c79}.cmacs-timeline-datepicker-label.ant-tabs-tab-active{background-color:#2a7cff;color:#fff}.ant-tabs-bar{border-bottom:none;margin-bottom:0}.cmacs-timeline-item{display:inline-block}.cmacs-timeline-item-dropdown{position:relative;top:-7px;margin:0 20px}.cmacs-timeline-item-dropdown .cmacs-dropdowm-timeline-datepicker{font-family:Roboto;font-size:14px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.29;letter-spacing:normal;color:#3b3f46}.cmacs-timeline-datepicker-label.ant-tabs-tab-active:hover{color:#fff}.cmacs-timeline-item cmacs-picker .ant-calendar-picker-input{width:0;display:inline-block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;border:none;height:0}.cmacs-timeline-item cmacs-picker .ant-calendar-picker-input:focus,.cmacs-timeline-item cmacs-picker .ant-calendar-picker-input:hover{border:none;box-shadow:none}.cmacs-timeline-item cmacs-picker .ant-calendar-picker:hover .ant-calendar-picker-clear{opacity:0;display:none}.cmacs-timeline-item cmacs-picker .ant-calendar-picker-icon{font-size:16px;position:relative;top:-7px}.cmacs-timeline-item cmacs-picker .ant-calendar-picker-icon:hover{cursor:pointer}.cmacs-timeline-item-dropdown .cmacs-dropdowm-timeline-datepicker .cmacs-open-dropdown-wrapper{border:none;width:auto!important;color:#3b3f46;font-size:14px;font-weight:500}.cmacs-timeline-item-dropdown .cmacs-dropdowm-timeline-datepicker .cmacs-open-dropdown-wrapper i{margin-left:10px;color:#3b3f46}.cmacs-timeline-item cmacs-picker .ant-calendar-picker:focus .ant-calendar-picker-input:not(.ant-input-disabled){box-shadow:none}", `
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdGltZWxpbmUtZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLXRpbWVsaW5lLWRhdGVwaWNrZXIvY21hY3MtdGltZWxpbmUtZGF0ZXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUNOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDOUQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBRXBFLE9BQU8sRUFBQyxVQUFVLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFDdkQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGVBQWUsQ0FBQztBQXlCM0MsTUFBTSxPQUFPLGdDQUFnQzs7Ozs7OztJQTRHM0MsWUFDVSxRQUFtQixFQUNuQix3QkFBa0QsRUFDbEQsVUFBc0IsRUFDdEIsR0FBc0I7UUFIdEIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUEvR3hCLGtCQUFhLEdBQWtCLENBQUMsQ0FBQztRQUNqQyxPQUFFLEdBQWdCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQ2hELG1CQUFjLEdBQWtCLElBQUksQ0FBQztRQUlwQyxXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLFNBQUksR0FBZ0MsTUFBTSxDQUFDO1FBQzNCLGlCQUFZ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Ozs7OztJQUMxRCxzREFBOEI7Ozs7O0lBQzlCLCtDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50Q2hlY2tlZCxcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsIE9uQ2hhbmdlcyxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMiwgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHtUYWJDaGFuZ2VFdmVudH0gZnJvbSBcIi4uL2NtYWNzLXRhYnMvY21hY3MtdGFic2V0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0NtYWNzVGFiQ29tcG9uZW50fSBmcm9tIFwiLi4vY21hY3MtdGFicy9jbWFjcy10YWIuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7Z2V0SVNPV2VlaywgZ2V0SVNPV2Vla3NJblllYXJ9IGZyb20gXCJkYXRlLWZuc1wiO1xyXG5pbXBvcnQge0lucHV0Qm9vbGVhbn0gZnJvbSBcIm5nLXpvcnJvLWFudGRcIjtcclxuXHJcbmV4cG9ydCB0eXBlIENtYWNzVGltZWxpbmVEYXRlUGlja2VyTW9kZSA9ICd3ZWVrJyB8ICdxdWFydGVyJyB8ICdtb250aCcgfCAnd2Vlay1yYW5nZScgfCAnbW9udGgtcmFuZ2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy10aW1lbGluZS1kYXRlcGlja2VyJyxcclxuICBleHBvcnRBczogJ2NtYWNzVGltZWxpbmVEYXRlcGlja2VyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtdGltZWxpbmUtZGF0ZXBpY2tlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBwcm92aWRlcnM6IFtOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2VdLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLXRpbWVsaW5lLWRhdGVwaWNrZXIuY29tcG9uZW50LmNzcyddLFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgICBjbWFjcy10aW1lbGluZS1kYXRlcGlja2VyIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAzcHggN3B4IDAgcmdiYSg1OSwgNjMsIDcwLCAwLjE1KTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIHBhZGRpbmc6IDdweCAwIDRweCAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1RpbWVsaW5lRGF0ZXBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudENoZWNrZWQsIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBwcml2YXRlIGluZGV4VG9TZWxlY3Q6IG51bWJlciB8IG51bGwgPSAwO1xyXG4gIHByaXZhdGUgZWw6IEhUTUxFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBfc2VsZWN0ZWRJbmRleDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBfZGF0ZTogRGF0ZSB8IG51bGw7XHJcbiAgbGlzdE9mTnpUYWJDb21wb25lbnQ6IGFueVtdO1xyXG5cclxuICBASW5wdXQoKSBndXR0ZXI6IG51bWJlciA9IDI7XHJcbiAgQElucHV0KCkgbW9kZTogQ21hY3NUaW1lbGluZURhdGVQaWNrZXJNb2RlID0gJ3dlZWsnO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSByZXN0cmljdE1vZGUgPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25OZXh0Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uUHJldkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgc2VsZWN0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8VGFiQ2hhbmdlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxUYWJDaGFuZ2VFdmVudD4odHJ1ZSk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHNlbGVjdGVkSW5kZXhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGRhdGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZT4oKTtcclxuICBtb2RlT3B0aW9ucyA9IFsge3RpdGxlOiAnV2VlaycsIHZhbHVlOiAnd2VlaycsIHNlbGVjdGVkOiB0cnVlfSxcclxuICAgIHt0aXRsZTogJ01vbnRoJywgdmFsdWU6ICdtb250aCcsIHNlbGVjdGVkOiBmYWxzZX1dO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBzZWxlY3RlZEluZGV4KHZhbHVlOiBudW1iZXIgfCBudWxsKSB7XHJcbiAgICB0aGlzLmluZGV4VG9TZWxlY3QgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGdldCBzZWxlY3RlZEluZGV4KCk6IG51bWJlciB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkSW5kZXg7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBkYXRlKHZhbHVlOiBEYXRlIHwgbnVsbCkge1xyXG4gICAgaWYgKHZhbHVlICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuX2RhdGUgPSB2YWx1ZTtcclxuICAgICAgaWYgKHRoaXMubW9kZSA9PT0gJ3dlZWsnKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gdGhpcy5nZXRXZWVrTnVtYmVyKHZhbHVlKSAtIDE7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5tb2RlID09PSAnbW9udGgnKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gdmFsdWUuZ2V0TW9udGgoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGRhdGUoKTogRGF0ZSB8IG51bGwge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RhdGU7XHJcbiAgfVxyXG5cclxuICBnZXRXZWVrKHJlc3VsdDogRGF0ZSk6IHZvaWQge1xyXG4gICAgaWYgKHJlc3VsdCAhPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLmRhdGVDaGFuZ2UuZW1pdChyZXN1bHQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XHJcbiAgICB0aGlzLm56VXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbCwge1xyXG4gICAgICBbYGFudC10YWJzYF06IHRydWUsXHJcbiAgICAgIFtgYW50LXRhYnMtbGluZWBdOiB0cnVlXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGdldFdlZWtOdW1iZXIoZGF0ZSl7XHJcbiAgICByZXR1cm4gZ2V0SVNPV2VlayhkYXRlKTtcclxuICAgIC8qbGV0IG5vdyA9IGRhdGU7XHJcbiAgICBsZXQgb25lamFuID0gbmV3IERhdGUobm93LmdldEZ1bGxZZWFyKCksIDAsIDEpIGFzIGFueTtcclxuICAgIGxldCBkYXkgPSBvbmVqYW4uZ2V0RGF5KCkgYXMgYW55O1xyXG4gICAgcmV0dXJuIE1hdGguY2VpbCggKCgobm93IC0gb25lamFuKSAvIDg2NDAwMDAwKSArIGRheSArIDEpIC8gNyApOyovXHJcbiAgfVxyXG5cclxuICBjbGlja0xhYmVsKGluZGV4OiBudW1iZXIsIGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAoIWRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xyXG5cclxuICAgICAgaWYgKHRoaXMubW9kZSA9PT0gJ3dlZWsnKSB7XHJcbiAgICAgICAgbGV0IGQgPSBuZXcgRGF0ZSh0aGlzLl9kYXRlLmdldEZ1bGxZZWFyKCksIDAsIDEpO1xyXG4gICAgICAgIGQuc2V0RGF0ZShkLmdldERhdGUoKSArIChpbmRleCAqIDcpKTtcclxuICAgICAgICB0aGlzLmRhdGUgPSBkO1xyXG4gICAgICAgIHRoaXMuZGF0ZUNoYW5nZS5lbWl0KHRoaXMuZGF0ZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLm1vZGUgPT09ICdtb250aCcpIHtcclxuICAgICAgICBsZXQgZCA9IG5ldyBEYXRlKHRoaXMuX2RhdGUuZ2V0RnVsbFllYXIoKSwgaW5kZXgsIDEpO1xyXG4gICAgICAgIHRoaXMuZGF0ZSA9IGQ7XHJcbiAgICAgICAgdGhpcy5kYXRlQ2hhbmdlLmVtaXQodGhpcy5kYXRlKTtcclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNyZWF0ZUNoYW5nZUV2ZW50KGluZGV4OiBudW1iZXIpOiBUYWJDaGFuZ2VFdmVudCB7XHJcbiAgICBjb25zdCBldmVudCA9IG5ldyBUYWJDaGFuZ2VFdmVudCgpO1xyXG4gICAgZXZlbnQuaW5kZXggPSBpbmRleDtcclxuICAgIGlmICh0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50ICYmIHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQubGVuZ3RoKSB7XHJcbiAgICAgIGV2ZW50LnRhYiA9IHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnRbaW5kZXhdO1xyXG4gICAgICB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50LmZvckVhY2goKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICBpZiAoaSAhPT0gaW5kZXgpIHtcclxuICAgICAgICAgIGl0ZW0uZGVzZWxlY3QuZW1pdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIGV2ZW50LnRhYi5zZWxlY3QuZW1pdCgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGV2ZW50O1xyXG4gIH1cclxuXHJcbiAgLyoqIENsYW1wcyB0aGUgZ2l2ZW4gaW5kZXggdG8gdGhlIGJvdW5kcyBvZiAwIGFuZCB0aGUgdGFicyBsZW5ndGguICovXHJcbiAgcHJpdmF0ZSBjbGFtcFRhYkluZGV4KGluZGV4OiBudW1iZXIgfCBudWxsKTogbnVtYmVyIHtcclxuICAgIC8vIE5vdGUgdGhlIGB8fCAwYCwgd2hpY2ggZW5zdXJlcyB0aGF0IHZhbHVlcyBsaWtlIE5hTiBjYW4ndCBnZXQgdGhyb3VnaFxyXG4gICAgLy8gYW5kIHdoaWNoIHdvdWxkIG90aGVyd2lzZSB0aHJvdyB0aGUgY29tcG9uZW50IGludG8gYW4gaW5maW5pdGUgbG9vcFxyXG4gICAgLy8gKHNpbmNlIE1hdGgubWF4KE5hTiwgMCkgPT09IE5hTikuXHJcbiAgICByZXR1cm4gTWF0aC5taW4odGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudC5sZW5ndGggLSAxLCBNYXRoLm1heChpbmRleCB8fCAwLCAwKSk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICApIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gICAgdGhpcy51cGRhdGVTZWxlY3RlZE1vZGUoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpe1xyXG4gICAgaWYgKGNoYW5nZXMubW9kZSkge1xyXG4gICAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkTW9kZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlU2VsZWN0ZWRNb2RlKCl7XHJcbiAgICB0aGlzLm1vZGVPcHRpb25zLmZvckVhY2gobW9kZSA9PiB7XHJcbiAgICAgIG1vZGUuc2VsZWN0ZWQgPSBtb2RlLnZhbHVlID09PSB0aGlzLm1vZGU7XHJcbiAgICB9KTtcclxuICAgIHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQgPSB0aGlzLmdldFZhbHVlc1NsaWRlcigpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VmFsdWVzU2xpZGVyKCkge1xyXG4gICAgbGV0IHRlbXAgPSBbXTtcclxuICAgIHRoaXMuZGF0ZSA9IHRoaXMuZGF0ZTtcclxuICAgIGlmICh0aGlzLm1vZGUgPT09ICd3ZWVrJykge1xyXG4gICAgICBjb25zdCBsZW5ndGggPSBnZXRJU09XZWVrc0luWWVhcih0aGlzLmRhdGUpO1xyXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDw9IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdGVtcC5wdXNoKHt0aXRsZTogdGhpcy5mb3JtYXRXZWVrTnVtYmVyKGkgKyAxKX0pO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0ZW1wO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLm1vZGUgPT09ICdtb250aCcpIHtcclxuICAgICAgcmV0dXJuIFt7dGl0bGU6ICdKYW4nfSwge3RpdGxlOiAnRmViJ30sIHt0aXRsZTogJ01hcid9LCB7dGl0bGU6ICdBcHInfSwge3RpdGxlOiAnTWF5J30sIHt0aXRsZTogJ0p1bid9LFxyXG4gICAgICAgIHt0aXRsZTogJ0p1bCd9LCB7dGl0bGU6ICdBdWcnfSwge3RpdGxlOiAnU2VwJ30sIHt0aXRsZTogJ09jdCd9LCB7dGl0bGU6ICdOb3YnfSwge3RpdGxlOiAnRGVjJ31dO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZm9ybWF0V2Vla051bWJlcih2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gKFwiMFwiICsgdmFsdWUpLnNsaWNlKC0yKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcclxuICAgIC8vdGhpcy51cGRhdGVTbGlkZXIoKTtcclxuICAgIGlmICh0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50ICYmIHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQubGVuZ3RoKSB7XHJcbiAgICAgIC8vIERvbid0IGNsYW1wIHRoZSBgaW5kZXhUb1NlbGVjdGAgaW1tZWRpYXRlbHkgaW4gdGhlIHNldHRlciBiZWNhdXNlIGl0IGNhbiBoYXBwZW4gdGhhdFxyXG4gICAgICAvLyB0aGUgYW1vdW50IG9mIHRhYnMgY2hhbmdlcyBiZWZvcmUgdGhlIGFjdHVhbCBjaGFuZ2UgZGV0ZWN0aW9uIHJ1bnMuXHJcbiAgICAgIGNvbnN0IGluZGV4VG9TZWxlY3QgPSAodGhpcy5pbmRleFRvU2VsZWN0ID0gdGhpcy5jbGFtcFRhYkluZGV4KHRoaXMuaW5kZXhUb1NlbGVjdCkpO1xyXG4gICAgICAvLyBJZiB0aGVyZSBpcyBhIGNoYW5nZSBpbiBzZWxlY3RlZCBpbmRleCwgZW1pdCBhIGNoYW5nZSBldmVudC4gU2hvdWxkIG5vdCB0cmlnZ2VyIGlmXHJcbiAgICAgIC8vIHRoZSBzZWxlY3RlZCBpbmRleCBoYXMgbm90IHlldCBiZWVuIGluaXRpYWxpemVkLlxyXG4gICAgICBpZiAodGhpcy5fc2VsZWN0ZWRJbmRleCAhPT0gaW5kZXhUb1NlbGVjdCkge1xyXG4gICAgICAgIGNvbnN0IGlzRmlyc3RSdW4gPSB0aGlzLl9zZWxlY3RlZEluZGV4ID09IG51bGw7XHJcbiAgICAgICAgLyppZiAoIWlzRmlyc3RSdW4pIHtcclxuICAgICAgICAgIHRoaXMuc2VsZWN0Q2hhbmdlLmVtaXQodGhpcy5jcmVhdGVDaGFuZ2VFdmVudChpbmRleFRvU2VsZWN0KSk7XHJcbiAgICAgICAgfSovXHJcblxyXG4gICAgICAgIC8vIENoYW5naW5nIHRoZXNlIHZhbHVlcyBhZnRlciBjaGFuZ2UgZGV0ZWN0aW9uIGhhcyBydW5cclxuICAgICAgICAvLyBzaW5jZSB0aGUgY2hlY2tlZCBjb250ZW50IG1heSBjb250YWluIHJlZmVyZW5jZXMgdG8gdGhlbS5cclxuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQuZm9yRWFjaCgodGFiLCBpbmRleCkgPT4gKHRhYi5pc0FjdGl2ZSA9IGluZGV4ID09PSBpbmRleFRvU2VsZWN0KSk7XHJcblxyXG4gICAgICAgICAgaWYgKCFpc0ZpcnN0UnVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleENoYW5nZS5lbWl0KGluZGV4VG9TZWxlY3QpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBTZXR1cCB0aGUgcG9zaXRpb24gZm9yIGVhY2ggdGFiIGFuZCBvcHRpb25hbGx5IHNldHVwIGFuIG9yaWdpbiBvbiB0aGUgbmV4dCBzZWxlY3RlZCB0YWIuXHJcbiAgICAgIHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQuZm9yRWFjaCgodGFiOiBDbWFjc1RhYkNvbXBvbmVudCwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIHRhYi5wb3NpdGlvbiA9IGluZGV4IC0gaW5kZXhUb1NlbGVjdDtcclxuXHJcbiAgICAgICAgLy8gSWYgdGhlcmUgaXMgYWxyZWFkeSBhIHNlbGVjdGVkIHRhYiwgdGhlbiBzZXQgdXAgYW4gb3JpZ2luIGZvciB0aGUgbmV4dCBzZWxlY3RlZCB0YWJcclxuICAgICAgICAvLyBpZiBpdCBkb2Vzbid0IGhhdmUgb25lIGFscmVhZHkuXHJcbiAgICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkSW5kZXggIT0gbnVsbCAmJiB0YWIucG9zaXRpb24gPT09IDAgJiYgIXRhYi5vcmlnaW4pIHtcclxuICAgICAgICAgIHRhYi5vcmlnaW4gPSBpbmRleFRvU2VsZWN0IC0gdGhpcy5fc2VsZWN0ZWRJbmRleDtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkSW5kZXggIT09IGluZGV4VG9TZWxlY3QpIHtcclxuICAgICAgICB0aGlzLl9zZWxlY3RlZEluZGV4ID0gaW5kZXhUb1NlbGVjdDtcclxuICAgICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3VzdG9tU2VsZWN0KGluZGV4OiBudW1iZXIpIHtcclxuICAgIHRoaXMubW9kZU9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XHJcbiAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLm1vZGVPcHRpb25zW2luZGV4XS5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICB0aGlzLm1vZGUgPSB0aGlzLm1vZGVPcHRpb25zW2luZGV4XS52YWx1ZSBhcyBDbWFjc1RpbWVsaW5lRGF0ZVBpY2tlck1vZGU7XHJcbiAgICB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50ID0gdGhpcy5nZXRWYWx1ZXNTbGlkZXIoKTtcclxuICB9XHJcblxyXG4gIGdldFNlbGVjdGVkKCl7XHJcbiAgICByZXR1cm4gdGhpcy5tb2RlT3B0aW9ucy5maWx0ZXIoaXRlbSA9PiBpdGVtLnNlbGVjdGVkKTtcclxuICB9XHJcblxyXG4gIGdldE1vbnRoKHJlc3VsdDogRGF0ZSk6IHZvaWQge1xyXG4gICAgdGhpcy5kYXRlQ2hhbmdlLmVtaXQocmVzdWx0KTtcclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG4iXX0=