/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Subject } from 'rxjs';
import { isNotNil } from 'ng-zorro-antd/core';
export class TimeHolder {
    constructor() {
        this._seconds = undefined;
        this._hours = undefined;
        this._minutes = undefined;
        this._selected12Hours = undefined;
        this._use12Hours = false;
        this._defaultOpenValue = new Date();
        this._changes = new Subject();
    }
    /**
     * @return {?}
     */
    setDefaultValueIfNil() {
        if (!isNotNil(this._value)) {
            this._value = new Date(this.defaultOpenValue);
        }
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @param {?} disabled
     * @return {THIS}
     */
    setMinutes(value, disabled) {
        if (disabled) {
            return (/** @type {?} */ (this));
        }
        (/** @type {?} */ (this)).setDefaultValueIfNil();
        (/** @type {?} */ (this)).minutes = value;
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @param {?} disabled
     * @return {THIS}
     */
    setHours(value, disabled) {
        if (disabled) {
            return (/** @type {?} */ (this));
        }
        (/** @type {?} */ (this)).setDefaultValueIfNil();
        (/** @type {?} */ (this)).hours = value;
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @param {?} disabled
     * @return {THIS}
     */
    setSeconds(value, disabled) {
        if (disabled) {
            return (/** @type {?} */ (this));
        }
        (/** @type {?} */ (this)).setDefaultValueIfNil();
        (/** @type {?} */ (this)).seconds = value;
        return (/** @type {?} */ (this));
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @return {THIS}
     */
    setUse12Hours(value) {
        (/** @type {?} */ (this))._use12Hours = value;
        return (/** @type {?} */ (this));
    }
    /**
     * @return {?}
     */
    get changes() {
        return this._changes.asObservable();
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        if (value !== this._value) {
            this._value = value;
            if (isNotNil(this._value)) {
                this._hours = (/** @type {?} */ (this._value)).getHours();
                this._minutes = (/** @type {?} */ (this._value)).getMinutes();
                this._seconds = (/** @type {?} */ (this._value)).getSeconds();
                if (this._use12Hours && isNotNil(this._hours)) {
                    this._selected12Hours = this._hours >= 12 ? 'PM' : 'AM';
                }
            }
            else {
                this._clear();
            }
        }
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @param {?=} use12Hours
     * @return {THIS}
     */
    setValue(value, use12Hours) {
        if (isNotNil(use12Hours)) {
            (/** @type {?} */ (this))._use12Hours = (/** @type {?} */ (use12Hours));
        }
        (/** @type {?} */ (this)).value = value;
        return (/** @type {?} */ (this));
    }
    /**
     * @return {?}
     */
    clear() {
        this._clear();
        this.update();
    }
    /**
     * @return {?}
     */
    get isEmpty() {
        return !(isNotNil(this._hours) || isNotNil(this._minutes) || isNotNil(this._seconds));
    }
    /**
     * @private
     * @return {?}
     */
    _clear() {
        this._hours = undefined;
        this._minutes = undefined;
        this._seconds = undefined;
        this._selected12Hours = undefined;
    }
    /**
     * @private
     * @return {?}
     */
    update() {
        if (this.isEmpty) {
            this._value = undefined;
        }
        else {
            if (!isNotNil(this._hours)) {
                this._hours = this.defaultHours;
            }
            else {
                (/** @type {?} */ (this._value)).setHours((/** @type {?} */ (this.hours)));
            }
            if (!isNotNil(this._minutes)) {
                this._minutes = this.defaultMinutes;
            }
            else {
                (/** @type {?} */ (this._value)).setMinutes((/** @type {?} */ (this.minutes)));
            }
            if (!isNotNil(this._seconds)) {
                this._seconds = this.defaultSeconds;
            }
            else {
                (/** @type {?} */ (this._value)).setSeconds((/** @type {?} */ (this.seconds)));
            }
            if (this._use12Hours) {
                if (!isNotNil(this._selected12Hours)) {
                    this._selected12Hours = this.default12Hours;
                }
                if (this.selected12Hours === 'PM' && (/** @type {?} */ (this._hours)) < 12) {
                    (/** @type {?} */ (this._hours)) += 12;
                    (/** @type {?} */ (this._value)).setHours((/** @type {?} */ (this._hours)));
                }
                if (this.selected12Hours === 'AM' && (/** @type {?} */ (this._hours)) >= 12) {
                    (/** @type {?} */ (this._hours)) -= 12;
                    (/** @type {?} */ (this._value)).setHours((/** @type {?} */ (this._hours)));
                }
            }
            this._value = new Date((/** @type {?} */ (this._value)));
        }
        this.changed();
    }
    /**
     * @return {?}
     */
    changed() {
        this._changes.next(this._value);
    }
    /**
     * \@description
     * UI view hours
     * Get viewHours which is selected in `time-picker-panel` and its range is [12, 1, 2, ..., 11]
     * @return {?}
     */
    get viewHours() {
        return this._use12Hours && isNotNil(this._hours) ? this.calculateViewHour((/** @type {?} */ (this._hours))) : this._hours;
    }
    /**
     * \@description
     * Value hours
     * Get realHours and its range is [0, 1, 2, ..., 22, 23]
     * @return {?}
     */
    get realHours() {
        return this._hours;
    }
    /**
     * \@description
     * Same as realHours
     * @see realHours
     * @return {?}
     */
    get hours() {
        return this._hours;
    }
    /**
     * \@description
     * Set viewHours to realHours
     * @param {?} value
     * @return {?}
     */
    set hours(value) {
        if (value !== this._hours) {
            if (this._use12Hours) {
                if (this.selected12Hours === 'PM' && value !== 12) {
                    (/** @type {?} */ (this._hours)) = ((/** @type {?} */ (value))) + 12;
                }
                else if (this.selected12Hours === 'AM' && value === 12) {
                    this._hours = 0;
                }
                else {
                    this._hours = value;
                }
            }
            else {
                this._hours = value;
            }
            this.update();
        }
    }
    /**
     * @return {?}
     */
    get minutes() {
        return this._minutes;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set minutes(value) {
        if (value !== this._minutes) {
            this._minutes = value;
            this.update();
        }
    }
    /**
     * @return {?}
     */
    get seconds() {
        return this._seconds;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set seconds(value) {
        if (value !== this._seconds) {
            this._seconds = value;
            this.update();
        }
    }
    /**
     * @return {?}
     */
    get selected12Hours() {
        return this._selected12Hours;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set selected12Hours(value) {
        if ((/** @type {?} */ (value)).toUpperCase() !== this._selected12Hours) {
            this._selected12Hours = (/** @type {?} */ (value)).toUpperCase();
            this.update();
        }
    }
    /**
     * @return {?}
     */
    get defaultOpenValue() {
        return this._defaultOpenValue;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set defaultOpenValue(value) {
        if (this._defaultOpenValue !== value) {
            this._defaultOpenValue = value;
            this.update();
        }
    }
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @return {THIS}
     */
    setDefaultOpenValue(value) {
        (/** @type {?} */ (this)).defaultOpenValue = value;
        return (/** @type {?} */ (this));
    }
    /**
     * \@description
     * Get deafultViewHours when defaultOpenValue is setted
     * @see viewHours
     * @return {?}
     */
    get defaultViewHours() {
        /** @type {?} */
        const hours = this._defaultOpenValue.getHours();
        return this._use12Hours && isNotNil(hours) ? this.calculateViewHour(hours) : hours;
    }
    /**
     * \@description
     * Get defaultRealHours when defaultOpenValue is setted
     * @see realHours
     * @return {?}
     */
    get defaultRealHours() {
        return this._defaultOpenValue.getHours();
    }
    /**
     * \@description
     * Same as defaultRealHours
     * @return {?}
     */
    get defaultHours() {
        return this._defaultOpenValue.getHours();
    }
    /**
     * @return {?}
     */
    get defaultMinutes() {
        return this._defaultOpenValue.getMinutes();
    }
    /**
     * @return {?}
     */
    get defaultSeconds() {
        return this._defaultOpenValue.getSeconds();
    }
    /**
     * @return {?}
     */
    get default12Hours() {
        return this._defaultOpenValue.getHours() >= 12 ? 'PM' : 'AM';
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    calculateViewHour(value) {
        /** @type {?} */
        const selected12Hours = this._selected12Hours || this.default12Hours;
        if (selected12Hours === 'PM' && value > 12) {
            return value - 12;
        }
        if (selected12Hours === 'AM' && value === 0) {
            return 12;
        }
        return value;
    }
}
if (false) {
    /**
     * @type {?}
     * @private
     */
    TimeHolder.prototype._seconds;
    /**
     * @type {?}
     * @private
     */
    TimeHolder.prototype._hours;
    /**
     * @type {?}
     * @private
     */
    TimeHolder.prototype._minutes;
    /**
     * @type {?}
     * @private
     */
    TimeHolder.prototype._selected12Hours;
    /**
     * @type {?}
     * @private
     */
    TimeHolder.prototype._use12Hours;
    /**
     * @type {?}
     * @private
     */
    TimeHolder.prototype._defaultOpenValue;
    /**
     * @type {?}
     * @private
     */
    TimeHolder.prototype._value;
    /**
     * @type {?}
     * @private
     */
    TimeHolder.prototype._changes;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1ob2xkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLWRhdGV0aW1lLXBpY2tlci90aW1lLWhvbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTlDLE1BQU0sT0FBTyxVQUFVO0lBcVJyQjtRQXBSUSxhQUFRLEdBQXVCLFNBQVMsQ0FBQztRQUN6QyxXQUFNLEdBQXVCLFNBQVMsQ0FBQztRQUN2QyxhQUFRLEdBQXVCLFNBQVMsQ0FBQztRQUN6QyxxQkFBZ0IsR0FBdUIsU0FBUyxDQUFDO1FBQ2pELGdCQUFXLEdBQVksS0FBSyxDQUFDO1FBQzdCLHNCQUFpQixHQUFTLElBQUksSUFBSSxFQUFFLENBQUM7UUFFckMsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7SUE2UXhCLENBQUM7Ozs7SUEzUWhCLG9CQUFvQjtRQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQy9DO0lBQ0gsQ0FBQzs7Ozs7Ozs7SUFFRCxVQUFVLENBQUMsS0FBYSxFQUFFLFFBQWlCO1FBQ3pDLElBQUksUUFBUSxFQUFFO1lBQ1osT0FBTyxtQkFBQSxJQUFJLEVBQUEsQ0FBQztTQUNiO1FBQ0QsbUJBQUEsSUFBSSxFQUFBLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM1QixtQkFBQSxJQUFJLEVBQUEsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLE9BQU8sbUJBQUEsSUFBSSxFQUFBLENBQUM7SUFDZCxDQUFDOzs7Ozs7OztJ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LHVDQUE2Qzs7Ozs7SUFDN0MsNEJBQWlDOzs7OztJQUNqQyw4QkFBdUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IGlzTm90TmlsIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBUaW1lSG9sZGVyIHtcclxuICBwcml2YXRlIF9zZWNvbmRzOiBudW1iZXIgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBfaG91cnM6IG51bWJlciB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuICBwcml2YXRlIF9taW51dGVzOiBudW1iZXIgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBfc2VsZWN0ZWQxMkhvdXJzOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBfdXNlMTJIb3VyczogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX2RlZmF1bHRPcGVuVmFsdWU6IERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gIHByaXZhdGUgX3ZhbHVlOiBEYXRlIHwgdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgX2NoYW5nZXMgPSBuZXcgU3ViamVjdDxEYXRlPigpO1xyXG5cclxuICBzZXREZWZhdWx0VmFsdWVJZk5pbCgpOiB2b2lkIHtcclxuICAgIGlmICghaXNOb3ROaWwodGhpcy5fdmFsdWUpKSB7XHJcbiAgICAgIHRoaXMuX3ZhbHVlID0gbmV3IERhdGUodGhpcy5kZWZhdWx0T3BlblZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldE1pbnV0ZXModmFsdWU6IG51bWJlciwgZGlzYWJsZWQ6IGJvb2xlYW4pOiB0aGlzIHtcclxuICAgIGlmIChkaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHRoaXMuc2V0RGVmYXVsdFZhbHVlSWZOaWwoKTtcclxuICAgIHRoaXMubWludXRlcyA9IHZhbHVlO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBzZXRIb3Vycyh2YWx1ZTogbnVtYmVyLCBkaXNhYmxlZDogYm9vbGVhbik6IHRoaXMge1xyXG4gICAgaWYgKGRpc2FibGVkKSB7XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXREZWZhdWx0VmFsdWVJZk5pbCgpO1xyXG4gICAgdGhpcy5ob3VycyA9IHZhbHVlO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBzZXRTZWNvbmRzKHZhbHVlOiBudW1iZXIsIGRpc2FibGVkOiBib29sZWFuKTogdGhpcyB7XHJcbiAgICBpZiAoZGlzYWJsZWQpIHtcclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldERlZmF1bHRWYWx1ZUlmTmlsKCk7XHJcbiAgICB0aGlzLnNlY29uZHMgPSB2YWx1ZTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgc2V0VXNlMTJIb3Vycyh2YWx1ZTogYm9vbGVhbik6IHRoaXMge1xyXG4gICAgdGhpcy5fdXNlMTJIb3VycyA9IHZhbHVlO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICBnZXQgY2hhbmdlcygpOiBPYnNlcnZhYmxlPERhdGU+IHtcclxuICAgIHJldHVybiB0aGlzLl9jaGFuZ2VzLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHZhbHVlKCk6IERhdGUgfCB1bmRlZmluZWQge1xyXG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xyXG4gIH1cclxuXHJcbiAgc2V0IHZhbHVlKHZhbHVlOiBEYXRlIHwgdW5kZWZpbmVkKSB7XHJcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuX3ZhbHVlKSB7XHJcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XHJcbiAgICAgIGlmIChpc05vdE5pbCh0aGlzLl92YWx1ZSkpIHtcclxuICAgICAgICB0aGlzLl9ob3VycyA9IHRoaXMuX3ZhbHVlIS5nZXRIb3VycygpO1xyXG4gICAgICAgIHRoaXMuX21pbnV0ZXMgPSB0aGlzLl92YWx1ZSEuZ2V0TWludXRlcygpO1xyXG4gICAgICAgIHRoaXMuX3NlY29uZHMgPSB0aGlzLl92YWx1ZSEuZ2V0U2Vjb25kcygpO1xyXG4gICAgICAgIGlmICh0aGlzLl91c2UxMkhvdXJzICYmIGlzTm90TmlsKHRoaXMuX2hvdXJzKSkge1xyXG4gICAgICAgICAgdGhpcy5fc2VsZWN0ZWQxMkhvdXJzID0gdGhpcy5faG91cnMgPj0gMTIgPyAnUE0nIDogJ0FNJztcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5fY2xlYXIoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0VmFsdWUodmFsdWU6IERhdGUgfCB1bmRlZmluZWQsIHVzZTEySG91cnM/OiBib29sZWFuKTogdGhpcyB7XHJcbiAgICBpZiAoaXNOb3ROaWwodXNlMTJIb3VycykpIHtcclxuICAgICAgdGhpcy5fdXNlMTJIb3VycyA9IHVzZTEySG91cnMgYXMgYm9vbGVhbjtcclxuICAgIH1cclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgY2xlYXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9jbGVhcigpO1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9XHJcblxyXG4gIGdldCBpc0VtcHR5KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICEoaXNOb3ROaWwodGhpcy5faG91cnMpIHx8IGlzTm90TmlsKHRoaXMuX21pbnV0ZXMpIHx8IGlzTm90TmlsKHRoaXMuX3NlY29uZHMpKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2NsZWFyKCk6IHZvaWQge1xyXG4gICAgdGhpcy5faG91cnMgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLl9taW51dGVzID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5fc2Vjb25kcyA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMuX3NlbGVjdGVkMTJIb3VycyA9IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNFbXB0eSkge1xyXG4gICAgICB0aGlzLl92YWx1ZSA9IHVuZGVmaW5lZDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICghaXNOb3ROaWwodGhpcy5faG91cnMpKSB7XHJcbiAgICAgICAgdGhpcy5faG91cnMgPSB0aGlzLmRlZmF1bHRIb3VycztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLl92YWx1ZSEuc2V0SG91cnModGhpcy5ob3VycyEpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIWlzTm90TmlsKHRoaXMuX21pbnV0ZXMpKSB7XHJcbiAgICAgICAgdGhpcy5fbWludXRlcyA9IHRoaXMuZGVmYXVsdE1pbnV0ZXM7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5fdmFsdWUhLnNldE1pbnV0ZXModGhpcy5taW51dGVzISk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICghaXNOb3ROaWwodGhpcy5fc2Vjb25kcykpIHtcclxuICAgICAgICB0aGlzLl9zZWNvbmRzID0gdGhpcy5kZWZhdWx0U2Vjb25kcztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLl92YWx1ZSEuc2V0U2Vjb25kcyh0aGlzLnNlY29uZHMhKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMuX3VzZTEySG91cnMpIHtcclxuICAgICAgICBpZiAoIWlzTm90TmlsKHRoaXMuX3NlbGVjdGVkMTJIb3VycykpIHtcclxuICAgICAgICAgIHRoaXMuX3NlbGVjdGVkMTJIb3VycyA9IHRoaXMuZGVmYXVsdDEySG91cnM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkMTJIb3VycyA9PT0gJ1BNJyAmJiB0aGlzLl9ob3VycyEgPCAxMikge1xyXG4gICAgICAgICAgdGhpcy5faG91cnMhICs9IDEyO1xyXG4gICAgICAgICAgdGhpcy5fdmFsdWUhLnNldEhvdXJzKHRoaXMuX2hvdXJzISk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkMTJIb3VycyA9PT0gJ0FNJyAmJiB0aGlzLl9ob3VycyEgPj0gMTIpIHtcclxuICAgICAgICAgIHRoaXMuX2hvdXJzISAtPSAxMjtcclxuICAgICAgICAgIHRoaXMuX3ZhbHVlIS5zZXRIb3Vycyh0aGlzLl9ob3VycyEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5fdmFsdWUgPSBuZXcgRGF0ZSh0aGlzLl92YWx1ZSEpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jaGFuZ2VkKCk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VkKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fY2hhbmdlcy5uZXh0KHRoaXMuX3ZhbHVlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqIFVJIHZpZXcgaG91cnNcclxuICAgKiBHZXQgdmlld0hvdXJzIHdoaWNoIGlzIHNlbGVjdGVkIGluIGB0aW1lLXBpY2tlci1wYW5lbGAgYW5kIGl0cyByYW5nZSBpcyBbMTIsIDEsIDIsIC4uLiwgMTFdXHJcbiAgICovXHJcbiAgZ2V0IHZpZXdIb3VycygpOiBudW1iZXIgfCB1bmRlZmluZWQge1xyXG4gICAgcmV0dXJuIHRoaXMuX3VzZTEySG91cnMgJiYgaXNOb3ROaWwodGhpcy5faG91cnMpID8gdGhpcy5jYWxjdWxhdGVWaWV3SG91cih0aGlzLl9ob3VycyEpIDogdGhpcy5faG91cnM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKiBWYWx1ZSBob3Vyc1xyXG4gICAqIEdldCByZWFsSG91cnMgYW5kIGl0cyByYW5nZSBpcyBbMCwgMSwgMiwgLi4uLCAyMiwgMjNdXHJcbiAgICovXHJcbiAgZ2V0IHJlYWxIb3VycygpOiBudW1iZXIgfCB1bmRlZmluZWQge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hvdXJzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICogU2FtZSBhcyByZWFsSG91cnNcclxuICAgKiBAc2VlIHJlYWxIb3Vyc1xyXG4gICAqL1xyXG4gIGdldCBob3VycygpOiBudW1iZXIgfCB1bmRlZmluZWQge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hvdXJzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICogU2V0IHZpZXdIb3VycyB0byByZWFsSG91cnNcclxuICAgKi9cclxuICBzZXQgaG91cnModmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xyXG4gICAgaWYgKHZhbHVlICE9PSB0aGlzLl9ob3Vycykge1xyXG4gICAgICBpZiAodGhpcy5fdXNlMTJIb3Vycykge1xyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkMTJIb3VycyA9PT0gJ1BNJyAmJiB2YWx1ZSAhPT0gMTIpIHtcclxuICAgICAgICAgIHRoaXMuX2hvdXJzISA9ICh2YWx1ZSBhcyBudW1iZXIpICsgMTI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGVkMTJIb3VycyA9PT0gJ0FNJyAmJiB2YWx1ZSA9PT0gMTIpIHtcclxuICAgICAgICAgIHRoaXMuX2hvdXJzID0gMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5faG91cnMgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5faG91cnMgPSB2YWx1ZTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IG1pbnV0ZXMoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcclxuICAgIHJldHVybiB0aGlzLl9taW51dGVzO1xyXG4gIH1cclxuXHJcbiAgc2V0IG1pbnV0ZXModmFsdWU6IG51bWJlciB8IHVuZGVmaW5lZCkge1xyXG4gICAgaWYgKHZhbHVlICE9PSB0aGlzLl9taW51dGVzKSB7XHJcbiAgICAgIHRoaXMuX21pbnV0ZXMgPSB2YWx1ZTtcclxuICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBzZWNvbmRzKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2Vjb25kcztcclxuICB9XHJcblxyXG4gIHNldCBzZWNvbmRzKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcclxuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fc2Vjb25kcykge1xyXG4gICAgICB0aGlzLl9zZWNvbmRzID0gdmFsdWU7XHJcbiAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgc2VsZWN0ZWQxMkhvdXJzKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2VsZWN0ZWQxMkhvdXJzO1xyXG4gIH1cclxuXHJcbiAgc2V0IHNlbGVjdGVkMTJIb3Vycyh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XHJcbiAgICBpZiAodmFsdWUhLnRvVXBwZXJDYXNlKCkgIT09IHRoaXMuX3NlbGVjdGVkMTJIb3Vycykge1xyXG4gICAgICB0aGlzLl9zZWxlY3RlZDEySG91cnMgPSB2YWx1ZSEudG9VcHBlckNhc2UoKTtcclxuICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBkZWZhdWx0T3BlblZhbHVlKCk6IERhdGUge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRPcGVuVmFsdWU7XHJcbiAgfVxyXG5cclxuICBzZXQgZGVmYXVsdE9wZW5WYWx1ZSh2YWx1ZTogRGF0ZSkge1xyXG4gICAgaWYgKHRoaXMuX2RlZmF1bHRPcGVuVmFsdWUgIT09IHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuX2RlZmF1bHRPcGVuVmFsdWUgPSB2YWx1ZTtcclxuICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldERlZmF1bHRPcGVuVmFsdWUodmFsdWU6IERhdGUpOiB0aGlzIHtcclxuICAgIHRoaXMuZGVmYXVsdE9wZW5WYWx1ZSA9IHZhbHVlO1xyXG4gICAgcmV0dXJuIHRoaXM7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKiBHZXQgZGVhZnVsdFZpZXdIb3VycyB3aGVuIGRlZmF1bHRPcGVuVmFsdWUgaXMgc2V0dGVkXHJcbiAgICogQHNlZSB2aWV3SG91cnNcclxuICAgKi9cclxuICBnZXQgZGVmYXVsdFZpZXdIb3VycygpOiBudW1iZXIge1xyXG4gICAgY29uc3QgaG91cnMgPSB0aGlzLl9kZWZhdWx0T3BlblZhbHVlLmdldEhvdXJzKCk7XHJcbiAgICByZXR1cm4gdGhpcy5fdXNlMTJIb3VycyAmJiBpc05vdE5pbChob3VycykgPyB0aGlzLmNhbGN1bGF0ZVZpZXdIb3VyKGhvdXJzKSA6IGhvdXJzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICogR2V0IGRlZmF1bHRSZWFsSG91cnMgd2hlbiBkZWZhdWx0T3BlblZhbHVlIGlzIHNldHRlZFxyXG4gICAqIEBzZWUgcmVhbEhvdXJzXHJcbiAgICovXHJcbiAgZ2V0IGRlZmF1bHRSZWFsSG91cnMoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0T3BlblZhbHVlLmdldEhvdXJzKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKiBTYW1lIGFzIGRlZmF1bHRSZWFsSG91cnNcclxuICAgKi9cclxuICBnZXQgZGVmYXVsdEhvdXJzKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVmYXVsdE9wZW5WYWx1ZS5nZXRIb3VycygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRlZmF1bHRNaW51dGVzKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVmYXVsdE9wZW5WYWx1ZS5nZXRNaW51dGVzKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgZGVmYXVsdFNlY29uZHMoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0T3BlblZhbHVlLmdldFNlY29uZHMoKTtcclxuICB9XHJcblxyXG4gIGdldCBkZWZhdWx0MTJIb3VycygpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRPcGVuVmFsdWUuZ2V0SG91cnMoKSA+PSAxMiA/ICdQTScgOiAnQU0nO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBwcml2YXRlIGNhbGN1bGF0ZVZpZXdIb3VyKHZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWQxMkhvdXJzID0gdGhpcy5fc2VsZWN0ZWQxMkhvdXJzIHx8IHRoaXMuZGVmYXVsdDEySG91cnM7XHJcbiAgICBpZiAoc2VsZWN0ZWQxMkhvdXJzID09PSAnUE0nICYmIHZhbHVlID4gMTIpIHtcclxuICAgICAgcmV0dXJuIHZhbHVlIC0gMTI7XHJcbiAgICB9XHJcbiAgICBpZiAoc2VsZWN0ZWQxMkhvdXJzID09PSAnQU0nICYmIHZhbHVlID09PSAwKSB7XHJcbiAgICAgIHJldHVybiAxMjtcclxuICAgIH1cclxuICAgIHJldHVybiB2YWx1ZTtcclxuICB9XHJcbn1cclxuIl19