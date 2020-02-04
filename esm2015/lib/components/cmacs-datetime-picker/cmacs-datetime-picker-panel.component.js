/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
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
        /** @type {?} */
        let hourRanges = 24;
        /** @type {?} */
        let disabledHours = this.nzDisabledHours && this.nzDisabledHours();
        /** @type {?} */
        let startIndex = 0;
        if (this.nzUse12Hours) {
            hourRanges = 12;
            if (disabledHours) {
                if (this.time.selected12Hours === 'PM') {
                    /**
                     * Filter and transform hours which greater or equal to 12
                     * [0, 1, 2, ..., 12, 13, 14, 15, ..., 23] => [12, 1, 2, 3, ..., 11]
                     */
                    disabledHours = disabledHours.filter((/**
                     * @param {?} i
                     * @return {?}
                     */
                    i => i >= 12)).map((/**
                     * @param {?} i
                     * @return {?}
                     */
                    i => (i > 12 ? i - 12 : i)));
                }
                else {
                    /**
                     * Filter and transform hours which less than 12
                     * [0, 1, 2,..., 12, 13, 14, 15, ...23] => [12, 1, 2, 3, ..., 11]
                     */
                    disabledHours = disabledHours.filter((/**
                     * @param {?} i
                     * @return {?}
                     */
                    i => i < 12 || i === 24)).map((/**
                     * @param {?} i
                     * @return {?}
                     */
                    i => (i === 24 || i === 0 ? 12 : i)));
                }
            }
            startIndex = 1;
        }
        this.hourRange = makeRange(hourRanges, this.nzHourStep, startIndex).map((/**
         * @param {?} r
         * @return {?}
         */
        r => {
            return {
                index: r,
                disabled: this.nzDisabledHours && disabledHours.indexOf(r) !== -1
            };
        }));
        if (this.nzUse12Hours && this.hourRange[this.hourRange.length - 1].index === 12) {
            /** @type {?} */
            const temp = [...this.hourRange];
            temp.unshift(temp[temp.length - 1]);
            temp.splice(temp.length - 1, 1);
            this.hourRange = temp;
        }
    }
    /**
     * @return {?}
     */
    buildMinutes() {
        this.minuteRange = makeRange(60, this.nzMinuteStep).map((/**
         * @param {?} r
         * @return {?}
         */
        r => {
            return {
                index: r,
                disabled: this.nzDisabledMinutes && this.nzDisabledMinutes((/** @type {?} */ (this.time.hours))).indexOf(r) !== -1
            };
        }));
    }
    /**
     * @return {?}
     */
    buildSeconds() {
        this.secondRange = makeRange(60, this.nzSecondStep).map((/**
         * @param {?} r
         * @return {?}
         */
        r => {
            return {
                index: r,
                disabled: this.nzDisabledSeconds && this.nzDisabledSeconds((/** @type {?} */ (this.time.hours)), (/** @type {?} */ (this.time.minutes))).indexOf(r) !== -1
            };
        }));
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
            [`${this.prefixCls}-column-${this.enabledColumns}`]: this.nzInDatePicker ? false : true,
            [`${this.prefixCls}-narrow`]: this.enabledColumns < 3,
            [`${this.prefixCls}-placement-bottomLeft`]: this.nzInDatePicker ? false : true
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
        this.hours = (((this.time.hours ? this.time.hours : this.time.defaultHours) + 11) % 12 + 1);
        this.seconds = this.time.seconds ? this.time.seconds : this.time.defaultSeconds;
        this.minutes = this.time.minutes ? this.time.minutes : this.time.defaultMinutes;
        this.range = this.time.selected12Hours ? this.time.selected12Hours : this.time.default12Hours.toLowerCase();
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
                template: "<div class=\"{{ nzInDatePicker ? prefixCls + '-panel' : '' }}\">\r\n  <div\r\n    class=\"{{ prefixCls }}-inner {{ nzInDatePicker ? prefixCls + '-column-' + enabledColumns : '' }}\"\r\n    [style.width.px]=\"nzInDatePicker ? null : enabledColumns * 56\">\r\n    <div class=\"{{ prefixCls }}-input-wrap\">\r\n      <input\r\n        type=\"text\"\r\n        class=\"{{ prefixCls }}-input\"\r\n        [placeholder]=\"nzPlaceHolder\"\r\n        [nzTime]=\"format\"\r\n        [(ngModel)]=\"time.value\"\r\n        (blur)=\"time.changed()\">\r\n    </div>\r\n    <div>\r\n      <cmacs-input-number style=\"margin-right: 5px\" class=\"cmacs-datetime-picker-input-number\" [min]=\"1\" [max]=\"12\" [(ngModel)]=\"hours\"\r\n                          (ngModelChange)=\"updateTime($event, 'hours')\"></cmacs-input-number>\r\n      <div class=\"cmacs-datetime-dividers\"><span>:</span></div>\r\n      <cmacs-input-number style=\"margin-left: 5px\" class=\"cmacs-datetime-picker-input-number\" [min]=\"0\" [max]=\"59\" [(ngModel)]=\"minutes\"\r\n                          (ngModelChange)=\"updateTime($event, 'minutes')\"></cmacs-input-number>\r\n      <!--<cmacs-input-number [min]=\"0\" [max]=\"59\" [(ngModel)]=\"seconds\"\r\n                          (ngModelChange)=\"updateTime($event, 'seconds')\"></cmacs-input-number>-->\r\n      <cmacs-select style=\"margin: 11px 11px 11px 0; width: calc(100% - 156px);\" [(ngModel)]=\"range\" (ngModelChange)=\"select12Hours($event)\">\r\n        <cmacs-option class=\"{{ isSelected12Hours(range) ? prefixCls + '-select-option-selected' : '' }}\"\r\n                    *ngFor=\"let range of use12HoursRange\" [value]=\"range.value\" [label]=\"range.value | uppercase\"></cmacs-option>\r\n      </cmacs-select>\r\n    </div>\r\n    <!--<div class=\"{{ prefixCls }}-combobox\">\r\n      <div\r\n        *ngIf=\"hourEnabled\"\r\n        #hourListElement\r\n        class=\"{{ prefixCls }}-select\">\r\n        <ul>\r\n          <ng-container *ngFor=\"let hour of hourRange\">\r\n            <li\r\n              *ngIf=\"!(nzHideDisabledOptions && hour.disabled)\"\r\n              (click)=\"selectHour(hour)\"\r\n              class=\"\r\n                {{ isSelectedHour(hour) ? prefixCls + '-select-option-selected' : '' }}\r\n                {{ hour.disabled ? prefixCls + '-select-option-disabled' : '' }}\r\n              \"\r\n            >\r\n              {{ hour.index | number:'2.0-0' }}\r\n            </li>\r\n          </ng-container>\r\n        </ul>\r\n      </div>\r\n      <div\r\n        *ngIf=\"minuteEnabled\"\r\n        #minuteListElement\r\n        class=\"{{ prefixCls }}-select\">\r\n        <ul>\r\n          <ng-container *ngFor=\"let minute of minuteRange\">\r\n            <li\r\n              *ngIf=\"!(nzHideDisabledOptions && minute.disabled)\"\r\n              (click)=\"selectMinute(minute)\"\r\n              class=\"\r\n                {{ isSelectedMinute(minute) ? prefixCls + '-select-option-selected' : '' }}\r\n                {{ minute.disabled ? prefixCls + '-select-option-disabled' : '' }}\r\n              \"\r\n            >\r\n              {{ minute.index | number:'2.0-0' }}\r\n            </li>\r\n          </ng-container>\r\n        </ul>\r\n      </div>\r\n      <div\r\n        *ngIf=\"secondEnabled\"\r\n        #secondListElement\r\n        class=\"{{ prefixCls }}-select\">\r\n        <ul>\r\n          <ng-container *ngFor=\"let second of secondRange\">\r\n            <li\r\n              *ngIf=\"!(nzHideDisabledOptions && second.disabled)\"\r\n              (click)=\"selectSecond(second)\"\r\n              class=\"\r\n                {{ isSelectedSecond(second) ? prefixCls + '-select-option-selected' : '' }}\r\n                {{ second.disabled ? prefixCls + '-select-option-disabled' : '' }}\r\n              \"\r\n            >\r\n              {{ second.index | number:'2.0-0' }}\r\n            </li>\r\n          </ng-container>\r\n        </ul>\r\n      </div>\r\n      <div\r\n        *ngIf=\"nzUse12Hours\"\r\n        #use12HoursListElement\r\n        class=\"{{ prefixCls }}-select\">\r\n        <ul>\r\n          <ng-container *ngFor=\"let range of use12HoursRange \">\r\n            <li\r\n              *ngIf=\"!nzHideDisabledOptions\"\r\n              (click)=\"select12Hours(range)\"\r\n              class=\"\r\n                {{ isSelected12Hours(range) ? prefixCls + '-select-option-selected' : '' }}\r\n              \"\r\n            >\r\n              {{ range.value }}\r\n            </li>\r\n          </ng-container>\r\n        </ul>\r\n      </div>\r\n    </div>-->\r\n    <div class=\"{{ prefixCls }}-addon\" *ngIf=\"nzAddOn\">\r\n      <ng-template [ngTemplateOutlet]=\"nzAddOn\"></ng-template>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                providers: [UpdateCls, { provide: NG_VALUE_ACCESSOR, useExisting: CmacsDatetimePickerPanelComponent, multi: true }],
                styles: [".cmacs-datetime-picker-input-number{width:55px;height:30px!important;margin:11px}cmacs-select .ant-select-selection{height:30px}.cmacs-datetime-dividers{display:inline-block;position:relative;top:-3px}.ant-time-picker-panel-inner{width:224px!important}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZGF0ZXRpbWUtcGlja2VyLXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtZGF0ZXRpbWUtcGlja2VyL2NtYWNzLWRhdGV0aW1lLXBpY2tlci1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsS0FBSyxFQUtMLFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsd0JBQXdCLElBQUksU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFakgsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDaEcsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztBQUUzQyxTQUFTLFNBQVMsQ0FBQyxNQUFjLEVBQUUsT0FBZSxDQUFDLEVBQUUsUUFBZ0IsQ0FBQztJQUNwRSxPQUFPLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUc7Ozs7O0lBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMs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LG9EQUE0Qjs7Ozs7SUFDNUIsb0RBQTZCOzs7OztJQUM3QiwyREFBdUM7Ozs7O0lBQ3ZDLDZEQUFxRDs7Ozs7SUFDckQsNkRBQXFFOzs7OztJQUNyRSw4REFBdUM7Ozs7O0lBQ3ZDLG9EQUF3Qjs7Ozs7SUFDeEIsd0RBQTJCOztJQUMzQixzREFBNEM7O0lBQzVDLGlEQUF3Qjs7SUFDeEIsd0RBQW1COztJQUNuQiwwREFBcUI7O0lBQ3JCLDBEQUFxQjs7SUFDckIsMkRBQW1COztJQUNuQixzREFBK0Q7O0lBQy9ELHdEQUFpRTs7SUFDakUsd0RBQWlFOztJQUNqRSw0REFBaUU7O0lBQ2pFLGtEQUFlOztJQUNmLG9EQUFpQjs7SUFDakIsb0RBQWlCOztJQUNqQixrREFBVzs7SUFDWCx5RUFBa0g7O0lBRWxILDREQUE0RDs7SUFDNUQsOERBQWdFOztJQUNoRSw4REFBZ0U7O0lBQ2hFLGtFQUF3RTs7SUFFeEUsMkRBQXlDOztJQUN6QyxvREFBb0M7O0lBQ3BDLGtFQUF1Qzs7SUFDdkMsd0RBQTZCOztJQUM3QiwwREFBK0I7O0lBQy9CLHlEQUE4Qzs7Ozs7SUE2WWxDLG9EQUEyQjs7Ozs7SUFBRSxzREFBNEI7Ozs7O0lBQUUsZ0RBQThCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBEZWJ1Z0VsZW1lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IGlzTm90TmlsLCByZXFBbmltRnJhbWUsIElucHV0Qm9vbGVhbiwgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIGFzIFVwZGF0ZUNscyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDbWFjc0RhdGV0aW1lVmFsdWVBY2Nlc3NvckRpcmVjdGl2ZSB9IGZyb20gJy4vY21hY3MtZGF0ZXRpbWUtdmFsdWUtYWNjZXNzb3IuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgVGltZUhvbGRlciB9IGZyb20gJy4vdGltZS1ob2xkZXInO1xyXG5cclxuZnVuY3Rpb24gbWFrZVJhbmdlKGxlbmd0aDogbnVtYmVyLCBzdGVwOiBudW1iZXIgPSAxLCBzdGFydDogbnVtYmVyID0gMCk6IG51bWJlcltdIHtcclxuICByZXR1cm4gbmV3IEFycmF5KE1hdGguY2VpbChsZW5ndGggLyBzdGVwKSkuZmlsbCgwKS5tYXAoKF8sIGkpID0+IChpICsgc3RhcnQpICogc3RlcCk7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIE56VGltZVBpY2tlclVuaXQgPSAnaG91cicgfCAnbWludXRlJyB8ICdzZWNvbmQnIHwgJzEyLWhvdXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBzZWxlY3RvcjogJ2NtYWNzLWRhdGV0aW1lLXBpY2tlci1wYW5lbCcsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0RhdGVUaW1lUGlja2VyUGFuZWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1kYXRldGltZS1waWNrZXItcGFuZWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLWRhdGV0aW1lLXBpY2tlci1wYW5lbC5jb21wb25lbnQuY3NzJ10sXHJcbiAgcHJvdmlkZXJzOiBbVXBkYXRlQ2xzLCB7IHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLCB1c2VFeGlzdGluZzogQ21hY3NEYXRldGltZVBpY2tlclBhbmVsQ29tcG9uZW50LCBtdWx0aTogdHJ1ZSB9XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NEYXRldGltZVBpY2tlclBhbmVsQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xyXG4gIHByaXZhdGUgX256SG91clN0ZXAgPSAxO1xyXG4gIHByaXZhdGUgX256TWludXRlU3RlcCA9IDE7XHJcbiAgcHJpdmF0ZSBfbnpTZWNvbmRTdGVwID0gMTtcclxuICBwcml2YXRlIHVuc3Vic2NyaWJlJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgcHJpdmF0ZSBvbkNoYW5nZTogKHZhbHVlOiBEYXRlKSA9PiB2b2lkO1xyXG4gIHByaXZhdGUgb25Ub3VjaDogKCkgPT4gdm9pZDtcclxuICBwcml2YXRlIF9mb3JtYXQgPSAnSEg6bW06c3MnO1xyXG4gIHByaXZhdGUgX2Rpc2FibGVkSG91cnM6ICgpID0+IG51bWJlcltdO1xyXG4gIHByaXZhdGUgX2Rpc2FibGVkTWludXRlczogKGhvdXI6IG51bWJlcikgPT4gbnVtYmVyW107XHJcbiAgcHJpdmF0ZSBfZGlzYWJsZWRTZWNvbmRzOiAoaG91cjogbnVtYmVyLCBtaW51dGU6IG51bWJlcikgPT4gbnVtYmVyW107XHJcbiAgcHJpdmF0ZSBfZGVmYXVsdE9wZW5WYWx1ZSA9IG5ldyBEYXRlKCk7XHJcbiAgcHJpdmF0ZSBfb3BlbmVkID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfYWxsb3dFbXB0eSA9IHRydWU7XHJcbiAgcHJlZml4Q2xzOiBzdHJpbmcgPSAnYW50LXRpbWUtcGlja2VyLXBhbmVsJztcclxuICB0aW1lID0gbmV3IFRpbWVIb2xkZXIoKTtcclxuICBob3VyRW5hYmxlZCA9IHRydWU7XHJcbiAgbWludXRlRW5hYmxlZCA9IHRydWU7XHJcbiAgc2Vjb25kRW5hYmxlZCA9IHRydWU7XHJcbiAgZW5hYmxlZENvbHVtbnMgPSAzO1xyXG4gIGhvdXJSYW5nZTogUmVhZG9ubHlBcnJheTx7IGluZGV4OiBudW1iZXI7IGRpc2FibGVkOiBib29sZWFuIH0+O1xyXG4gIG1pbnV0ZVJhbmdlOiBSZWFkb25seUFycmF5PHsgaW5kZXg6IG51bWJlcjsgZGlzYWJsZWQ6IGJvb2xlYW4gfT47XHJcbiAgc2Vjb25kUmFuZ2U6IFJlYWRvbmx5QXJyYXk8eyBpbmRleDogbnVtYmVyOyBkaXNhYmxlZDogYm9vbGVhbiB9PjtcclxuICB1c2UxMkhvdXJzUmFuZ2U6IFJlYWRvbmx5QXJyYXk8eyBpbmRleDogbnVtYmVyOyB2YWx1ZTogc3RyaW5nIH0+O1xyXG4gIGhvdXJzIDogbnVtYmVyO1xyXG4gIHNlY29uZHMgOiBudW1iZXI7XHJcbiAgbWludXRlcyA6IG51bWJlcjtcclxuICByYW5nZTogYW55O1xyXG4gIEBWaWV3Q2hpbGQoQ21hY3NEYXRldGltZVZhbHVlQWNjZXNzb3JEaXJlY3RpdmUpIG56VGltZVZhbHVlQWNjZXNzb3JEaXJlY3RpdmU6IENtYWNzRGF0ZXRpbWVWYWx1ZUFjY2Vzc29yRGlyZWN0aXZlO1xyXG5cclxuICBAVmlld0NoaWxkKCdob3VyTGlzdEVsZW1lbnQnKSBob3VyTGlzdEVsZW1lbnQ6IERlYnVnRWxlbWVudDtcclxuICBAVmlld0NoaWxkKCdtaW51dGVMaXN0RWxlbWVudCcpIG1pbnV0ZUxpc3RFbGVtZW50OiBEZWJ1Z0VsZW1lbnQ7XHJcbiAgQFZpZXdDaGlsZCgnc2Vjb25kTGlzdEVsZW1lbnQnKSBzZWNvbmRMaXN0RWxlbWVudDogRGVidWdFbGVtZW50O1xyXG4gIEBWaWV3Q2hpbGQoJ3VzZTEySG91cnNMaXN0RWxlbWVudCcpIHVzZTEySG91cnNMaXN0RWxlbWVudDogRGVidWdFbGVtZW50O1xyXG5cclxuICBASW5wdXQoKSBuekluRGF0ZVBpY2tlcjogYm9vbGVhbiA9IGZhbHNlOyAvLyBJZiBpbnNpZGUgYSBkYXRlLXBpY2tlciwgbW9yZSBkaWZmIHdvcmtzIG5lZWQgdG8gYmUgZG9uZVxyXG4gIEBJbnB1dCgpIG56QWRkT246IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG56SGlkZURpc2FibGVkT3B0aW9ucyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56Q2xlYXJUZXh0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnpQbGFjZUhvbGRlcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelVzZTEySG91cnMgPSBmYWxzZTtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekFsbG93RW1wdHkodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcclxuICAgICAgdGhpcy5fYWxsb3dFbXB0eSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IG56QWxsb3dFbXB0eSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9hbGxvd0VtcHR5O1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgb3BlbmVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9vcGVuZWQgPSB2YWx1ZTtcclxuICAgIGlmICh0aGlzLm9wZW5lZCkge1xyXG4gICAgICB0aGlzLmluaXRQb3NpdGlvbigpO1xyXG4gICAgICB0aGlzLnNlbGVjdElucHV0UmFuZ2UoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBvcGVuZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fb3BlbmVkO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpEZWZhdWx0T3BlblZhbHVlKHZhbHVlOiBEYXRlKSB7XHJcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XHJcbiAgICAgIHRoaXMuX2RlZmF1bHRPcGVuVmFsdWUgPSB2YWx1ZTtcclxuICAgICAgdGhpcy50aW1lLnNldERlZmF1bHRPcGVuVmFsdWUodGhpcy5uekRlZmF1bHRPcGVuVmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IG56RGVmYXVsdE9wZW5WYWx1ZSgpOiBEYXRlIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0T3BlblZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpEaXNhYmxlZEhvdXJzKHZhbHVlOiAoKSA9PiBudW1iZXJbXSkge1xyXG4gICAgdGhpcy5fZGlzYWJsZWRIb3VycyA9IHZhbHVlO1xyXG4gICAgaWYgKHRoaXMuX2Rpc2FibGVkSG91cnMpIHtcclxuICAgICAgdGhpcy5idWlsZEhvdXJzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgbnpEaXNhYmxlZEhvdXJzKCk6ICgpID0+IG51bWJlcltdIHtcclxuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZEhvdXJzO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpEaXNhYmxlZE1pbnV0ZXModmFsdWU6IChob3VyOiBudW1iZXIpID0+IG51bWJlcltdKSB7XHJcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XHJcbiAgICAgIHRoaXMuX2Rpc2FibGVkTWludXRlcyA9IHZhbHVlO1xyXG4gICAgICB0aGlzLmJ1aWxkTWludXRlcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IG56RGlzYWJsZWRNaW51dGVzKCk6IChob3VyOiBudW1iZXIpID0+IG51bWJlcltdIHtcclxuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZE1pbnV0ZXM7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekRpc2FibGVkU2Vjb25kcyh2YWx1ZTogKGhvdXI6IG51bWJlciwgbWludXRlOiBudW1iZXIpID0+IG51bWJlcltdKSB7XHJcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XHJcbiAgICAgIHRoaXMuX2Rpc2FibGVkU2Vjb25kcyA9IHZhbHVlO1xyXG4gICAgICB0aGlzLmJ1aWxkU2Vjb25kcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IG56RGlzYWJsZWRTZWNvbmRzKCk6IChob3VyOiBudW1iZXIsIG1pbnV0ZTogbnVtYmVyKSA9PiBudW1iZXJbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWRTZWNvbmRzO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgZm9ybWF0KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcclxuICAgICAgdGhpcy5fZm9ybWF0ID0gdmFsdWU7XHJcbiAgICAgIHRoaXMuZW5hYmxlZENvbHVtbnMgPSAwO1xyXG4gICAgICBjb25zdCBjaGFyU2V0ID0gbmV3IFNldCh2YWx1ZSk7XHJcbiAgICAgIHRoaXMuaG91ckVuYWJsZWQgPSBjaGFyU2V0LmhhcygnSCcpIHx8IGNoYXJTZXQuaGFzKCdoJyk7XHJcbiAgICAgIHRoaXMubWludXRlRW5hYmxlZCA9IGNoYXJTZXQuaGFzKCdtJyk7XHJcbiAgICAgIHRoaXMuc2Vjb25kRW5hYmxlZCA9IGNoYXJTZXQuaGFzKCdzJyk7XHJcbiAgICAgIGlmICh0aGlzLmhvdXJFbmFibGVkKSB7XHJcbiAgICAgICAgdGhpcy5lbmFibGVkQ29sdW1ucysrO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLm1pbnV0ZUVuYWJsZWQpIHtcclxuICAgICAgICB0aGlzLmVuYWJsZWRDb2x1bW5zKys7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuc2Vjb25kRW5hYmxlZCkge1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZENvbHVtbnMrKztcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5uelVzZTEySG91cnMpIHtcclxuICAgICAgICB0aGlzLmJ1aWxkMTJIb3VycygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgZm9ybWF0KCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fZm9ybWF0O1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpIb3VyU3RlcCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XHJcbiAgICAgIHRoaXMuX256SG91clN0ZXAgPSB2YWx1ZTtcclxuICAgICAgdGhpcy5idWlsZEhvdXJzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgbnpIb3VyU3RlcCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX256SG91clN0ZXA7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuek1pbnV0ZVN0ZXAodmFsdWU6IG51bWJlcikge1xyXG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xyXG4gICAgICB0aGlzLl9uek1pbnV0ZVN0ZXAgPSB2YWx1ZTtcclxuICAgICAgdGhpcy5idWlsZE1pbnV0ZXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBuek1pbnV0ZVN0ZXAoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9uek1pbnV0ZVN0ZXA7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuelNlY29uZFN0ZXAodmFsdWU6IG51bWJlcikge1xyXG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xyXG4gICAgICB0aGlzLl9uelNlY29uZFN0ZXAgPSB2YWx1ZTtcclxuICAgICAgdGhpcy5idWlsZFNlY29uZHMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBuelNlY29uZFN0ZXAoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9uelNlY29uZFN0ZXA7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RJbnB1dFJhbmdlKCk6IHZvaWQge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLm56VGltZVZhbHVlQWNjZXNzb3JEaXJlY3RpdmUpIHtcclxuICAgICAgICB0aGlzLm56VGltZVZhbHVlQWNjZXNzb3JEaXJlY3RpdmUuc2V0UmFuZ2UoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBidWlsZEhvdXJzKCk6IHZvaWQge1xyXG4gICAgbGV0IGhvdXJSYW5nZXMgPSAyNDtcclxuICAgIGxldCBkaXNhYmxlZEhvdXJzID0gdGhpcy5uekRpc2FibGVkSG91cnMgJiYgdGhpcy5uekRpc2FibGVkSG91cnMoKTtcclxuICAgIGxldCBzdGFydEluZGV4ID0gMDtcclxuICAgIGlmICh0aGlzLm56VXNlMTJIb3Vycykge1xyXG4gICAgICBob3VyUmFuZ2VzID0gMTI7XHJcbiAgICAgIGlmIChkaXNhYmxlZEhvdXJzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGltZS5zZWxlY3RlZDEySG91cnMgPT09ICdQTScpIHtcclxuICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICogRmlsdGVyIGFuZCB0cmFuc2Zvcm0gaG91cnMgd2hpY2ggZ3JlYXRlciBvciBlcXVhbCB0byAxMlxyXG4gICAgICAgICAgICogWzAsIDEsIDIsIC4uLiwgMTIsIDEzLCAxNCwgMTUsIC4uLiwgMjNdID0+IFsxMiwgMSwgMiwgMywgLi4uLCAxMV1cclxuICAgICAgICAgICAqL1xyXG4gICAgICAgICAgZGlzYWJsZWRIb3VycyA9IGRpc2FibGVkSG91cnMuZmlsdGVyKGkgPT4gaSA+PSAxMikubWFwKGkgPT4gKGkgPiAxMiA/IGkgLSAxMiA6IGkpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgKiBGaWx0ZXIgYW5kIHRyYW5zZm9ybSBob3VycyB3aGljaCBsZXNzIHRoYW4gMTJcclxuICAgICAgICAgICAqIFswLCAxLCAyLC4uLiwgMTIsIDEzLCAxNCwgMTUsIC4uLjIzXSA9PiBbMTIsIDEsIDIsIDMsIC4uLiwgMTFdXHJcbiAgICAgICAgICAgKi9cclxuICAgICAgICAgIGRpc2FibGVkSG91cnMgPSBkaXNhYmxlZEhvdXJzLmZpbHRlcihpID0+IGkgPCAxMiB8fCBpID09PSAyNCkubWFwKGkgPT4gKGkgPT09IDI0IHx8IGkgPT09IDAgPyAxMiA6IGkpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgc3RhcnRJbmRleCA9IDE7XHJcbiAgICB9XHJcbiAgICB0aGlzLmhvdXJSYW5nZSA9IG1ha2VSYW5nZShob3VyUmFuZ2VzLCB0aGlzLm56SG91clN0ZXAsIHN0YXJ0SW5kZXgpLm1hcChyID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBpbmRleDogcixcclxuICAgICAgICBkaXNhYmxlZDogdGhpcy5uekRpc2FibGVkSG91cnMgJiYgZGlzYWJsZWRIb3Vycy5pbmRleE9mKHIpICE9PSAtMVxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgICBpZiAodGhpcy5uelVzZTEySG91cnMgJiYgdGhpcy5ob3VyUmFuZ2VbdGhpcy5ob3VyUmFuZ2UubGVuZ3RoIC0gMV0uaW5kZXggPT09IDEyKSB7XHJcbiAgICAgIGNvbnN0IHRlbXAgPSBbLi4udGhpcy5ob3VyUmFuZ2VdO1xyXG4gICAgICB0ZW1wLnVuc2hpZnQodGVtcFt0ZW1wLmxlbmd0aCAtIDFdKTtcclxuICAgICAgdGVtcC5zcGxpY2UodGVtcC5sZW5ndGggLSAxLCAxKTtcclxuICAgICAgdGhpcy5ob3VyUmFuZ2UgPSB0ZW1wO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYnVpbGRNaW51dGVzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5taW51dGVSYW5nZSA9IG1ha2VSYW5nZSg2MCwgdGhpcy5uek1pbnV0ZVN0ZXApLm1hcChyID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBpbmRleDogcixcclxuICAgICAgICBkaXNhYmxlZDogdGhpcy5uekRpc2FibGVkTWludXRlcyAmJiB0aGlzLm56RGlzYWJsZWRNaW51dGVzKHRoaXMudGltZS5ob3VycyEpLmluZGV4T2YocikgIT09IC0xXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGJ1aWxkU2Vjb25kcygpOiB2b2lkIHtcclxuICAgIHRoaXMuc2Vjb25kUmFuZ2UgPSBtYWtlUmFuZ2UoNjAsIHRoaXMubnpTZWNvbmRTdGVwKS5tYXAociA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgaW5kZXg6IHIsXHJcbiAgICAgICAgZGlzYWJsZWQ6XHJcbiAgICAgICAgICB0aGlzLm56RGlzYWJsZWRTZWNvbmRzICYmIHRoaXMubnpEaXNhYmxlZFNlY29uZHModGhpcy50aW1lLmhvdXJzISwgdGhpcy50aW1lLm1pbnV0ZXMhKS5pbmRleE9mKHIpICE9PSAtMVxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBidWlsZDEySG91cnMoKTogdm9pZCB7XHJcbiAgICBjb25zdCBpc1VwcGVyRm9yYW10ID0gdGhpcy5fZm9ybWF0LmluY2x1ZGVzKCdBJyk7XHJcbiAgICB0aGlzLnVzZTEySG91cnNSYW5nZSA9IFtcclxuICAgICAge1xyXG4gICAgICAgIGluZGV4OiAwLFxyXG4gICAgICAgIHZhbHVlOiBpc1VwcGVyRm9yYW10ID8gJ0FNJyA6ICdhbSdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGluZGV4OiAxLFxyXG4gICAgICAgIHZhbHVlOiBpc1VwcGVyRm9yYW10ID8gJ1BNJyA6ICdwbSdcclxuICAgICAgfVxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIGJ1aWxkVGltZXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLmJ1aWxkSG91cnMoKTtcclxuICAgIHRoaXMuYnVpbGRNaW51dGVzKCk7XHJcbiAgICB0aGlzLmJ1aWxkU2Vjb25kcygpO1xyXG4gICAgdGhpcy5idWlsZDEySG91cnMoKTtcclxuICB9XHJcblxyXG4gIHNlbGVjdEhvdXIoaG91cjogeyBpbmRleDogbnVtYmVyOyBkaXNhYmxlZDogYm9vbGVhbiB9KTogdm9pZCB7XHJcbiAgICB0aGlzLnRpbWUuc2V0SG91cnMoaG91ci5pbmRleCwgaG91ci5kaXNhYmxlZCk7XHJcbiAgICB0aGlzLnNjcm9sbFRvU2VsZWN0ZWQodGhpcy5ob3VyTGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgaG91ci5pbmRleCwgMTIwLCAnaG91cicpO1xyXG5cclxuICAgIGlmICh0aGlzLl9kaXNhYmxlZE1pbnV0ZXMpIHtcclxuICAgICAgdGhpcy5idWlsZE1pbnV0ZXMoKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLl9kaXNhYmxlZFNlY29uZHMgfHwgdGhpcy5fZGlzYWJsZWRNaW51dGVzKSB7XHJcbiAgICAgIHRoaXMuYnVpbGRTZWNvbmRzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZWxlY3RNaW51dGUobWludXRlOiB7IGluZGV4OiBudW1iZXI7IGRpc2FibGVkOiBib29sZWFuIH0pOiB2b2lkIHtcclxuICAgIHRoaXMudGltZS5zZXRNaW51dGVzKG1pbnV0ZS5pbmRleCwgbWludXRlLmRpc2FibGVkKTtcclxuICAgIHRoaXMuc2Nyb2xsVG9TZWxlY3RlZCh0aGlzLm1pbnV0ZUxpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIG1pbnV0ZS5pbmRleCwgMTIwLCAnbWludXRlJyk7XHJcbiAgICBpZiAodGhpcy5fZGlzYWJsZWRTZWNvbmRzKSB7XHJcbiAgICAgIHRoaXMuYnVpbGRTZWNvbmRzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZWxlY3RTZWNvbmQoc2Vjb25kOiB7IGluZGV4OiBudW1iZXI7IGRpc2FibGVkOiBib29sZWFuIH0pOiB2b2lkIHtcclxuICAgIHRoaXMudGltZS5zZXRTZWNvbmRzKHNlY29uZC5pbmRleCwgc2Vjb25kLmRpc2FibGVkKTtcclxuICAgIHRoaXMuc2Nyb2xsVG9TZWxlY3RlZCh0aGlzLnNlY29uZExpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHNlY29uZC5pbmRleCwgMTIwLCAnc2Vjb25kJyk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3QxMkhvdXJzKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMudGltZS5zZWxlY3RlZDEySG91cnMgPSB2YWx1ZTtcclxuICAgIGlmICh0aGlzLl9kaXNhYmxlZEhvdXJzKSB7XHJcbiAgICAgIHRoaXMuYnVpbGRIb3VycygpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuX2Rpc2FibGVkTWludXRlcykge1xyXG4gICAgICB0aGlzLmJ1aWxkTWludXRlcygpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuX2Rpc2FibGVkU2Vjb25kcykge1xyXG4gICAgICB0aGlzLmJ1aWxkU2Vjb25kcygpO1xyXG4gICAgfVxyXG4gICAgLyp0aGlzLnNjcm9sbFRvU2VsZWN0ZWQodGhpcy51c2UxMkhvdXJzTGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgdmFsdWUuaW5kZXgsIDEyMCwgJzEyLWhvdXInKTsqL1xyXG4gIH1cclxuXHJcbiAgc2Nyb2xsVG9TZWxlY3RlZChpbnN0YW5jZTogSFRNTEVsZW1lbnQsIGluZGV4OiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIgPSAwLCB1bml0OiBOelRpbWVQaWNrZXJVbml0KTogdm9pZCB7XHJcbiAgICBjb25zdCB0cmFuc0luZGV4ID0gdGhpcy50cmFuc2xhdGVJbmRleChpbmRleCwgdW5pdCk7XHJcbiAgICBjb25zdCBjdXJyZW50T3B0aW9uID0gKGluc3RhbmNlLmNoaWxkcmVuWzBdLmNoaWxkcmVuW3RyYW5zSW5kZXhdIHx8XHJcbiAgICAgIGluc3RhbmNlLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdKSBhcyBIVE1MRWxlbWVudDtcclxuICAgIHRoaXMuc2Nyb2xsVG8oaW5zdGFuY2UsIGN1cnJlbnRPcHRpb24ub2Zmc2V0VG9wLCBkdXJhdGlvbik7XHJcbiAgfVxyXG5cclxuICB0cmFuc2xhdGVJbmRleChpbmRleDogbnVtYmVyLCB1bml0OiBOelRpbWVQaWNrZXJVbml0KTogbnVtYmVyIHtcclxuICAgIGlmICh1bml0ID09PSAnaG91cicpIHtcclxuICAgICAgY29uc3QgZGlzYWJsZWRIb3VycyA9IHRoaXMubnpEaXNhYmxlZEhvdXJzICYmIHRoaXMubnpEaXNhYmxlZEhvdXJzKCk7XHJcbiAgICAgIHJldHVybiB0aGlzLmNhbGNJbmRleChkaXNhYmxlZEhvdXJzLCB0aGlzLmhvdXJSYW5nZS5tYXAoaXRlbSA9PiBpdGVtLmluZGV4KS5pbmRleE9mKGluZGV4KSk7XHJcbiAgICB9IGVsc2UgaWYgKHVuaXQgPT09ICdtaW51dGUnKSB7XHJcbiAgICAgIGNvbnN0IGRpc2FibGVkTWludXRlcyA9IHRoaXMubnpEaXNhYmxlZE1pbnV0ZXMgJiYgdGhpcy5uekRpc2FibGVkTWludXRlcyh0aGlzLnRpbWUuaG91cnMhKTtcclxuICAgICAgcmV0dXJuIHRoaXMuY2FsY0luZGV4KGRpc2FibGVkTWludXRlcywgdGhpcy5taW51dGVSYW5nZS5tYXAoaXRlbSA9PiBpdGVtLmluZGV4KS5pbmRleE9mKGluZGV4KSk7XHJcbiAgICB9IGVsc2UgaWYgKHVuaXQgPT09ICdzZWNvbmQnKSB7XHJcbiAgICAgIC8vIHNlY29uZFxyXG4gICAgICBjb25zdCBkaXNhYmxlZFNlY29uZHMgPSB0aGlzLm56RGlzYWJsZWRTZWNvbmRzICYmIHRoaXMubnpEaXNhYmxlZFNlY29uZHModGhpcy50aW1lLmhvdXJzISwgdGhpcy50aW1lLm1pbnV0ZXMhKTtcclxuICAgICAgcmV0dXJuIHRoaXMuY2FsY0luZGV4KGRpc2FibGVkU2Vjb25kcywgdGhpcy5zZWNvbmRSYW5nZS5tYXAoaXRlbSA9PiBpdGVtLmluZGV4KS5pbmRleE9mKGluZGV4KSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyAxMi1ob3VyXHJcbiAgICAgIHJldHVybiB0aGlzLmNhbGNJbmRleChbXSwgdGhpcy51c2UxMkhvdXJzUmFuZ2UubWFwKGl0ZW0gPT4gaXRlbS5pbmRleCkuaW5kZXhPZihpbmRleCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2Nyb2xsVG8oZWxlbWVudDogSFRNTEVsZW1lbnQsIHRvOiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmIChkdXJhdGlvbiA8PSAwKSB7XHJcbiAgICAgIGVsZW1lbnQuc2Nyb2xsVG9wID0gdG87XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGRpZmZlcmVuY2UgPSB0byAtIGVsZW1lbnQuc2Nyb2xsVG9wO1xyXG4gICAgY29uc3QgcGVyVGljayA9IChkaWZmZXJlbmNlIC8gZHVyYXRpb24pICogMTA7XHJcblxyXG4gICAgcmVxQW5pbUZyYW1lKCgpID0+IHtcclxuICAgICAgZWxlbWVudC5zY3JvbGxUb3AgPSBlbGVtZW50LnNjcm9sbFRvcCArIHBlclRpY2s7XHJcbiAgICAgIGlmIChlbGVtZW50LnNjcm9sbFRvcCA9PT0gdG8pIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zY3JvbGxUbyhlbGVtZW50LCB0bywgZHVyYXRpb24gLSAxMCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNhbGNJbmRleChhcnJheTogbnVtYmVyW10sIGluZGV4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgaWYgKGFycmF5ICYmIGFycmF5Lmxlbmd0aCAmJiB0aGlzLm56SGlkZURpc2FibGVkT3B0aW9ucykge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIGluZGV4IC1cclxuICAgICAgICBhcnJheS5yZWR1Y2UoKHByZSwgdmFsdWUpID0+IHtcclxuICAgICAgICAgIHJldHVybiBwcmUgKyAodmFsdWUgPCBpbmRleCA/IDEgOiAwKTtcclxuICAgICAgICB9LCAwKVxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGluZGV4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGNoYW5nZWQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5vbkNoYW5nZSkge1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudGltZS52YWx1ZSEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHRvdWNoZWQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5vblRvdWNoKSB7XHJcbiAgICAgIHRoaXMub25Ub3VjaCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRDbGFzc01hcCgpOiB2b2lkIHtcclxuICAgIHRoaXMudXBkYXRlQ2xzLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwge1xyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9YF06IHRydWUsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tY29sdW1uLSR7dGhpcy5lbmFibGVkQ29sdW1uc31gXTogdGhpcy5uekluRGF0ZVBpY2tlciA/IGZhbHNlIDogdHJ1ZSxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1uYXJyb3dgXTogdGhpcy5lbmFibGVkQ29sdW1ucyA8IDMsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tcGxhY2VtZW50LWJvdHRvbUxlZnRgXTogdGhpcy5uekluRGF0ZVBpY2tlciA/IGZhbHNlIDogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpc1NlbGVjdGVkSG91cihob3VyOiB7IGluZGV4OiBudW1iZXI7IGRpc2FibGVkOiBib29sZWFuIH0pOiBib29sZWFuIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIGhvdXIuaW5kZXggPT09IHRoaXMudGltZS52aWV3SG91cnMgfHxcclxuICAgICAgKCFpc05vdE5pbCh0aGlzLnRpbWUudmlld0hvdXJzKSAmJiBob3VyLmluZGV4ID09PSB0aGlzLnRpbWUuZGVmYXVsdFZpZXdIb3VycylcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBpc1NlbGVjdGVkTWludXRlKG1pbnV0ZTogeyBpbmRleDogbnVtYmVyOyBkaXNhYmxlZDogYm9vbGVhbiB9KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBtaW51dGUuaW5kZXggPT09IHRoaXMudGltZS5taW51dGVzIHx8ICghaXNOb3ROaWwodGhpcy50aW1lLm1pbnV0ZXMpICYmIG1pbnV0ZS5pbmRleCA9PT0gdGhpcy50aW1lLmRlZmF1bHRNaW51dGVzKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGlzU2VsZWN0ZWRTZWNvbmQoc2Vjb25kOiB7IGluZGV4OiBudW1iZXI7IGRpc2FibGVkOiBib29sZWFuIH0pOiBib29sZWFuIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHNlY29uZC5pbmRleCA9PT0gdGhpcy50aW1lLnNlY29uZHMgfHwgKCFpc05vdE5pbCh0aGlzLnRpbWUuc2Vjb25kcykgJiYgc2Vjb25kLmluZGV4ID09PSB0aGlzLnRpbWUuZGVmYXVsdFNlY29uZHMpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgaXNTZWxlY3RlZDEySG91cnModmFsdWU6IHsgaW5kZXg6IG51bWJlcjsgdmFsdWU6IHN0cmluZyB9KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB2YWx1ZS52YWx1ZS50b1VwcGVyQ2FzZSgpID09PSB0aGlzLnRpbWUuc2VsZWN0ZWQxMkhvdXJzIHx8XHJcbiAgICAgICghaXNOb3ROaWwodGhpcy50aW1lLnNlbGVjdGVkMTJIb3VycykgJiYgdmFsdWUudmFsdWUudG9VcHBlckNhc2UoKSA9PT0gdGhpcy50aW1lLmRlZmF1bHQxMkhvdXJzKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGluaXRQb3NpdGlvbigpOiB2b2lkIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5ob3VyRW5hYmxlZCAmJiB0aGlzLmhvdXJMaXN0RWxlbWVudCkge1xyXG4gICAgICAgIGlmIChpc05vdE5pbCh0aGlzLnRpbWUudmlld0hvdXJzKSkge1xyXG4gICAgICAgICAgdGhpcy5zY3JvbGxUb1NlbGVjdGVkKHRoaXMuaG91ckxpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMudGltZS52aWV3SG91cnMhLCAwLCAnaG91cicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnNjcm9sbFRvU2VsZWN0ZWQodGhpcy5ob3VyTGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgdGhpcy50aW1lLmRlZmF1bHRWaWV3SG91cnMsIDAsICdob3VyJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLm1pbnV0ZUVuYWJsZWQgJiYgdGhpcy5taW51dGVMaXN0RWxlbWVudCkge1xyXG4gICAgICAgIGlmIChpc05vdE5pbCh0aGlzLnRpbWUubWludXRlcykpIHtcclxuICAgICAgICAgIHRoaXMuc2Nyb2xsVG9TZWxlY3RlZCh0aGlzLm1pbnV0ZUxpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMudGltZS5taW51dGVzISwgMCwgJ21pbnV0ZScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnNjcm9sbFRvU2VsZWN0ZWQodGhpcy5taW51dGVMaXN0RWxlbWVudC5uYXRpdmVFbGVtZW50LCB0aGlzLnRpbWUuZGVmYXVsdE1pbnV0ZXMsIDAsICdtaW51dGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuc2Vjb25kRW5hYmxlZCAmJiB0aGlzLnNlY29uZExpc3RFbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKGlzTm90TmlsKHRoaXMudGltZS5zZWNvbmRzKSkge1xyXG4gICAgICAgICAgdGhpcy5zY3JvbGxUb1NlbGVjdGVkKHRoaXMuc2Vjb25kTGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgdGhpcy50aW1lLnNlY29uZHMhLCAwLCAnc2Vjb25kJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2Nyb2xsVG9TZWxlY3RlZCh0aGlzLnNlY29uZExpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMudGltZS5kZWZhdWx0U2Vjb25kcywgMCwgJ3NlY29uZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5uelVzZTEySG91cnMgJiYgdGhpcy51c2UxMkhvdXJzTGlzdEVsZW1lbnQpIHtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZEhvdXJzID0gaXNOb3ROaWwodGhpcy50aW1lLnNlbGVjdGVkMTJIb3VycylcclxuICAgICAgICAgID8gdGhpcy50aW1lLnNlbGVjdGVkMTJIb3Vyc1xyXG4gICAgICAgICAgOiB0aGlzLnRpbWUuZGVmYXVsdDEySG91cnM7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBzZWxlY3RlZEhvdXJzID09PSAnQU0nID8gMCA6IDE7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxUb1NlbGVjdGVkKHRoaXMudXNlMTJIb3Vyc0xpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIGluZGV4LCAwLCAnMTItaG91cicpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSB1cGRhdGVDbHM6IFVwZGF0ZUNscywgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56SW5EYXRlUGlja2VyKSB7XHJcbiAgICAgIHRoaXMucHJlZml4Q2xzID0gJ2FudC1jYWxlbmRhci10aW1lLXBpY2tlcic7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy50aW1lLmNoYW5nZXMucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNoYW5nZWQoKTtcclxuICAgICAgdGhpcy50b3VjaGVkKCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuYnVpbGRUaW1lcygpO1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gICAgdGhpcy5ob3VycyA9ICgoKHRoaXMudGltZS5ob3VycyA/IHRoaXMudGltZS5ob3VycyA6IHRoaXMudGltZS5kZWZhdWx0SG91cnMpICsgMTEpICUgMTIgKyAxKTtcclxuICAgIHRoaXMuc2Vjb25kcyA9IHRoaXMudGltZS5zZWNvbmRzID8gdGhpcy50aW1lLnNlY29uZHMgOnRoaXMudGltZS5kZWZhdWx0U2Vjb25kcztcclxuICAgIHRoaXMubWludXRlcyA9IHRoaXMudGltZS5taW51dGVzID8gdGhpcy50aW1lLm1pbnV0ZXMgOiB0aGlzLnRpbWUuZGVmYXVsdE1pbnV0ZXM7XHJcbiAgICB0aGlzLnJhbmdlID0gdGhpcy50aW1lLnNlbGVjdGVkMTJIb3VycyA/IHRoaXMudGltZS5zZWxlY3RlZDEySG91cnMgOiB0aGlzLnRpbWUuZGVmYXVsdDEySG91cnMudG9Mb3dlckNhc2UoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy51bnN1YnNjcmliZSQubmV4dCgpO1xyXG4gICAgdGhpcy51bnN1YnNjcmliZSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGNvbnN0IHsgbnpVc2UxMkhvdXJzIH0gPSBjaGFuZ2VzO1xyXG4gICAgaWYgKG56VXNlMTJIb3VycyAmJiAhbnpVc2UxMkhvdXJzLnByZXZpb3VzVmFsdWUgJiYgbnpVc2UxMkhvdXJzLmN1cnJlbnRWYWx1ZSkge1xyXG4gICAgICB0aGlzLmJ1aWxkMTJIb3VycygpO1xyXG4gICAgICB0aGlzLmVuYWJsZWRDb2x1bW5zKys7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBEYXRlKTogdm9pZCB7XHJcbiAgICB0aGlzLnRpbWUuc2V0VmFsdWUodmFsdWUsIHRoaXMubnpVc2UxMkhvdXJzKTtcclxuICAgIHRoaXMuYnVpbGRUaW1lcygpO1xyXG5cclxuICAgIC8vIE1hcmsgdGhpcyBjb21wb25lbnQgdG8gYmUgY2hlY2tlZCBtYW51YWxseSB3aXRoIGludGVybmFsIHByb3BlcnRpZXMgY2hhbmdpbmcgKHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTA4MTYpXHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogRGF0ZSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgLyogQ3VzdG9taXplZCBjb2RlICovXHJcbiAgdXBkYXRlVGltZSgkZXZlbnQsIHR5cGU6IHN0cmluZykge1xyXG4gICAgaWYgKHR5cGUgPT09ICdob3VycycpIHtcclxuICAgICAgdGhpcy50aW1lLnNldEhvdXJzKCRldmVudCwgZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGUgPT09ICdtaW51dGVzJykge1xyXG4gICAgICB0aGlzLnRpbWUuc2V0TWludXRlcygkZXZlbnQsIGZhbHNlKTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlID09PSAnc2Vjb25kcycpIHtcclxuICAgICAgdGhpcy50aW1lLnNldFNlY29uZHMoJGV2ZW50LCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=