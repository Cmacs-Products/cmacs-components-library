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
function makeRange(length, step, start) {
    if (step === void 0) { step = 1; }
    if (start === void 0) { start = 0; }
    return new Array(Math.ceil(length / step)).fill(0).map((/**
     * @param {?} _
     * @param {?} i
     * @return {?}
     */
    function (_, i) { return (i + start) * step; }));
}
var CmacsDatetimePickerPanelComponent = /** @class */ (function () {
    function CmacsDatetimePickerPanelComponent(element, updateCls, cdr) {
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
    Object.defineProperty(CmacsDatetimePickerPanelComponent.prototype, "nzAllowEmpty", {
        get: /**
         * @return {?}
         */
        function () {
            return this._allowEmpty;
        },
        // tslint:disable-next-line: member-ordering
        set: 
        // tslint:disable-next-line: member-ordering
        /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._allowEmpty = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsDatetimePickerPanelComponent.prototype, "opened", {
        get: /**
         * @return {?}
         */
        function () {
            return this._opened;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._opened = value;
            if (this.opened) {
                this.initPosition();
                this.selectInputRange();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsDatetimePickerPanelComponent.prototype, "nzDefaultOpenValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this._defaultOpenValue;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._defaultOpenValue = value;
                this.time.setDefaultOpenValue(this.nzDefaultOpenValue);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsDatetimePickerPanelComponent.prototype, "nzDisabledHours", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabledHours;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabledHours = value;
            if (this._disabledHours) {
                this.buildHours();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsDatetimePickerPanelComponent.prototype, "nzDisabledMinutes", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabledMinutes;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._disabledMinutes = value;
                this.buildMinutes();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsDatetimePickerPanelComponent.prototype, "nzDisabledSeconds", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabledSeconds;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._disabledSeconds = value;
                this.buildSeconds();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsDatetimePickerPanelComponent.prototype, "format", {
        get: /**
         * @return {?}
         */
        function () {
            return this._format;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._format = value;
                this.enabledColumns = 0;
                /** @type {?} */
                var charSet = new Set(value);
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsDatetimePickerPanelComponent.prototype, "nzHourStep", {
        get: /**
         * @return {?}
         */
        function () {
            return this._nzHourStep;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._nzHourStep = value;
                this.buildHours();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsDatetimePickerPanelComponent.prototype, "nzMinuteStep", {
        get: /**
         * @return {?}
         */
        function () {
            return this._nzMinuteStep;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._nzMinuteStep = value;
                this.buildMinutes();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CmacsDatetimePickerPanelComponent.prototype, "nzSecondStep", {
        get: /**
         * @return {?}
         */
        function () {
            return this._nzSecondStep;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._nzSecondStep = value;
                this.buildSeconds();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CmacsDatetimePickerPanelComponent.prototype.selectInputRange = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (_this.nzTimeValueAccessorDirective) {
                _this.nzTimeValueAccessorDirective.setRange();
            }
        }));
    };
    /**
     * @return {?}
     */
    CmacsDatetimePickerPanelComponent.prototype.buildHours = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var hourRanges = 24;
        /** @type {?} */
        var disabledHours = this.nzDisabledHours && this.nzDisabledHours();
        /** @type {?} */
        var startIndex = 0;
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
                    function (i) { return i >= 12; })).map((/**
                     * @param {?} i
                     * @return {?}
                     */
                    function (i) { return (i > 12 ? i - 12 : i); }));
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
                    function (i) { return i < 12 || i === 24; })).map((/**
                     * @param {?} i
                     * @return {?}
                     */
                    function (i) { return (i === 24 || i === 0 ? 12 : i); }));
                }
            }
            startIndex = 1;
        }
        this.hourRange = makeRange(hourRanges, this.nzHourStep, startIndex).map((/**
         * @param {?} r
         * @return {?}
         */
        function (r) {
            return {
                index: r,
                disabled: _this.nzDisabledHours && disabledHours.indexOf(r) !== -1
            };
        }));
        if (this.nzUse12Hours && this.hourRange[this.hourRange.length - 1].index === 12) {
            /** @type {?} */
            var temp = tslib_1.__spread(this.hourRange);
            temp.unshift(temp[temp.length - 1]);
            temp.splice(temp.length - 1, 1);
            this.hourRange = temp;
        }
    };
    /**
     * @return {?}
     */
    CmacsDatetimePickerPanelComponent.prototype.buildMinutes = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.minuteRange = makeRange(60, this.nzMinuteStep).map((/**
         * @param {?} r
         * @return {?}
         */
        function (r) {
            return {
                index: r,
                disabled: _this.nzDisabledMinutes && _this.nzDisabledMinutes((/** @type {?} */ (_this.time.hours))).indexOf(r) !== -1
            };
        }));
    };
    /**
     * @return {?}
     */
    CmacsDatetimePickerPanelComponent.prototype.buildSeconds = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.secondRange = makeRange(60, this.nzSecondStep).map((/**
         * @param {?} r
         * @return {?}
         */
        function (r) {
            return {
                index: r,
                disabled: _this.nzDisabledSeconds && _this.nzDisabledSeconds((/** @type {?} */ (_this.time.hours)), (/** @type {?} */ (_this.time.minutes))).indexOf(r) !== -1
            };
        }));
    };
    /**
     * @return {?}
     */
    CmacsDatetimePickerPanelComponent.prototype.build12Hours = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isUpperForamt = this._format.includes('A');
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
    };
    /**
     * @return {?}
     */
    CmacsDatetimePickerPanelComponent.prototype.buildTimes = /**
     * @return {?}
     */
    function () {
        this.buildHours();
        this.buildMinutes();
        this.buildSeconds();
        this.build12Hours();
    };
    /**
     * @param {?} hour
     * @return {?}
     */
    CmacsDatetimePickerPanelComponent.prototype.selectHour = /**
     * @param {?} hour
     * @return {?}
     */
    function (hour) {
        this.time.setHours(hour.index, hour.disabled);
        this.scrollToSelected(this.hourListElement.nativeElement, hour.index, 120, 'hour');
        if (this._disabledMinutes) {
            this.buildMinutes();
        }
        if (this._disabledSeconds || this._disabledMinutes) {
            this.buildSeconds();
        }
    };
    /**
     * @param {?} minute
     * @return {?}
     */
    CmacsDatetimePickerPanelComponent.prototype.selectMinute = /**
     * @param {?} minute
     * @return {?}
     */
    function (minute) {
        this.time.setMinutes(minute.index, minute.disabled);
        this.scrollToSelected(this.minuteListElement.nativeElement, minute.index, 120, 'minute');
        if (this._disabledSeconds) {
            this.buildSeconds();
        }
    };
    /**
     * @param {?} second
     * @return {?}
     */
    CmacsDatetimePickerPanelComponent.prototype.selectSecond = /**
     * @param {?} second
     * @return {?}
     */
    function (second) {
        this.time.setSeconds(second.index, second.disabled);
        this.scrollToSelected(this.secondListElement.nativeElement, second.index, 120, 'second');
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsDatetimePickerPanelComponent.prototype.select12Hours = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
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
    };
    /**
     * @param {?} instance
     * @param {?} index
     * @param {?=} duration
     * @param {?=} unit
     * @return {?}
     */
    CmacsDatetimePickerPanelComponent.prototype.scrollToSelected = /**
     * @param {?} instance
     * @param {?} index
     * @param {?=} duration
     * @param {?=} unit
     * @return {?}
     */
    function (instance, index, duration, unit) {
        if (duration === void 0) { duration = 0; }
        /** @type {?} */
        var transIndex = this.translateIndex(index, unit);
        /** @type {?} */
        var currentOption = (/** @type {?} */ ((instance.children[0].children[transIndex] ||
            instance.children[0].children[0])));
        this.scrollTo(instance, currentOption.offsetTop, duration);
    };
    /**
     * @param {?} index
     * @param {?} unit
     * @return {?}
     */
    CmacsDatetimePickerPanelComponent.prototype.translateIndex = /**
     * @param {?} index
     * @param {?} unit
     * @return {?}
     */
    function (index, unit) {
        if (unit === 'hour') {
            /** @type {?} */
            var disabledHours = this.nzDisabledHours && this.nzDisabledHours();
            return this.calcIndex(disabledHours, this.hourRange.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.index; })).indexOf(index));
        }
        else if (unit === 'minute') {
            /** @type {?} */
            var disabledMinutes = this.nzDisabledMinutes && this.nzDisabledMinutes((/** @type {?} */ (this.time.hours)));
            return this.calcIndex(disabledMinutes, this.minuteRange.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.index; })).indexOf(index));
        }
        else if (unit === 'second') {
            // second
            /** @type {?} */
            var disabledSeconds = this.nzDisabledSeconds && this.nzDisabledSeconds((/** @type {?} */ (this.time.hours)), (/** @type {?} */ (this.time.minutes)));
            return this.calcIndex(disabledSeconds, this.secondRange.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.index; })).indexOf(index));
        }
        else {
            // 12-hour
            return this.calcIndex([], this.use12HoursRange.map((/**
             * @param {?} item
             * @return {?}
             */
            function (item) { return item.index; })).indexOf(index));
        }
    };
    /**
     * @param {?} element
     * @param {?} to
     * @param {?} duration
     * @return {?}
     */
    CmacsDatetimePickerPanelComponent.prototype.scrollTo = /**
     * @param {?} element
     * @param {?} to
     * @param {?} duration
     * @return {?}
     */
    function (element, to, duration) {
        var _this = this;
        if (duration <= 0) {
            element.scrollTop = to;
            return;
        }
        /** @type {?} */
        var difference = to - element.scrollTop;
        /** @type {?} */
        var perTick = (difference / duration) * 10;
        reqAnimFrame((/**
         * @return {?}
         */
        function () {
            element.scrollTop = element.scrollTop + perTick;
            if (element.scrollTop === to) {
                return;
            }
            _this.scrollTo(element, to, duration - 10);
        }));
    };
    /**
     * @param {?} array
     * @param {?} index
     * @return {?}
     */
    CmacsDatetimePickerPanelComponent.prototype.calcIndex = /**
     * @param {?} array
     * @param {?} index
     * @return {?}
     */
    function (array, index) {
        if (array && array.length && this.nzHideDisabledOptions) {
            return (index -
                array.reduce((/**
                 * @param {?} pre
                 * @param {?} value
                 * @return {?}
                 */
                function (pre, value) {
                    return pre + (value < index ? 1 : 0);
                }), 0));
        }
        else {
            return index;
        }
    };
    /**
     * @protected
     * @return {?}
     */
    CmacsDatetimePickerPanelComponent.prototype.changed = /**
     * @protected
     * @return {?}
     */
    function () {
        if (this.onChange) {
            this.onChange((/** @type {?} */ (this.time.value)));
        }
    };
    /**
     * @protected
     * @return {?}
     */
    CmacsDatetimePickerPanelComponent.prototype.touched = /**
     * @protected
     * @return {?}
     */
    function () {
        if (this.onTouch) {
            this.onTouch();
        }
    };
    /**
     * @private
     * @return {?}
     */
    CmacsDatetimePickerPanelComponent.prototype.setClassMap = /**
     * @private
     * @return {?}
     */
    function () {
        var _a;
        this.updateCls.updateHostClass(this.element.nativeElement, (_a = {},
            _a["" + this.prefixCls] = true,
            _a[this.prefixCls + "-column-" + this.enabledColumns] = this.nzInDatePicker ? false : true,
            _a[this.prefixCls + "-narrow"] = this.enabledColumns < 3,
            _a[this.prefixCls + "-placement-bottomLeft"] = this.nzInDatePicker ? false : true,
            _a));
    };
    /**
     * @param {?} hour
     * @return {?}
     */
    CmacsDatetimePickerPanelComponent.prototype.isSelectedHour = /**
     * @param {?} hour
     * @return {?}
     */
    function (hour) {
        return (hour.index === this.time.viewHours ||
            (!isNotNil(this.time.viewHours) && hour.index === this.time.defaultViewHours));
    };
    /**
     * @param {?} minute
     * @return {?}
     */
    CmacsDatetimePickerPanelComponent.prototype.isSelectedMinute = /**
     * @param {?} minute
     * @return {?}
     */
    function (minute) {
        return (minute.index === this.time.minutes || (!isNotNil(this.time.minutes) && minute.index === this.time.defaultMinutes));
    };
    /**
     * @param {?} second
     * @return {?}
     */
    CmacsDatetimePickerPanelComponent.prototype.isSelectedSecond = /**
     * @param {?} second
     * @return {?}
     */
    function (second) {
        return (second.index === this.time.seconds || (!isNotNil(this.time.seconds) && second.index === this.time.defaultSeconds));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsDatetimePickerPanelComponent.prototype.isSelected12Hours = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return (value.value.toUpperCase() === this.time.selected12Hours ||
            (!isNotNil(this.time.selected12Hours) && value.value.toUpperCase() === this.time.default12Hours));
    };
    /**
     * @return {?}
     */
    CmacsDatetimePickerPanelComponent.prototype.initPosition = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (_this.hourEnabled && _this.hourListElement) {
                if (isNotNil(_this.time.viewHours)) {
                    _this.scrollToSelected(_this.hourListElement.nativeElement, (/** @type {?} */ (_this.time.viewHours)), 0, 'hour');
                }
                else {
                    _this.scrollToSelected(_this.hourListElement.nativeElement, _this.time.defaultViewHours, 0, 'hour');
                }
            }
            if (_this.minuteEnabled && _this.minuteListElement) {
                if (isNotNil(_this.time.minutes)) {
                    _this.scrollToSelected(_this.minuteListElement.nativeElement, (/** @type {?} */ (_this.time.minutes)), 0, 'minute');
                }
                else {
                    _this.scrollToSelected(_this.minuteListElement.nativeElement, _this.time.defaultMinutes, 0, 'minute');
                }
            }
            if (_this.secondEnabled && _this.secondListElement) {
                if (isNotNil(_this.time.seconds)) {
                    _this.scrollToSelected(_this.secondListElement.nativeElement, (/** @type {?} */ (_this.time.seconds)), 0, 'second');
                }
                else {
                    _this.scrollToSelected(_this.secondListElement.nativeElement, _this.time.defaultSeconds, 0, 'second');
                }
            }
            if (_this.nzUse12Hours && _this.use12HoursListElement) {
                /** @type {?} */
                var selectedHours = isNotNil(_this.time.selected12Hours)
                    ? _this.time.selected12Hours
                    : _this.time.default12Hours;
                /** @type {?} */
                var index = selectedHours === 'AM' ? 0 : 1;
                _this.scrollToSelected(_this.use12HoursListElement.nativeElement, index, 0, '12-hour');
            }
        }));
    };
    /**
     * @return {?}
     */
    CmacsDatetimePickerPanelComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.nzInDatePicker) {
            this.prefixCls = 'ant-calendar-time-picker';
        }
        this.time.changes.pipe(takeUntil(this.unsubscribe$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.changed();
            _this.touched();
        }));
        this.buildTimes();
        this.setClassMap();
        this.hours = (((this.time.hours ? this.time.hours : this.time.defaultHours) + 11) % 12 + 1);
        this.seconds = this.time.seconds ? this.time.seconds : this.time.defaultSeconds;
        this.minutes = this.time.minutes ? this.time.minutes : this.time.defaultMinutes;
        this.range = this.time.selected12Hours ? this.time.selected12Hours : this.time.default12Hours.toLowerCase();
    };
    /**
     * @return {?}
     */
    CmacsDatetimePickerPanelComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CmacsDatetimePickerPanelComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzUse12Hours = changes.nzUse12Hours;
        if (nzUse12Hours && !nzUse12Hours.previousValue && nzUse12Hours.currentValue) {
            this.build12Hours();
            this.enabledColumns++;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CmacsDatetimePickerPanelComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.time.setValue(value, this.nzUse12Hours);
        this.buildTimes();
        // Mark this component to be checked manually with internal properties changing (see: https://github.com/angular/angular/issues/10816)
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CmacsDatetimePickerPanelComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CmacsDatetimePickerPanelComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouch = fn;
    };
    /* Customized code */
    /* Customized code */
    /**
     * @param {?} $event
     * @param {?} type
     * @return {?}
     */
    CmacsDatetimePickerPanelComponent.prototype.updateTime = /* Customized code */
    /**
     * @param {?} $event
     * @param {?} type
     * @return {?}
     */
    function ($event, type) {
        if (type === 'hours') {
            this.time.setHours($event, false);
        }
        if (type === 'minutes') {
            this.time.setMinutes($event, false);
        }
        if (type === 'seconds') {
            this.time.setSeconds($event, false);
        }
    };
    CmacsDatetimePickerPanelComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    selector: 'cmacs-datetime-picker-panel',
                    exportAs: 'cmacsDateTimePickerPanel',
                    template: "<div class=\"{{ nzInDatePicker ? prefixCls + '-panel' : '' }}\">\r\n  <div\r\n    class=\"{{ prefixCls }}-inner {{ nzInDatePicker ? prefixCls + '-column-' + enabledColumns : '' }}\"\r\n    [style.width.px]=\"nzInDatePicker ? null : enabledColumns * 56\">\r\n    <div class=\"{{ prefixCls }}-input-wrap\">\r\n      <input\r\n        type=\"text\"\r\n        class=\"{{ prefixCls }}-input\"\r\n        [placeholder]=\"nzPlaceHolder\"\r\n        [nzTime]=\"format\"\r\n        [(ngModel)]=\"time.value\"\r\n        (blur)=\"time.changed()\">\r\n    </div>\r\n    <div>\r\n      <cmacs-input-number style=\"margin-right: 5px\" class=\"cmacs-datetime-picker-input-number\" [min]=\"1\" [max]=\"12\" [(ngModel)]=\"hours\"\r\n                          (ngModelChange)=\"updateTime($event, 'hours')\"></cmacs-input-number>\r\n      <div class=\"cmacs-datetime-dividers\"><span>:</span></div>\r\n      <cmacs-input-number style=\"margin-left: 5px\" class=\"cmacs-datetime-picker-input-number\" [min]=\"0\" [max]=\"59\" [(ngModel)]=\"minutes\"\r\n                          (ngModelChange)=\"updateTime($event, 'minutes')\"></cmacs-input-number>\r\n      <!--<cmacs-input-number [min]=\"0\" [max]=\"59\" [(ngModel)]=\"seconds\"\r\n                          (ngModelChange)=\"updateTime($event, 'seconds')\"></cmacs-input-number>-->\r\n      <cmacs-select style=\"margin: 11px 11px 11px 0\" [(ngModel)]=\"range\" (ngModelChange)=\"select12Hours($event)\">\r\n        <cmacs-option class=\"{{ isSelected12Hours(range) ? prefixCls + '-select-option-selected' : '' }}\"\r\n                    *ngFor=\"let range of use12HoursRange\" [value]=\"range.value\" [label]=\"range.value | uppercase\"></cmacs-option>\r\n      </cmacs-select>\r\n    </div>\r\n    <!--<div class=\"{{ prefixCls }}-combobox\">\r\n      <div\r\n        *ngIf=\"hourEnabled\"\r\n        #hourListElement\r\n        class=\"{{ prefixCls }}-select\">\r\n        <ul>\r\n          <ng-container *ngFor=\"let hour of hourRange\">\r\n            <li\r\n              *ngIf=\"!(nzHideDisabledOptions && hour.disabled)\"\r\n              (click)=\"selectHour(hour)\"\r\n              class=\"\r\n                {{ isSelectedHour(hour) ? prefixCls + '-select-option-selected' : '' }}\r\n                {{ hour.disabled ? prefixCls + '-select-option-disabled' : '' }}\r\n              \"\r\n            >\r\n              {{ hour.index | number:'2.0-0' }}\r\n            </li>\r\n          </ng-container>\r\n        </ul>\r\n      </div>\r\n      <div\r\n        *ngIf=\"minuteEnabled\"\r\n        #minuteListElement\r\n        class=\"{{ prefixCls }}-select\">\r\n        <ul>\r\n          <ng-container *ngFor=\"let minute of minuteRange\">\r\n            <li\r\n              *ngIf=\"!(nzHideDisabledOptions && minute.disabled)\"\r\n              (click)=\"selectMinute(minute)\"\r\n              class=\"\r\n                {{ isSelectedMinute(minute) ? prefixCls + '-select-option-selected' : '' }}\r\n                {{ minute.disabled ? prefixCls + '-select-option-disabled' : '' }}\r\n              \"\r\n            >\r\n              {{ minute.index | number:'2.0-0' }}\r\n            </li>\r\n          </ng-container>\r\n        </ul>\r\n      </div>\r\n      <div\r\n        *ngIf=\"secondEnabled\"\r\n        #secondListElement\r\n        class=\"{{ prefixCls }}-select\">\r\n        <ul>\r\n          <ng-container *ngFor=\"let second of secondRange\">\r\n            <li\r\n              *ngIf=\"!(nzHideDisabledOptions && second.disabled)\"\r\n              (click)=\"selectSecond(second)\"\r\n              class=\"\r\n                {{ isSelectedSecond(second) ? prefixCls + '-select-option-selected' : '' }}\r\n                {{ second.disabled ? prefixCls + '-select-option-disabled' : '' }}\r\n              \"\r\n            >\r\n              {{ second.index | number:'2.0-0' }}\r\n            </li>\r\n          </ng-container>\r\n        </ul>\r\n      </div>\r\n      <div\r\n        *ngIf=\"nzUse12Hours\"\r\n        #use12HoursListElement\r\n        class=\"{{ prefixCls }}-select\">\r\n        <ul>\r\n          <ng-container *ngFor=\"let range of use12HoursRange \">\r\n            <li\r\n              *ngIf=\"!nzHideDisabledOptions\"\r\n              (click)=\"select12Hours(range)\"\r\n              class=\"\r\n                {{ isSelected12Hours(range) ? prefixCls + '-select-option-selected' : '' }}\r\n              \"\r\n            >\r\n              {{ range.value }}\r\n            </li>\r\n          </ng-container>\r\n        </ul>\r\n      </div>\r\n    </div>-->\r\n    <div class=\"{{ prefixCls }}-addon\" *ngIf=\"nzAddOn\">\r\n      <ng-template [ngTemplateOutlet]=\"nzAddOn\"></ng-template>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                    providers: [UpdateCls, { provide: NG_VALUE_ACCESSOR, useExisting: CmacsDatetimePickerPanelComponent, multi: true }],
                    styles: [".cmacs-datetime-picker-input-number{width:55px;height:30px!important;margin:11px}cmacs-select .ant-select-selection{height:30px}.cmacs-datetime-dividers{display:inline-block;position:relative;top:-3px}.ant-time-picker-panel-inner{width:224px!important}"]
                }] }
    ];
    /** @nocollapse */
    CmacsDatetimePickerPanelComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: UpdateCls },
        { type: ChangeDetectorRef }
    ]; };
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
    return CmacsDatetimePickerPanelComponent;
}());
export { CmacsDatetimePickerPanelComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZGF0ZXRpbWUtcGlja2VyLXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtZGF0ZXRpbWUtcGlja2VyL2NtYWNzLWRhdGV0aW1lLXBpY2tlci1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsS0FBSyxFQUtMLFdBQVcsRUFDWCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsd0JBQXdCLElBQUksU0FBUyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFakgsT0FBTyxFQUFFLG1DQUFtQyxFQUFFLE1BQU0sMkNBQTJDLENBQUM7QUFDaEcsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztBQUUzQyxTQUFTLFNBQVMsQ0FBQyxNQUFjLEVBQUUsSUFBZ0IsRUFBRSxLQUFpQjtJQUFuQyxxQkFBQSxFQUFBLFFBQWdCO0lBQUUsc0JBQUEsRUFBQSxTQUFpQjtJQUNwRSxPQUFPLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUc7Ozs7O0lBQUMsVUFBQyxDQUFDLEVBQUUsQ0FBQyxJQUFL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Q3BDLGtFQUF1Qzs7SUFDdkMsd0RBQTZCOztJQUM3QiwwREFBK0I7O0lBQy9CLHlEQUE4Qzs7Ozs7SUE2WWxDLG9EQUEyQjs7Ozs7SUFBRSxzREFBNEI7Ozs7O0lBQUUsZ0RBQThCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBEZWJ1Z0VsZW1lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IGlzTm90TmlsLCByZXFBbmltRnJhbWUsIElucHV0Qm9vbGVhbiwgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIGFzIFVwZGF0ZUNscyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDbWFjc0RhdGV0aW1lVmFsdWVBY2Nlc3NvckRpcmVjdGl2ZSB9IGZyb20gJy4vY21hY3MtZGF0ZXRpbWUtdmFsdWUtYWNjZXNzb3IuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgVGltZUhvbGRlciB9IGZyb20gJy4vdGltZS1ob2xkZXInO1xyXG5cclxuZnVuY3Rpb24gbWFrZVJhbmdlKGxlbmd0aDogbnVtYmVyLCBzdGVwOiBudW1iZXIgPSAxLCBzdGFydDogbnVtYmVyID0gMCk6IG51bWJlcltdIHtcclxuICByZXR1cm4gbmV3IEFycmF5KE1hdGguY2VpbChsZW5ndGggLyBzdGVwKSkuZmlsbCgwKS5tYXAoKF8sIGkpID0+IChpICsgc3RhcnQpICogc3RlcCk7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIE56VGltZVBpY2tlclVuaXQgPSAnaG91cicgfCAnbWludXRlJyB8ICdzZWNvbmQnIHwgJzEyLWhvdXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBzZWxlY3RvcjogJ2NtYWNzLWRhdGV0aW1lLXBpY2tlci1wYW5lbCcsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0RhdGVUaW1lUGlja2VyUGFuZWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1kYXRldGltZS1waWNrZXItcGFuZWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLWRhdGV0aW1lLXBpY2tlci1wYW5lbC5jb21wb25lbnQuY3NzJ10sXHJcbiAgcHJvdmlkZXJzOiBbVXBkYXRlQ2xzLCB7IHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLCB1c2VFeGlzdGluZzogQ21hY3NEYXRldGltZVBpY2tlclBhbmVsQ29tcG9uZW50LCBtdWx0aTogdHJ1ZSB9XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NEYXRldGltZVBpY2tlclBhbmVsQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xyXG4gIHByaXZhdGUgX256SG91clN0ZXAgPSAxO1xyXG4gIHByaXZhdGUgX256TWludXRlU3RlcCA9IDE7XHJcbiAgcHJpdmF0ZSBfbnpTZWNvbmRTdGVwID0gMTtcclxuICBwcml2YXRlIHVuc3Vic2NyaWJlJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgcHJpdmF0ZSBvbkNoYW5nZTogKHZhbHVlOiBEYXRlKSA9PiB2b2lkO1xyXG4gIHByaXZhdGUgb25Ub3VjaDogKCkgPT4gdm9pZDtcclxuICBwcml2YXRlIF9mb3JtYXQgPSAnSEg6bW06c3MnO1xyXG4gIHByaXZhdGUgX2Rpc2FibGVkSG91cnM6ICgpID0+IG51bWJlcltdO1xyXG4gIHByaXZhdGUgX2Rpc2FibGVkTWludXRlczogKGhvdXI6IG51bWJlcikgPT4gbnVtYmVyW107XHJcbiAgcHJpdmF0ZSBfZGlzYWJsZWRTZWNvbmRzOiAoaG91cjogbnVtYmVyLCBtaW51dGU6IG51bWJlcikgPT4gbnVtYmVyW107XHJcbiAgcHJpdmF0ZSBfZGVmYXVsdE9wZW5WYWx1ZSA9IG5ldyBEYXRlKCk7XHJcbiAgcHJpdmF0ZSBfb3BlbmVkID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBfYWxsb3dFbXB0eSA9IHRydWU7XHJcbiAgcHJlZml4Q2xzOiBzdHJpbmcgPSAnYW50LXRpbWUtcGlja2VyLXBhbmVsJztcclxuICB0aW1lID0gbmV3IFRpbWVIb2xkZXIoKTtcclxuICBob3VyRW5hYmxlZCA9IHRydWU7XHJcbiAgbWludXRlRW5hYmxlZCA9IHRydWU7XHJcbiAgc2Vjb25kRW5hYmxlZCA9IHRydWU7XHJcbiAgZW5hYmxlZENvbHVtbnMgPSAzO1xyXG4gIGhvdXJSYW5nZTogUmVhZG9ubHlBcnJheTx7IGluZGV4OiBudW1iZXI7IGRpc2FibGVkOiBib29sZWFuIH0+O1xyXG4gIG1pbnV0ZVJhbmdlOiBSZWFkb25seUFycmF5PHsgaW5kZXg6IG51bWJlcjsgZGlzYWJsZWQ6IGJvb2xlYW4gfT47XHJcbiAgc2Vjb25kUmFuZ2U6IFJlYWRvbmx5QXJyYXk8eyBpbmRleDogbnVtYmVyOyBkaXNhYmxlZDogYm9vbGVhbiB9PjtcclxuICB1c2UxMkhvdXJzUmFuZ2U6IFJlYWRvbmx5QXJyYXk8eyBpbmRleDogbnVtYmVyOyB2YWx1ZTogc3RyaW5nIH0+O1xyXG4gIGhvdXJzIDogbnVtYmVyO1xyXG4gIHNlY29uZHMgOiBudW1iZXI7XHJcbiAgbWludXRlcyA6IG51bWJlcjtcclxuICByYW5nZTogYW55O1xyXG4gIEBWaWV3Q2hpbGQoQ21hY3NEYXRldGltZVZhbHVlQWNjZXNzb3JEaXJlY3RpdmUpIG56VGltZVZhbHVlQWNjZXNzb3JEaXJlY3RpdmU6IENtYWNzRGF0ZXRpbWVWYWx1ZUFjY2Vzc29yRGlyZWN0aXZlO1xyXG5cclxuICBAVmlld0NoaWxkKCdob3VyTGlzdEVsZW1lbnQnKSBob3VyTGlzdEVsZW1lbnQ6IERlYnVnRWxlbWVudDtcclxuICBAVmlld0NoaWxkKCdtaW51dGVMaXN0RWxlbWVudCcpIG1pbnV0ZUxpc3RFbGVtZW50OiBEZWJ1Z0VsZW1lbnQ7XHJcbiAgQFZpZXdDaGlsZCgnc2Vjb25kTGlzdEVsZW1lbnQnKSBzZWNvbmRMaXN0RWxlbWVudDogRGVidWdFbGVtZW50O1xyXG4gIEBWaWV3Q2hpbGQoJ3VzZTEySG91cnNMaXN0RWxlbWVudCcpIHVzZTEySG91cnNMaXN0RWxlbWVudDogRGVidWdFbGVtZW50O1xyXG5cclxuICBASW5wdXQoKSBuekluRGF0ZVBpY2tlcjogYm9vbGVhbiA9IGZhbHNlOyAvLyBJZiBpbnNpZGUgYSBkYXRlLXBpY2tlciwgbW9yZSBkaWZmIHdvcmtzIG5lZWQgdG8gYmUgZG9uZVxyXG4gIEBJbnB1dCgpIG56QWRkT246IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIEBJbnB1dCgpIG56SGlkZURpc2FibGVkT3B0aW9ucyA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56Q2xlYXJUZXh0OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgbnpQbGFjZUhvbGRlcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelVzZTEySG91cnMgPSBmYWxzZTtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1lbWJlci1vcmRlcmluZ1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekFsbG93RW1wdHkodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcclxuICAgICAgdGhpcy5fYWxsb3dFbXB0eSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IG56QWxsb3dFbXB0eSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9hbGxvd0VtcHR5O1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgb3BlbmVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl9vcGVuZWQgPSB2YWx1ZTtcclxuICAgIGlmICh0aGlzLm9wZW5lZCkge1xyXG4gICAgICB0aGlzLmluaXRQb3NpdGlvbigpO1xyXG4gICAgICB0aGlzLnNlbGVjdElucHV0UmFuZ2UoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBvcGVuZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fb3BlbmVkO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpEZWZhdWx0T3BlblZhbHVlKHZhbHVlOiBEYXRlKSB7XHJcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XHJcbiAgICAgIHRoaXMuX2RlZmF1bHRPcGVuVmFsdWUgPSB2YWx1ZTtcclxuICAgICAgdGhpcy50aW1lLnNldERlZmF1bHRPcGVuVmFsdWUodGhpcy5uekRlZmF1bHRPcGVuVmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IG56RGVmYXVsdE9wZW5WYWx1ZSgpOiBEYXRlIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0T3BlblZhbHVlO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpEaXNhYmxlZEhvdXJzKHZhbHVlOiAoKSA9PiBudW1iZXJbXSkge1xyXG4gICAgdGhpcy5fZGlzYWJsZWRIb3VycyA9IHZhbHVlO1xyXG4gICAgaWYgKHRoaXMuX2Rpc2FibGVkSG91cnMpIHtcclxuICAgICAgdGhpcy5idWlsZEhvdXJzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgbnpEaXNhYmxlZEhvdXJzKCk6ICgpID0+IG51bWJlcltdIHtcclxuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZEhvdXJzO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpEaXNhYmxlZE1pbnV0ZXModmFsdWU6IChob3VyOiBudW1iZXIpID0+IG51bWJlcltdKSB7XHJcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XHJcbiAgICAgIHRoaXMuX2Rpc2FibGVkTWludXRlcyA9IHZhbHVlO1xyXG4gICAgICB0aGlzLmJ1aWxkTWludXRlcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IG56RGlzYWJsZWRNaW51dGVzKCk6IChob3VyOiBudW1iZXIpID0+IG51bWJlcltdIHtcclxuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZE1pbnV0ZXM7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuekRpc2FibGVkU2Vjb25kcyh2YWx1ZTogKGhvdXI6IG51bWJlciwgbWludXRlOiBudW1iZXIpID0+IG51bWJlcltdKSB7XHJcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XHJcbiAgICAgIHRoaXMuX2Rpc2FibGVkU2Vjb25kcyA9IHZhbHVlO1xyXG4gICAgICB0aGlzLmJ1aWxkU2Vjb25kcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IG56RGlzYWJsZWRTZWNvbmRzKCk6IChob3VyOiBudW1iZXIsIG1pbnV0ZTogbnVtYmVyKSA9PiBudW1iZXJbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWRTZWNvbmRzO1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgZm9ybWF0KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcclxuICAgICAgdGhpcy5fZm9ybWF0ID0gdmFsdWU7XHJcbiAgICAgIHRoaXMuZW5hYmxlZENvbHVtbnMgPSAwO1xyXG4gICAgICBjb25zdCBjaGFyU2V0ID0gbmV3IFNldCh2YWx1ZSk7XHJcbiAgICAgIHRoaXMuaG91ckVuYWJsZWQgPSBjaGFyU2V0LmhhcygnSCcpIHx8IGNoYXJTZXQuaGFzKCdoJyk7XHJcbiAgICAgIHRoaXMubWludXRlRW5hYmxlZCA9IGNoYXJTZXQuaGFzKCdtJyk7XHJcbiAgICAgIHRoaXMuc2Vjb25kRW5hYmxlZCA9IGNoYXJTZXQuaGFzKCdzJyk7XHJcbiAgICAgIGlmICh0aGlzLmhvdXJFbmFibGVkKSB7XHJcbiAgICAgICAgdGhpcy5lbmFibGVkQ29sdW1ucysrO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLm1pbnV0ZUVuYWJsZWQpIHtcclxuICAgICAgICB0aGlzLmVuYWJsZWRDb2x1bW5zKys7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuc2Vjb25kRW5hYmxlZCkge1xyXG4gICAgICAgIHRoaXMuZW5hYmxlZENvbHVtbnMrKztcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5uelVzZTEySG91cnMpIHtcclxuICAgICAgICB0aGlzLmJ1aWxkMTJIb3VycygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgZm9ybWF0KCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fZm9ybWF0O1xyXG4gIH1cclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgbnpIb3VyU3RlcCh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XHJcbiAgICAgIHRoaXMuX256SG91clN0ZXAgPSB2YWx1ZTtcclxuICAgICAgdGhpcy5idWlsZEhvdXJzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgbnpIb3VyU3RlcCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX256SG91clN0ZXA7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuek1pbnV0ZVN0ZXAodmFsdWU6IG51bWJlcikge1xyXG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xyXG4gICAgICB0aGlzLl9uek1pbnV0ZVN0ZXAgPSB2YWx1ZTtcclxuICAgICAgdGhpcy5idWlsZE1pbnV0ZXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBuek1pbnV0ZVN0ZXAoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9uek1pbnV0ZVN0ZXA7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBuelNlY29uZFN0ZXAodmFsdWU6IG51bWJlcikge1xyXG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xyXG4gICAgICB0aGlzLl9uelNlY29uZFN0ZXAgPSB2YWx1ZTtcclxuICAgICAgdGhpcy5idWlsZFNlY29uZHMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBuelNlY29uZFN0ZXAoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9uelNlY29uZFN0ZXA7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RJbnB1dFJhbmdlKCk6IHZvaWQge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLm56VGltZVZhbHVlQWNjZXNzb3JEaXJlY3RpdmUpIHtcclxuICAgICAgICB0aGlzLm56VGltZVZhbHVlQWNjZXNzb3JEaXJlY3RpdmUuc2V0UmFuZ2UoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBidWlsZEhvdXJzKCk6IHZvaWQge1xyXG4gICAgbGV0IGhvdXJSYW5nZXMgPSAyNDtcclxuICAgIGxldCBkaXNhYmxlZEhvdXJzID0gdGhpcy5uekRpc2FibGVkSG91cnMgJiYgdGhpcy5uekRpc2FibGVkSG91cnMoKTtcclxuICAgIGxldCBzdGFydEluZGV4ID0gMDtcclxuICAgIGlmICh0aGlzLm56VXNlMTJIb3Vycykge1xyXG4gICAgICBob3VyUmFuZ2VzID0gMTI7XHJcbiAgICAgIGlmIChkaXNhYmxlZEhvdXJzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudGltZS5zZWxlY3RlZDEySG91cnMgPT09ICdQTScpIHtcclxuICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICogRmlsdGVyIGFuZCB0cmFuc2Zvcm0gaG91cnMgd2hpY2ggZ3JlYXRlciBvciBlcXVhbCB0byAxMlxyXG4gICAgICAgICAgICogWzAsIDEsIDIsIC4uLiwgMTIsIDEzLCAxNCwgMTUsIC4uLiwgMjNdID0+IFsxMiwgMSwgMiwgMywgLi4uLCAxMV1cclxuICAgICAgICAgICAqL1xyXG4gICAgICAgICAgZGlzYWJsZWRIb3VycyA9IGRpc2FibGVkSG91cnMuZmlsdGVyKGkgPT4gaSA+PSAxMikubWFwKGkgPT4gKGkgPiAxMiA/IGkgLSAxMiA6IGkpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgKiBGaWx0ZXIgYW5kIHRyYW5zZm9ybSBob3VycyB3aGljaCBsZXNzIHRoYW4gMTJcclxuICAgICAgICAgICAqIFswLCAxLCAyLC4uLiwgMTIsIDEzLCAxNCwgMTUsIC4uLjIzXSA9PiBbMTIsIDEsIDIsIDMsIC4uLiwgMTFdXHJcbiAgICAgICAgICAgKi9cclxuICAgICAgICAgIGRpc2FibGVkSG91cnMgPSBkaXNhYmxlZEhvdXJzLmZpbHRlcihpID0+IGkgPCAxMiB8fCBpID09PSAyNCkubWFwKGkgPT4gKGkgPT09IDI0IHx8IGkgPT09IDAgPyAxMiA6IGkpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgc3RhcnRJbmRleCA9IDE7XHJcbiAgICB9XHJcbiAgICB0aGlzLmhvdXJSYW5nZSA9IG1ha2VSYW5nZShob3VyUmFuZ2VzLCB0aGlzLm56SG91clN0ZXAsIHN0YXJ0SW5kZXgpLm1hcChyID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBpbmRleDogcixcclxuICAgICAgICBkaXNhYmxlZDogdGhpcy5uekRpc2FibGVkSG91cnMgJiYgZGlzYWJsZWRIb3Vycy5pbmRleE9mKHIpICE9PSAtMVxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgICBpZiAodGhpcy5uelVzZTEySG91cnMgJiYgdGhpcy5ob3VyUmFuZ2VbdGhpcy5ob3VyUmFuZ2UubGVuZ3RoIC0gMV0uaW5kZXggPT09IDEyKSB7XHJcbiAgICAgIGNvbnN0IHRlbXAgPSBbLi4udGhpcy5ob3VyUmFuZ2VdO1xyXG4gICAgICB0ZW1wLnVuc2hpZnQodGVtcFt0ZW1wLmxlbmd0aCAtIDFdKTtcclxuICAgICAgdGVtcC5zcGxpY2UodGVtcC5sZW5ndGggLSAxLCAxKTtcclxuICAgICAgdGhpcy5ob3VyUmFuZ2UgPSB0ZW1wO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYnVpbGRNaW51dGVzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5taW51dGVSYW5nZSA9IG1ha2VSYW5nZSg2MCwgdGhpcy5uek1pbnV0ZVN0ZXApLm1hcChyID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBpbmRleDogcixcclxuICAgICAgICBkaXNhYmxlZDogdGhpcy5uekRpc2FibGVkTWludXRlcyAmJiB0aGlzLm56RGlzYWJsZWRNaW51dGVzKHRoaXMudGltZS5ob3VycyEpLmluZGV4T2YocikgIT09IC0xXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGJ1aWxkU2Vjb25kcygpOiB2b2lkIHtcclxuICAgIHRoaXMuc2Vjb25kUmFuZ2UgPSBtYWtlUmFuZ2UoNjAsIHRoaXMubnpTZWNvbmRTdGVwKS5tYXAociA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgaW5kZXg6IHIsXHJcbiAgICAgICAgZGlzYWJsZWQ6XHJcbiAgICAgICAgICB0aGlzLm56RGlzYWJsZWRTZWNvbmRzICYmIHRoaXMubnpEaXNhYmxlZFNlY29uZHModGhpcy50aW1lLmhvdXJzISwgdGhpcy50aW1lLm1pbnV0ZXMhKS5pbmRleE9mKHIpICE9PSAtMVxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBidWlsZDEySG91cnMoKTogdm9pZCB7XHJcbiAgICBjb25zdCBpc1VwcGVyRm9yYW10ID0gdGhpcy5fZm9ybWF0LmluY2x1ZGVzKCdBJyk7XHJcbiAgICB0aGlzLnVzZTEySG91cnNSYW5nZSA9IFtcclxuICAgICAge1xyXG4gICAgICAgIGluZGV4OiAwLFxyXG4gICAgICAgIHZhbHVlOiBpc1VwcGVyRm9yYW10ID8gJ0FNJyA6ICdhbSdcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGluZGV4OiAxLFxyXG4gICAgICAgIHZhbHVlOiBpc1VwcGVyRm9yYW10ID8gJ1BNJyA6ICdwbSdcclxuICAgICAgfVxyXG4gICAgXTtcclxuICB9XHJcblxyXG4gIGJ1aWxkVGltZXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLmJ1aWxkSG91cnMoKTtcclxuICAgIHRoaXMuYnVpbGRNaW51dGVzKCk7XHJcbiAgICB0aGlzLmJ1aWxkU2Vjb25kcygpO1xyXG4gICAgdGhpcy5idWlsZDEySG91cnMoKTtcclxuICB9XHJcblxyXG4gIHNlbGVjdEhvdXIoaG91cjogeyBpbmRleDogbnVtYmVyOyBkaXNhYmxlZDogYm9vbGVhbiB9KTogdm9pZCB7XHJcbiAgICB0aGlzLnRpbWUuc2V0SG91cnMoaG91ci5pbmRleCwgaG91ci5kaXNhYmxlZCk7XHJcbiAgICB0aGlzLnNjcm9sbFRvU2VsZWN0ZWQodGhpcy5ob3VyTGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgaG91ci5pbmRleCwgMTIwLCAnaG91cicpO1xyXG5cclxuICAgIGlmICh0aGlzLl9kaXNhYmxlZE1pbnV0ZXMpIHtcclxuICAgICAgdGhpcy5idWlsZE1pbnV0ZXMoKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLl9kaXNhYmxlZFNlY29uZHMgfHwgdGhpcy5fZGlzYWJsZWRNaW51dGVzKSB7XHJcbiAgICAgIHRoaXMuYnVpbGRTZWNvbmRzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZWxlY3RNaW51dGUobWludXRlOiB7IGluZGV4OiBudW1iZXI7IGRpc2FibGVkOiBib29sZWFuIH0pOiB2b2lkIHtcclxuICAgIHRoaXMudGltZS5zZXRNaW51dGVzKG1pbnV0ZS5pbmRleCwgbWludXRlLmRpc2FibGVkKTtcclxuICAgIHRoaXMuc2Nyb2xsVG9TZWxlY3RlZCh0aGlzLm1pbnV0ZUxpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIG1pbnV0ZS5pbmRleCwgMTIwLCAnbWludXRlJyk7XHJcbiAgICBpZiAodGhpcy5fZGlzYWJsZWRTZWNvbmRzKSB7XHJcbiAgICAgIHRoaXMuYnVpbGRTZWNvbmRzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZWxlY3RTZWNvbmQoc2Vjb25kOiB7IGluZGV4OiBudW1iZXI7IGRpc2FibGVkOiBib29sZWFuIH0pOiB2b2lkIHtcclxuICAgIHRoaXMudGltZS5zZXRTZWNvbmRzKHNlY29uZC5pbmRleCwgc2Vjb25kLmRpc2FibGVkKTtcclxuICAgIHRoaXMuc2Nyb2xsVG9TZWxlY3RlZCh0aGlzLnNlY29uZExpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHNlY29uZC5pbmRleCwgMTIwLCAnc2Vjb25kJyk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3QxMkhvdXJzKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMudGltZS5zZWxlY3RlZDEySG91cnMgPSB2YWx1ZTtcclxuICAgIGlmICh0aGlzLl9kaXNhYmxlZEhvdXJzKSB7XHJcbiAgICAgIHRoaXMuYnVpbGRIb3VycygpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuX2Rpc2FibGVkTWludXRlcykge1xyXG4gICAgICB0aGlzLmJ1aWxkTWludXRlcygpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuX2Rpc2FibGVkU2Vjb25kcykge1xyXG4gICAgICB0aGlzLmJ1aWxkU2Vjb25kcygpO1xyXG4gICAgfVxyXG4gICAgLyp0aGlzLnNjcm9sbFRvU2VsZWN0ZWQodGhpcy51c2UxMkhvdXJzTGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgdmFsdWUuaW5kZXgsIDEyMCwgJzEyLWhvdXInKTsqL1xyXG4gIH1cclxuXHJcbiAgc2Nyb2xsVG9TZWxlY3RlZChpbnN0YW5jZTogSFRNTEVsZW1lbnQsIGluZGV4OiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIgPSAwLCB1bml0OiBOelRpbWVQaWNrZXJVbml0KTogdm9pZCB7XHJcbiAgICBjb25zdCB0cmFuc0luZGV4ID0gdGhpcy50cmFuc2xhdGVJbmRleChpbmRleCwgdW5pdCk7XHJcbiAgICBjb25zdCBjdXJyZW50T3B0aW9uID0gKGluc3RhbmNlLmNoaWxkcmVuWzBdLmNoaWxkcmVuW3RyYW5zSW5kZXhdIHx8XHJcbiAgICAgIGluc3RhbmNlLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdKSBhcyBIVE1MRWxlbWVudDtcclxuICAgIHRoaXMuc2Nyb2xsVG8oaW5zdGFuY2UsIGN1cnJlbnRPcHRpb24ub2Zmc2V0VG9wLCBkdXJhdGlvbik7XHJcbiAgfVxyXG5cclxuICB0cmFuc2xhdGVJbmRleChpbmRleDogbnVtYmVyLCB1bml0OiBOelRpbWVQaWNrZXJVbml0KTogbnVtYmVyIHtcclxuICAgIGlmICh1bml0ID09PSAnaG91cicpIHtcclxuICAgICAgY29uc3QgZGlzYWJsZWRIb3VycyA9IHRoaXMubnpEaXNhYmxlZEhvdXJzICYmIHRoaXMubnpEaXNhYmxlZEhvdXJzKCk7XHJcbiAgICAgIHJldHVybiB0aGlzLmNhbGNJbmRleChkaXNhYmxlZEhvdXJzLCB0aGlzLmhvdXJSYW5nZS5tYXAoaXRlbSA9PiBpdGVtLmluZGV4KS5pbmRleE9mKGluZGV4KSk7XHJcbiAgICB9IGVsc2UgaWYgKHVuaXQgPT09ICdtaW51dGUnKSB7XHJcbiAgICAgIGNvbnN0IGRpc2FibGVkTWludXRlcyA9IHRoaXMubnpEaXNhYmxlZE1pbnV0ZXMgJiYgdGhpcy5uekRpc2FibGVkTWludXRlcyh0aGlzLnRpbWUuaG91cnMhKTtcclxuICAgICAgcmV0dXJuIHRoaXMuY2FsY0luZGV4KGRpc2FibGVkTWludXRlcywgdGhpcy5taW51dGVSYW5nZS5tYXAoaXRlbSA9PiBpdGVtLmluZGV4KS5pbmRleE9mKGluZGV4KSk7XHJcbiAgICB9IGVsc2UgaWYgKHVuaXQgPT09ICdzZWNvbmQnKSB7XHJcbiAgICAgIC8vIHNlY29uZFxyXG4gICAgICBjb25zdCBkaXNhYmxlZFNlY29uZHMgPSB0aGlzLm56RGlzYWJsZWRTZWNvbmRzICYmIHRoaXMubnpEaXNhYmxlZFNlY29uZHModGhpcy50aW1lLmhvdXJzISwgdGhpcy50aW1lLm1pbnV0ZXMhKTtcclxuICAgICAgcmV0dXJuIHRoaXMuY2FsY0luZGV4KGRpc2FibGVkU2Vjb25kcywgdGhpcy5zZWNvbmRSYW5nZS5tYXAoaXRlbSA9PiBpdGVtLmluZGV4KS5pbmRleE9mKGluZGV4KSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyAxMi1ob3VyXHJcbiAgICAgIHJldHVybiB0aGlzLmNhbGNJbmRleChbXSwgdGhpcy51c2UxMkhvdXJzUmFuZ2UubWFwKGl0ZW0gPT4gaXRlbS5pbmRleCkuaW5kZXhPZihpbmRleCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2Nyb2xsVG8oZWxlbWVudDogSFRNTEVsZW1lbnQsIHRvOiBudW1iZXIsIGR1cmF0aW9uOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmIChkdXJhdGlvbiA8PSAwKSB7XHJcbiAgICAgIGVsZW1lbnQuc2Nyb2xsVG9wID0gdG87XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGRpZmZlcmVuY2UgPSB0byAtIGVsZW1lbnQuc2Nyb2xsVG9wO1xyXG4gICAgY29uc3QgcGVyVGljayA9IChkaWZmZXJlbmNlIC8gZHVyYXRpb24pICogMTA7XHJcblxyXG4gICAgcmVxQW5pbUZyYW1lKCgpID0+IHtcclxuICAgICAgZWxlbWVudC5zY3JvbGxUb3AgPSBlbGVtZW50LnNjcm9sbFRvcCArIHBlclRpY2s7XHJcbiAgICAgIGlmIChlbGVtZW50LnNjcm9sbFRvcCA9PT0gdG8pIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zY3JvbGxUbyhlbGVtZW50LCB0bywgZHVyYXRpb24gLSAxMCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNhbGNJbmRleChhcnJheTogbnVtYmVyW10sIGluZGV4OiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgaWYgKGFycmF5ICYmIGFycmF5Lmxlbmd0aCAmJiB0aGlzLm56SGlkZURpc2FibGVkT3B0aW9ucykge1xyXG4gICAgICByZXR1cm4gKFxyXG4gICAgICAgIGluZGV4IC1cclxuICAgICAgICBhcnJheS5yZWR1Y2UoKHByZSwgdmFsdWUpID0+IHtcclxuICAgICAgICAgIHJldHVybiBwcmUgKyAodmFsdWUgPCBpbmRleCA/IDEgOiAwKTtcclxuICAgICAgICB9LCAwKVxyXG4gICAgICApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGluZGV4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGNoYW5nZWQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5vbkNoYW5nZSkge1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMudGltZS52YWx1ZSEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHRvdWNoZWQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5vblRvdWNoKSB7XHJcbiAgICAgIHRoaXMub25Ub3VjaCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRDbGFzc01hcCgpOiB2b2lkIHtcclxuICAgIHRoaXMudXBkYXRlQ2xzLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwge1xyXG4gICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9YF06IHRydWUsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tY29sdW1uLSR7dGhpcy5lbmFibGVkQ29sdW1uc31gXTogdGhpcy5uekluRGF0ZVBpY2tlciA/IGZhbHNlIDogdHJ1ZSxcclxuICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1uYXJyb3dgXTogdGhpcy5lbmFibGVkQ29sdW1ucyA8IDMsXHJcbiAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tcGxhY2VtZW50LWJvdHRvbUxlZnRgXTogdGhpcy5uekluRGF0ZVBpY2tlciA/IGZhbHNlIDogdHJ1ZVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBpc1NlbGVjdGVkSG91cihob3VyOiB7IGluZGV4OiBudW1iZXI7IGRpc2FibGVkOiBib29sZWFuIH0pOiBib29sZWFuIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIGhvdXIuaW5kZXggPT09IHRoaXMudGltZS52aWV3SG91cnMgfHxcclxuICAgICAgKCFpc05vdE5pbCh0aGlzLnRpbWUudmlld0hvdXJzKSAmJiBob3VyLmluZGV4ID09PSB0aGlzLnRpbWUuZGVmYXVsdFZpZXdIb3VycylcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBpc1NlbGVjdGVkTWludXRlKG1pbnV0ZTogeyBpbmRleDogbnVtYmVyOyBkaXNhYmxlZDogYm9vbGVhbiB9KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICBtaW51dGUuaW5kZXggPT09IHRoaXMudGltZS5taW51dGVzIHx8ICghaXNOb3ROaWwodGhpcy50aW1lLm1pbnV0ZXMpICYmIG1pbnV0ZS5pbmRleCA9PT0gdGhpcy50aW1lLmRlZmF1bHRNaW51dGVzKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGlzU2VsZWN0ZWRTZWNvbmQoc2Vjb25kOiB7IGluZGV4OiBudW1iZXI7IGRpc2FibGVkOiBib29sZWFuIH0pOiBib29sZWFuIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIHNlY29uZC5pbmRleCA9PT0gdGhpcy50aW1lLnNlY29uZHMgfHwgKCFpc05vdE5pbCh0aGlzLnRpbWUuc2Vjb25kcykgJiYgc2Vjb25kLmluZGV4ID09PSB0aGlzLnRpbWUuZGVmYXVsdFNlY29uZHMpXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgaXNTZWxlY3RlZDEySG91cnModmFsdWU6IHsgaW5kZXg6IG51bWJlcjsgdmFsdWU6IHN0cmluZyB9KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICB2YWx1ZS52YWx1ZS50b1VwcGVyQ2FzZSgpID09PSB0aGlzLnRpbWUuc2VsZWN0ZWQxMkhvdXJzIHx8XHJcbiAgICAgICghaXNOb3ROaWwodGhpcy50aW1lLnNlbGVjdGVkMTJIb3VycykgJiYgdmFsdWUudmFsdWUudG9VcHBlckNhc2UoKSA9PT0gdGhpcy50aW1lLmRlZmF1bHQxMkhvdXJzKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGluaXRQb3NpdGlvbigpOiB2b2lkIHtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5ob3VyRW5hYmxlZCAmJiB0aGlzLmhvdXJMaXN0RWxlbWVudCkge1xyXG4gICAgICAgIGlmIChpc05vdE5pbCh0aGlzLnRpbWUudmlld0hvdXJzKSkge1xyXG4gICAgICAgICAgdGhpcy5zY3JvbGxUb1NlbGVjdGVkKHRoaXMuaG91ckxpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMudGltZS52aWV3SG91cnMhLCAwLCAnaG91cicpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnNjcm9sbFRvU2VsZWN0ZWQodGhpcy5ob3VyTGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgdGhpcy50aW1lLmRlZmF1bHRWaWV3SG91cnMsIDAsICdob3VyJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLm1pbnV0ZUVuYWJsZWQgJiYgdGhpcy5taW51dGVMaXN0RWxlbWVudCkge1xyXG4gICAgICAgIGlmIChpc05vdE5pbCh0aGlzLnRpbWUubWludXRlcykpIHtcclxuICAgICAgICAgIHRoaXMuc2Nyb2xsVG9TZWxlY3RlZCh0aGlzLm1pbnV0ZUxpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMudGltZS5taW51dGVzISwgMCwgJ21pbnV0ZScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnNjcm9sbFRvU2VsZWN0ZWQodGhpcy5taW51dGVMaXN0RWxlbWVudC5uYXRpdmVFbGVtZW50LCB0aGlzLnRpbWUuZGVmYXVsdE1pbnV0ZXMsIDAsICdtaW51dGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuc2Vjb25kRW5hYmxlZCAmJiB0aGlzLnNlY29uZExpc3RFbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKGlzTm90TmlsKHRoaXMudGltZS5zZWNvbmRzKSkge1xyXG4gICAgICAgICAgdGhpcy5zY3JvbGxUb1NlbGVjdGVkKHRoaXMuc2Vjb25kTGlzdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgdGhpcy50aW1lLnNlY29uZHMhLCAwLCAnc2Vjb25kJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2Nyb2xsVG9TZWxlY3RlZCh0aGlzLnNlY29uZExpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMudGltZS5kZWZhdWx0U2Vjb25kcywgMCwgJ3NlY29uZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5uelVzZTEySG91cnMgJiYgdGhpcy51c2UxMkhvdXJzTGlzdEVsZW1lbnQpIHtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZEhvdXJzID0gaXNOb3ROaWwodGhpcy50aW1lLnNlbGVjdGVkMTJIb3VycylcclxuICAgICAgICAgID8gdGhpcy50aW1lLnNlbGVjdGVkMTJIb3Vyc1xyXG4gICAgICAgICAgOiB0aGlzLnRpbWUuZGVmYXVsdDEySG91cnM7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBzZWxlY3RlZEhvdXJzID09PSAnQU0nID8gMCA6IDE7XHJcbiAgICAgICAgdGhpcy5zY3JvbGxUb1NlbGVjdGVkKHRoaXMudXNlMTJIb3Vyc0xpc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIGluZGV4LCAwLCAnMTItaG91cicpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZiwgcHJpdmF0ZSB1cGRhdGVDbHM6IFVwZGF0ZUNscywgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56SW5EYXRlUGlja2VyKSB7XHJcbiAgICAgIHRoaXMucHJlZml4Q2xzID0gJ2FudC1jYWxlbmRhci10aW1lLXBpY2tlcic7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy50aW1lLmNoYW5nZXMucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNoYW5nZWQoKTtcclxuICAgICAgdGhpcy50b3VjaGVkKCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuYnVpbGRUaW1lcygpO1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gICAgdGhpcy5ob3VycyA9ICgoKHRoaXMudGltZS5ob3VycyA/IHRoaXMudGltZS5ob3VycyA6IHRoaXMudGltZS5kZWZhdWx0SG91cnMpICsgMTEpICUgMTIgKyAxKTtcclxuICAgIHRoaXMuc2Vjb25kcyA9IHRoaXMudGltZS5zZWNvbmRzID8gdGhpcy50aW1lLnNlY29uZHMgOnRoaXMudGltZS5kZWZhdWx0U2Vjb25kcztcclxuICAgIHRoaXMubWludXRlcyA9IHRoaXMudGltZS5taW51dGVzID8gdGhpcy50aW1lLm1pbnV0ZXMgOiB0aGlzLnRpbWUuZGVmYXVsdE1pbnV0ZXM7XHJcbiAgICB0aGlzLnJhbmdlID0gdGhpcy50aW1lLnNlbGVjdGVkMTJIb3VycyA/IHRoaXMudGltZS5zZWxlY3RlZDEySG91cnMgOiB0aGlzLnRpbWUuZGVmYXVsdDEySG91cnMudG9Mb3dlckNhc2UoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy51bnN1YnNjcmliZSQubmV4dCgpO1xyXG4gICAgdGhpcy51bnN1YnNjcmliZSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGNvbnN0IHsgbnpVc2UxMkhvdXJzIH0gPSBjaGFuZ2VzO1xyXG4gICAgaWYgKG56VXNlMTJIb3VycyAmJiAhbnpVc2UxMkhvdXJzLnByZXZpb3VzVmFsdWUgJiYgbnpVc2UxMkhvdXJzLmN1cnJlbnRWYWx1ZSkge1xyXG4gICAgICB0aGlzLmJ1aWxkMTJIb3VycygpO1xyXG4gICAgICB0aGlzLmVuYWJsZWRDb2x1bW5zKys7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB3cml0ZVZhbHVlKHZhbHVlOiBEYXRlKTogdm9pZCB7XHJcbiAgICB0aGlzLnRpbWUuc2V0VmFsdWUodmFsdWUsIHRoaXMubnpVc2UxMkhvdXJzKTtcclxuICAgIHRoaXMuYnVpbGRUaW1lcygpO1xyXG5cclxuICAgIC8vIE1hcmsgdGhpcyBjb21wb25lbnQgdG8gYmUgY2hlY2tlZCBtYW51YWxseSB3aXRoIGludGVybmFsIHByb3BlcnRpZXMgY2hhbmdpbmcgKHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTA4MTYpXHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogRGF0ZSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgLyogQ3VzdG9taXplZCBjb2RlICovXHJcbiAgdXBkYXRlVGltZSgkZXZlbnQsIHR5cGU6IHN0cmluZykge1xyXG4gICAgaWYgKHR5cGUgPT09ICdob3VycycpIHtcclxuICAgICAgdGhpcy50aW1lLnNldEhvdXJzKCRldmVudCwgZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGUgPT09ICdtaW51dGVzJykge1xyXG4gICAgICB0aGlzLnRpbWUuc2V0TWludXRlcygkZXZlbnQsIGZhbHNlKTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlID09PSAnc2Vjb25kcycpIHtcclxuICAgICAgdGhpcy50aW1lLnNldFNlY29uZHMoJGV2ZW50LCBmYWxzZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=