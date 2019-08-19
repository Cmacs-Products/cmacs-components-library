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
var TimeHolder = /** @class */ (function () {
    function TimeHolder() {
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
    TimeHolder.prototype.setDefaultValueIfNil = /**
     * @return {?}
     */
    function () {
        if (!isNotNil(this._value)) {
            this._value = new Date(this.defaultOpenValue);
        }
    };
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @param {?} disabled
     * @return {THIS}
     */
    TimeHolder.prototype.setMinutes = /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @param {?} disabled
     * @return {THIS}
     */
    function (value, disabled) {
        if (disabled) {
            return (/** @type {?} */ (this));
        }
        (/** @type {?} */ (this)).setDefaultValueIfNil();
        (/** @type {?} */ (this)).minutes = value;
        return (/** @type {?} */ (this));
    };
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @param {?} disabled
     * @return {THIS}
     */
    TimeHolder.prototype.setHours = /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @param {?} disabled
     * @return {THIS}
     */
    function (value, disabled) {
        if (disabled) {
            return (/** @type {?} */ (this));
        }
        (/** @type {?} */ (this)).setDefaultValueIfNil();
        (/** @type {?} */ (this)).hours = value;
        return (/** @type {?} */ (this));
    };
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @param {?} disabled
     * @return {THIS}
     */
    TimeHolder.prototype.setSeconds = /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @param {?} disabled
     * @return {THIS}
     */
    function (value, disabled) {
        if (disabled) {
            return (/** @type {?} */ (this));
        }
        (/** @type {?} */ (this)).setDefaultValueIfNil();
        (/** @type {?} */ (this)).seconds = value;
        return (/** @type {?} */ (this));
    };
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @return {THIS}
     */
    TimeHolder.prototype.setUse12Hours = /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @return {THIS}
     */
    function (value) {
        (/** @type {?} */ (this))._use12Hours = value;
        return (/** @type {?} */ (this));
    };
    Object.defineProperty(TimeHolder.prototype, "changes", {
        get: /**
         * @return {?}
         */
        function () {
            return this._changes.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeHolder.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
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
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @param {?=} use12Hours
     * @return {THIS}
     */
    TimeHolder.prototype.setValue = /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @param {?=} use12Hours
     * @return {THIS}
     */
    function (value, use12Hours) {
        if (isNotNil(use12Hours)) {
            (/** @type {?} */ (this))._use12Hours = (/** @type {?} */ (use12Hours));
        }
        (/** @type {?} */ (this)).value = value;
        return (/** @type {?} */ (this));
    };
    /**
     * @return {?}
     */
    TimeHolder.prototype.clear = /**
     * @return {?}
     */
    function () {
        this._clear();
        this.update();
    };
    Object.defineProperty(TimeHolder.prototype, "isEmpty", {
        get: /**
         * @return {?}
         */
        function () {
            return !(isNotNil(this._hours) || isNotNil(this._minutes) || isNotNil(this._seconds));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    TimeHolder.prototype._clear = /**
     * @private
     * @return {?}
     */
    function () {
        this._hours = undefined;
        this._minutes = undefined;
        this._seconds = undefined;
        this._selected12Hours = undefined;
    };
    /**
     * @private
     * @return {?}
     */
    TimeHolder.prototype.update = /**
     * @private
     * @return {?}
     */
    function () {
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
    };
    /**
     * @return {?}
     */
    TimeHolder.prototype.changed = /**
     * @return {?}
     */
    function () {
        this._changes.next(this._value);
    };
    Object.defineProperty(TimeHolder.prototype, "viewHours", {
        /**
         * @description
         * UI view hours
         * Get viewHours which is selected in `time-picker-panel` and its range is [12, 1, 2, ..., 11]
         */
        get: /**
         * \@description
         * UI view hours
         * Get viewHours which is selected in `time-picker-panel` and its range is [12, 1, 2, ..., 11]
         * @return {?}
         */
        function () {
            return this._use12Hours && isNotNil(this._hours) ? this.calculateViewHour((/** @type {?} */ (this._hours))) : this._hours;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeHolder.prototype, "realHours", {
        /**
         * @description
         * Value hours
         * Get realHours and its range is [0, 1, 2, ..., 22, 23]
         */
        get: /**
         * \@description
         * Value hours
         * Get realHours and its range is [0, 1, 2, ..., 22, 23]
         * @return {?}
         */
        function () {
            return this._hours;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeHolder.prototype, "hours", {
        /**
         * @description
         * Same as realHours
         * @see realHours
         */
        get: /**
         * \@description
         * Same as realHours
         * @see realHours
         * @return {?}
         */
        function () {
            return this._hours;
        },
        /**
         * @description
         * Set viewHours to realHours
         */
        set: /**
         * \@description
         * Set viewHours to realHours
         * @param {?} value
         * @return {?}
         */
        function (value) {
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeHolder.prototype, "minutes", {
        get: /**
         * @return {?}
         */
        function () {
            return this._minutes;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value !== this._minutes) {
                this._minutes = value;
                this.update();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeHolder.prototype, "seconds", {
        get: /**
         * @return {?}
         */
        function () {
            return this._seconds;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value !== this._seconds) {
                this._seconds = value;
                this.update();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeHolder.prototype, "selected12Hours", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selected12Hours;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if ((/** @type {?} */ (value)).toUpperCase() !== this._selected12Hours) {
                this._selected12Hours = (/** @type {?} */ (value)).toUpperCase();
                this.update();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeHolder.prototype, "defaultOpenValue", {
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
            if (this._defaultOpenValue !== value) {
                this._defaultOpenValue = value;
                this.update();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @return {THIS}
     */
    TimeHolder.prototype.setDefaultOpenValue = /**
     * @template THIS
     * @this {THIS}
     * @param {?} value
     * @return {THIS}
     */
    function (value) {
        (/** @type {?} */ (this)).defaultOpenValue = value;
        return (/** @type {?} */ (this));
    };
    Object.defineProperty(TimeHolder.prototype, "defaultViewHours", {
        /**
         * @description
         * Get deafultViewHours when defaultOpenValue is setted
         * @see viewHours
         */
        get: /**
         * \@description
         * Get deafultViewHours when defaultOpenValue is setted
         * @see viewHours
         * @return {?}
         */
        function () {
            /** @type {?} */
            var hours = this._defaultOpenValue.getHours();
            return this._use12Hours && isNotNil(hours) ? this.calculateViewHour(hours) : hours;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeHolder.prototype, "defaultRealHours", {
        /**
         * @description
         * Get defaultRealHours when defaultOpenValue is setted
         * @see realHours
         */
        get: /**
         * \@description
         * Get defaultRealHours when defaultOpenValue is setted
         * @see realHours
         * @return {?}
         */
        function () {
            return this._defaultOpenValue.getHours();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeHolder.prototype, "defaultHours", {
        /**
         * @description
         * Same as defaultRealHours
         */
        get: /**
         * \@description
         * Same as defaultRealHours
         * @return {?}
         */
        function () {
            return this._defaultOpenValue.getHours();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeHolder.prototype, "defaultMinutes", {
        get: /**
         * @return {?}
         */
        function () {
            return this._defaultOpenValue.getMinutes();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeHolder.prototype, "defaultSeconds", {
        get: /**
         * @return {?}
         */
        function () {
            return this._defaultOpenValue.getSeconds();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TimeHolder.prototype, "default12Hours", {
        get: /**
         * @return {?}
         */
        function () {
            return this._defaultOpenValue.getHours() >= 12 ? 'PM' : 'AM';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    TimeHolder.prototype.calculateViewHour = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var selected12Hours = this._selected12Hours || this.default12Hours;
        if (selected12Hours === 'PM' && value > 12) {
            return value - 12;
        }
        if (selected12Hours === 'AM' && value === 0) {
            return 12;
        }
        return value;
    };
    return TimeHolder;
}());
export { TimeHolder };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1ob2xkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLWRhdGV0aW1lLXBpY2tlci90aW1lLWhvbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTlDO0lBcVJFO1FBcFJRLGFBQVEsR0FBdUIsU0FBUyxDQUFDO1FBQ3pDLFdBQU0sR0FBdUIsU0FBUyxDQUFDO1FBQ3ZDLGFBQVEsR0FBdUIsU0FBUyxDQUFDO1FBQ3pDLHFCQUFnQixHQUF1QixTQUFTLENBQUM7UUFDakQsZ0JBQVcsR0FBWSxLQUFLLENBQUM7UUFDN0Isc0JBQWlCLEdBQVMsSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUVyQyxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztJQTZReEIsQ0FBQzs7OztJQTNRaEIseUNBQW9COzs7SUFBcEI7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUMxQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQy9DO0lBQ0gsQ0FBQzs7Ozs7Ozs7SUFFRCwrQkFBVTs7Ozs7OztJQUFWLFVBQVcsS0FBYSxFQUFFLFFBQWlCO1FBQ3pDLElBQUksUUFBUSxFQUFFO1lBQ1osT0FBTyxtQkFBQSxJQUFJLEVBQUEsQ0FBQztTQUNiO1FBQ0QsbUJBQUEsSUFBSSxFQUFBLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM1QixtQkFBQSxJQUFJLEVBQUEsQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLE9BQU8sbUJBQUEsSUFBSSxFQUFBLENBQUM7SUFDZCxDQUFDOzs7Ozs7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QUlPLHNDQUFpQjs7Ozs7SUFBekIsVUFBMEIsS0FBYTs7WUFDL0IsZUFBZSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsY0FBYztRQUNwRSxJQUFJLGVBQWUsS0FBSyxJQUFJLElBQUksS0FBSyxHQUFHLEVBQUUsRUFBRTtZQUMxQyxPQUFPLEtBQUssR0FBRyxFQUFFLENBQUM7U0FDbkI7UUFDRCxJQUFJLGVBQWUsS0FBSyxJQUFJLElBQUksS0FBSyxLQUFLLENBQUMsRUFBRTtZQUMzQyxPQUFPLEVBQUUsQ0FBQztTQUNYO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBQ0gsaUJBQUM7QUFBRCxDQUFDLEFBalNELElBaVNDOzs7Ozs7O0lBaFNDLDhCQUFpRDs7Ozs7SUFDakQsNEJBQStDOzs7OztJQUMvQyw4QkFBaUQ7Ozs7O0lBQ2pELHNDQUF5RDs7Ozs7SUFDekQsaUNBQXFDOzs7OztJQUNyQyx1Q0FBNkM7Ozs7O0lBQzdDLDRCQUFpQzs7Ozs7SUFDakMsOEJBQXVDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBpc05vdE5pbCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgVGltZUhvbGRlciB7XHJcbiAgcHJpdmF0ZSBfc2Vjb25kczogbnVtYmVyIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgX2hvdXJzOiBudW1iZXIgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBfbWludXRlczogbnVtYmVyIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgX3NlbGVjdGVkMTJIb3Vyczogc3RyaW5nIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgX3VzZTEySG91cnM6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBwcml2YXRlIF9kZWZhdWx0T3BlblZhbHVlOiBEYXRlID0gbmV3IERhdGUoKTtcclxuICBwcml2YXRlIF92YWx1ZTogRGF0ZSB8IHVuZGVmaW5lZDtcclxuICBwcml2YXRlIF9jaGFuZ2VzID0gbmV3IFN1YmplY3Q8RGF0ZT4oKTtcclxuXHJcbiAgc2V0RGVmYXVsdFZhbHVlSWZOaWwoKTogdm9pZCB7XHJcbiAgICBpZiAoIWlzTm90TmlsKHRoaXMuX3ZhbHVlKSkge1xyXG4gICAgICB0aGlzLl92YWx1ZSA9IG5ldyBEYXRlKHRoaXMuZGVmYXVsdE9wZW5WYWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXRNaW51dGVzKHZhbHVlOiBudW1iZXIsIGRpc2FibGVkOiBib29sZWFuKTogdGhpcyB7XHJcbiAgICBpZiAoZGlzYWJsZWQpIHtcclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNldERlZmF1bHRWYWx1ZUlmTmlsKCk7XHJcbiAgICB0aGlzLm1pbnV0ZXMgPSB2YWx1ZTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgc2V0SG91cnModmFsdWU6IG51bWJlciwgZGlzYWJsZWQ6IGJvb2xlYW4pOiB0aGlzIHtcclxuICAgIGlmIChkaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHRoaXMuc2V0RGVmYXVsdFZhbHVlSWZOaWwoKTtcclxuICAgIHRoaXMuaG91cnMgPSB2YWx1ZTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgc2V0U2Vjb25kcyh2YWx1ZTogbnVtYmVyLCBkaXNhYmxlZDogYm9vbGVhbik6IHRoaXMge1xyXG4gICAgaWYgKGRpc2FibGVkKSB7XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZXREZWZhdWx0VmFsdWVJZk5pbCgpO1xyXG4gICAgdGhpcy5zZWNvbmRzID0gdmFsdWU7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIHNldFVzZTEySG91cnModmFsdWU6IGJvb2xlYW4pOiB0aGlzIHtcclxuICAgIHRoaXMuX3VzZTEySG91cnMgPSB2YWx1ZTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNoYW5nZXMoKTogT2JzZXJ2YWJsZTxEYXRlPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fY2hhbmdlcy5hc09ic2VydmFibGUoKTtcclxuICB9XHJcblxyXG4gIGdldCB2YWx1ZSgpOiBEYXRlIHwgdW5kZWZpbmVkIHtcclxuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcclxuICB9XHJcblxyXG4gIHNldCB2YWx1ZSh2YWx1ZTogRGF0ZSB8IHVuZGVmaW5lZCkge1xyXG4gICAgaWYgKHZhbHVlICE9PSB0aGlzLl92YWx1ZSkge1xyXG4gICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xyXG4gICAgICBpZiAoaXNOb3ROaWwodGhpcy5fdmFsdWUpKSB7XHJcbiAgICAgICAgdGhpcy5faG91cnMgPSB0aGlzLl92YWx1ZSEuZ2V0SG91cnMoKTtcclxuICAgICAgICB0aGlzLl9taW51dGVzID0gdGhpcy5fdmFsdWUhLmdldE1pbnV0ZXMoKTtcclxuICAgICAgICB0aGlzLl9zZWNvbmRzID0gdGhpcy5fdmFsdWUhLmdldFNlY29uZHMoKTtcclxuICAgICAgICBpZiAodGhpcy5fdXNlMTJIb3VycyAmJiBpc05vdE5pbCh0aGlzLl9ob3VycykpIHtcclxuICAgICAgICAgIHRoaXMuX3NlbGVjdGVkMTJIb3VycyA9IHRoaXMuX2hvdXJzID49IDEyID8gJ1BNJyA6ICdBTSc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuX2NsZWFyKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldFZhbHVlKHZhbHVlOiBEYXRlIHwgdW5kZWZpbmVkLCB1c2UxMkhvdXJzPzogYm9vbGVhbik6IHRoaXMge1xyXG4gICAgaWYgKGlzTm90TmlsKHVzZTEySG91cnMpKSB7XHJcbiAgICAgIHRoaXMuX3VzZTEySG91cnMgPSB1c2UxMkhvdXJzIGFzIGJvb2xlYW47XHJcbiAgICB9XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIGNsZWFyKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fY2xlYXIoKTtcclxuICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNFbXB0eSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhKGlzTm90TmlsKHRoaXMuX2hvdXJzKSB8fCBpc05vdE5pbCh0aGlzLl9taW51dGVzKSB8fCBpc05vdE5pbCh0aGlzLl9zZWNvbmRzKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9jbGVhcigpOiB2b2lkIHtcclxuICAgIHRoaXMuX2hvdXJzID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5fbWludXRlcyA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMuX3NlY29uZHMgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLl9zZWxlY3RlZDEySG91cnMgPSB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHVwZGF0ZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzRW1wdHkpIHtcclxuICAgICAgdGhpcy5fdmFsdWUgPSB1bmRlZmluZWQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoIWlzTm90TmlsKHRoaXMuX2hvdXJzKSkge1xyXG4gICAgICAgIHRoaXMuX2hvdXJzID0gdGhpcy5kZWZhdWx0SG91cnM7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5fdmFsdWUhLnNldEhvdXJzKHRoaXMuaG91cnMhKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCFpc05vdE5pbCh0aGlzLl9taW51dGVzKSkge1xyXG4gICAgICAgIHRoaXMuX21pbnV0ZXMgPSB0aGlzLmRlZmF1bHRNaW51dGVzO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuX3ZhbHVlIS5zZXRNaW51dGVzKHRoaXMubWludXRlcyEpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIWlzTm90TmlsKHRoaXMuX3NlY29uZHMpKSB7XHJcbiAgICAgICAgdGhpcy5fc2Vjb25kcyA9IHRoaXMuZGVmYXVsdFNlY29uZHM7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5fdmFsdWUhLnNldFNlY29uZHModGhpcy5zZWNvbmRzISk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLl91c2UxMkhvdXJzKSB7XHJcbiAgICAgICAgaWYgKCFpc05vdE5pbCh0aGlzLl9zZWxlY3RlZDEySG91cnMpKSB7XHJcbiAgICAgICAgICB0aGlzLl9zZWxlY3RlZDEySG91cnMgPSB0aGlzLmRlZmF1bHQxMkhvdXJzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZDEySG91cnMgPT09ICdQTScgJiYgdGhpcy5faG91cnMhIDwgMTIpIHtcclxuICAgICAgICAgIHRoaXMuX2hvdXJzISArPSAxMjtcclxuICAgICAgICAgIHRoaXMuX3ZhbHVlIS5zZXRIb3Vycyh0aGlzLl9ob3VycyEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZDEySG91cnMgPT09ICdBTScgJiYgdGhpcy5faG91cnMhID49IDEyKSB7XHJcbiAgICAgICAgICB0aGlzLl9ob3VycyEgLT0gMTI7XHJcbiAgICAgICAgICB0aGlzLl92YWx1ZSEuc2V0SG91cnModGhpcy5faG91cnMhKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuX3ZhbHVlID0gbmV3IERhdGUodGhpcy5fdmFsdWUhKTtcclxuICAgIH1cclxuICAgIHRoaXMuY2hhbmdlZCgpO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX2NoYW5nZXMubmV4dCh0aGlzLl92YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAZGVzY3JpcHRpb25cclxuICAgKiBVSSB2aWV3IGhvdXJzXHJcbiAgICogR2V0IHZpZXdIb3VycyB3aGljaCBpcyBzZWxlY3RlZCBpbiBgdGltZS1waWNrZXItcGFuZWxgIGFuZCBpdHMgcmFuZ2UgaXMgWzEyLCAxLCAyLCAuLi4sIDExXVxyXG4gICAqL1xyXG4gIGdldCB2aWV3SG91cnMoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcclxuICAgIHJldHVybiB0aGlzLl91c2UxMkhvdXJzICYmIGlzTm90TmlsKHRoaXMuX2hvdXJzKSA/IHRoaXMuY2FsY3VsYXRlVmlld0hvdXIodGhpcy5faG91cnMhKSA6IHRoaXMuX2hvdXJzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICogVmFsdWUgaG91cnNcclxuICAgKiBHZXQgcmVhbEhvdXJzIGFuZCBpdHMgcmFuZ2UgaXMgWzAsIDEsIDIsIC4uLiwgMjIsIDIzXVxyXG4gICAqL1xyXG4gIGdldCByZWFsSG91cnMoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcclxuICAgIHJldHVybiB0aGlzLl9ob3VycztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqIFNhbWUgYXMgcmVhbEhvdXJzXHJcbiAgICogQHNlZSByZWFsSG91cnNcclxuICAgKi9cclxuICBnZXQgaG91cnMoKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcclxuICAgIHJldHVybiB0aGlzLl9ob3VycztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqIFNldCB2aWV3SG91cnMgdG8gcmVhbEhvdXJzXHJcbiAgICovXHJcbiAgc2V0IGhvdXJzKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcclxuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5faG91cnMpIHtcclxuICAgICAgaWYgKHRoaXMuX3VzZTEySG91cnMpIHtcclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZDEySG91cnMgPT09ICdQTScgJiYgdmFsdWUgIT09IDEyKSB7XHJcbiAgICAgICAgICB0aGlzLl9ob3VycyEgPSAodmFsdWUgYXMgbnVtYmVyKSArIDEyO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zZWxlY3RlZDEySG91cnMgPT09ICdBTScgJiYgdmFsdWUgPT09IDEyKSB7XHJcbiAgICAgICAgICB0aGlzLl9ob3VycyA9IDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuX2hvdXJzID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuX2hvdXJzID0gdmFsdWU7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBtaW51dGVzKCk6IG51bWJlciB8IHVuZGVmaW5lZCB7XHJcbiAgICByZXR1cm4gdGhpcy5fbWludXRlcztcclxuICB9XHJcblxyXG4gIHNldCBtaW51dGVzKHZhbHVlOiBudW1iZXIgfCB1bmRlZmluZWQpIHtcclxuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fbWludXRlcykge1xyXG4gICAgICB0aGlzLl9taW51dGVzID0gdmFsdWU7XHJcbiAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgc2Vjb25kcygpOiBudW1iZXIgfCB1bmRlZmluZWQge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NlY29uZHM7XHJcbiAgfVxyXG5cclxuICBzZXQgc2Vjb25kcyh2YWx1ZTogbnVtYmVyIHwgdW5kZWZpbmVkKSB7XHJcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuX3NlY29uZHMpIHtcclxuICAgICAgdGhpcy5fc2Vjb25kcyA9IHZhbHVlO1xyXG4gICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IHNlbGVjdGVkMTJIb3VycygpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xyXG4gICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkMTJIb3VycztcclxuICB9XHJcblxyXG4gIHNldCBzZWxlY3RlZDEySG91cnModmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xyXG4gICAgaWYgKHZhbHVlIS50b1VwcGVyQ2FzZSgpICE9PSB0aGlzLl9zZWxlY3RlZDEySG91cnMpIHtcclxuICAgICAgdGhpcy5fc2VsZWN0ZWQxMkhvdXJzID0gdmFsdWUhLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgZGVmYXVsdE9wZW5WYWx1ZSgpOiBEYXRlIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0T3BlblZhbHVlO1xyXG4gIH1cclxuXHJcbiAgc2V0IGRlZmF1bHRPcGVuVmFsdWUodmFsdWU6IERhdGUpIHtcclxuICAgIGlmICh0aGlzLl9kZWZhdWx0T3BlblZhbHVlICE9PSB2YWx1ZSkge1xyXG4gICAgICB0aGlzLl9kZWZhdWx0T3BlblZhbHVlID0gdmFsdWU7XHJcbiAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZXREZWZhdWx0T3BlblZhbHVlKHZhbHVlOiBEYXRlKTogdGhpcyB7XHJcbiAgICB0aGlzLmRlZmF1bHRPcGVuVmFsdWUgPSB2YWx1ZTtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICogR2V0IGRlYWZ1bHRWaWV3SG91cnMgd2hlbiBkZWZhdWx0T3BlblZhbHVlIGlzIHNldHRlZFxyXG4gICAqIEBzZWUgdmlld0hvdXJzXHJcbiAgICovXHJcbiAgZ2V0IGRlZmF1bHRWaWV3SG91cnMoKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IGhvdXJzID0gdGhpcy5fZGVmYXVsdE9wZW5WYWx1ZS5nZXRIb3VycygpO1xyXG4gICAgcmV0dXJuIHRoaXMuX3VzZTEySG91cnMgJiYgaXNOb3ROaWwoaG91cnMpID8gdGhpcy5jYWxjdWxhdGVWaWV3SG91cihob3VycykgOiBob3VycztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBkZXNjcmlwdGlvblxyXG4gICAqIEdldCBkZWZhdWx0UmVhbEhvdXJzIHdoZW4gZGVmYXVsdE9wZW5WYWx1ZSBpcyBzZXR0ZWRcclxuICAgKiBAc2VlIHJlYWxIb3Vyc1xyXG4gICAqL1xyXG4gIGdldCBkZWZhdWx0UmVhbEhvdXJzKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVmYXVsdE9wZW5WYWx1ZS5nZXRIb3VycygpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGRlc2NyaXB0aW9uXHJcbiAgICogU2FtZSBhcyBkZWZhdWx0UmVhbEhvdXJzXHJcbiAgICovXHJcbiAgZ2V0IGRlZmF1bHRIb3VycygpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRPcGVuVmFsdWUuZ2V0SG91cnMoKTtcclxuICB9XHJcblxyXG4gIGdldCBkZWZhdWx0TWludXRlcygpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRPcGVuVmFsdWUuZ2V0TWludXRlcygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGRlZmF1bHRTZWNvbmRzKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGVmYXVsdE9wZW5WYWx1ZS5nZXRTZWNvbmRzKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgZGVmYXVsdDEySG91cnMoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9kZWZhdWx0T3BlblZhbHVlLmdldEhvdXJzKCkgPj0gMTIgPyAnUE0nIDogJ0FNJztcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuXHJcbiAgcHJpdmF0ZSBjYWxjdWxhdGVWaWV3SG91cih2YWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IHNlbGVjdGVkMTJIb3VycyA9IHRoaXMuX3NlbGVjdGVkMTJIb3VycyB8fCB0aGlzLmRlZmF1bHQxMkhvdXJzO1xyXG4gICAgaWYgKHNlbGVjdGVkMTJIb3VycyA9PT0gJ1BNJyAmJiB2YWx1ZSA+IDEyKSB7XHJcbiAgICAgIHJldHVybiB2YWx1ZSAtIDEyO1xyXG4gICAgfVxyXG4gICAgaWYgKHNlbGVjdGVkMTJIb3VycyA9PT0gJ0FNJyAmJiB2YWx1ZSA9PT0gMCkge1xyXG4gICAgICByZXR1cm4gMTI7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfVxyXG59XHJcbiJdfQ==