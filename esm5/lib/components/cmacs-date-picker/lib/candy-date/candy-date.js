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
import { addMonths, addYears, endOfMonth, setDay, setMonth } from 'date-fns';
/**
 * Wrapping kind APIs for date operating and unify
 * NOTE: every new API return new CandyDate object without side effects to the former Date object
 * NOTE: most APIs are based on local time other than customized locale id (this needs tobe support in future)
 * TODO: support format() against to angular's core API
 */
var /**
 * Wrapping kind APIs for date operating and unify
 * NOTE: every new API return new CandyDate object without side effects to the former Date object
 * NOTE: most APIs are based on local time other than customized locale id (this needs tobe support in future)
 * TODO: support format() against to angular's core API
 */
CandyDate = /** @class */ (function () {
    // locale: string; // Custom specified locale ID
    function CandyDate(date) {
        // if (!(this instanceof CandyDate)) {
        //   return new CandyDate(date);
        // }
        if (date) {
            if (date instanceof Date) {
                this.nativeDate = date;
            }
            else if (typeof date === 'string') {
                this.nativeDate = new Date(date);
            }
            else {
                throw new Error('The input date type is not supported ("Date" and "string" is now recommended)');
            }
        }
        else {
            this.nativeDate = new Date();
        }
    }
    // getLocale(): string {
    //   return this.locale;
    // }
    // setLocale(locale: string): CandyDate {
    //   this.locale = locale;
    //   return this;
    // }
    // ---------------------------------------------------------------------
    // | Native shortcuts
    // ---------------------------------------------------------------------
    // getLocale(): string {
    //   return this.locale;
    // }
    // setLocale(locale: string): CandyDate {
    //   this.locale = locale;
    //   return this;
    // }
    // ---------------------------------------------------------------------
    // | Native shortcuts
    // ---------------------------------------------------------------------
    /**
     * @return {?}
     */
    CandyDate.prototype.getYear = 
    // getLocale(): string {
    //   return this.locale;
    // }
    // setLocale(locale: string): CandyDate {
    //   this.locale = locale;
    //   return this;
    // }
    // ---------------------------------------------------------------------
    // | Native shortcuts
    // ---------------------------------------------------------------------
    /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getFullYear();
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.getMonth = /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getMonth();
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.getDay = /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getDay();
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.getTime = /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getTime();
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.getDate = /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getDate();
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.getHours = /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getHours();
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.getMinutes = /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getMinutes();
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.getSeconds = /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getSeconds();
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.getMilliseconds = /**
     * @return {?}
     */
    function () {
        return this.nativeDate.getMilliseconds();
    };
    // ---------------------------------------------------------------------
    // | New implementing APIs
    // ---------------------------------------------------------------------
    // ---------------------------------------------------------------------
    // | New implementing APIs
    // ---------------------------------------------------------------------
    /**
     * @return {?}
     */
    CandyDate.prototype.clone = 
    // ---------------------------------------------------------------------
    // | New implementing APIs
    // ---------------------------------------------------------------------
    /**
     * @return {?}
     */
    function () {
        return new CandyDate(new Date(this.nativeDate));
    };
    /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} second
     * @return {?}
     */
    CandyDate.prototype.setHms = /**
     * @param {?} hour
     * @param {?} minute
     * @param {?} second
     * @return {?}
     */
    function (hour, minute, second) {
        /** @type {?} */
        var date = new Date(this.nativeDate);
        date.setHours(hour, minute, second);
        return new CandyDate(date);
    };
    /**
     * @param {?} year
     * @return {?}
     */
    CandyDate.prototype.setYear = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        // return new CandyDate(setYear(this.date, year));
        /** @type {?} */
        var date = new Date(this.nativeDate);
        date.setFullYear(year);
        return new CandyDate(date);
    };
    /**
     * @param {?} amount
     * @return {?}
     */
    CandyDate.prototype.addYears = /**
     * @param {?} amount
     * @return {?}
     */
    function (amount) {
        return new CandyDate(addYears(this.nativeDate, amount));
    };
    // NOTE: month starts from 0
    // tslint:disable-next-line: max-line-length
    // NOTE: Don't use the native API for month manipulation as it not restrict the date when it overflows, eg. (new Date('2018-7-31')).setMonth(1) will be date of 2018-3-03 instead of 2018-2-28
    // NOTE: month starts from 0
    // tslint:disable-next-line: max-line-length
    // NOTE: Don't use the native API for month manipulation as it not restrict the date when it overflows, eg. (new Date('2018-7-31')).setMonth(1) will be date of 2018-3-03 instead of 2018-2-28
    /**
     * @param {?} month
     * @return {?}
     */
    CandyDate.prototype.setMonth = 
    // NOTE: month starts from 0
    // tslint:disable-next-line: max-line-length
    // NOTE: Don't use the native API for month manipulation as it not restrict the date when it overflows, eg. (new Date('2018-7-31')).setMonth(1) will be date of 2018-3-03 instead of 2018-2-28
    /**
     * @param {?} month
     * @return {?}
     */
    function (month) {
        // const date = new Date(this.nativeDate);
        // date.setMonth(month);
        // return new CandyDate(date);
        return new CandyDate(setMonth(this.nativeDate, month));
    };
    /**
     * @param {?} amount
     * @return {?}
     */
    CandyDate.prototype.addMonths = /**
     * @param {?} amount
     * @return {?}
     */
    function (amount) {
        return new CandyDate(addMonths(this.nativeDate, amount));
    };
    /**
     * @param {?} day
     * @param {?=} options
     * @return {?}
     */
    CandyDate.prototype.setDay = /**
     * @param {?} day
     * @param {?=} options
     * @return {?}
     */
    function (day, options) {
        return new CandyDate(setDay(this.nativeDate, day, options));
    };
    /**
     * @param {?} amount
     * @return {?}
     */
    CandyDate.prototype.setDate = /**
     * @param {?} amount
     * @return {?}
     */
    function (amount) {
        /** @type {?} */
        var date = new Date(this.nativeDate);
        date.setDate(amount);
        return new CandyDate(date);
    };
    /**
     * @param {?} amount
     * @return {?}
     */
    CandyDate.prototype.addDays = /**
     * @param {?} amount
     * @return {?}
     */
    function (amount) {
        return this.setDate(this.getDate() + amount);
    };
    /**
     * @param {?} grain
     * @return {?}
     */
    CandyDate.prototype.endOf = /**
     * @param {?} grain
     * @return {?}
     */
    function (grain) {
        switch (grain) {
            case 'month':
                return new CandyDate(endOfMonth(this.nativeDate));
        }
        return null;
    };
    /**
     * @param {?} date
     * @param {?} grain
     * @return {?}
     */
    CandyDate.prototype.isSame = /**
     * @param {?} date
     * @param {?} grain
     * @return {?}
     */
    function (date, grain) {
        // TODO: Precipitate into a function "compare()"
        if (date) {
            /** @type {?} */
            var left = this.toNativeDate();
            /** @type {?} */
            var right = this.toNativeDate(date);
            switch (grain) {
                case 'year':
                    return left.getFullYear() === right.getFullYear();
                case 'month':
                    return left.getFullYear() === right.getFullYear() && left.getMonth() === right.getMonth();
                case 'day':
                    return (left.getFullYear() === right.getFullYear() &&
                        left.getMonth() === right.getMonth() &&
                        left.getDate() === right.getDate());
                case 'hour':
                    return (left.getFullYear() === right.getFullYear() &&
                        left.getMonth() === right.getMonth() &&
                        left.getDate() === right.getDate() &&
                        left.getHours() === right.getHours());
                case 'minute':
                    return (left.getFullYear() === right.getFullYear() &&
                        left.getMonth() === right.getMonth() &&
                        left.getDate() === right.getDate() &&
                        left.getHours() === right.getHours() &&
                        left.getMinutes() === right.getMinutes());
                case 'second':
                    return (left.getFullYear() === right.getFullYear() &&
                        left.getMonth() === right.getMonth() &&
                        left.getDate() === right.getDate() &&
                        left.getHours() === right.getHours() &&
                        left.getMinutes() === right.getMinutes() &&
                        left.getSeconds() === right.getSeconds());
            }
        }
        return false;
    };
    /**
     * @param {?} date
     * @param {?} grain
     * @return {?}
     */
    CandyDate.prototype.isAfter = /**
     * @param {?} date
     * @param {?} grain
     * @return {?}
     */
    function (date, grain) {
        // TODO: Precipitate into a function "compare()"
        if (date) {
            /** @type {?} */
            var left = this.toNativeDate();
            /** @type {?} */
            var right = this.toNativeDate(date);
            switch (grain) {
                case 'year':
                    return left.getFullYear() > right.getFullYear();
                case 'month':
                    return (left.getFullYear() > right.getFullYear() ||
                        (left.getFullYear() === right.getFullYear() && left.getMonth() > right.getMonth()));
                case 'day':
                    return (left.getFullYear() > right.getFullYear() ||
                        (left.getFullYear() === right.getFullYear() && left.getMonth() > right.getMonth()) ||
                        (left.getFullYear() === right.getFullYear() &&
                            left.getMonth() === right.getMonth() &&
                            left.getDate() > right.getDate()));
                case 'hour':
                    return (left.getFullYear() > right.getFullYear() ||
                        (left.getFullYear() === right.getFullYear() && left.getMonth() > right.getMonth()) ||
                        (left.getFullYear() === right.getFullYear() &&
                            left.getMonth() === right.getMonth() &&
                            left.getDate() > right.getDate()) ||
                        (left.getFullYear() === right.getFullYear() &&
                            left.getMonth() === right.getMonth() &&
                            left.getDate() === right.getDate() &&
                            left.getHours() > right.getHours()));
                case 'minute':
                    return (left.getFullYear() > right.getFullYear() ||
                        (left.getFullYear() === right.getFullYear() && left.getMonth() > right.getMonth()) ||
                        (left.getFullYear() === right.getFullYear() &&
                            left.getMonth() === right.getMonth() &&
                            left.getDate() > right.getDate()) ||
                        (left.getFullYear() === right.getFullYear() &&
                            left.getMonth() === right.getMonth() &&
                            left.getDate() === right.getDate() &&
                            left.getHours() > right.getHours()) ||
                        (left.getFullYear() === right.getFullYear() &&
                            left.getMonth() === right.getMonth() &&
                            left.getDate() === right.getDate() &&
                            left.getHours() === right.getHours() &&
                            left.getMinutes() > right.getMinutes()));
                case 'second':
                    return (left.getFullYear() > right.getFullYear() ||
                        (left.getFullYear() === right.getFullYear() && left.getMonth() > right.getMonth()) ||
                        (left.getFullYear() === right.getFullYear() &&
                            left.getMonth() === right.getMonth() &&
                            left.getDate() > right.getDate()) ||
                        (left.getFullYear() === right.getFullYear() &&
                            left.getMonth() === right.getMonth() &&
                            left.getDate() === right.getDate() &&
                            left.getHours() > right.getHours()) ||
                        (left.getFullYear() === right.getFullYear() &&
                            left.getMonth() === right.getMonth() &&
                            left.getDate() === right.getDate() &&
                            left.getHours() === right.getHours() &&
                            left.getMinutes() > right.getMinutes()) ||
                        (left.getFullYear() === right.getFullYear() &&
                            left.getMonth() === right.getMonth() &&
                            left.getDate() === right.getDate() &&
                            left.getHours() === right.getHours() &&
                            left.getMinutes() === right.getMinutes() &&
                            left.getSeconds() > right.getSeconds()));
            }
        }
        return false;
    };
    // TODO: Precipitate into a function "compare()"
    // TODO: Precipitate into a function "compare()"
    /**
     * @param {?} date
     * @param {?} grain
     * @return {?}
     */
    CandyDate.prototype.isBefore = 
    // TODO: Precipitate into a function "compare()"
    /**
     * @param {?} date
     * @param {?} grain
     * @return {?}
     */
    function (date, grain) {
        if (date) {
            /** @type {?} */
            var left = this.toNativeDate();
            /** @type {?} */
            var right = this.toNativeDate(date);
            switch (grain) {
                case 'year':
                    return left.getFullYear() < right.getFullYear();
                case 'month':
                    return (left.getFullYear() < right.getFullYear() ||
                        (left.getFullYear() === right.getFullYear() && left.getMonth() < right.getMonth()));
                case 'day':
                    return (left.getFullYear() < right.getFullYear() ||
                        (left.getFullYear() === right.getFullYear() && left.getMonth() < right.getMonth()) ||
                        (left.getFullYear() === right.getFullYear() &&
                            left.getMonth() === right.getMonth() &&
                            left.getDate() < right.getDate()));
                case 'hour':
                    return (left.getFullYear() < right.getFullYear() ||
                        (left.getFullYear() === right.getFullYear() && left.getMonth() < right.getMonth()) ||
                        (left.getFullYear() === right.getFullYear() &&
                            left.getMonth() === right.getMonth() &&
                            left.getDate() < right.getDate()) ||
                        (left.getFullYear() === right.getFullYear() &&
                            left.getMonth() === right.getMonth() &&
                            left.getDate() === right.getDate() &&
                            left.getHours() < right.getHours()));
                case 'minute':
                    return (left.getFullYear() < right.getFullYear() ||
                        (left.getFullYear() === right.getFullYear() && left.getMonth() < right.getMonth()) ||
                        (left.getFullYear() === right.getFullYear() &&
                            left.getMonth() === right.getMonth() &&
                            left.getDate() < right.getDate()) ||
                        (left.getFullYear() === right.getFullYear() &&
                            left.getMonth() === right.getMonth() &&
                            left.getDate() === right.getDate() &&
                            left.getHours() < right.getHours()) ||
                        (left.getFullYear() === right.getFullYear() &&
                            left.getMonth() === right.getMonth() &&
                            left.getDate() === right.getDate() &&
                            left.getHours() === right.getHours() &&
                            left.getMinutes() < right.getMinutes()));
                case 'second':
                    return (left.getFullYear() < right.getFullYear() ||
                        (left.getFullYear() === right.getFullYear() && left.getMonth() < right.getMonth()) ||
                        (left.getFullYear() === right.getFullYear() &&
                            left.getMonth() === right.getMonth() &&
                            left.getDate() < right.getDate()) ||
                        (left.getFullYear() === right.getFullYear() &&
                            left.getMonth() === right.getMonth() &&
                            left.getDate() === right.getDate() &&
                            left.getHours() < right.getHours()) ||
                        (left.getFullYear() === right.getFullYear() &&
                            left.getMonth() === right.getMonth() &&
                            left.getDate() === right.getDate() &&
                            left.getHours() === right.getHours() &&
                            left.getMinutes() < right.getMinutes()) ||
                        (left.getFullYear() === right.getFullYear() &&
                            left.getMonth() === right.getMonth() &&
                            left.getDate() === right.getDate() &&
                            left.getHours() === right.getHours() &&
                            left.getMinutes() === right.getMinutes() &&
                            left.getSeconds() < right.getSeconds()));
            }
        }
        return false;
    };
    // Equal to today accurate to "day"
    // Equal to today accurate to "day"
    /**
     * @return {?}
     */
    CandyDate.prototype.isToday = 
    // Equal to today accurate to "day"
    /**
     * @return {?}
     */
    function () {
        return this.isSame(new Date(), 'day');
    };
    /**
     * @return {?}
     */
    CandyDate.prototype.isInvalid = /**
     * @return {?}
     */
    function () {
        return isNaN(this.nativeDate.valueOf());
    };
    /**
     * @private
     * @param {?=} date
     * @return {?}
     */
    CandyDate.prototype.toNativeDate = /**
     * @private
     * @param {?=} date
     * @return {?}
     */
    function (date) {
        if (date === void 0) { date = this; }
        return date instanceof CandyDate ? date.nativeDate : date;
    };
    return CandyDate;
}());
/**
 * Wrapping kind APIs for date operating and unify
 * NOTE: every new API return new CandyDate object without side effects to the former Date object
 * NOTE: most APIs are based on local time other than customized locale id (this needs tobe support in future)
 * TODO: support format() against to angular's core API
 */
export { CandyDate };
if (false) {
    /** @type {?} */
    CandyDate.prototype.nativeDate;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuZHktZGF0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtZGF0ZS1waWNrZXIvbGliL2NhbmR5LWRhdGUvY2FuZHktZGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQU9BLE9BQU8sRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLE1BQU0sVUFBVSxDQUFDOzs7Ozs7O0FBUzdFOzs7Ozs7O0lBRUUsZ0RBQWdEO0lBRWhELG1CQUFZLElBQW9CO1FBQzlCLHNDQUFzQztRQUN0QyxnQ0FBZ0M7UUFDaEMsSUFBSTtRQUVKLElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBSSxJQUFJLFlBQVksSUFBSSxFQUFFO2dCQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzthQUN4QjtpQkFBTSxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtnQkFDbkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNsQztpQkFBTTtnQkFDTCxNQUFNLElBQUksS0FBSyxDQUFDLCtFQUErRSxDQUFDLENBQUM7YUFDbEc7U0FDRjthQUFNO1lBQ0wsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1NBQzlCO0lBQ0gsQ0FBQztJQUVELHdCQUF3QjtJQUN4Qix3QkFBd0I7SUFDeEIsSUFBSTtJQUVKLHlDQUF5QztJQUN6QywwQkFBMEI7SUFDMUIsaUJBQWlCO0lBQ2pCLElBQUk7SUFFSix3RUFBd0U7SUFDeEUscUJBQXFCO0lBQ3JCLHdFQUF3RTs7Ozs7Ozs7Ozs7Ozs7SUFFeEUsMkJBQU87Ozs7Ozs7Ozs7Ozs7O0lBQVA7UUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkMsQ0FBQzs7OztJQUVE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QyxDQUFDOzs7O0lBRUQsNkJBQVM7OztJQUFUO1FBQ0UsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLENBQUM7Ozs7OztJQUVPLGdDQUFZOzs7OztJQUFwQixVQUFxQixJQUE2QjtRQUE3QixxQkFBQSxFQUFBLFdBQTZCO1FBQ2hELE9BQU8sSUFBSSxZQUFZLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzVELENBQUM7SUFRSCxnQkFBQztBQUFELENBQUMsQUFoV0QsSUFnV0M7Ozs7Ozs7Ozs7SUEvVkMsK0JBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcbmltcG9ydCB7IGFkZE1vbnRocywgYWRkWWVhcnMsIGVuZE9mTW9udGgsIHNldERheSwgc2V0TW9udGggfSBmcm9tICdkYXRlLWZucyc7XHJcbmltcG9ydCB7IEluZGV4YWJsZU9iamVjdCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG4vKipcclxuICogV3JhcHBpbmcga2luZCBBUElzIGZvciBkYXRlIG9wZXJhdGluZyBhbmQgdW5pZnlcclxuICogTk9URTogZXZlcnkgbmV3IEFQSSByZXR1cm4gbmV3IENhbmR5RGF0ZSBvYmplY3Qgd2l0aG91dCBzaWRlIGVmZmVjdHMgdG8gdGhlIGZvcm1lciBEYXRlIG9iamVjdFxyXG4gKiBOT1RFOiBtb3N0IEFQSXMgYXJlIGJhc2VkIG9uIGxvY2FsIHRpbWUgb3RoZXIgdGhhbiBjdXN0b21pemVkIGxvY2FsZSBpZCAodGhpcyBuZWVkcyB0b2JlIHN1cHBvcnQgaW4gZnV0dXJlKVxyXG4gKiBUT0RPOiBzdXBwb3J0IGZvcm1hdCgpIGFnYWluc3QgdG8gYW5ndWxhcidzIGNvcmUgQVBJXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQ2FuZHlEYXRlIGltcGxlbWVudHMgSW5kZXhhYmxlT2JqZWN0IHtcclxuICBuYXRpdmVEYXRlOiBEYXRlO1xyXG4gIC8vIGxvY2FsZTogc3RyaW5nOyAvLyBDdXN0b20gc3BlY2lmaWVkIGxvY2FsZSBJRFxyXG5cclxuICBjb25zdHJ1Y3RvcihkYXRlPzogRGF0ZSB8IHN0cmluZykge1xyXG4gICAgLy8gaWYgKCEodGhpcyBpbnN0YW5jZW9mIENhbmR5RGF0ZSkpIHtcclxuICAgIC8vICAgcmV0dXJuIG5ldyBDYW5keURhdGUoZGF0ZSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgaWYgKGRhdGUpIHtcclxuICAgICAgaWYgKGRhdGUgaW5zdGFuY2VvZiBEYXRlKSB7XHJcbiAgICAgICAgdGhpcy5uYXRpdmVEYXRlID0gZGF0ZTtcclxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZGF0ZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICB0aGlzLm5hdGl2ZURhdGUgPSBuZXcgRGF0ZShkYXRlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBpbnB1dCBkYXRlIHR5cGUgaXMgbm90IHN1cHBvcnRlZCAoXCJEYXRlXCIgYW5kIFwic3RyaW5nXCIgaXMgbm93IHJlY29tbWVuZGVkKScpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm5hdGl2ZURhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gZ2V0TG9jYWxlKCk6IHN0cmluZyB7XHJcbiAgLy8gICByZXR1cm4gdGhpcy5sb2NhbGU7XHJcbiAgLy8gfVxyXG5cclxuICAvLyBzZXRMb2NhbGUobG9jYWxlOiBzdHJpbmcpOiBDYW5keURhdGUge1xyXG4gIC8vICAgdGhpcy5sb2NhbGUgPSBsb2NhbGU7XHJcbiAgLy8gICByZXR1cm4gdGhpcztcclxuICAvLyB9XHJcblxyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIC8vIHwgTmF0aXZlIHNob3J0Y3V0c1xyXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICBnZXRZZWFyKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5uYXRpdmVEYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgfVxyXG5cclxuICBnZXRNb250aCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMubmF0aXZlRGF0ZS5nZXRNb250aCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF5KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5uYXRpdmVEYXRlLmdldERheSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0VGltZSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMubmF0aXZlRGF0ZS5nZXRUaW1lKCk7XHJcbiAgfVxyXG5cclxuICBnZXREYXRlKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5uYXRpdmVEYXRlLmdldERhdGUoKTtcclxuICB9XHJcblxyXG4gIGdldEhvdXJzKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5uYXRpdmVEYXRlLmdldEhvdXJzKCk7XHJcbiAgfVxyXG5cclxuICBnZXRNaW51dGVzKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5uYXRpdmVEYXRlLmdldE1pbnV0ZXMoKTtcclxuICB9XHJcblxyXG4gIGdldFNlY29uZHMoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLm5hdGl2ZURhdGUuZ2V0U2Vjb25kcygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TWlsbGlzZWNvbmRzKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5uYXRpdmVEYXRlLmdldE1pbGxpc2Vjb25kcygpO1xyXG4gIH1cclxuXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgLy8gfCBOZXcgaW1wbGVtZW50aW5nIEFQSXNcclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcbiAgY2xvbmUoKTogQ2FuZHlEYXRlIHtcclxuICAgIHJldHVybiBuZXcgQ2FuZHlEYXRlKG5ldyBEYXRlKHRoaXMubmF0aXZlRGF0ZSkpO1xyXG4gIH1cclxuXHJcbiAgc2V0SG1zKGhvdXI6IG51bWJlciwgbWludXRlOiBudW1iZXIsIHNlY29uZDogbnVtYmVyKTogQ2FuZHlEYXRlIHtcclxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aGlzLm5hdGl2ZURhdGUpO1xyXG4gICAgZGF0ZS5zZXRIb3Vycyhob3VyLCBtaW51dGUsIHNlY29uZCk7XHJcbiAgICByZXR1cm4gbmV3IENhbmR5RGF0ZShkYXRlKTtcclxuICB9XHJcblxyXG4gIHNldFllYXIoeWVhcjogbnVtYmVyKTogQ2FuZHlEYXRlIHtcclxuICAgIC8vIHJldHVybiBuZXcgQ2FuZHlEYXRlKHNldFllYXIodGhpcy5kYXRlLCB5ZWFyKSk7XHJcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodGhpcy5uYXRpdmVEYXRlKTtcclxuICAgIGRhdGUuc2V0RnVsbFllYXIoeWVhcik7XHJcbiAgICByZXR1cm4gbmV3IENhbmR5RGF0ZShkYXRlKTtcclxuICB9XHJcblxyXG4gIGFkZFllYXJzKGFtb3VudDogbnVtYmVyKTogQ2FuZHlEYXRlIHtcclxuICAgIHJldHVybiBuZXcgQ2FuZHlEYXRlKGFkZFllYXJzKHRoaXMubmF0aXZlRGF0ZSwgYW1vdW50KSk7XHJcbiAgfVxyXG5cclxuICAvLyBOT1RFOiBtb250aCBzdGFydHMgZnJvbSAwXHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWF4LWxpbmUtbGVuZ3RoXHJcbiAgLy8gTk9URTogRG9uJ3QgdXNlIHRoZSBuYXRpdmUgQVBJIGZvciBtb250aCBtYW5pcHVsYXRpb24gYXMgaXQgbm90IHJlc3RyaWN0IHRoZSBkYXRlIHdoZW4gaXQgb3ZlcmZsb3dzLCBlZy4gKG5ldyBEYXRlKCcyMDE4LTctMzEnKSkuc2V0TW9udGgoMSkgd2lsbCBiZSBkYXRlIG9mIDIwMTgtMy0wMyBpbnN0ZWFkIG9mIDIwMTgtMi0yOFxyXG4gIHNldE1vbnRoKG1vbnRoOiBudW1iZXIpOiBDYW5keURhdGUge1xyXG4gICAgLy8gY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRoaXMubmF0aXZlRGF0ZSk7XHJcbiAgICAvLyBkYXRlLnNldE1vbnRoKG1vbnRoKTtcclxuICAgIC8vIHJldHVybiBuZXcgQ2FuZHlEYXRlKGRhdGUpO1xyXG4gICAgcmV0dXJuIG5ldyBDYW5keURhdGUoc2V0TW9udGgodGhpcy5uYXRpdmVEYXRlLCBtb250aCkpO1xyXG4gIH1cclxuXHJcbiAgYWRkTW9udGhzKGFtb3VudDogbnVtYmVyKTogQ2FuZHlEYXRlIHtcclxuICAgIHJldHVybiBuZXcgQ2FuZHlEYXRlKGFkZE1vbnRocyh0aGlzLm5hdGl2ZURhdGUsIGFtb3VudCkpO1xyXG4gIH1cclxuXHJcbiAgc2V0RGF5KGRheTogbnVtYmVyLCBvcHRpb25zPzogeyB3ZWVrU3RhcnRzT246IG51bWJlciB9KTogQ2FuZHlEYXRlIHtcclxuICAgIHJldHVybiBuZXcgQ2FuZHlEYXRlKHNldERheSh0aGlzLm5hdGl2ZURhdGUsIGRheSwgb3B0aW9ucykpO1xyXG4gIH1cclxuXHJcbiAgc2V0RGF0ZShhbW91bnQ6IG51bWJlcik6IENhbmR5RGF0ZSB7XHJcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodGhpcy5uYXRpdmVEYXRlKTtcclxuICAgIGRhdGUuc2V0RGF0ZShhbW91bnQpO1xyXG4gICAgcmV0dXJuIG5ldyBDYW5keURhdGUoZGF0ZSk7XHJcbiAgfVxyXG5cclxuICBhZGREYXlzKGFtb3VudDogbnVtYmVyKTogQ2FuZHlEYXRlIHtcclxuICAgIHJldHVybiB0aGlzLnNldERhdGUodGhpcy5nZXREYXRlKCkgKyBhbW91bnQpO1xyXG4gIH1cclxuXHJcbiAgZW5kT2YoZ3JhaW46ICdtb250aCcpOiBDYW5keURhdGUgfCBudWxsIHtcclxuICAgIHN3aXRjaCAoZ3JhaW4pIHtcclxuICAgICAgY2FzZSAnbW9udGgnOlxyXG4gICAgICAgIHJldHVybiBuZXcgQ2FuZHlEYXRlKGVuZE9mTW9udGgodGhpcy5uYXRpdmVEYXRlKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIGlzU2FtZShkYXRlOiBDYW5keURhdGUgfCBEYXRlLCBncmFpbjogQ2FuZHlEYXRlQ29tcGFyZUdyYWluKTogYm9vbGVhbiB7XHJcbiAgICAvLyBUT0RPOiBQcmVjaXBpdGF0ZSBpbnRvIGEgZnVuY3Rpb24gXCJjb21wYXJlKClcIlxyXG4gICAgaWYgKGRhdGUpIHtcclxuICAgICAgY29uc3QgbGVmdCA9IHRoaXMudG9OYXRpdmVEYXRlKCk7XHJcbiAgICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy50b05hdGl2ZURhdGUoZGF0ZSk7XHJcbiAgICAgIHN3aXRjaCAoZ3JhaW4pIHtcclxuICAgICAgICBjYXNlICd5ZWFyJzpcclxuICAgICAgICAgIHJldHVybiBsZWZ0LmdldEZ1bGxZZWFyKCkgPT09IHJpZ2h0LmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgY2FzZSAnbW9udGgnOlxyXG4gICAgICAgICAgcmV0dXJuIGxlZnQuZ2V0RnVsbFllYXIoKSA9PT0gcmlnaHQuZ2V0RnVsbFllYXIoKSAmJiBsZWZ0LmdldE1vbnRoKCkgPT09IHJpZ2h0LmdldE1vbnRoKCk7XHJcbiAgICAgICAgY2FzZSAnZGF5JzpcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIGxlZnQuZ2V0RnVsbFllYXIoKSA9PT0gcmlnaHQuZ2V0RnVsbFllYXIoKSAmJlxyXG4gICAgICAgICAgICBsZWZ0LmdldE1vbnRoKCkgPT09IHJpZ2h0LmdldE1vbnRoKCkgJiZcclxuICAgICAgICAgICAgbGVmdC5nZXREYXRlKCkgPT09IHJpZ2h0LmdldERhdGUoKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICBjYXNlICdob3VyJzpcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIGxlZnQuZ2V0RnVsbFllYXIoKSA9PT0gcmlnaHQuZ2V0RnVsbFllYXIoKSAmJlxyXG4gICAgICAgICAgICBsZWZ0LmdldE1vbnRoKCkgPT09IHJpZ2h0LmdldE1vbnRoKCkgJiZcclxuICAgICAgICAgICAgbGVmdC5nZXREYXRlKCkgPT09IHJpZ2h0LmdldERhdGUoKSAmJlxyXG4gICAgICAgICAgICBsZWZ0LmdldEhvdXJzKCkgPT09IHJpZ2h0LmdldEhvdXJzKClcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgY2FzZSAnbWludXRlJzpcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIGxlZnQuZ2V0RnVsbFllYXIoKSA9PT0gcmlnaHQuZ2V0RnVsbFllYXIoKSAmJlxyXG4gICAgICAgICAgICBsZWZ0LmdldE1vbnRoKCkgPT09IHJpZ2h0LmdldE1vbnRoKCkgJiZcclxuICAgICAgICAgICAgbGVmdC5nZXREYXRlKCkgPT09IHJpZ2h0LmdldERhdGUoKSAmJlxyXG4gICAgICAgICAgICBsZWZ0LmdldEhvdXJzKCkgPT09IHJpZ2h0LmdldEhvdXJzKCkgJiZcclxuICAgICAgICAgICAgbGVmdC5nZXRNaW51dGVzKCkgPT09IHJpZ2h0LmdldE1pbnV0ZXMoKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICBjYXNlICdzZWNvbmQnOlxyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgbGVmdC5nZXRGdWxsWWVhcigpID09PSByaWdodC5nZXRGdWxsWWVhcigpICYmXHJcbiAgICAgICAgICAgIGxlZnQuZ2V0TW9udGgoKSA9PT0gcmlnaHQuZ2V0TW9udGgoKSAmJlxyXG4gICAgICAgICAgICBsZWZ0LmdldERhdGUoKSA9PT0gcmlnaHQuZ2V0RGF0ZSgpICYmXHJcbiAgICAgICAgICAgIGxlZnQuZ2V0SG91cnMoKSA9PT0gcmlnaHQuZ2V0SG91cnMoKSAmJlxyXG4gICAgICAgICAgICBsZWZ0LmdldE1pbnV0ZXMoKSA9PT0gcmlnaHQuZ2V0TWludXRlcygpICYmXHJcbiAgICAgICAgICAgIGxlZnQuZ2V0U2Vjb25kcygpID09PSByaWdodC5nZXRTZWNvbmRzKClcclxuICAgICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGlzQWZ0ZXIoZGF0ZTogQ2FuZHlEYXRlIHwgRGF0ZSB8IG51bGwsIGdyYWluOiBDYW5keURhdGVDb21wYXJlR3JhaW4pOiBib29sZWFuIHtcclxuICAgIC8vIFRPRE86IFByZWNpcGl0YXRlIGludG8gYSBmdW5jdGlvbiBcImNvbXBhcmUoKVwiXHJcbiAgICBpZiAoZGF0ZSkge1xyXG4gICAgICBjb25zdCBsZWZ0ID0gdGhpcy50b05hdGl2ZURhdGUoKTtcclxuICAgICAgY29uc3QgcmlnaHQgPSB0aGlzLnRvTmF0aXZlRGF0ZShkYXRlKTtcclxuICAgICAgc3dpdGNoIChncmFpbikge1xyXG4gICAgICAgIGNhc2UgJ3llYXInOlxyXG4gICAgICAgICAgcmV0dXJuIGxlZnQuZ2V0RnVsbFllYXIoKSA+IHJpZ2h0LmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgY2FzZSAnbW9udGgnOlxyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgbGVmdC5nZXRGdWxsWWVhcigpID4gcmlnaHQuZ2V0RnVsbFllYXIoKSB8fFxyXG4gICAgICAgICAgICAobGVmdC5nZXRGdWxsWWVhcigpID09PSByaWdodC5nZXRGdWxsWWVhcigpICYmIGxlZnQuZ2V0TW9udGgoKSA+IHJpZ2h0LmdldE1vbnRoKCkpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIGNhc2UgJ2RheSc6XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBsZWZ0LmdldEZ1bGxZZWFyKCkgPiByaWdodC5nZXRGdWxsWWVhcigpIHx8XHJcbiAgICAgICAgICAgIChsZWZ0LmdldEZ1bGxZZWFyKCkgPT09IHJpZ2h0LmdldEZ1bGxZZWFyKCkgJiYgbGVmdC5nZXRNb250aCgpID4gcmlnaHQuZ2V0TW9udGgoKSkgfHxcclxuICAgICAgICAgICAgKGxlZnQuZ2V0RnVsbFllYXIoKSA9PT0gcmlnaHQuZ2V0RnVsbFllYXIoKSAmJlxyXG4gICAgICAgICAgICAgIGxlZnQuZ2V0TW9udGgoKSA9PT0gcmlnaHQuZ2V0TW9udGgoKSAmJlxyXG4gICAgICAgICAgICAgIGxlZnQuZ2V0RGF0ZSgpID4gcmlnaHQuZ2V0RGF0ZSgpKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICBjYXNlICdob3VyJzpcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIGxlZnQuZ2V0RnVsbFllYXIoKSA+IHJpZ2h0LmdldEZ1bGxZZWFyKCkgfHxcclxuICAgICAgICAgICAgKGxlZnQuZ2V0RnVsbFllYXIoKSA9PT0gcmlnaHQuZ2V0RnVsbFllYXIoKSAmJiBsZWZ0LmdldE1vbnRoKCkgPiByaWdodC5nZXRNb250aCgpKSB8fFxyXG4gICAgICAgICAgICAobGVmdC5nZXRGdWxsWWVhcigpID09PSByaWdodC5nZXRGdWxsWWVhcigpICYmXHJcbiAgICAgICAgICAgICAgbGVmdC5nZXRNb250aCgpID09PSByaWdodC5nZXRNb250aCgpICYmXHJcbiAgICAgICAgICAgICAgbGVmdC5nZXREYXRlKCkgPiByaWdodC5nZXREYXRlKCkpIHx8XHJcbiAgICAgICAgICAgIChsZWZ0LmdldEZ1bGxZZWFyKCkgPT09IHJpZ2h0LmdldEZ1bGxZZWFyKCkgJiZcclxuICAgICAgICAgICAgICBsZWZ0LmdldE1vbnRoKCkgPT09IHJpZ2h0LmdldE1vbnRoKCkgJiZcclxuICAgICAgICAgICAgICBsZWZ0LmdldERhdGUoKSA9PT0gcmlnaHQuZ2V0RGF0ZSgpICYmXHJcbiAgICAgICAgICAgICAgbGVmdC5nZXRIb3VycygpID4gcmlnaHQuZ2V0SG91cnMoKSlcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgY2FzZSAnbWludXRlJzpcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIGxlZnQuZ2V0RnVsbFllYXIoKSA+IHJpZ2h0LmdldEZ1bGxZZWFyKCkgfHxcclxuICAgICAgICAgICAgKGxlZnQuZ2V0RnVsbFllYXIoKSA9PT0gcmlnaHQuZ2V0RnVsbFllYXIoKSAmJiBsZWZ0LmdldE1vbnRoKCkgPiByaWdodC5nZXRNb250aCgpKSB8fFxyXG4gICAgICAgICAgICAobGVmdC5nZXRGdWxsWWVhcigpID09PSByaWdodC5nZXRGdWxsWWVhcigpICYmXHJcbiAgICAgICAgICAgICAgbGVmdC5nZXRNb250aCgpID09PSByaWdodC5nZXRNb250aCgpICYmXHJcbiAgICAgICAgICAgICAgbGVmdC5nZXREYXRlKCkgPiByaWdodC5nZXREYXRlKCkpIHx8XHJcbiAgICAgICAgICAgIChsZWZ0LmdldEZ1bGxZZWFyKCkgPT09IHJpZ2h0LmdldEZ1bGxZZWFyKCkgJiZcclxuICAgICAgICAgICAgICBsZWZ0LmdldE1vbnRoKCkgPT09IHJpZ2h0LmdldE1vbnRoKCkgJiZcclxuICAgICAgICAgICAgICBsZWZ0LmdldERhdGUoKSA9PT0gcmlnaHQuZ2V0RGF0ZSgpICYmXHJcbiAgICAgICAgICAgICAgbGVmdC5nZXRIb3VycygpID4gcmlnaHQuZ2V0SG91cnMoKSkgfHxcclxuICAgICAgICAgICAgKGxlZnQuZ2V0RnVsbFllYXIoKSA9PT0gcmlnaHQuZ2V0RnVsbFllYXIoKSAmJlxyXG4gICAgICAgICAgICAgIGxlZnQuZ2V0TW9udGgoKSA9PT0gcmlnaHQuZ2V0TW9udGgoKSAmJlxyXG4gICAgICAgICAgICAgIGxlZnQuZ2V0RGF0ZSgpID09PSByaWdodC5nZXREYXRlKCkgJiZcclxuICAgICAgICAgICAgICBsZWZ0LmdldEhvdXJzKCkgPT09IHJpZ2h0LmdldEhvdXJzKCkgJiZcclxuICAgICAgICAgICAgICBsZWZ0LmdldE1pbnV0ZXMoKSA+IHJpZ2h0LmdldE1pbnV0ZXMoKSlcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgY2FzZSAnc2Vjb25kJzpcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIGxlZnQuZ2V0RnVsbFllYXIoKSA+IHJpZ2h0LmdldEZ1bGxZZWFyKCkgfHxcclxuICAgICAgICAgICAgKGxlZnQuZ2V0RnVsbFllYXIoKSA9PT0gcmlnaHQuZ2V0RnVsbFllYXIoKSAmJiBsZWZ0LmdldE1vbnRoKCkgPiByaWdodC5nZXRNb250aCgpKSB8fFxyXG4gICAgICAgICAgICAobGVmdC5nZXRGdWxsWWVhcigpID09PSByaWdodC5nZXRGdWxsWWVhcigpICYmXHJcbiAgICAgICAgICAgICAgbGVmdC5nZXRNb250aCgpID09PSByaWdodC5nZXRNb250aCgpICYmXHJcbiAgICAgICAgICAgICAgbGVmdC5nZXREYXRlKCkgPiByaWdodC5nZXREYXRlKCkpIHx8XHJcbiAgICAgICAgICAgIChsZWZ0LmdldEZ1bGxZZWFyKCkgPT09IHJpZ2h0LmdldEZ1bGxZZWFyKCkgJiZcclxuICAgICAgICAgICAgICBsZWZ0LmdldE1vbnRoKCkgPT09IHJpZ2h0LmdldE1vbnRoKCkgJiZcclxuICAgICAgICAgICAgICBsZWZ0LmdldERhdGUoKSA9PT0gcmlnaHQuZ2V0RGF0ZSgpICYmXHJcbiAgICAgICAgICAgICAgbGVmdC5nZXRIb3VycygpID4gcmlnaHQuZ2V0SG91cnMoKSkgfHxcclxuICAgICAgICAgICAgKGxlZnQuZ2V0RnVsbFllYXIoKSA9PT0gcmlnaHQuZ2V0RnVsbFllYXIoKSAmJlxyXG4gICAgICAgICAgICAgIGxlZnQuZ2V0TW9udGgoKSA9PT0gcmlnaHQuZ2V0TW9udGgoKSAmJlxyXG4gICAgICAgICAgICAgIGxlZnQuZ2V0RGF0ZSgpID09PSByaWdodC5nZXREYXRlKCkgJiZcclxuICAgICAgICAgICAgICBsZWZ0LmdldEhvdXJzKCkgPT09IHJpZ2h0LmdldEhvdXJzKCkgJiZcclxuICAgICAgICAgICAgICBsZWZ0LmdldE1pbnV0ZXMoKSA+IHJpZ2h0LmdldE1pbnV0ZXMoKSkgfHxcclxuICAgICAgICAgICAgKGxlZnQuZ2V0RnVsbFllYXIoKSA9PT0gcmlnaHQuZ2V0RnVsbFllYXIoKSAmJlxyXG4gICAgICAgICAgICAgIGxlZnQuZ2V0TW9udGgoKSA9PT0gcmlnaHQuZ2V0TW9udGgoKSAmJlxyXG4gICAgICAgICAgICAgIGxlZnQuZ2V0RGF0ZSgpID09PSByaWdodC5nZXREYXRlKCkgJiZcclxuICAgICAgICAgICAgICBsZWZ0LmdldEhvdXJzKCkgPT09IHJpZ2h0LmdldEhvdXJzKCkgJiZcclxuICAgICAgICAgICAgICBsZWZ0LmdldE1pbnV0ZXMoKSA9PT0gcmlnaHQuZ2V0TWludXRlcygpICYmXHJcbiAgICAgICAgICAgICAgbGVmdC5nZXRTZWNvbmRzKCkgPiByaWdodC5nZXRTZWNvbmRzKCkpXHJcbiAgICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvLyBUT0RPOiBQcmVjaXBpdGF0ZSBpbnRvIGEgZnVuY3Rpb24gXCJjb21wYXJlKClcIlxyXG4gIGlzQmVmb3JlKGRhdGU6IENhbmR5RGF0ZSB8IERhdGUgfCBudWxsLCBncmFpbjogQ2FuZHlEYXRlQ29tcGFyZUdyYWluKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoZGF0ZSkge1xyXG4gICAgICBjb25zdCBsZWZ0ID0gdGhpcy50b05hdGl2ZURhdGUoKTtcclxuICAgICAgY29uc3QgcmlnaHQgPSB0aGlzLnRvTmF0aXZlRGF0ZShkYXRlKTtcclxuICAgICAgc3dpdGNoIChncmFpbikge1xyXG4gICAgICAgIGNhc2UgJ3llYXInOlxyXG4gICAgICAgICAgcmV0dXJuIGxlZnQuZ2V0RnVsbFllYXIoKSA8IHJpZ2h0LmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgY2FzZSAnbW9udGgnOlxyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgbGVmdC5nZXRGdWxsWWVhcigpIDwgcmlnaHQuZ2V0RnVsbFllYXIoKSB8fFxyXG4gICAgICAgICAgICAobGVmdC5nZXRGdWxsWWVhcigpID09PSByaWdodC5nZXRGdWxsWWVhcigpICYmIGxlZnQuZ2V0TW9udGgoKSA8IHJpZ2h0LmdldE1vbnRoKCkpXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIGNhc2UgJ2RheSc6XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBsZWZ0LmdldEZ1bGxZZWFyKCkgPCByaWdodC5nZXRGdWxsWWVhcigpIHx8XHJcbiAgICAgICAgICAgIChsZWZ0LmdldEZ1bGxZZWFyKCkgPT09IHJpZ2h0LmdldEZ1bGxZZWFyKCkgJiYgbGVmdC5nZXRNb250aCgpIDwgcmlnaHQuZ2V0TW9udGgoKSkgfHxcclxuICAgICAgICAgICAgKGxlZnQuZ2V0RnVsbFllYXIoKSA9PT0gcmlnaHQuZ2V0RnVsbFllYXIoKSAmJlxyXG4gICAgICAgICAgICAgIGxlZnQuZ2V0TW9udGgoKSA9PT0gcmlnaHQuZ2V0TW9udGgoKSAmJlxyXG4gICAgICAgICAgICAgIGxlZnQuZ2V0RGF0ZSgpIDwgcmlnaHQuZ2V0RGF0ZSgpKVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICBjYXNlICdob3VyJzpcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIGxlZnQuZ2V0RnVsbFllYXIoKSA8IHJpZ2h0LmdldEZ1bGxZZWFyKCkgfHxcclxuICAgICAgICAgICAgKGxlZnQuZ2V0RnVsbFllYXIoKSA9PT0gcmlnaHQuZ2V0RnVsbFllYXIoKSAmJiBsZWZ0LmdldE1vbnRoKCkgPCByaWdodC5nZXRNb250aCgpKSB8fFxyXG4gICAgICAgICAgICAobGVmdC5nZXRGdWxsWWVhcigpID09PSByaWdodC5nZXRGdWxsWWVhcigpICYmXHJcbiAgICAgICAgICAgICAgbGVmdC5nZXRNb250aCgpID09PSByaWdodC5nZXRNb250aCgpICYmXHJcbiAgICAgICAgICAgICAgbGVmdC5nZXREYXRlKCkgPCByaWdodC5nZXREYXRlKCkpIHx8XHJcbiAgICAgICAgICAgIChsZWZ0LmdldEZ1bGxZZWFyKCkgPT09IHJpZ2h0LmdldEZ1bGxZZWFyKCkgJiZcclxuICAgICAgICAgICAgICBsZWZ0LmdldE1vbnRoKCkgPT09IHJpZ2h0LmdldE1vbnRoKCkgJiZcclxuICAgICAgICAgICAgICBsZWZ0LmdldERhdGUoKSA9PT0gcmlnaHQuZ2V0RGF0ZSgpICYmXHJcbiAgICAgICAgICAgICAgbGVmdC5nZXRIb3VycygpIDwgcmlnaHQuZ2V0SG91cnMoKSlcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgY2FzZSAnbWludXRlJzpcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIGxlZnQuZ2V0RnVsbFllYXIoKSA8IHJpZ2h0LmdldEZ1bGxZZWFyKCkgfHxcclxuICAgICAgICAgICAgKGxlZnQuZ2V0RnVsbFllYXIoKSA9PT0gcmlnaHQuZ2V0RnVsbFllYXIoKSAmJiBsZWZ0LmdldE1vbnRoKCkgPCByaWdodC5nZXRNb250aCgpKSB8fFxyXG4gICAgICAgICAgICAobGVmdC5nZXRGdWxsWWVhcigpID09PSByaWdodC5nZXRGdWxsWWVhcigpICYmXHJcbiAgICAgICAgICAgICAgbGVmdC5nZXRNb250aCgpID09PSByaWdodC5nZXRNb250aCgpICYmXHJcbiAgICAgICAgICAgICAgbGVmdC5nZXREYXRlKCkgPCByaWdodC5nZXREYXRlKCkpIHx8XHJcbiAgICAgICAgICAgIChsZWZ0LmdldEZ1bGxZZWFyKCkgPT09IHJpZ2h0LmdldEZ1bGxZZWFyKCkgJiZcclxuICAgICAgICAgICAgICBsZWZ0LmdldE1vbnRoKCkgPT09IHJpZ2h0LmdldE1vbnRoKCkgJiZcclxuICAgICAgICAgICAgICBsZWZ0LmdldERhdGUoKSA9PT0gcmlnaHQuZ2V0RGF0ZSgpICYmXHJcbiAgICAgICAgICAgICAgbGVmdC5nZXRIb3VycygpIDwgcmlnaHQuZ2V0SG91cnMoKSkgfHxcclxuICAgICAgICAgICAgKGxlZnQuZ2V0RnVsbFllYXIoKSA9PT0gcmlnaHQuZ2V0RnVsbFllYXIoKSAmJlxyXG4gICAgICAgICAgICAgIGxlZnQuZ2V0TW9udGgoKSA9PT0gcmlnaHQuZ2V0TW9udGgoKSAmJlxyXG4gICAgICAgICAgICAgIGxlZnQuZ2V0RGF0ZSgpID09PSByaWdodC5nZXREYXRlKCkgJiZcclxuICAgICAgICAgICAgICBsZWZ0LmdldEhvdXJzKCkgPT09IHJpZ2h0LmdldEhvdXJzKCkgJiZcclxuICAgICAgICAgICAgICBsZWZ0LmdldE1pbnV0ZXMoKSA8IHJpZ2h0LmdldE1pbnV0ZXMoKSlcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgY2FzZSAnc2Vjb25kJzpcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIGxlZnQuZ2V0RnVsbFllYXIoKSA8IHJpZ2h0LmdldEZ1bGxZZWFyKCkgfHxcclxuICAgICAgICAgICAgKGxlZnQuZ2V0RnVsbFllYXIoKSA9PT0gcmlnaHQuZ2V0RnVsbFllYXIoKSAmJiBsZWZ0LmdldE1vbnRoKCkgPCByaWdodC5nZXRNb250aCgpKSB8fFxyXG4gICAgICAgICAgICAobGVmdC5nZXRGdWxsWWVhcigpID09PSByaWdodC5nZXRGdWxsWWVhcigpICYmXHJcbiAgICAgICAgICAgICAgbGVmdC5nZXRNb250aCgpID09PSByaWdodC5nZXRNb250aCgpICYmXHJcbiAgICAgICAgICAgICAgbGVmdC5nZXREYXRlKCkgPCByaWdodC5nZXREYXRlKCkpIHx8XHJcbiAgICAgICAgICAgIChsZWZ0LmdldEZ1bGxZZWFyKCkgPT09IHJpZ2h0LmdldEZ1bGxZZWFyKCkgJiZcclxuICAgICAgICAgICAgICBsZWZ0LmdldE1vbnRoKCkgPT09IHJpZ2h0LmdldE1vbnRoKCkgJiZcclxuICAgICAgICAgICAgICBsZWZ0LmdldERhdGUoKSA9PT0gcmlnaHQuZ2V0RGF0ZSgpICYmXHJcbiAgICAgICAgICAgICAgbGVmdC5nZXRIb3VycygpIDwgcmlnaHQuZ2V0SG91cnMoKSkgfHxcclxuICAgICAgICAgICAgKGxlZnQuZ2V0RnVsbFllYXIoKSA9PT0gcmlnaHQuZ2V0RnVsbFllYXIoKSAmJlxyXG4gICAgICAgICAgICAgIGxlZnQuZ2V0TW9udGgoKSA9PT0gcmlnaHQuZ2V0TW9udGgoKSAmJlxyXG4gICAgICAgICAgICAgIGxlZnQuZ2V0RGF0ZSgpID09PSByaWdodC5nZXREYXRlKCkgJiZcclxuICAgICAgICAgICAgICBsZWZ0LmdldEhvdXJzKCkgPT09IHJpZ2h0LmdldEhvdXJzKCkgJiZcclxuICAgICAgICAgICAgICBsZWZ0LmdldE1pbnV0ZXMoKSA8IHJpZ2h0LmdldE1pbnV0ZXMoKSkgfHxcclxuICAgICAgICAgICAgKGxlZnQuZ2V0RnVsbFllYXIoKSA9PT0gcmlnaHQuZ2V0RnVsbFllYXIoKSAmJlxyXG4gICAgICAgICAgICAgIGxlZnQuZ2V0TW9udGgoKSA9PT0gcmlnaHQuZ2V0TW9udGgoKSAmJlxyXG4gICAgICAgICAgICAgIGxlZnQuZ2V0RGF0ZSgpID09PSByaWdodC5nZXREYXRlKCkgJiZcclxuICAgICAgICAgICAgICBsZWZ0LmdldEhvdXJzKCkgPT09IHJpZ2h0LmdldEhvdXJzKCkgJiZcclxuICAgICAgICAgICAgICBsZWZ0LmdldE1pbnV0ZXMoKSA9PT0gcmlnaHQuZ2V0TWludXRlcygpICYmXHJcbiAgICAgICAgICAgICAgbGVmdC5nZXRTZWNvbmRzKCkgPCByaWdodC5nZXRTZWNvbmRzKCkpXHJcbiAgICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvLyBFcXVhbCB0byB0b2RheSBhY2N1cmF0ZSB0byBcImRheVwiXHJcbiAgaXNUb2RheSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLmlzU2FtZShuZXcgRGF0ZSgpLCAnZGF5Jyk7XHJcbiAgfVxyXG5cclxuICBpc0ludmFsaWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gaXNOYU4odGhpcy5uYXRpdmVEYXRlLnZhbHVlT2YoKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHRvTmF0aXZlRGF0ZShkYXRlOiBDYW5keURhdGUgfCBEYXRlID0gdGhpcyk6IERhdGUge1xyXG4gICAgcmV0dXJuIGRhdGUgaW5zdGFuY2VvZiBDYW5keURhdGUgPyBkYXRlLm5hdGl2ZURhdGUgOiBkYXRlO1xyXG4gIH1cclxuXHJcbiAgLy8gY29tcGFyZShkYXRlOiBDYW5keURhdGUsIERhdGUsIGdyYWluOiBDYW5keURhdGVDb21wYXJlR3JhaW4gPSAnbWlsbGlzZWNvbmQnKTogbnVtYmVyIHtcclxuICAvLyAgIGNvbnN0IGxldmVsID0geyAnbWlsbGlzZWNvbmQnOiAxLCAnc2Vjb25kJzogMTAwMCwgJ21pbnV0ZSc6IDEwMDAgKiA2MCwgJ2hvdXInOiAxMDAwICogNjAgKiA2MCwgJ2RheSc6IDEwMDAgKiA2MCAqIDYwICogMjQgfVsgZ3JhaW4gXTtcclxuICAvLyAgIGNvbnN0IGxlZnQgPSB0aGlzLm5hdGl2ZURhdGUuZ2V0VGltZSgpIC8gbGV2ZWw7XHJcbiAgLy8gICBjb25zdCByaWdodCA9IChkYXRlIGluc3RhbmNlb2YgQ2FuZHlEYXRlID8gZGF0ZS5uYXRpdmVEYXRlIDogZGF0ZSkuZ2V0VGltZSgpIC8gbGV2ZWw7XHJcbiAgLy8gICByZXR1cm4gTWF0aC5mbG9vcihsZWZ0KSAtIE1hdGguZmxvb3IocmlnaHQpO1xyXG4gIC8vIH1cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgQ2FuZHlEYXRlQ29tcGFyZUdyYWluID0gJ3llYXInIHwgJ21vbnRoJyB8ICdkYXknIHwgJ2hvdXInIHwgJ21pbnV0ZScgfCAnc2Vjb25kJztcclxuXHJcbmV4cG9ydCB0eXBlIENhbmR5RGF0ZUNvbXBhcmVUeXBlID0gJ2VxJyB8ICdndCcgfCAnbHQnO1xyXG4iXX0=