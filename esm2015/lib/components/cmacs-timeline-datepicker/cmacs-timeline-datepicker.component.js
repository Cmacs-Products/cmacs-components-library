/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewEncapsulation } from '@angular/core';
import { toNumber, NzUpdateHostClassService } from 'ng-zorro-antd/core';
import { TabChangeEvent } from "../cmacs-tabs/cmacs-tabset.component";
import { getISOWeeksInYear } from "date-fns";
import { getISOWeek } from "date-fns";
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
        this._date = new Date();
        this.gutter = 2;
        this.mode = 'week';
        this.onNextClick = new EventEmitter();
        this.onPrevClick = new EventEmitter();
        this.selectChange = new EventEmitter(true);
        this.selectedIndexChange = new EventEmitter();
        this.dateChange = new EventEmitter();
        this.modeOptions = [{ title: 'Week', selected: true }, { title: 'Month', selected: false }, { title: 'Quarter', selected: false }];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set selectedIndex(value) {
        this.indexToSelect = value ? toNumber(value, null) : null;
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
        this._date = value;
        this.selectedIndex = getISOWeek(value) - 1;
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
        this.date = result;
        this.dateChange.emit(result);
        console.log('weeks:  ', getISOWeek(result));
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
     * @param {?} index
     * @param {?} disabled
     * @return {?}
     */
    clickLabel(index, disabled) {
        if (!disabled) {
            this.selectedIndex = index;
            //this.listOfNzTabComponent[index].click.emit();
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
        this.listOfNzTabComponent = this.getValuesSlider();
    }
    /**
     * @return {?}
     */
    getValuesSlider() {
        /** @type {?} */
        let temp = [];
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
}
CmacsTimelineDatepickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'cmacs-timeline-datepicker',
                exportAs: 'cmacsTimelineDatepicker',
                template: "<div class=\"cmacs-timeline-item cmacs-timeline-item-dropdown\">\r\n  <cmacs-dropdown [trigger]=\"'click'\" [cmacsOpen]=\"true\" style=\"display: inline-flex\">\r\n    <a cmacs-dropdown>\r\n      <div class=\"cmacs-open-dropdown-wrapper\" style=\"width: 80px;\">\r\n        {{getSelected().length ? getSelected()[0].title : 'Select'}} <i class=\"iconArrowLarge-Solid-Down\"></i>\r\n      </div>\r\n    </a>\r\n\r\n    <ul cmacs-menu style=\"min-width: 125px\">\r\n      <li *ngFor=\"let option of modeOptions; index as i\" cmacs-menu-item (click)=\"customSelect(i)\">\r\n        <i [style.opacity]=\"option.selected ? 1 : 0\" nz-icon type=\"check\"></i>\r\n        <span>{{option.title}}</span>\r\n      </li>\r\n    </ul>\r\n  </cmacs-dropdown>\r\n</div>\r\n\r\n<div class=\"cmacs-timeline-item\" style=\"margin-right: 10px; max-width: calc(100% - 160px - 16px);\">\r\n  <div nz-tabs-nav\r\n       role=\"tablist\"\r\n       tabindex=\"0\"\r\n       class=\"ant-tabs-bar ant-tabs-top-bar cmacs-timeline-datepicker-slider\"\r\n       [nzType]=\"'line'\"\r\n       [nzShowPagination]=\"true\"\r\n       [nzPositionMode]=\"'horizontal'\"\r\n       [nzAnimated]=\"true\"\r\n       [nzHideBar]=\"true\"\r\n       [selectedIndex]=\"selectedIndex\"\r\n       (nzOnNextClick)=\"onNextClick.emit()\"\r\n       (nzOnPrevClick)=\"onPrevClick.emit()\">\r\n    <div nz-tab-label\r\n         role=\"tab\"\r\n         [style.margin-right.px]=\"gutter\"\r\n         class=\"cmacs-timeline-datepicker-label\"\r\n         [class.ant-tabs-tab-active]=\"(selectedIndex == i)\"\r\n         [disabled]=\"tab.disabled\"\r\n         (click)=\"clickLabel(i,tab.disabled)\"\r\n         *ngFor=\"let tab of listOfNzTabComponent; let i = index\">\r\n      <ng-container *cmacsStringTemplateOutlet=\"tab.title\">{{ tab.title }}</ng-container>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"cmacs-timeline-item\">\r\n  <cmacs-week-picker [(ngModel)]=\"date\" (ngModelChange)=\"getWeek($event)\" placeHolder=\"\"></cmacs-week-picker>\r\n</div>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                providers: [NzUpdateHostClassService],
                styles: [".ant-tabs-tab{padding:5px 9px!important;border-radius:3px;font-family:Roboto;font-size:14px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.29;letter-spacing:normal;color:#656c79}.cmacs-timeline-datepicker-label.ant-tabs-tab-active{background-color:#2a7cff;color:#fff}.ant-tabs-bar{border-bottom:none;margin-bottom:0}.cmacs-timeline-item{display:inline-block}.cmacs-timeline-item-dropdown{position:relative;top:-7px;margin:0 20px}.cmacs-timeline-item-dropdown cmacs-dropdown{font-family:Roboto;font-size:14px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.29;letter-spacing:normal;color:#3b3f46}.cmacs-timeline-datepicker-label.ant-tabs-tab-active:hover{color:#fff}.cmacs-timeline-item cmacs-picker .ant-calendar-picker-input{width:0;display:inline-block;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;border:none;height:0}.cmacs-timeline-item cmacs-picker .ant-calendar-picker-input:focus,.cmacs-timeline-item cmacs-picker .ant-calendar-picker-input:hover{border:none;box-shadow:none}.cmacs-timeline-item cmacs-picker .ant-calendar-picker:hover .ant-calendar-picker-clear{opacity:0}.cmacs-timeline-item cmacs-picker .ant-calendar-picker-icon{font-size:16px;position:relative;top:-7px}.cmacs-timeline-item cmacs-picker .ant-calendar-picker-icon:hover{cursor:pointer}.cmacs-timeline-item-dropdown cmacs-dropdown .cmacs-open-dropdown-wrapper{border:none;width:auto!important;color:#3b3f46}.cmacs-timeline-item-dropdown cmacs-dropdown .cmacs-open-dropdown-wrapper i{margin-left:10px;color:#3b3f46}.cmacs-timeline-item cmacs-picker .ant-calendar-picker:focus .ant-calendar-picker-input:not(.ant-input-disabled){box-shadow:none}", `
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
    onNextClick: [{ type: Output }],
    onPrevClick: [{ type: Output }],
    selectChange: [{ type: Output }],
    selectedIndexChange: [{ type: Output }],
    dateChange: [{ type: Output }],
    selectedIndex: [{ type: Input }],
    date: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdGltZWxpbmUtZGF0ZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLXRpbWVsaW5lLWRhdGVwaWNrZXIvY21hY3MtdGltZWxpbmUtZGF0ZXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBQ04sU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsUUFBUSxFQUFFLHdCQUF3QixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDeEUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBRXBFLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLFVBQVUsQ0FBQztBQUMzQyxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sVUFBVSxDQUFDO0FBdUJwQyxNQUFNLE9BQU8sZ0NBQWdDOzs7Ozs7O0lBK0UzQyxZQUNVLFFBQW1CLEVBQ25CLHdCQUFrRCxFQUNsRCxVQUFzQixFQUN0QixHQUFzQjtRQUh0QixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQWxGeEIsa0JBQWEsR0FBa0IsQ0FBQyxDQUFDO1FBQ2pDLE9BQUUsR0FBZ0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFDaEQsbUJBQWMsR0FBa0IsSUFBSSxDQUFDO1FBQ3JDLFVBQUssR0FBZ0IsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUcvQixXQUFNLEdBQVcsQ0FBQyxDQUFDO1FB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QyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsU0FBUyxFQUFFLENBQUMsd0JBQXdCLENBQUM7a3REQUduQzs7Ozs7Ozs7S0FRQzthQUVKOzs7O1lBOUJDLFNBQVM7WUFJUSx3QkFBd0I7WUFUekMsVUFBVTtZQUZWLGlCQUFpQjs7O3FCQTZDaEIsS0FBSzttQkFDTCxLQUFLOzBCQUNMLE1BQU07MEJBQ04sTUFBTTsyQkFFTixNQUFNO2tDQUNOLE1BQU07eUJBQ04sTUFBTTs0QkFHTixLQUFLO21CQVNMLEtBQUs7Ozs7Ozs7SUF6Qk4seURBQXlDOzs7OztJQUN6Qyw4Q0FBd0Q7Ozs7O0lBQ3hELDBEQUE2Qzs7Ozs7SUFDN0MsaURBQXdDOztJQUN4QyxnRUFBNEI7O0lBRTVCLGtEQUE0Qjs7SUFDNUIsZ0RBQXFEOztJQUNyRCx1REFBMEQ7O0lBQzFELHVEQUEwRDs7SUFFMUQsd0RBQXVHOztJQUN2RywrREFBMEY7O0lBQzFGLHNEQUE2RTs7SUFDN0UsdURBQTBIOzs7OztJQWlFeEgsb0RBQTJCOzs7OztJQUMzQixvRUFBMEQ7Ozs7O0lBQzFELHNEQUE4Qjs7Ozs7SUFDOUIsK0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBBZnRlckNvbnRlbnRDaGVja2VkLFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgdG9OdW1iZXIsIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7VGFiQ2hhbmdlRXZlbnR9IGZyb20gXCIuLi9jbWFjcy10YWJzL2NtYWNzLXRhYnNldC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtDbWFjc1RhYkNvbXBvbmVudH0gZnJvbSBcIi4uL2NtYWNzLXRhYnMvY21hY3MtdGFiLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge2dldElTT1dlZWtzSW5ZZWFyfSBmcm9tIFwiZGF0ZS1mbnNcIjtcclxuaW1wb3J0IHtnZXRJU09XZWVrfSBmcm9tIFwiZGF0ZS1mbnNcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtdGltZWxpbmUtZGF0ZXBpY2tlcicsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc1RpbWVsaW5lRGF0ZXBpY2tlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLXRpbWVsaW5lLWRhdGVwaWNrZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgcHJvdmlkZXJzOiBbTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlXSxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy10aW1lbGluZS1kYXRlcGlja2VyLmNvbXBvbmVudC5jc3MnXSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgY21hY3MtdGltZWxpbmUtZGF0ZXBpY2tlciB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDdweCAwIHJnYmEoNTksIDYzLCA3MCwgMC4xNSk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICBwYWRkaW5nOiA3cHggMCA0cHggMCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NUaW1lbGluZURhdGVwaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRDaGVja2VkLCBPbkluaXQge1xyXG4gIHByaXZhdGUgaW5kZXhUb1NlbGVjdDogbnVtYmVyIHwgbnVsbCA9IDA7XHJcbiAgcHJpdmF0ZSBlbDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcclxuICBwcml2YXRlIF9zZWxlY3RlZEluZGV4OiBudW1iZXIgfCBudWxsID0gbnVsbDtcclxuICBwcml2YXRlIF9kYXRlOiBEYXRlIHwgbnVsbCA9IG5ldyBEYXRlKCk7XHJcbiAgbGlzdE9mTnpUYWJDb21wb25lbnQ6IGFueVtdO1xyXG5cclxuICBASW5wdXQoKSBndXR0ZXI6IG51bWJlciA9IDI7XHJcbiAgQElucHV0KCkgbW9kZTogJ3dlZWsnIHwgJ3F1YXJ0ZXInIHwgJ21vbnRoJyA9ICd3ZWVrJztcclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgb25OZXh0Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uUHJldkNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgc2VsZWN0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8VGFiQ2hhbmdlRXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxUYWJDaGFuZ2VFdmVudD4odHJ1ZSk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHNlbGVjdGVkSW5kZXhDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGRhdGVDaGFuZ2U6IEV2ZW50RW1pdHRlcjxEYXRlPiA9IG5ldyBFdmVudEVtaXR0ZXI8RGF0ZT4oKTtcclxuICBtb2RlT3B0aW9ucyA9IFsge3RpdGxlOiAnV2VlaycsIHNlbGVjdGVkOiB0cnVlfSwge3RpdGxlOiAnTW9udGgnLCBzZWxlY3RlZDogZmFsc2V9LCB7dGl0bGU6ICdRdWFydGVyJywgc2VsZWN0ZWQ6IGZhbHNlfSBdO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBzZWxlY3RlZEluZGV4KHZhbHVlOiBudW1iZXIgfCBudWxsKSB7XHJcbiAgICB0aGlzLmluZGV4VG9TZWxlY3QgPSB2YWx1ZSA/IHRvTnVtYmVyKHZhbHVlLCBudWxsKSA6IG51bGw7XHJcbiAgfVxyXG5cclxuICBnZXQgc2VsZWN0ZWRJbmRleCgpOiBudW1iZXIgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZEluZGV4O1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgZGF0ZSh2YWx1ZTogRGF0ZSB8IG51bGwpIHtcclxuICAgIHRoaXMuX2RhdGUgPSB2YWx1ZTtcclxuICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IGdldElTT1dlZWsodmFsdWUpIC0gMTtcclxuICB9XHJcblxyXG4gIGdldCBkYXRlKCk6IERhdGUgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLl9kYXRlO1xyXG4gIH1cclxuXHJcbiAgZ2V0V2VlayhyZXN1bHQ6IERhdGUpOiB2b2lkIHtcclxuICAgIHRoaXMuZGF0ZSA9IHJlc3VsdDtcclxuICAgIHRoaXMuZGF0ZUNoYW5nZS5lbWl0KHJlc3VsdCk7XHJcbiAgICBjb25zb2xlLmxvZygnd2Vla3M6ICAnLCBnZXRJU09XZWVrKHJlc3VsdCkpO1xyXG4gIH1cclxuXHJcbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XHJcbiAgICB0aGlzLm56VXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbCwge1xyXG4gICAgICBbYGFudC10YWJzYF06IHRydWUsXHJcbiAgICAgIFtgYW50LXRhYnMtbGluZWBdOiB0cnVlXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNsaWNrTGFiZWwoaW5kZXg6IG51bWJlciwgZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmICghZGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gaW5kZXg7XHJcbiAgICAgIC8vdGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudFtpbmRleF0uY2xpY2suZW1pdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlQ2hhbmdlRXZlbnQoaW5kZXg6IG51bWJlcik6IFRhYkNoYW5nZUV2ZW50IHtcclxuICAgIGNvbnN0IGV2ZW50ID0gbmV3IFRhYkNoYW5nZUV2ZW50KCk7XHJcbiAgICBldmVudC5pbmRleCA9IGluZGV4O1xyXG4gICAgaWYgKHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQgJiYgdGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudC5sZW5ndGgpIHtcclxuICAgICAgZXZlbnQudGFiID0gdGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudFtpbmRleF07XHJcbiAgICAgIHRoaXMubGlzdE9mTnpUYWJDb21wb25lbnQuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xyXG4gICAgICAgIGlmIChpICE9PSBpbmRleCkge1xyXG4gICAgICAgICAgaXRlbS5kZXNlbGVjdC5lbWl0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgZXZlbnQudGFiLnNlbGVjdC5lbWl0KCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZXZlbnQ7XHJcbiAgfVxyXG5cclxuICAvKiogQ2xhbXBzIHRoZSBnaXZlbiBpbmRleCB0byB0aGUgYm91bmRzIG9mIDAgYW5kIHRoZSB0YWJzIGxlbmd0aC4gKi9cclxuICBwcml2YXRlIGNsYW1wVGFiSW5kZXgoaW5kZXg6IG51bWJlciB8IG51bGwpOiBudW1iZXIge1xyXG4gICAgLy8gTm90ZSB0aGUgYHx8IDBgLCB3aGljaCBlbnN1cmVzIHRoYXQgdmFsdWVzIGxpa2UgTmFOIGNhbid0IGdldCB0aHJvdWdoXHJcbiAgICAvLyBhbmQgd2hpY2ggd291bGQgb3RoZXJ3aXNlIHRocm93IHRoZSBjb21wb25lbnQgaW50byBhbiBpbmZpbml0ZSBsb29wXHJcbiAgICAvLyAoc2luY2UgTWF0aC5tYXgoTmFOLCAwKSA9PT0gTmFOKS5cclxuICAgIHJldHVybiBNYXRoLm1pbih0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50Lmxlbmd0aCAtIDEsIE1hdGgubWF4KGluZGV4IHx8IDAsIDApKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSxcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgICB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50ID0gdGhpcy5nZXRWYWx1ZXNTbGlkZXIoKTtcclxuICB9XHJcblxyXG4gIGdldFZhbHVlc1NsaWRlcigpIHtcclxuICAgIGxldCB0ZW1wID0gW107XHJcbiAgICBpZiAodGhpcy5tb2RlID09PSAnd2VlaycpIHtcclxuICAgICAgY29uc3QgbGVuZ3RoID0gZ2V0SVNPV2Vla3NJblllYXIodGhpcy5kYXRlKTtcclxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8PSBsZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRlbXAucHVzaCh7dGl0bGU6IHRoaXMuZm9ybWF0V2Vla051bWJlcihpICsgMSl9KTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdGVtcDtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5tb2RlID09PSAnbW9udGgnKSB7XHJcbiAgICAgIHJldHVybiBbe3RpdGxlOiAnSmFuJ30sIHt0aXRsZTogJ0ZlYid9LCB7dGl0bGU6ICdNYXInfSwge3RpdGxlOiAnQXByJ30sIHt0aXRsZTogJ01heSd9LCB7dGl0bGU6ICdKdW4nfSxcclxuICAgICAgICB7dGl0bGU6ICdKdWwnfSwge3RpdGxlOiAnQXVnJ30sIHt0aXRsZTogJ1NlcCd9LCB7dGl0bGU6ICdPY3QnfSwge3RpdGxlOiAnTm92J30sIHt0aXRsZTogJ0RlYyd9XTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZvcm1hdFdlZWtOdW1iZXIodmFsdWU6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIChcIjBcIiArIHZhbHVlKS5zbGljZSgtMik7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XHJcbiAgICAvL3RoaXMudXBkYXRlU2xpZGVyKCk7XHJcbiAgICBpZiAodGhpcy5saXN0T2ZOelRhYkNvbXBvbmVudCAmJiB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50Lmxlbmd0aCkge1xyXG4gICAgICAvLyBEb24ndCBjbGFtcCB0aGUgYGluZGV4VG9TZWxlY3RgIGltbWVkaWF0ZWx5IGluIHRoZSBzZXR0ZXIgYmVjYXVzZSBpdCBjYW4gaGFwcGVuIHRoYXRcclxuICAgICAgLy8gdGhlIGFtb3VudCBvZiB0YWJzIGNoYW5nZXMgYmVmb3JlIHRoZSBhY3R1YWwgY2hhbmdlIGRldGVjdGlvbiBydW5zLlxyXG4gICAgICBjb25zdCBpbmRleFRvU2VsZWN0ID0gKHRoaXMuaW5kZXhUb1NlbGVjdCA9IHRoaXMuY2xhbXBUYWJJbmRleCh0aGlzLmluZGV4VG9TZWxlY3QpKTtcclxuICAgICAgLy8gSWYgdGhlcmUgaXMgYSBjaGFuZ2UgaW4gc2VsZWN0ZWQgaW5kZXgsIGVtaXQgYSBjaGFuZ2UgZXZlbnQuIFNob3VsZCBub3QgdHJpZ2dlciBpZlxyXG4gICAgICAvLyB0aGUgc2VsZWN0ZWQgaW5kZXggaGFzIG5vdCB5ZXQgYmVlbiBpbml0aWFsaXplZC5cclxuICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkSW5kZXggIT09IGluZGV4VG9TZWxlY3QpIHtcclxuICAgICAgICBjb25zdCBpc0ZpcnN0UnVuID0gdGhpcy5fc2VsZWN0ZWRJbmRleCA9PSBudWxsO1xyXG4gICAgICAgIC8qaWYgKCFpc0ZpcnN0UnVuKSB7XHJcbiAgICAgICAgICB0aGlzLnNlbGVjdENoYW5nZS5lbWl0KHRoaXMuY3JlYXRlQ2hhbmdlRXZlbnQoaW5kZXhUb1NlbGVjdCkpO1xyXG4gICAgICAgIH0qL1xyXG5cclxuICAgICAgICAvLyBDaGFuZ2luZyB0aGVzZSB2YWx1ZXMgYWZ0ZXIgY2hhbmdlIGRldGVjdGlvbiBoYXMgcnVuXHJcbiAgICAgICAgLy8gc2luY2UgdGhlIGNoZWNrZWQgY29udGVudCBtYXkgY29udGFpbiByZWZlcmVuY2VzIHRvIHRoZW0uXHJcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50LmZvckVhY2goKHRhYiwgaW5kZXgpID0+ICh0YWIuaXNBY3RpdmUgPSBpbmRleCA9PT0gaW5kZXhUb1NlbGVjdCkpO1xyXG5cclxuICAgICAgICAgIGlmICghaXNGaXJzdFJ1bikge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkSW5kZXhDaGFuZ2UuZW1pdChpbmRleFRvU2VsZWN0KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gU2V0dXAgdGhlIHBvc2l0aW9uIGZvciBlYWNoIHRhYiBhbmQgb3B0aW9uYWxseSBzZXR1cCBhbiBvcmlnaW4gb24gdGhlIG5leHQgc2VsZWN0ZWQgdGFiLlxyXG4gICAgICB0aGlzLmxpc3RPZk56VGFiQ29tcG9uZW50LmZvckVhY2goKHRhYjogQ21hY3NUYWJDb21wb25lbnQsIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICB0YWIucG9zaXRpb24gPSBpbmRleCAtIGluZGV4VG9TZWxlY3Q7XHJcblxyXG4gICAgICAgIC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYSBzZWxlY3RlZCB0YWIsIHRoZW4gc2V0IHVwIGFuIG9yaWdpbiBmb3IgdGhlIG5leHQgc2VsZWN0ZWQgdGFiXHJcbiAgICAgICAgLy8gaWYgaXQgZG9lc24ndCBoYXZlIG9uZSBhbHJlYWR5LlxyXG4gICAgICAgIGlmICh0aGlzLl9zZWxlY3RlZEluZGV4ICE9IG51bGwgJiYgdGFiLnBvc2l0aW9uID09PSAwICYmICF0YWIub3JpZ2luKSB7XHJcbiAgICAgICAgICB0YWIub3JpZ2luID0gaW5kZXhUb1NlbGVjdCAtIHRoaXMuX3NlbGVjdGVkSW5kZXg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmICh0aGlzLl9zZWxlY3RlZEluZGV4ICE9PSBpbmRleFRvU2VsZWN0KSB7XHJcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRJbmRleCA9IGluZGV4VG9TZWxlY3Q7XHJcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGN1c3RvbVNlbGVjdChpbmRleDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLm1vZGVPcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xyXG4gICAgICBvcHRpb24uc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5tb2RlT3B0aW9uc1tpbmRleF0uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgZ2V0U2VsZWN0ZWQoKXtcclxuICAgIHJldHVybiB0aGlzLm1vZGVPcHRpb25zLmZpbHRlcihpdGVtID0+IGl0ZW0uc2VsZWN0ZWQpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiJdfQ==