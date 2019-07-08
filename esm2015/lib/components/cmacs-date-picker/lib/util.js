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
/** @type {?} */
const defaultDisabledTime = {
    /**
     * @return {?}
     */
    disabledHours() {
        return [];
    },
    /**
     * @return {?}
     */
    disabledMinutes() {
        return [];
    },
    /**
     * @return {?}
     */
    disabledSeconds() {
        return [];
    }
};
/**
 * @param {?} value
 * @param {?} disabledTime
 * @return {?}
 */
export function getTimeConfig(value, disabledTime) {
    /** @type {?} */
    let disabledTimeConfig = disabledTime ? disabledTime(value && value.nativeDate) : ((/** @type {?} */ ({})));
    disabledTimeConfig = Object.assign({}, defaultDisabledTime, disabledTimeConfig);
    return disabledTimeConfig;
}
/**
 * @param {?} value
 * @param {?} disabledTimeConfig
 * @return {?}
 */
export function isTimeValidByConfig(value, disabledTimeConfig) {
    /** @type {?} */
    let invalidTime = false;
    if (value) {
        /** @type {?} */
        const hour = value.getHours();
        /** @type {?} */
        const minutes = value.getMinutes();
        /** @type {?} */
        const seconds = value.getSeconds();
        /** @type {?} */
        const disabledHours = disabledTimeConfig.disabledHours();
        if (disabledHours.indexOf(hour) === -1) {
            /** @type {?} */
            const disabledMinutes = disabledTimeConfig.disabledMinutes(hour);
            if (disabledMinutes.indexOf(minutes) === -1) {
                /** @type {?} */
                const disabledSeconds = disabledTimeConfig.disabledSeconds(hour, minutes);
                invalidTime = disabledSeconds.indexOf(seconds) !== -1;
            }
            else {
                invalidTime = true;
            }
        }
        else {
            invalidTime = true;
        }
    }
    return !invalidTime;
}
/**
 * @param {?} value
 * @param {?} disabledTime
 * @return {?}
 */
export function isTimeValid(value, disabledTime) {
    /** @type {?} */
    const disabledTimeConfig = getTimeConfig(value, disabledTime);
    return isTimeValidByConfig(value, disabledTimeConfig);
}
/**
 * @param {?} value
 * @param {?=} disabledDate
 * @param {?=} disabledTime
 * @return {?}
 */
export function isAllowedDate(value, disabledDate, disabledTime) {
    if (disabledDate) {
        if (disabledDate(value.nativeDate)) {
            return false;
        }
    }
    if (disabledTime) {
        if (!isTimeValid(value, disabledTime)) {
            return false;
        }
    }
    return true;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtZGF0ZS1waWNrZXIvbGliL3V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O01BV00sbUJBQW1CLEdBQXVCOzs7O0lBQzlDLGFBQWE7UUFDWCxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7Ozs7SUFDRCxlQUFlO1FBQ2IsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDOzs7O0lBQ0QsZUFBZTtRQUNiLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztDQUNGOzs7Ozs7QUFFRCxNQUFNLFVBQVUsYUFBYSxDQUFDLEtBQWdCLEVBQUUsWUFBNEI7O1FBQ3RFLGtCQUFrQixHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQUEsRUFBRSxFQUFzQixDQUFDO0lBQzVHLGtCQUFrQixxQkFDYixtQkFBbUIsRUFDbkIsa0JBQWtCLENBQ3RCLENBQUM7SUFDRixPQUFPLGtCQUFrQixDQUFDO0FBQzVCLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxtQkFBbUIsQ0FBQyxLQUFnQixFQUFFLGtCQUFzQzs7UUFDdEYsV0FBVyxHQUFHLEtBQUs7SUFDdkIsSUFBSSxLQUFLLEVBQUU7O2NBQ0gsSUFBSSxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUU7O2NBQ3ZCLE9BQU8sR0FBRyxLQUFLLENBQUMsVUFBVSxFQUFFOztjQUM1QixPQUFPLEdBQUcsS0FBSyxDQUFDLFVBQVUsRUFBRTs7Y0FDNUIsYUFBYSxHQUFHLGtCQUFrQixDQUFDLGFBQWEsRUFBRTtRQUN4RCxJQUFJLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7O2tCQUNoQyxlQUFlLEdBQUcsa0JBQWtCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQztZQUNoRSxJQUFJLGVBQWUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7O3NCQUNyQyxlQUFlLEdBQUcsa0JBQWtCLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUM7Z0JBQ3pFLFdBQVcsR0FBRyxlQUFlLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQ3ZEO2lCQUFNO2dCQUNMLFdBQVcsR0FBRyxJQUFJLENBQUM7YUFDcEI7U0FDRjthQUFNO1lBQ0wsV0FBVyxHQUFHLElBQUksQ0FBQztTQUNwQjtLQUNGO0lBQ0QsT0FBTyxDQUFDLFdBQVcsQ0FBQztBQUN0QixDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsV0FBVyxDQUFDLEtBQWdCLEVBQUUsWUFBNEI7O1VBQ2xFLGtCQUFrQixHQUFHLGFBQWEsQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDO0lBQzdELE9BQU8sbUJBQW1CLENBQUMsS0FBSyxFQUFFLGtCQUFrQixDQUFDLENBQUM7QUFDeEQsQ0FBQzs7Ozs7OztBQUVELE1BQU0sVUFBVSxhQUFhLENBQUMsS0FBZ0IsRUFBRSxZQUE2QixFQUFFLFlBQTZCO0lBQzFHLElBQUksWUFBWSxFQUFFO1FBQ2hCLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUNsQyxPQUFPLEtBQUssQ0FBQztTQUNkO0tBQ0Y7SUFDRCxJQUFJLFlBQVksRUFBRTtRQUNoQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsRUFBRTtZQUNyQyxPQUFPLEtBQUssQ0FBQztTQUNkO0tBQ0Y7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IERpc2FibGVkRGF0ZUZuLCBEaXNhYmxlZFRpbWVDb25maWcsIERpc2FibGVkVGltZUZuIH0gZnJvbSAnLi4vc3RhbmRhcmQtdHlwZXMnO1xyXG5pbXBvcnQgeyBDYW5keURhdGUgfSBmcm9tICcuL2NhbmR5LWRhdGUvY2FuZHktZGF0ZSc7XHJcblxyXG5jb25zdCBkZWZhdWx0RGlzYWJsZWRUaW1lOiBEaXNhYmxlZFRpbWVDb25maWcgPSB7XHJcbiAgZGlzYWJsZWRIb3VycygpOiBudW1iZXJbXSB7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfSxcclxuICBkaXNhYmxlZE1pbnV0ZXMoKTogbnVtYmVyW10ge1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH0sXHJcbiAgZGlzYWJsZWRTZWNvbmRzKCk6IG51bWJlcltdIHtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGltZUNvbmZpZyh2YWx1ZTogQ2FuZHlEYXRlLCBkaXNhYmxlZFRpbWU6IERpc2FibGVkVGltZUZuKTogRGlzYWJsZWRUaW1lQ29uZmlnIHtcclxuICBsZXQgZGlzYWJsZWRUaW1lQ29uZmlnID0gZGlzYWJsZWRUaW1lID8gZGlzYWJsZWRUaW1lKHZhbHVlICYmIHZhbHVlLm5hdGl2ZURhdGUpIDogKHt9IGFzIERpc2FibGVkVGltZUNvbmZpZyk7XHJcbiAgZGlzYWJsZWRUaW1lQ29uZmlnID0ge1xyXG4gICAgLi4uZGVmYXVsdERpc2FibGVkVGltZSxcclxuICAgIC4uLmRpc2FibGVkVGltZUNvbmZpZ1xyXG4gIH07XHJcbiAgcmV0dXJuIGRpc2FibGVkVGltZUNvbmZpZztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzVGltZVZhbGlkQnlDb25maWcodmFsdWU6IENhbmR5RGF0ZSwgZGlzYWJsZWRUaW1lQ29uZmlnOiBEaXNhYmxlZFRpbWVDb25maWcpOiBib29sZWFuIHtcclxuICBsZXQgaW52YWxpZFRpbWUgPSBmYWxzZTtcclxuICBpZiAodmFsdWUpIHtcclxuICAgIGNvbnN0IGhvdXIgPSB2YWx1ZS5nZXRIb3VycygpO1xyXG4gICAgY29uc3QgbWludXRlcyA9IHZhbHVlLmdldE1pbnV0ZXMoKTtcclxuICAgIGNvbnN0IHNlY29uZHMgPSB2YWx1ZS5nZXRTZWNvbmRzKCk7XHJcbiAgICBjb25zdCBkaXNhYmxlZEhvdXJzID0gZGlzYWJsZWRUaW1lQ29uZmlnLmRpc2FibGVkSG91cnMoKTtcclxuICAgIGlmIChkaXNhYmxlZEhvdXJzLmluZGV4T2YoaG91cikgPT09IC0xKSB7XHJcbiAgICAgIGNvbnN0IGRpc2FibGVkTWludXRlcyA9IGRpc2FibGVkVGltZUNvbmZpZy5kaXNhYmxlZE1pbnV0ZXMoaG91cik7XHJcbiAgICAgIGlmIChkaXNhYmxlZE1pbnV0ZXMuaW5kZXhPZihtaW51dGVzKSA9PT0gLTEpIHtcclxuICAgICAgICBjb25zdCBkaXNhYmxlZFNlY29uZHMgPSBkaXNhYmxlZFRpbWVDb25maWcuZGlzYWJsZWRTZWNvbmRzKGhvdXIsIG1pbnV0ZXMpO1xyXG4gICAgICAgIGludmFsaWRUaW1lID0gZGlzYWJsZWRTZWNvbmRzLmluZGV4T2Yoc2Vjb25kcykgIT09IC0xO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGludmFsaWRUaW1lID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaW52YWxpZFRpbWUgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gIWludmFsaWRUaW1lO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNUaW1lVmFsaWQodmFsdWU6IENhbmR5RGF0ZSwgZGlzYWJsZWRUaW1lOiBEaXNhYmxlZFRpbWVGbik6IGJvb2xlYW4ge1xyXG4gIGNvbnN0IGRpc2FibGVkVGltZUNvbmZpZyA9IGdldFRpbWVDb25maWcodmFsdWUsIGRpc2FibGVkVGltZSk7XHJcbiAgcmV0dXJuIGlzVGltZVZhbGlkQnlDb25maWcodmFsdWUsIGRpc2FibGVkVGltZUNvbmZpZyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0FsbG93ZWREYXRlKHZhbHVlOiBDYW5keURhdGUsIGRpc2FibGVkRGF0ZT86IERpc2FibGVkRGF0ZUZuLCBkaXNhYmxlZFRpbWU/OiBEaXNhYmxlZFRpbWVGbik6IGJvb2xlYW4ge1xyXG4gIGlmIChkaXNhYmxlZERhdGUpIHtcclxuICAgIGlmIChkaXNhYmxlZERhdGUodmFsdWUubmF0aXZlRGF0ZSkpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuICBpZiAoZGlzYWJsZWRUaW1lKSB7XHJcbiAgICBpZiAoIWlzVGltZVZhbGlkKHZhbHVlLCBkaXNhYmxlZFRpbWUpKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuIHRydWU7XHJcbn1cclxuIl19