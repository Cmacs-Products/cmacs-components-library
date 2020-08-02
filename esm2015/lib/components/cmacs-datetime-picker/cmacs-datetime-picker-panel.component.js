/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DebugElement, ElementRef, Input, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { isNotNil, reqAnimFrame, InputBoolean, NzUpdateHostClassService as UpdateCls } from 'ng-zorro-antd/core';
import { CmacsDatetimeValueAccessorDirective } from './cmacs-datetime-value-accessor.directive';
import { TimeHolder } from './time-holder';
/**
 * @param {?} length
 * @param {?=} step
 * @param {?=} start
 * @return {?}
 */
function makeRange(length, step = 1, start = 0) {
    return new Array(Math.ceil(length / step)).fill(0).map((/**
     * @param {?} _
     * @param {?} i
     * @return {?}
     */
    (_, i) => (i + start) * step));
}
export class CmacsDatetimePickerPanelComponent {
    /**
     * @param {?} element
     * @param {?} updateCls
     * @param {?} cdr
     */
    constructor(element, updateCls, cdr) {
        this.element = element;
        this.updateCls = updateCls;
        this.cdr = cdr;
        this._nzHourStep = 1;
        this._nzMinuteStep = 1;
        this._nzSecondStep = 1;
        this.unsubscribe$ = new Subject();
        this._format = 'HH:mm:ss';
        this._defaultOpenValue = new Date();
        this._opened = false;
        this._allowEmpty = true;
        this.prefixCls = 'ant-time-picker-panel';
        this.time = new TimeHolder();
        this.hourEnabled = true;
        this.minuteEnabled = true;
        this.secondEnabled = true;
        this.enabledColumns = 3;
        this.nzInDatePicker = false; // If inside a date-picker, more diff works need to be done
        this.nzHideDisabledOptions = false;
        this.nzUse12Hours = false;
    }
    // tslint:disable-next-line: member-ordering
    /**
     * @param {?} value
     * @return {?}
     */
    set nzAllowEmpty(value) {
        if (isNotNil(value)) {
            this._allowEmpty = value;
        }
    }
    /**
     * @return {?}
     */
    get nzAllowEmpty() {
        return this._allowEmpty;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set opened(value) {
        this._opened = value;
        if (this.opened) {
            this.initPosition();
            this.selectInputRange();
        }
    }
    /**
     * @return {?}
     */
    get opened() {
        return this._opened;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzDefaultOpenValue(value) {
        if (isNotNil(value)) {
            this._defaultOpenValue = value;
            this.time.setDefaultOpenValue(this.nzDefaultOpenValue);
        }
    }
    /**
     * @return {?}
     */
    get nzDefaultOpenValue() {
        return this._defaultOpenValue;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzDisabledHours(value) {
        this._disabledHours = value;
        if (this._disabledHours) {
            this.buildHours();
        }
    }
    /**
     * @return {?}
     */
    get nzDisabledHours() {
        return this._disabledHours;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzDisabledMinutes(value) {
        if (isNotNil(value)) {
            this._disabledMinutes = value;
            this.buildMinutes();
        }
    }
    /**
     * @return {?}
     */
    get nzDisabledMinutes() {
        return this._disabledMinutes;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzDisabledSeconds(value) {
        if (isNotNil(value)) {
            this._disabledSeconds = value;
            this.buildSeconds();
        }
    }
    /**
     * @return {?}
     */
    get nzDisabledSeconds() {
        return this._disabledSeconds;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set format(value) {
        if (isNotNil(value)) {
            this._format = value;
            this.enabledColumns = 0;
            /** @type {?} */
            const charSet = new Set(value);
            this.hourEnabled = charSet.has('H') || charSet.has('h');
            this.minuteEnabled = charSet.has('m');
            this.secondEnabled = charSet.has('s');
            if (this.hourEnabled) {
                this.enabledColumns++;
            }
            if (this.minuteEnabled) {
                this.enabledColumns++;
            }
            if (this.secondEnabled) {
                this.enabledColumns++;
            }
            if (this.nzUse12Hours) {
                this.build12Hours();
            }
        }
    }
    /**
     * @return {?}
     */
    get format() {
        return this._format;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzHourStep(value) {
        if (isNotNil(value)) {
            this._nzHourStep = value;
            this.buildHours();
        }
    }
    /**
     * @return {?}
     */
    get nzHourStep() {
        return this._nzHourStep;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzMinuteStep(value) {
        if (isNotNil(value)) {
            this._nzMinuteStep = value;
            this.buildMinutes();
        }
    }
    /**
     * @return {?}
     */
    get nzMinuteStep() {
        return this._nzMinuteStep;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzSecondStep(value) {
        if (isNotNil(value)) {
            this._nzSecondStep = value;
            this.buildSeconds();
        }
    }
    /**
     * @return {?}
     */
    get nzSecondStep() {
        return this._nzSecondStep;
    }
    /**
     * @return {?}
     */
    selectInputRange() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (this.nzTimeValueAccessorDirective) {
                this.nzTimeValueAccessorDirective.setRange();
            }
        }));
    }
    /**
     * @return {?}
     */
    buildHours() {
        this.hours = (((this.time.hours ? this.time.hours : this.time.defaultHours) + 11) % 12 + 1);
    }
    /**
     * @return {?}
     */
    buildMinutes() {
        this.minutes = this.time.minutes ? this.time.minutes : this.time.defaultMinutes;
    }
    /**
     * @return {?}
     */
    buildSeconds() {
        this.seconds = this.time.seconds ? this.time.seconds : this.time.defaultSeconds;
    }
    /**
     * @return {?}
     */
    build12Hours() {
        /** @type {?} */
        const isUpperForamt = this._format.includes('A');
        this.use12HoursRange = [
            {
                index: 0,
                value: isUpperForamt ? 'AM' : 'am'
            },
            {
                index: 1,
                value: isUpperForamt ? 'PM' : 'pm'
            }
        ];
        this.range = this.time.selected12Hours ? this.time.selected12Hours.toLowerCase() : this.time.default12Hours.toLowerCase();
    }
    /**
     * @return {?}
     */
    buildTimes() {
        this.buildHours();
        this.buildMinutes();
        this.buildSeconds();
        this.build12Hours();
    }
    /**
     * @param {?} hour
     * @return {?}
     */
    selectHour(hour) {
        this.time.setHours(hour.index, hour.disabled);
        this.scrollToSelected(this.hourListElement.nativeElement, hour.index, 120, 'hour');
        if (this._disabledMinutes) {
            this.buildMinutes();
        }
        if (this._disabledSeconds || this._disabledMinutes) {
            this.buildSeconds();
        }
    }
    /**
     * @param {?} minute
     * @return {?}
     */
    selectMinute(minute) {
        this.time.setMinutes(minute.index, minute.disabled);
        this.scrollToSelected(this.minuteListElement.nativeElement, minute.index, 120, 'minute');
        if (this._disabledSeconds) {
            this.buildSeconds();
        }
    }
    /**
     * @param {?} second
     * @return {?}
     */
    selectSecond(second) {
        this.time.setSeconds(second.index, second.disabled);
        this.scrollToSelected(this.secondListElement.nativeElement, second.index, 120, 'second');
    }
    /**
     * @param {?} value
     * @return {?}
     */
    select12Hours(value) {
        this.time.selected12Hours = value;
        if (this._disabledHours) {
            this.buildHours();
        }
        if (this._disabledMinutes) {
            this.buildMinutes();
        }
        if (this._disabledSeconds) {
            this.buildSeconds();
        }
        /*this.scrollToSelected(this.use12HoursListElement.nativeElement, value.index, 120, '12-hour');*/
    }
    /**
     * @param {?} instance
     * @param {?} index
     * @param {?=} duration
     * @param {?=} unit
     * @return {?}
     */
    scrollToSelected(instance, index, duration = 0, unit) {
        /** @type {?} */
        const transIndex = this.translateIndex(index, unit);
        /** @type {?} */
        const currentOption = (/** @type {?} */ ((instance.children[0].children[transIndex] ||
            instance.children[0].children[0])));
        this.scrollTo(instance, currentOption.offsetTop, duration);
    }
    /**
     * @param {?} index
     * @param {?} unit
     * @return {?}
     */
    translateIndex(index, unit) {
        if (unit === 'hour') {
            /** @type {?} */
            const disabledHours = this.nzDisabledHours && this.nzDisabledHours();
            return this.calcIndex(disabledHours, this.hourRange.map((/**
             * @param {?} item
             * @return {?}
             */
            item => item.index)).indexOf(index));
        }
        else if (unit === 'minute') {
            /** @type {?} */
            const disabledMinutes = this.nzDisabledMinutes && this.nzDisabledMinutes((/** @type {?} */ (this.time.hours)));
            return this.calcIndex(disabledMinutes, this.minuteRange.map((/**
             * @param {?} item
             * @return {?}
             */
            item => item.index)).indexOf(index));
        }
        else if (unit === 'second') {
            // second
            /** @type {?} */
            const disabledSeconds = this.nzDisabledSeconds && this.nzDisabledSeconds((/** @type {?} */ (this.time.hours)), (/** @type {?} */ (this.time.minutes)));
            return this.calcIndex(disabledSeconds, this.secondRange.map((/**
             * @param {?} item
             * @return {?}
             */
            item => item.index)).indexOf(index));
        }
        else {
            // 12-hour
            return this.calcIndex([], this.use12HoursRange.map((/**
             * @param {?} item
             * @return {?}
             */
            item => item.index)).indexOf(index));
        }
    }
    /**
     * @param {?} element
     * @param {?} to
     * @param {?} duration
     * @return {?}
     */
    scrollTo(element, to, duration) {
        if (duration <= 0) {
            element.scrollTop = to;
            return;
        }
        /** @type {?} */
        const difference = to - element.scrollTop;
        /** @type {?} */
        const perTick = (difference / duration) * 10;
        reqAnimFrame((/**
         * @return {?}
         */
        () => {
            element.scrollTop = element.scrollTop + perTick;
            if (element.scrollTop === to) {
                return;
            }
            this.scrollTo(element, to, duration - 10);
        }));
    }
    /**
     * @param {?} array
     * @param {?} index
     * @return {?}
     */
    calcIndex(array, index) {
        if (array && array.length && this.nzHideDisabledOptions) {
            return (index -
                array.reduce((/**
                 * @param {?} pre
                 * @param {?} value
                 * @return {?}
                 */
                (pre, value) => {
                    return pre + (value < index ? 1 : 0);
                }), 0));
        }
        else {
            return index;
        }
    }
    /**
     * @protected
     * @return {?}
     */
    changed() {
        if (this.onChange) {
            this.onChange((/** @type {?} */ (this.time.value)));
        }
    }
    /**
     * @protected
     * @return {?}
     */
    touched() {
        if (this.onTouch) {
            this.onTouch();
        }
    }
    /**
     * @private
     * @return {?}
     */
    setClassMap() {
        this.updateCls.updateHostClass(this.element.nativeElement, {
            [`${this.prefixCls}`]: true,
            [`${this.prefixCls}-column-${this.enabledColumns}`]: !this.nzInDatePicker,
            [`${this.prefixCls}-narrow`]: this.enabledColumns < 3,
            [`${this.prefixCls}-placement-bottomLeft`]: !this.nzInDatePicker
        });
    }
    /**
     * @param {?} hour
     * @return {?}
     */
    isSelectedHour(hour) {
        return (hour.index === this.time.viewHours ||
            (!isNotNil(this.time.viewHours) && hour.index === this.time.defaultViewHours));
    }
    /**
     * @param {?} minute
     * @return {?}
     */
    isSelectedMinute(minute) {
        return (minute.index === this.time.minutes || (!isNotNil(this.time.minutes) && minute.index === this.time.defaultMinutes));
    }
    /**
     * @param {?} second
     * @return {?}
     */
    isSelectedSecond(second) {
        return (second.index === this.time.seconds || (!isNotNil(this.time.seconds) && second.index === this.time.defaultSeconds));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isSelected12Hours(value) {
        return (value.value.toUpperCase() === this.time.selected12Hours ||
            (!isNotNil(this.time.selected12Hours) && value.value.toUpperCase() === this.time.default12Hours));
    }
    /**
     * @return {?}
     */
    initPosition() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (this.hourEnabled && this.hourListElement) {
                if (isNotNil(this.time.viewHours)) {
                    this.scrollToSelected(this.hourListElement.nativeElement, (/** @type {?} */ (this.time.viewHours)), 0, 'hour');
                }
                else {
                    this.scrollToSelected(this.hourListElement.nativeElement, this.time.defaultViewHours, 0, 'hour');
                }
            }
            if (this.minuteEnabled && this.minuteListElement) {
                if (isNotNil(this.time.minutes)) {
                    this.scrollToSelected(this.minuteListElement.nativeElement, (/** @type {?} */ (this.time.minutes)), 0, 'minute');
                }
                else {
                    this.scrollToSelected(this.minuteListElement.nativeElement, this.time.defaultMinutes, 0, 'minute');
                }
            }
            if (this.secondEnabled && this.secondListElement) {
                if (isNotNil(this.time.seconds)) {
                    this.scrollToSelected(this.secondListElement.nativeElement, (/** @type {?} */ (this.time.seconds)), 0, 'second');
                }
                else {
                    this.scrollToSelected(this.secondListElement.nativeElement, this.time.defaultSeconds, 0, 'second');
                }
            }
            if (this.nzUse12Hours && this.use12HoursListElement) {
                /** @type {?} */
                const selectedHours = isNotNil(this.time.selected12Hours)
                    ? this.time.selected12Hours
                    : this.time.default12Hours;
                /** @type {?} */
                const index = selectedHours === 'AM' ? 0 : 1;
                this.scrollToSelected(this.use12HoursListElement.nativeElement, index, 0, '12-hour');
            }
        }));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.nzInDatePicker) {
            this.prefixCls = 'ant-calendar-time-picker';
        }
        this.time.changes.pipe(takeUntil(this.unsubscribe$)).subscribe((/**
         * @return {?}
         */
        () => {
            this.changed();
            this.touched();
        }));
        this.buildTimes();
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzUse12Hours } = changes;
        if (nzUse12Hours && !nzUse12Hours.previousValue && nzUse12Hours.currentValue) {
            this.build12Hours();
            this.enabledColumns++;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.time.setValue(value, this.nzUse12Hours);
        this.buildTimes();
        // Mark this component to be checked manually with internal properties changing (see: https://github.com/angular/angular/issues/10816)
        this.cdr.markForCheck();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouch = fn;
    }
    /* Customized code */
    /**
     * @param {?} $event
     * @param {?} type
     * @return {?}
     */
    updateTime($event, type) {
        if (type === 'hours') {
            this.time.setHours($event, false);
        }
        if (type === 'minutes') {
            this.time.setMinutes($event, false);
        }
        if (type === 'seconds') {
            this.time.setSeconds($event, false);
        }
    }
}
CmacsDatetimePickerPanelComponent.decorators = [
    { type: Component, args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                selector: 'cmacs-datetime-picker-panel',
                exportAs: 'cmacsDateTimePickerPanel',
                template: "<div class=\"{{ nzInDatePicker ? prefixCls + '-panel' : '' }} cmacs-datetime-picker\">\r\n  <div\r\n    class=\"{{ prefixCls }}-inner {{ nzInDatePicker ? prefixCls + '-column-' + enabledColumns : '' }}\"\r\n    [style.width.px]=\"nzInDatePicker ? null : enabledColumns * 56\">\r\n    <div class=\"{{ prefixCls }}-input-wrap\">\r\n      <input\r\n        type=\"text\"\r\n        class=\"{{ prefixCls }}-input\"\r\n        [placeholder]=\"nzPlaceHolder\"\r\n        [nzTime]=\"format\"\r\n        [(ngModel)]=\"time.value\"\r\n        (blur)=\"time.changed()\">\r\n    </div>\r\n    <div>\r\n      <cmacs-input-number style=\"margin-right: 5px\" class=\"cmacs-datetime-picker-input-number\" [min]=\"1\" [max]=\"12\" [(ngModel)]=\"hours\"\r\n                          (ngModelChange)=\"updateTime($event, 'hours')\"></cmacs-input-number>\r\n      <div class=\"cmacs-datetime-dividers\"><span>:</span></div>\r\n      <cmacs-input-number style=\"margin-left: 5px\" class=\"cmacs-datetime-picker-input-number\" [min]=\"0\" [max]=\"59\" [(ngModel)]=\"minutes\"\r\n                          (ngModelChange)=\"updateTime($event, 'minutes')\"></cmacs-input-number>\r\n      <cmacs-select *ngIf=\"nzUse12Hours\" class=\"ampmdropdown\" [(ngModel)]=\"range\" (ngModelChange)=\"select12Hours($event)\">\r\n        <cmacs-option *ngFor=\"let range2 of use12HoursRange\" [value]=\"range2.value\" [label]=\"range2.value | uppercase\">\r\n        </cmacs-option>\r\n      </cmacs-select>\r\n      <div *ngIf=\"!nzUse12Hours\" class=\"cmacs-datetime-dividers\"><span>:</span></div>\r\n      <cmacs-input-number *ngIf=\"!nzUse12Hours\" style=\"margin-left: 5px\" class=\"cmacs-datetime-picker-input-number\" [min]=\"0\" [max]=\"59\" [(ngModel)]=\"seconds\"\r\n                          (ngModelChange)=\"updateTime($event, 'seconds')\"></cmacs-input-number>\r\n    </div>\r\n    <div class=\"{{ prefixCls }}-addon\" *ngIf=\"nzAddOn\">\r\n      <ng-template [ngTemplateOutlet]=\"nzAddOn\"></ng-template>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                providers: [UpdateCls, { provide: NG_VALUE_ACCESSOR, useExisting: CmacsDatetimePickerPanelComponent, multi: true }],
                styles: [".cmacs-datetime-picker-input-number{width:55px;height:30px!important;margin:11px}cmacs-select .ant-select-selection{height:30px}.cmacs-datetime-dividers{display:inline-block;position:relative;top:-3px}.cmacs-datetime-picker .ant-time-picker-panel-inner{width:224px!important}.cmacs-datetime-picker .ampmdropdown{width:calc(100% - 156px)}::ng-deep .cmacs-datetime-picker .ant-time-picker-panel-inner cmacs-select.ant-select{height:30px!important;margin:12px 0!important;display:-webkit-inline-box;display:inline-flex;width:auto!important}"]
            }] }
];
/** @nocollapse */
CmacsDatetimePickerPanelComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: UpdateCls },
    { type: ChangeDetectorRef }
];
CmacsDatetimePickerPanelComponent.propDecorators = {
    nzTimeValueAccessorDirective: [{ type: ViewChild, args: [CmacsDatetimeValueAccessorDirective,] }],
    hourListElement: [{ type: ViewChild, args: ['hourListElement',] }],
    minuteListElement: [{ type: ViewChild, args: ['minuteListElement',] }],
    secondListElement: [{ type: ViewChild, args: ['secondListElement',] }],
    use12HoursListElement: [{ type: ViewChild, args: ['use12HoursListElement',] }],
    nzInDatePicker: [{ type: Input }],
    nzAddOn: [{ type: Input }],
    nzHideDisabledOptions: [{ type: Input }],
    nzClearText: [{ type: Input }],
    nzPlaceHolder: [{ type: Input }],
    nzUse12Hours: [{ type: Input }],
    nzAllowEmpty: [{ type: Input }],
    opened: [{ type: Input }],
    nzDefaultOpenValue: [{ type: Input }],
    nzDisabledHours: [{ type: Input }],
    nzDisabledMinutes: [{ type: Input }],
    nzDisabledSeconds: [{ type: Input }],
    format: [{ type: Input }],
    nzHourStep: [{ type: Input }],
    nzMinuteStep: [{ type: Input }],
    nzSecondStep: [{ type: Input }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], CmacsDatetimePickerPanelComponent.prototype, "nzUse12Hours", void 0);
if (false) {
    /**
     * @type {?}
     * @private
     */
    CmacsDatetimePickerPanelComponent.prototype._nzHourStep;
    /**
     * @type {?}
     * @private
     */
    CmacsDatetimePickerPanelComponent.prototype._nzMinuteStep;
    /**
     * @type {?}
     * @private
     */
    CmacsDatetimePickerPanelComponent.prototype._nzSecondStep;
    /**
     * @type {?}
     * @private
     */
    CmacsDatetimePickerPanelComponent.prototype.unsubscribe$;
    /**
     * @type {?}
     * @private
     */
    CmacsDatetimePickerPanelComponent.prototype.onChange;
    /**
     * @type {?}
     * @private
     */
    CmacsDatetimePickerPanelComponent.prototype.onTouch;
    /**
     * @type {?}
     * @private
     */
    CmacsDatetimePickerPanelComponent.prototype._format;
    /**
     * @type {?}
     * @private
     */
    CmacsDatetimePickerPanelComponent.prototype._disabledHours;
    /**
     * @type {?}
     * @private
     */
    CmacsDatetimePickerPanelComponent.prototype._disabledMinutes;
    /**
     * @type {?}
     * @private
     */
    CmacsDatetimePickerPanelComponent.prototype._disabledSeconds;
    /**
     * @type {?}
     * @private
     */
    CmacsDatetimePickerPanelComponent.prototype._defaultOpenValue;
    /**
     * @type {?}
     * @private
     */
    CmacsDatetimePickerPanelComponent.prototype._opened;
    /**
     * @type {?}
     * @private
     */
    CmacsDatetimePickerPanelComponent.prototype._allowEmpty;
    /** @type {?} */
    CmacsDatetimePickerPanelComponent.prototype.prefixCls;
    /** @type {?} */
    CmacsDatetimePickerPanelComponent.prototype.time;
    /** @type {?} */
    CmacsDatetimePickerPanelComponent.prototype.hourEnabled;
    /** @type {?} */
    CmacsDatetimePickerPanelComponent.prototype.minuteEnabled;
    /** @type {?} */
    CmacsDatetimePickerPanelComponent.prototype.secondEnabled;
    /** @type {?} */
    CmacsDatetimePickerPanelComponent.prototype.enabledColumns;
    /** @type {?} */
    CmacsDatetimePickerPanelComponent.prototype.hourRange;
    /** @type {?} */
    CmacsDatetimePickerPanelComponent.prototype.minuteRange;
    /** @type {?} */
    CmacsDatetimePickerPanelComponent.prototype.secondRange;
    /** @type {?} */
    CmacsDatetimePickerPanelComponent.prototype.use12HoursRange;
    /** @type {?} */
    CmacsDatetimePickerPanelComponent.prototype.hours;
    /** @type {?} */
    CmacsDatetimePickerPanelComponent.prototype.seconds;
    /** @type {?} */
    CmacsDatetimePickerPanelComponent.prototype.minutes;
    /** @type {?} */
    CmacsDatetimePickerPanelComponent.prototype.range;
    /** @type {?} */
    CmacsDatetimePickerPanelComponent.prototype.nzTimeValueAccessorDirective;
    /** @type {?} */
    CmacsDatetimePickerPanelComponent.prototype.hourListElement;
    /** @type {?} */
    CmacsDatetimePickerPanelComponent.prototype.minuteListElement;
    /** @type {?} */
    CmacsDatetimePickerPanelComponent.prototype.secondListElement;
    /** @type {?} */
    CmacsDatetimePickerPanelComponent.prototype.use12HoursListElement;
    /** @type {?} */
    CmacsDatetimePickerPanelComponent.prototype.nzInDatePicker;
    /** @type {?} */
    CmacsDatetimePickerPanelComponent.prototype.nzAddOn;
    /** @type {?} */
    CmacsDatetimePickerPanelComponent.prototype.nzHideDisabledOptions;
    /** @type {?} */
    CmacsDatetimePickerPanelComponent.prototype.nzClearText;
    /** @type {?} */
    CmacsDatetimePickerPanelComponent.prototype.nzPlaceHolder;
    /** @type {?} */
    CmacsDatetimePickerPanelComponent.prototype.nzUse12Hours;
    /**
     * @type {?}
     * @private
     */
    CmacsDatetimePickerPanelComponent.prototype.element;
    /**
     * @type {?}
     * @private
     */
    CmacsDatetimePickerPanelComponent.prototype.updateCls;
    /**
     * @type {?}
     * @private
     */
    CmacsDatetimePickerPanelComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZGF0ZXRpbWUtcGlja2VyLXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtZGF0ZXRpbWUtcGlja2VyL2NtYWNzLWRhdGV0aW1lLXBpY2tlci1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixLQUFLLEVBS0wsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSx3QkFBd0IsSUFBSSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVqSCxPQUFPLEVBQUUsbUNBQW1DLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNoRyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7O0FBRTNDLFNBQVMsU0FBUyxDQUFDLE1BQWMsRUFBRSxPQUFlLENBQUMsRUFBRSxRQUFnQixDQUFDO0lBQ3BFLE9BQU8sSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRzs7Ozs7SUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLElB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QWlFOztJQUNqRSxrREFBZTs7SUFDZixvREFBaUI7O0lBQ2pCLG9EQUFpQjs7SUFDakIsa0RBQVc7O0lBQ1gseUVBQWtIOztJQUVsSCw0REFBNEQ7O0lBQzVELDhEQUFnRTs7SUFDaEUsOERBQWdFOztJQUNoRSxrRUFBd0U7O0lBRXhFLDJEQUF5Qzs7SUFDekMsb0RBQW9DOztJQUNwQyxrRUFBdUM7O0lBQ3ZDLHdEQUE2Qjs7SUFDN0IsMERBQStCOztJQUMvQix5REFBOEM7Ozs7O0lBa1dsQyxvREFBMkI7Ozs7O0lBQUUsc0RBQTRCOzs7OztJQUFFLGdEQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIERlYnVnRWxlbWVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgaXNOb3ROaWwsIHJlcUFuaW1GcmFtZSwgSW5wdXRCb29sZWFuLCBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgYXMgVXBkYXRlQ2xzIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmltcG9ydCB7IENtYWNzRGF0ZXRpbWVWYWx1ZUFjY2Vzc29yRGlyZWN0aXZlIH0gZnJvbSAnLi9jbWFjcy1kYXRldGltZS12YWx1ZS1hY2Nlc3Nvci5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBUaW1lSG9sZGVyIH0gZnJvbSAnLi90aW1lLWhvbGRlcic7XHJcblxyXG5mdW5jdGlvbiBtYWtlUmFuZ2UobGVuZ3RoOiBudW1iZXIsIHN0ZXA6IG51bWJlciA9IDEsIHN0YXJ0OiBudW1iZXIgPSAwKTogbnVtYmVyW10ge1xyXG4gIHJldHVybiBuZXcgQXJyYXkoTWF0aC5jZWlsKGxlbmd0aCAvIHN0ZXApKS5maWxsKDApLm1hcCgoXywgaSkgPT4gKGkgKyBzdGFydCkgKiBzdGVwKTtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgTnpUaW1lUGlja2VyVW5pdCA9ICdob3VyJyB8ICdtaW51dGUnIHwgJ3NlY29uZCcgfCAnMTItaG91cic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHNlbGVjdG9yOiAnY21hY3MtZGF0ZXRpbWUtcGlja2VyLXBhbmVsJyxcclxuICBleHBvcnRBczogJ2NtYWNzRGF0ZVRpbWVQaWNrZXJQYW5lbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLWRhdGV0aW1lLXBpY2tlci1wYW5lbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtZGF0ZXRpbWUtcGlja2VyLXBhbmVsLmNvbXBvbmVudC5jc3MnXSxcclxuICBwcm92aWRlcnM6IFtVcGRhdGVDbHMsIHsgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsIHVzZUV4aXN0aW5nOiBDbWFjc0RhdGV0aW1lUGlja2VyUGFuZWxDb21wb25lbnQsIG11bHRpOiB0cnVlIH1dXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0RhdGV0aW1lUGlja2VyUGFuZWxDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XHJcbiAgcHJpdmF0ZSBfbnpIb3VyU3RlcCA9IDE7XHJcbiAgcHJpdmF0ZSBfbnpNaW51dGVTdGVwID0gMTtcclxuICBwcml2YXRlIF9uelNlY29uZFN0ZXAgPSAxO1xyXG4gIHByaXZhdGUgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBwcml2YXRlIG9uQ2hhbmdlOiAodmFsdWU6IERhdGUpID0+IHZvaWQ7XHJcbiAgcHJpdmF0ZSBvblRvdWNoOiAoKSA9PiB2b2lkO1xyXG4gIHByaXZhdGUgX2Zvcm1hdCA9ICdISDptbTpzcyc7XHJcbiAgcHJpdmF0ZSBfZGlzYWJsZWRIb3VyczogKCkgPT4gbnVtYmVyW107XHJcbiAgcHJpdmF0ZSBfZGlzYWJsZWRNaW51dGVzOiAoaG91cjogbnVtYmVyKSA9PiBudW1iZXJbXTtcclxuICBwcml2YXRlIF9kaXNhYmxlZFNlY29uZHM6IChob3VyOiBudW1iZXIsIG1pbnV0ZTogbnVtYmVyKSA9PiBudW1iZXJbXTtcclxuICBwcml2YXRlIF9kZWZhdWx0T3BlblZhbHVlID0gbmV3IERhdGUoKTtcclxuICBwcml2YXRlIF9vcGVuZWQgPSBmYWxzZTtcclxuICBwcml2YXRlIF9hbGxvd0VtcHR5ID0gdHJ1ZTtcclxuICBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbnQtdGltZS1waWNrZXItcGFuZWwnO1xyXG4gIHRpbWUgPSBuZXcgVGltZUhvbGRlcigpO1xyXG4gIGhvdXJFbmFibGVkID0gdHJ1ZTtcclxuICBtaW51dGVFbmFibGVkID0gdHJ1ZTtcclxuICBzZWNvbmRFbmFibGVkID0gdHJ1ZTtcclxuICBlbmFibGVkQ29sdW1ucyA9IDM7XHJcbiAgaG91clJhbmdlOiBSZWFkb25seUFycmF5PHsgaW5kZXg6IG51bWJlcjsgZGlzYWJsZWQ6IGJvb2xlYW4gfT47XHJcbiAgbWludXRlUmFuZ2U6IFJlYWRvbmx5QXJyYXk8eyBpbmRleDogbnVtYmVyOyBkaXNhYmxlZDogYm9vbGVhbiB9PjtcclxuICBzZWNvbmRSYW5nZTogUmVhZG9ubHlBcnJheTx7IGluZGV4OiBudW1iZXI7IGRpc2FibGVkOiBib29sZWFuIH0+O1xyXG4gIHVzZTEySG91cnNSYW5nZTogUmVhZG9ubHlBcnJheTx7IGluZGV4OiBudW1iZXI7IHZhbHVlOiBzdHJpbmcgfT47XHJcbiAgaG91cnMgOiBudW1iZXI7XHJcbiAgc2Vjb25kcyA6IG51bWJlcjtcclxuICBtaW51dGVzIDogbnVtYmVyO1xyXG4gIHJhbmdlOiBhbnk7XHJcbiAgQFZpZXdDaGlsZChDbWFjc0RhdGV0aW1lVmFsdWVBY2Nlc3NvckRpcmVjdGl2ZSkgbnpUaW1lVmFsdWVBY2Nlc3NvckRpcmVjdGl2ZTogQ21hY3NEYXRldGltZVZhbHVlQWNjZXNzb3JEaXJlY3RpdmU7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2hvdXJMaXN0RWxlbWVudCcpIGhvdXJMaXN0RWxlbWVudDogRGVidWdFbGVtZW50O1xyXG4gIEBWaWV3Q2hpbGQoJ21pbnV0ZUxpc3RFbGVtZW50JykgbWludXRlTGlzdEVsZW1lbnQ6IERlYnVnRWxlbWVudDtcclxuICBAVmlld0NoaWxkKCdzZWNvbmRMaXN0RWxlbWVudCcpIHNlY29uZExpc3RFbGVtZW50OiBEZWJ1Z0VsZW1lbnQ7XHJcbiAgQFZpZXdDaGlsZCgndXNlMTJIb3Vyc0xpc3RFbGVtZW50JykgdXNlMTJIb3Vyc0xpc3RFbGVtZW50OiBEZWJ1Z0VsZW1lbnQ7XHJcblxyXG4gIEBJbnB1dCgpIG56SW5EYXRlUGlja2VyOiBib29sZWFuID0gZmFsc2U7IC8vIElmIGluc2lkZSBhIGRhdGUtcGlja2VyLCBtb3JlIGRpZmYgd29ya3MgbmVlZCB0byBiZSBkb25lXHJcbiAgQElucHV0KCkgbnpBZGRPbjogVGVtcGxhdGVSZWY8dm9pZD47XHJcbiAgQElucHV0KCkgbnpIaWRlRGlzYWJsZWRPcHRpb25zID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpDbGVhclRleHQ6IHN0cmluZztcclxuICBASW5wdXQoKSBuelBsYWNlSG9sZGVyOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56VXNlMTJIb3VycyA9IGZhbHNlO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56QWxsb3dFbXB0eSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xyXG4gICAgICB0aGlzLl9hbGxvd0VtcHR5ID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgbnpBbGxvd0VtcHR5KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2FsbG93RW1wdHk7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBvcGVuZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX29wZW5lZCA9IHZhbHVlO1xyXG4gICAgaWYgKHRoaXMub3BlbmVkKSB7XHJcbiAgICAgIHRoaXMuaW5pdFBvc2l0aW9uKCk7XHJcbiAgICAgIHRoaXMuc2VsZWN0SW5wdXRSYW5nZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IG9wZW5lZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9vcGVuZWQ7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekRlZmF1bHRPcGVuVmFsdWUodmFsdWU6IERhdGUpIHtcclxuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcclxuICAgICAgdGhpcy5fZGVmYXVsdE9wZW5WYWx1ZSA9IHZhbHVlO1xyXG4gICAgICB0aGlzLnRpbWUuc2V0RGVmYXVsdE9wZW5WYWx1ZSh0aGlzLm56RGVmYXVsdE9wZW5WYWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgbnpEZWZhdWx0T3BlblZhbHVlKCk6IERhdGUge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRPcGVuVmFsdWU7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekRpc2FibGVkSG91cnModmFsdWU6ICgpID0+IG51bWJlcltdKSB7XHJcbiAgICB0aGlzLl9kaXNhYmxlZEhvdXJzID0gdmFsdWU7XHJcbiAgICBpZiAodGhpcy5fZGlzYWJsZWRIb3Vycykge1xyXG4gICAgICB0aGlzLmJ1aWxkSG91cnMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBuekRpc2FibGVkSG91cnMoKTogKCkgPT4gbnVtYmVyW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkSG91cnM7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekRpc2FibGVkTWludXRlcyh2YWx1ZTogKGhvdXI6IG51bWJlcikgPT4gbnVtYmVyW10pIHtcclxuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcclxuICAgICAgdGhpcy5fZGlzYWJsZWRNaW51dGVzID0gdmFsdWU7XHJcbiAgICAgIHRoaXMuYnVpbGRNaW51dGVzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgbnpEaXNhYmxlZE1pbnV0ZXMoKTogKGhvdXI6IG51bWJlcikgPT4gbnVtYmVyW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkTWludXRlcztcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56RGlzYWJsZWRTZWNvbmRzKHZhbHVlOiAoaG91cjogbnVtYmVyLCBtaW51dGU6IG51bWJlcikgPT4gbnVtYmVyW10pIHtcclxuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcclxuICAgICAgdGhpcy5fZGlzYWJsZWRTZWNvbmRzID0gdmFsdWU7XHJcbiAgICAgIHRoaXMuYnVpbGRTZWNvbmRzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgbnpEaXNhYmxlZFNlY29uZHMoKTogKGhvdXI6IG51bWJlciwgbWludXRlOiBudW1iZXIpID0+IG51bWJlcltdIHtcclxuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZFNlY29uZHM7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBmb3JtYXQodmFsdWU6IHN0cmluZykge1xyXG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xyXG4gICAgICB0aGlzLl9mb3JtYXQgPSB2YWx1ZTtcclxuICAgICAgdGhpcy5lbmFibGVkQ29sdW1ucyA9IDA7XHJcbiAgICAgIGNvbnN0IGNoYXJTZXQgPSBuZXcgU2V0KHZhbHVlKTtcclxuICAgICAgdGhpcy5ob3VyRW5hYmxlZCA9IGNoYXJTZXQuaGFzKCdIJykgfHwgY2hhclNldC5oYXMoJ2gnKTtcclxuICAgICAgdGhpcy5taW51dGVFbmFibGVkID0gY2hhclNldC5oYXMoJ20nKTtcclxuICAgICAgdGhpcy5zZWNvbmRFbmFibGVkID0gY2hhclNldC5oYXMoJ3MnKTtcclxuICAgICAgaWYgKHRoaXMuaG91ckVuYWJsZWQpIHtcclxuICAgICAgICB0aGlzLmVuYWJsZWRDb2x1bW5zKys7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMubWludXRlRW5hYmxlZCkge1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZENvbHVtbnMrKztcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5zZWNvbmRFbmFibGVkKSB7XHJcbiAgICAgICAgdGhpcy5lbmFibGVkQ29sdW1ucysrO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLm56VXNlMTJIb3Vycykge1xyXG4gICAgICAgIHRoaXMuYnVpbGQxMkhvdXJzKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBmb3JtYXQoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9mb3JtYXQ7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekhvdXJTdGVwKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcclxuICAgICAgdGhpcy5fbnpIb3VyU3RlcCA9IHZhbHVlO1xyXG4gICAgICB0aGlzLmJ1aWxkSG91cnMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBuekhvdXJTdGVwKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fbnpIb3VyU3RlcDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56TWludXRlU3RlcCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XHJcbiAgICAgIHRoaXMuX256TWludXRlU3RlcCA9IHZhbHVlO1xyXG4gICAgICB0aGlzLmJ1aWxkTWludXRlcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IG56TWludXRlU3RlcCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX256TWludXRlU3RlcDtcclxuICB9XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56U2Vjb25kU3RlcCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XHJcbiAgICAgIHRoaXMuX256U2Vjb25kU3RlcCA9IHZhbHVlO1xyXG4gICAgICB0aGlzLmJ1aWxkU2Vjb25kcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IG56U2Vjb25kU3RlcCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX256U2Vjb25kU3RlcDtcclxuICB9XHJcblxyXG4gIHNlbGVjdElucHV0UmFuZ2UoKTogdm9pZCB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKHRoaXMubnpUaW1lVmFsdWVBY2Nlc3NvckRpcmVjdGl2ZSkge1xyXG4gICAgICAgIHRoaXMubnpUaW1lVmFsdWVBY2Nlc3NvckRpcmVjdGl2ZS5zZXRSYW5nZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGJ1aWxkSG91cnMoKTogdm9pZCB7XHJcbiAgICB0aGlzLmhvdXJzID0gKCgodGhpcy50aW1lLmhvdXJzID8gdGhpcy50aW1lLmhvdXJzIDogdGhpcy50aW1lLmRlZmF1bHRIb3VycykgKyAxMSkgJSAxMiArIDEpO1xyXG4gIH1cclxuXHJcbiAgYnVpbGRNaW51dGVzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5taW51dGVzID0gdGhpcy50aW1lLm1pbnV0ZXMgPyB0aGlzLnRpbWUubWludXRlcyA6IHRoaXMudGltZS5kZWZhdWx0TWludXRlcztcclxuICB9XHJcblxyXG4gIGJ1aWxkU2Vjb25kcygpOiB2b2lkIHtcclxuICAgIHRoaXMuc2Vjb25kcyA9IHRoaXMudGltZS5zZWNvbmRzID8gdGhpcy50aW1lLnNlY29uZHMgOiB0aGlzLnRpbWUuZGVmYXVsdFNlY29uZHM7XHJcbiAgfVxyXG5cclxuICBidWlsZDEySG91cnMoKTogdm9pZCB7XHJcbiAgICBjb25zdCBpc1VwcGVyRm9yYW10ID0gdGhpcy5fZm9ybWF0LmluY2x1ZGVzKCdBJyk7XHJcbiAgICB0aGlzLnVzZTEySG91cnNSYW5nZSA9IFtcclxuICAgICAge1xyXG4gICAgICAgIGluZGV4OiAwLFxyXG4gICAgICAgIHZhbHVlOiBpc1VwcGVyRm9yYW10ID8gJ0FNJyA6ICdhbSdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGluZGV4OiAxLFxyXG4gICAgICAgIHZhbHVlOiBpc1VwcGVyRm9yYW10ID8gJ1BNJyA6ICdwbSdcclxuICAgICAgfVxyXG4gICAgXTtcclxuICAgIHRoaXMucmFuZ2UgPSB0aGlzLnRpbWUuc2VsZWN0ZWQxMkhvdXJzID8gdGhpcy50aW1lLnNlbGVjdGVkMTJIb3Vycy50b0xvd2VyQ2FzZSgpIDogdGhpcy50aW1lLmRlZmF1bHQxMkhvdXJzLnRvTG93ZXJDYXNlKCk7XHJcbiAgfVxyXG5cclxuICBidWlsZFRpbWVzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5idWlsZEhvdXJzKCk7XHJcbiAgICB0aGlzLmJ1aWxkTWludXRlcygpO1xyXG4gICAgdGhpcy5idWlsZFNlY29uZHMoKTtcclxuICAgIHRoaXMuYnVpbGQxMkhvdXJzKCk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RIb3VyKGhvdXI6IHsgaW5kZXg6IG51bWJlcjsgZGlzYWJsZWQ6IGJvb2xlYW4gfSk6IHZvaWQge1xyXG4gICAgdGhpcy50aW1lLnNldEhvdXJzKGhvdXIuaW5kZXgsIGhvdXIuZGlzYWJsZWQpO1xyXG4gICAgdGhpcy5zY3JvbGxUb1NlbGVjdGVkKHRoaXMuaG91ckxpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIGhvdXIuaW5kZXgsIDEyMCwgJ2hvdXInKTtcclxuXHJcbiAgICBpZiAodGhpcy5fZGlzYWJsZWRNaW51dGVzKSB7XHJcbiAgICAgIHRoaXMuYnVpbGRNaW51dGVzKCk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5fZGlzYWJsZWRTZWNvbmRzIHx8IHRoaXMuX2Rpc2FibGVkTWludXRlcykge1xyXG4gICAgICB0aGlzLmJ1aWxkU2Vjb25kcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2VsZWN0TWludXRlKG1pbnV0ZTogeyBpbmRleDogbnVtYmVyOyBkaXNhYmxlZDogYm9vbGVhbiB9KTogdm9pZCB7XHJcbiAgICB0aGlzLnRpbWUuc2V0TWludXRlcyhtaW51dGUuaW5kZXgsIG1pbnV0ZS5kaXNhYmxlZCk7XHJcbiAgICB0aGlzLnNjcm9sbFRvU2VsZWN0ZWQodGhpcy5taW51dGVMaXN0RWxlbWVudC5uYXRpdmVFbGVtZW50LCBtaW51dGUuaW5kZXgsIDEyMCwgJ21pbnV0ZScpO1xyXG4gICAgaWYgKHRoaXMuX2Rpc2FibGVkU2Vjb25kcykge1xyXG4gICAgICB0aGlzLmJ1aWxkU2Vjb25kcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2VsZWN0U2Vjb25kKHNlY29uZDogeyBpbmRleDogbnVtYmVyOyBkaXNhYmxlZDogYm9vbGVhbiB9KTogdm9pZCB7XHJcbiAgICB0aGlzLnRpbWUuc2V0U2Vjb25kcyhzZWNvbmQuaW5kZXgsIHNlY29uZC5kaXNhYmxlZCk7XHJcbiAgICB0aGlzLnNjcm9sbFRvU2VsZWN0ZWQodGhpcy5zZWNvbmRMaXN0RWxlbWVudC5uYXRpdmVFbGVtZW50LCBzZWNvbmQuaW5kZXgsIDEyMCwgJ3NlY29uZCcpO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0MTJIb3Vycyh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLnRpbWUuc2VsZWN0ZWQxMkhvdXJzID0gdmFsdWU7XHJcbiAgICBpZiAodGhpcy5fZGlzYWJsZWRIb3Vycykge1xyXG4gICAgICB0aGlzLmJ1aWxkSG91cnMoKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLl9kaXNhYmxlZE1pbnV0ZXMpIHtcclxuICAgICAgdGhpcy5idWlsZE1pbnV0ZXMoKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLl9kaXNhYmxlZFNlY29uZHMpIHtcclxuICAgICAgdGhpcy5idWlsZFNlY29uZHMoKTtcclxuICAgIH1cclxuICAgIC8qdGhpcy5zY3JvbGxUb1NlbGVjdGVkKHRoaXMudXNlMTJIb3Vyc0xpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHZhbHVlLmluZGV4LCAxMjAsICcxMi1ob3VyJyk7Ki9cclxuICB9XHJcblxyXG4gIHNjcm9sbFRvU2VsZWN0ZWQoaW5zdGFuY2U6IEhUTUxFbGVtZW50LCBpbmRleDogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyID0gMCwgdW5pdDogTnpUaW1lUGlja2VyVW5pdCk6IHZvaWQge1xyXG4gICAgY29uc3QgdHJhbnNJbmRleCA9IHRoaXMudHJhbnNsYXRlSW5kZXgoaW5kZXgsIHVuaXQpO1xyXG4gICAgY29uc3QgY3VycmVudE9wdGlvbiA9IChpbnN0YW5jZS5jaGlsZHJlblswXS5jaGlsZHJlblt0cmFuc0luZGV4XSB8fFxyXG4gICAgICBpbnN0YW5jZS5jaGlsZHJlblswXS5jaGlsZHJlblswXSkgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICB0aGlzLnNjcm9sbFRvKGluc3RhbmNlLCBjdXJyZW50T3B0aW9uLm9mZnNldFRvcCwgZHVyYXRpb24pO1xyXG4gIH1cclxuXHJcbiAgdHJhbnNsYXRlSW5kZXgoaW5kZXg6IG51bWJlciwgdW5pdDogTnpUaW1lUGlja2VyVW5pdCk6IG51bWJlciB7XHJcbiAgICBpZiAodW5pdCA9PT0gJ2hvdXInKSB7XHJcbiAgICAgIGNvbnN0IGRpc2FibGVkSG91cnMgPSB0aGlzLm56RGlzYWJsZWRIb3VycyAmJiB0aGlzLm56RGlzYWJsZWRIb3VycygpO1xyXG4gICAgICByZXR1cm4gdGhpcy5jYWxjSW5kZXgoZGlzYWJsZWRIb3VycywgdGhpcy5ob3VyUmFuZ2UubWFwKGl0ZW0gPT4gaXRlbS5pbmRleCkuaW5kZXhPZihpbmRleCkpO1xyXG4gICAgfSBlbHNlIGlmICh1bml0ID09PSAnbWludXRlJykge1xyXG4gICAgICBjb25zdCBkaXNhYmxlZE1pbnV0ZXMgPSB0aGlzLm56RGlzYWJsZWRNaW51dGVzICYmIHRoaXMubnpEaXNhYmxlZE1pbnV0ZXModGhpcy50aW1lLmhvdXJzISk7XHJcbiAgICAgIHJldHVybiB0aGlzLmNhbGNJbmRleChkaXNhYmxlZE1pbnV0ZXMsIHRoaXMubWludXRlUmFuZ2UubWFwKGl0ZW0gPT4gaXRlbS5pbmRleCkuaW5kZXhPZihpbmRleCkpO1xyXG4gICAgfSBlbHNlIGlmICh1bml0ID09PSAnc2Vjb25kJykge1xyXG4gICAgICAvLyBzZWNvbmRcclxuICAgICAgY29uc3QgZGlzYWJsZWRTZWNvbmRzID0gdGhpcy5uekRpc2FibGVkU2Vjb25kcyAmJiB0aGlzLm56RGlzYWJsZWRTZWNvbmRzKHRoaXMudGltZS5ob3VycyEsIHRoaXMudGltZS5taW51dGVzISk7XHJcbiAgICAgIHJldHVybiB0aGlzLmNhbGNJbmRleChkaXNhYmxlZFNlY29uZHMsIHRoaXMuc2Vjb25kUmFuZ2UubWFwKGl0ZW0gPT4gaXRlbS5pbmRleCkuaW5kZXhPZihpbmRleCkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gMTItaG91clxyXG4gICAgICByZXR1cm4gdGhpcy5jYWxjSW5kZXgoW10sIHRoaXMudXNlMTJIb3Vyc1JhbmdlLm1hcChpdGVtID0+IGl0ZW0uaW5kZXgpLmluZGV4T2YoaW5kZXgpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNjcm9sbFRvKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCB0bzogbnVtYmVyLCBkdXJhdGlvbjogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAoZHVyYXRpb24gPD0gMCkge1xyXG4gICAgICBlbGVtZW50LnNjcm9sbFRvcCA9IHRvO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBkaWZmZXJlbmNlID0gdG8gLSBlbGVtZW50LnNjcm9sbFRvcDtcclxuICAgIGNvbnN0IHBlclRpY2sgPSAoZGlmZmVyZW5jZSAvIGR1cmF0aW9uKSAqIDEwO1xyXG5cclxuICAgIHJlcUFuaW1GcmFtZSgoKSA9PiB7XHJcbiAgICAgIGVsZW1lbnQuc2Nyb2xsVG9wID0gZWxlbWVudC5zY3JvbGxUb3AgKyBwZXJUaWNrO1xyXG4gICAgICBpZiAoZWxlbWVudC5zY3JvbGxUb3AgPT09IHRvKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2Nyb2xsVG8oZWxlbWVudCwgdG8sIGR1cmF0aW9uIC0gMTApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjYWxjSW5kZXgoYXJyYXk6IG51bWJlcltdLCBpbmRleDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGlmIChhcnJheSAmJiBhcnJheS5sZW5ndGggJiYgdGhpcy5uekhpZGVEaXNhYmxlZE9wdGlvbnMpIHtcclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICBpbmRleCAtXHJcbiAgICAgICAgYXJyYXkucmVkdWNlKChwcmUsIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gcHJlICsgKHZhbHVlIDwgaW5kZXggPyAxIDogMCk7XHJcbiAgICAgICAgfSwgMClcclxuICAgICAgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBpbmRleDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBjaGFuZ2VkKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMub25DaGFuZ2UpIHtcclxuICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLnRpbWUudmFsdWUhKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCB0b3VjaGVkKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMub25Ub3VjaCkge1xyXG4gICAgICB0aGlzLm9uVG91Y2goKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XHJcbiAgICB0aGlzLnVwZGF0ZUNscy51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHtcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfWBdOiB0cnVlLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWNvbHVtbi0ke3RoaXMuZW5hYmxlZENvbHVtbnN9YF06ICF0aGlzLm56SW5EYXRlUGlja2VyLFxyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LW5hcnJvd2BdOiB0aGlzLmVuYWJsZWRDb2x1bW5zIDwgMyxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1wbGFjZW1lbnQtYm90dG9tTGVmdGBdOiAhdGhpcy5uekluRGF0ZVBpY2tlclxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpc1NlbGVjdGVkSG91cihob3VyOiB7IGluZGV4OiBudW1iZXI7IGRpc2FibGVkOiBib29sZWFuIH0pOiBib29sZWFuIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIGhvdXIuaW5kZXggPT09IHRoaXMudGltZS52aWV3SG91cnMgfHxcclxuICAgICAgKCFpc05vdE5pbCh0aGlzLnRpbWUudmlld0hvdXJzKSAmJiBob3VyLmluZGV4ID09PSB0aGlzLnRpbWUuZGVmYXVsdFZpZXdIb3VycylcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBpc1NlbGVjdGVkTWludXRlKG1pbnV0ZTogeyBpbmRleDogbnVtYmVyOyBkaXNhYmxlZDogYm9vbGVhbiB9KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBtaW51dGUuaW5kZXggPT09IHRoaXMudGltZS5taW51dGVzIHx8ICghaXNOb3ROaWwodGhpcy50aW1lLm1pbnV0ZXMpICYmIG1pbnV0ZS5pbmRleCA9PT0gdGhpcy50aW1lLmRlZmF1bHRNaW51dGVzKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGlzU2VsZWN0ZWRTZWNvbmQoc2Vjb25kOiB7IGluZGV4OiBudW1iZXI7IGRpc2FibGVkOiBib29sZWFuIH0pOiBib29sZWFuIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHNlY29uZC5pbmRleCA9PT0gdGhpcy50aW1lLnNlY29uZHMgfHwgKCFpc05vdE5pbCh0aGlzLnRpbWUuc2Vjb25kcykgJiYgc2Vjb25kLmluZGV4ID09PSB0aGlzLnRpbWUuZGVmYXVsdFNlY29uZHMpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgaXNTZWxlY3RlZDEySG91cnModmFsdWU6IHsgaW5kZXg6IG51bWJlcjsgdmFsdWU6IHN0cmluZyB9KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB2YWx1ZS52YWx1ZS50b1VwcGVyQ2FzZSgpID09PSB0aGlzLnRpbWUuc2VsZWN0ZWQxMkhvdXJzIHx8XHJcbiAgICAgICghaXNOb3ROaWwodGhpcy50aW1lLnNlbGVjdGVkMTJIb3VycykgJiYgdmFsdWUudmFsdWUudG9VcHBlckNhc2UoKSA9PT0gdGhpcy50aW1lLmRlZmF1bHQxMkhvdXJzKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGluaXRQb3NpdGlvbigpOiB2b2lkIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5ob3VyRW5hYmxlZCAmJiB0aGlzLmhvdXJMaXN0RWxlbWVudCkge1xyXG4gICAgICAgIGlmIChpc05vdE5pbCh0aGlzLnRpbWUudmlld0hvdXJzKSkge1xyXG4gICAgICAgICAgdGhpcy5zY3JvbGxUb1NlbGVjdGVkKHRoaXMuaG91ckxpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMudGltZS52aWV3SG91cnMhLCAwLCAnaG91cicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnNjcm9sbFRvU2VsZWN0ZWQodGhpcy5ob3VyTGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgdGhpcy50aW1lLmRlZmF1bHRWaWV3SG91cnMsIDAsICdob3VyJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLm1pbnV0ZUVuYWJsZWQgJiYgdGhpcy5taW51dGVMaXN0RWxlbWVudCkge1xyXG4gICAgICAgIGlmIChpc05vdE5pbCh0aGlzLnRpbWUubWludXRlcykpIHtcclxuICAgICAgICAgIHRoaXMuc2Nyb2xsVG9TZWxlY3RlZCh0aGlzLm1pbnV0ZUxpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMudGltZS5taW51dGVzISwgMCwgJ21pbnV0ZScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnNjcm9sbFRvU2VsZWN0ZWQodGhpcy5taW51dGVMaXN0RWxlbWVudC5uYXRpdmVFbGVtZW50LCB0aGlzLnRpbWUuZGVmYXVsdE1pbnV0ZXMsIDAsICdtaW51dGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuc2Vjb25kRW5hYmxlZCAmJiB0aGlzLnNlY29uZExpc3RFbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKGlzTm90TmlsKHRoaXMudGltZS5zZWNvbmRzKSkge1xyXG4gICAgICAgICAgdGhpcy5zY3JvbGxUb1NlbGVjdGVkKHRoaXMuc2Vjb25kTGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgdGhpcy50aW1lLnNlY29uZHMhLCAwLCAnc2Vjb25kJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2Nyb2xsVG9TZWxlY3RlZCh0aGlzLnNlY29uZExpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMudGltZS5kZWZhdWx0U2Vjb25kcywgMCwgJ3NlY29uZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5uelVzZTEySG91cnMgJiYgdGhpcy51c2UxMkhvdXJzTGlzdEVsZW1lbnQpIHtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZEhvdXJzID0gaXNOb3ROaWwodGhpcy50aW1lLnNlbGVjdGVkMTJIb3VycylcclxuICAgICAgICAgID8gdGhpcy50aW1lLnNlbGVjdGVkMTJIb3Vyc1xyXG4gICAgICAgICAgOiB0aGlzLnRpbWUuZGVmYXVsdDEySG91cnM7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBzZWxlY3RlZEhvdXJzID09PSAnQU0nID8gMCA6IDE7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxUb1NlbGVjdGVkKHRoaXMudXNlMTJIb3Vyc0xpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIGluZGV4LCAwLCAnMTItaG91cicpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSB1cGRhdGVDbHM6IFVwZGF0ZUNscywgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56SW5EYXRlUGlja2VyKSB7XHJcbiAgICAgIHRoaXMucHJlZml4Q2xzID0gJ2FudC1jYWxlbmRhci10aW1lLXBpY2tlcic7XHJcbiAgICB9XHJcbiAgICB0aGlzLnRpbWUuY2hhbmdlcy5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY2hhbmdlZCgpO1xyXG4gICAgICB0aGlzLnRvdWNoZWQoKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5idWlsZFRpbWVzKCk7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMudW5zdWJzY3JpYmUkLm5leHQoKTtcclxuICAgIHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBjb25zdCB7IG56VXNlMTJIb3VycyB9ID0gY2hhbmdlcztcclxuICAgIGlmIChuelVzZTEySG91cnMgJiYgIW56VXNlMTJIb3Vycy5wcmV2aW91c1ZhbHVlICYmIG56VXNlMTJIb3Vycy5jdXJyZW50VmFsdWUpIHtcclxuICAgICAgdGhpcy5idWlsZDEySG91cnMoKTtcclxuICAgICAgdGhpcy5lbmFibGVkQ29sdW1ucysrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogRGF0ZSk6IHZvaWQge1xyXG4gICAgdGhpcy50aW1lLnNldFZhbHVlKHZhbHVlLCB0aGlzLm56VXNlMTJIb3Vycyk7XHJcbiAgICB0aGlzLmJ1aWxkVGltZXMoKTtcclxuXHJcbiAgICAvLyBNYXJrIHRoaXMgY29tcG9uZW50IHRvIGJlIGNoZWNrZWQgbWFudWFsbHkgd2l0aCBpbnRlcm5hbCBwcm9wZXJ0aWVzIGNoYW5naW5nIChzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzEwODE2KVxyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IERhdGUpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2ggPSBmbjtcclxuICB9XHJcblxyXG4gIC8qIEN1c3RvbWl6ZWQgY29kZSAqL1xyXG4gIHVwZGF0ZVRpbWUoJGV2ZW50LCB0eXBlOiBzdHJpbmcpIHtcclxuICAgIGlmICh0eXBlID09PSAnaG91cnMnKSB7XHJcbiAgICAgIHRoaXMudGltZS5zZXRIb3VycygkZXZlbnQsIGZhbHNlKTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlID09PSAnbWludXRlcycpIHtcclxuICAgICAgdGhpcy50aW1lLnNldE1pbnV0ZXMoJGV2ZW50LCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZSA9PT0gJ3NlY29uZHMnKSB7XHJcbiAgICAgIHRoaXMudGltZS5zZXRTZWNvbmRzKCRldmVudCwgZmFsc2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19