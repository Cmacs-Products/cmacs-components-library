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
/** @type {?} */
var defaultDisabledTime = {
    nzDisabledHours: /**
     * @return {?}
     */
    function () {
        return [];
    },
    nzDisabledMinutes: /**
     * @return {?}
     */
    function () {
        return [];
    },
    nzDisabledSeconds: /**
     * @return {?}
     */
    function () {
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
    var disabledTimeConfig = disabledTime ? disabledTime(value && value.nativeDate) : ((/** @type {?} */ ({})));
    disabledTimeConfig = tslib_1.__assign({}, defaultDisabledTime, disabledTimeConfig);
    return disabledTimeConfig;
}
/**
 * @param {?} value
 * @param {?} disabledTimeConfig
 * @return {?}
 */
export function isTimeValidByConfig(value, disabledTimeConfig) {
    /** @type {?} */
    var invalidTime = false;
    if (value) {
        /** @type {?} */
        var hour = value.getHours();
        /** @type {?} */
        var minutes = value.getMinutes();
        /** @type {?} */
        var seconds = value.getSeconds();
        /** @type {?} */
        var disabledHours = disabledTimeConfig.nzDisabledHours();
        if (disabledHours.indexOf(hour) === -1) {
            /** @type {?} */
            var disabledMinutes = disabledTimeConfig.nzDisabledMinutes(hour);
            if (disabledMinutes.indexOf(minutes) === -1) {
                /** @type {?} */
                var disabledSeconds = disabledTimeConfig.nzDisabledSeconds(hour, minutes);
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
    var disabledTimeConfig = getTimeConfig(value, disabledTime);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2NtYWNzLWNvbXBvbmVudHMtbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudHMvY21hY3MtZGF0ZS1waWNrZXIvbGliL3V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztJQVdNLG1CQUFtQixHQUF1QjtJQUM5QyxlQUFlOzs7SUFBZjtRQUNFLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUNELGlCQUFpQjs7O0lBQWpCO1FBQ0UsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBQ0QsaUJBQWlCOzs7SUFBakI7UUFDRSxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7Q0FDRjs7Ozs7O0FBRUQsTUFBTSxVQUFVLGFBQWEsQ0FBQyxLQUFnQixFQUFFLFlBQTRCOztRQUN0RSxrQkFBa0IsR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFBLEVBQUUsRUFBc0IsQ0FBQztJQUM1RyxrQkFBa0Isd0JBQ2IsbUJBQW1CLEVBQ25CLGtCQUFrQixDQUN0QixDQUFDO0lBQ0YsT0FBTyxrQkFBa0IsQ0FBQztBQUM1QixDQUFDOzs7Ozs7QUFFRCxNQUFNLFVBQVUsbUJBQW1CLENBQUMsS0FBZ0IsRUFBRSxrQkFBc0M7O1FBQ3RGLFdBQVcsR0FBRyxLQUFLO0lBQ3ZCLElBQUksS0FBSyxFQUFFOztZQUNILElBQUksR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFOztZQUN2QixPQUFPLEdBQUcsS0FBSyxDQUFDLFVBQVUsRUFBRTs7WUFDNUIsT0FBTyxHQUFHLEtBQUssQ0FBQyxVQUFVLEVBQUU7O1lBQzVCLGFBQWEsR0FBRyxrQkFBa0IsQ0FBQyxlQUFlLEVBQUU7UUFDMUQsSUFBSSxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFOztnQkFDaEMsZUFBZSxHQUFHLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQztZQUNsRSxJQUFJLGVBQWUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7O29CQUNyQyxlQUFlLEdBQUcsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQztnQkFDM0UsV0FBVyxHQUFHLGVBQWUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7YUFDdkQ7aUJBQU07Z0JBQ0wsV0FBVyxHQUFHLElBQUksQ0FBQzthQUNwQjtTQUNGO2FBQU07WUFDTCxXQUFXLEdBQUcsSUFBSSxDQUFDO1NBQ3BCO0tBQ0Y7SUFDRCxPQUFPLENBQUMsV0FBVyxDQUFDO0FBQ3RCLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxXQUFXLENBQUMsS0FBZ0IsRUFBRSxZQUE0Qjs7UUFDbEUsa0JBQWtCLEdBQUcsYUFBYSxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUM7SUFDN0QsT0FBTyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztBQUN4RCxDQUFDOzs7Ozs7O0FBRUQsTUFBTSxVQUFVLGFBQWEsQ0FBQyxLQUFnQixFQUFFLFlBQTZCLEVBQUUsWUFBNkI7SUFDMUcsSUFBSSxZQUFZLEVBQUU7UUFDaEIsSUFBSSxZQUFZLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ2xDLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7S0FDRjtJQUNELElBQUksWUFBWSxFQUFFO1FBQ2hCLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQyxFQUFFO1lBQ3JDLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7S0FDRjtJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgRGlzYWJsZWREYXRlRm4sIERpc2FibGVkVGltZUNvbmZpZywgRGlzYWJsZWRUaW1lRm4gfSBmcm9tICcuLi9zdGFuZGFyZC10eXBlcyc7XHJcbmltcG9ydCB7IENhbmR5RGF0ZSB9IGZyb20gJy4vY2FuZHktZGF0ZS9jYW5keS1kYXRlJztcclxuXHJcbmNvbnN0IGRlZmF1bHREaXNhYmxlZFRpbWU6IERpc2FibGVkVGltZUNvbmZpZyA9IHtcclxuICBuekRpc2FibGVkSG91cnMoKTogbnVtYmVyW10ge1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH0sXHJcbiAgbnpEaXNhYmxlZE1pbnV0ZXMoKTogbnVtYmVyW10ge1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH0sXHJcbiAgbnpEaXNhYmxlZFNlY29uZHMoKTogbnVtYmVyW10ge1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUaW1lQ29uZmlnKHZhbHVlOiBDYW5keURhdGUsIGRpc2FibGVkVGltZTogRGlzYWJsZWRUaW1lRm4pOiBEaXNhYmxlZFRpbWVDb25maWcge1xyXG4gIGxldCBkaXNhYmxlZFRpbWVDb25maWcgPSBkaXNhYmxlZFRpbWUgPyBkaXNhYmxlZFRpbWUodmFsdWUgJiYgdmFsdWUubmF0aXZlRGF0ZSkgOiAoe30gYXMgRGlzYWJsZWRUaW1lQ29uZmlnKTtcclxuICBkaXNhYmxlZFRpbWVDb25maWcgPSB7XHJcbiAgICAuLi5kZWZhdWx0RGlzYWJsZWRUaW1lLFxyXG4gICAgLi4uZGlzYWJsZWRUaW1lQ29uZmlnXHJcbiAgfTtcclxuICByZXR1cm4gZGlzYWJsZWRUaW1lQ29uZmlnO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNUaW1lVmFsaWRCeUNvbmZpZyh2YWx1ZTogQ2FuZHlEYXRlLCBkaXNhYmxlZFRpbWVDb25maWc6IERpc2FibGVkVGltZUNvbmZpZyk6IGJvb2xlYW4ge1xyXG4gIGxldCBpbnZhbGlkVGltZSA9IGZhbHNlO1xyXG4gIGlmICh2YWx1ZSkge1xyXG4gICAgY29uc3QgaG91ciA9IHZhbHVlLmdldEhvdXJzKCk7XHJcbiAgICBjb25zdCBtaW51dGVzID0gdmFsdWUuZ2V0TWludXRlcygpO1xyXG4gICAgY29uc3Qgc2Vjb25kcyA9IHZhbHVlLmdldFNlY29uZHMoKTtcclxuICAgIGNvbnN0IGRpc2FibGVkSG91cnMgPSBkaXNhYmxlZFRpbWVDb25maWcubnpEaXNhYmxlZEhvdXJzKCk7XHJcbiAgICBpZiAoZGlzYWJsZWRIb3Vycy5pbmRleE9mKGhvdXIpID09PSAtMSkge1xyXG4gICAgICBjb25zdCBkaXNhYmxlZE1pbnV0ZXMgPSBkaXNhYmxlZFRpbWVDb25maWcubnpEaXNhYmxlZE1pbnV0ZXMoaG91cik7XHJcbiAgICAgIGlmIChkaXNhYmxlZE1pbnV0ZXMuaW5kZXhPZihtaW51dGVzKSA9PT0gLTEpIHtcclxuICAgICAgICBjb25zdCBkaXNhYmxlZFNlY29uZHMgPSBkaXNhYmxlZFRpbWVDb25maWcubnpEaXNhYmxlZFNlY29uZHMoaG91ciwgbWludXRlcyk7XHJcbiAgICAgICAgaW52YWxpZFRpbWUgPSBkaXNhYmxlZFNlY29uZHMuaW5kZXhPZihzZWNvbmRzKSAhPT0gLTE7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaW52YWxpZFRpbWUgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpbnZhbGlkVGltZSA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiAhaW52YWxpZFRpbWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1RpbWVWYWxpZCh2YWx1ZTogQ2FuZHlEYXRlLCBkaXNhYmxlZFRpbWU6IERpc2FibGVkVGltZUZuKTogYm9vbGVhbiB7XHJcbiAgY29uc3QgZGlzYWJsZWRUaW1lQ29uZmlnID0gZ2V0VGltZUNvbmZpZyh2YWx1ZSwgZGlzYWJsZWRUaW1lKTtcclxuICByZXR1cm4gaXNUaW1lVmFsaWRCeUNvbmZpZyh2YWx1ZSwgZGlzYWJsZWRUaW1lQ29uZmlnKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQWxsb3dlZERhdGUodmFsdWU6IENhbmR5RGF0ZSwgZGlzYWJsZWREYXRlPzogRGlzYWJsZWREYXRlRm4sIGRpc2FibGVkVGltZT86IERpc2FibGVkVGltZUZuKTogYm9vbGVhbiB7XHJcbiAgaWYgKGRpc2FibGVkRGF0ZSkge1xyXG4gICAgaWYgKGRpc2FibGVkRGF0ZSh2YWx1ZS5uYXRpdmVEYXRlKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlmIChkaXNhYmxlZFRpbWUpIHtcclxuICAgIGlmICghaXNUaW1lVmFsaWQodmFsdWUsIGRpc2FibGVkVGltZSkpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gdHJ1ZTtcclxufVxyXG4iXX0=