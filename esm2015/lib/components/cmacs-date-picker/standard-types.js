/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
export function PickerResultSingle() { }
if (false) {
    /** @type {?} */
    PickerResultSingle.prototype.date;
    /** @type {?} */
    PickerResultSingle.prototype.dateString;
}
/**
 * @record
 */
export function PickerResultRange() { }
if (false) {
    /** @type {?} */
    PickerResultRange.prototype.date;
    /** @type {?} */
    PickerResultRange.prototype.dateString;
}
/**
 * @record
 */
export function DisabledTimeConfig() { }
if (false) {
    /**
     * @return {?}
     */
    DisabledTimeConfig.prototype.disabledHours = function () { };
    /**
     * @param {?} hour
     * @return {?}
     */
    DisabledTimeConfig.prototype.disabledMinutes = function (hour) { };
    /**
     * @param {?} hour
     * @param {?} minute
     * @return {?}
     */
    DisabledTimeConfig.prototype.disabledSeconds = function (hour, minute) { };
}
/**
 * @record
 */
export function SupportTimeOptions() { }
if (false) {
    /** @type {?|undefined} */
    SupportTimeOptions.prototype.format;
    /** @type {?|undefined} */
    SupportTimeOptions.prototype.hourStep;
    /** @type {?|undefined} */
    SupportTimeOptions.prototype.minuteStep;
    /** @type {?|undefined} */
    SupportTimeOptions.prototype.secondStep;
    /** @type {?|undefined} */
    SupportTimeOptions.prototype.hideDisabledOptions;
    /** @type {?|undefined} */
    SupportTimeOptions.prototype.defaultOpenValue;
    /** @type {?|undefined} */
    SupportTimeOptions.prototype.addOn;
    /**
     * @return {?}
     */
    SupportTimeOptions.prototype.disabledHours = function () { };
    /**
     * @param {?} hour
     * @return {?}
     */
    SupportTimeOptions.prototype.disabledMinutes = function (hour) { };
    /**
     * @param {?} hour
     * @param {?} minute
     * @return {?}
     */
    SupportTimeOptions.prototype.disabledSeconds = function (hour, minute) { };
}
/**
 * @record
 */
export function PresetRanges() { }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhbmRhcmQtdHlwZXMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLWRhdGUtcGlja2VyL3N0YW5kYXJkLXR5cGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFLQSx3Q0FHQzs7O0lBRkMsa0NBQWdCOztJQUNoQix3Q0FBbUI7Ozs7O0FBRXJCLHVDQUdDOzs7SUFGQyxpQ0FBa0I7O0lBQ2xCLHVDQUFxQjs7Ozs7QUFRdkIsd0NBSUM7Ozs7O0lBSEMsNkRBQTBCOzs7OztJQUMxQixtRUFBd0M7Ozs7OztJQUN4QywyRUFBd0Q7Ozs7O0FBSzFELHdDQWFDOzs7SUFaQyxvQ0FBZ0I7O0lBQ2hCLHNDQUFrQjs7SUFDbEIsd0NBQW9COztJQUNwQix3Q0FBb0I7O0lBRXBCLGlEQUE4Qjs7SUFFOUIsOENBQXdCOztJQUN4QixtQ0FBMEI7Ozs7SUFDMUIsNkRBQTJCOzs7OztJQUMzQixtRUFBeUM7Ozs7OztJQUN6QywyRUFBeUQ7Ozs7O0FBRzNELGtDQUVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ2FuZHlEYXRlIH0gZnJvbSAnLi9saWIvY2FuZHktZGF0ZS9jYW5keS1kYXRlJztcblxuLy8gVGhlIGNvbW1vbiByZXN1bHQgZGF0YSBmb3JtYXQgKHRoZSByYW5nZS1waWNrZXIncyBwcm9wcyBjYW4gYmUgcmVzdWx0IGFzIGFycmF5KVxuZXhwb3J0IGludGVyZmFjZSBQaWNrZXJSZXN1bHRTaW5nbGUge1xuICBkYXRlOiBDYW5keURhdGU7XG4gIGRhdGVTdHJpbmc6IHN0cmluZztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgUGlja2VyUmVzdWx0UmFuZ2Uge1xuICBkYXRlOiBDYW5keURhdGVbXTtcbiAgZGF0ZVN0cmluZzogc3RyaW5nW107XG59XG5leHBvcnQgdHlwZSBQaWNrZXJSZXN1bHQgPSBQaWNrZXJSZXN1bHRTaW5nbGUgfCBQaWNrZXJSZXN1bHRSYW5nZTtcblxuZXhwb3J0IHR5cGUgRGlzYWJsZWREYXRlRm4gPSAoZDogRGF0ZSkgPT4gYm9vbGVhbjtcblxuZXhwb3J0IHR5cGUgRGlzYWJsZWRUaW1lUGFydGlhbCA9ICdzdGFydCcgfCAnZW5kJztcblxuZXhwb3J0IGludGVyZmFjZSBEaXNhYmxlZFRpbWVDb25maWcge1xuICBkaXNhYmxlZEhvdXJzKCk6IG51bWJlcltdO1xuICBkaXNhYmxlZE1pbnV0ZXMoaG91cjogbnVtYmVyKTogbnVtYmVyW107XG4gIGRpc2FibGVkU2Vjb25kcyhob3VyOiBudW1iZXIsIG1pbnV0ZTogbnVtYmVyKTogbnVtYmVyW107XG59XG5cbmV4cG9ydCB0eXBlIERpc2FibGVkVGltZUZuID0gKGN1cnJlbnQ6IERhdGUgfCBEYXRlW10sIHBhcnRpYWw/OiBEaXNhYmxlZFRpbWVQYXJ0aWFsKSA9PiBEaXNhYmxlZFRpbWVDb25maWc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3VwcG9ydFRpbWVPcHRpb25zIHtcbiAgZm9ybWF0Pzogc3RyaW5nO1xuICBob3VyU3RlcD86IG51bWJlcjtcbiAgbWludXRlU3RlcD86IG51bWJlcjtcbiAgc2Vjb25kU3RlcD86IG51bWJlcjtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWVtYmVyLW9yZGVyaW5nXG4gIGhpZGVEaXNhYmxlZE9wdGlvbnM/OiBib29sZWFuO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtZW1iZXItb3JkZXJpbmdcbiAgZGVmYXVsdE9wZW5WYWx1ZT86IERhdGU7XG4gIGFkZE9uPzogVGVtcGxhdGVSZWY8dm9pZD47XG4gIGRpc2FibGVkSG91cnM/KCk6IG51bWJlcltdO1xuICBkaXNhYmxlZE1pbnV0ZXM/KGhvdXI6IG51bWJlcik6IG51bWJlcltdO1xuICBkaXNhYmxlZFNlY29uZHM/KGhvdXI6IG51bWJlciwgbWludXRlOiBudW1iZXIpOiBudW1iZXJbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQcmVzZXRSYW5nZXMge1xuICBba2V5OiBzdHJpbmddOiBEYXRlW10gfCAoKCkgPT4gRGF0ZVtdKTtcbn1cblxuZXhwb3J0IHR5cGUgUGFuZWxNb2RlID0gJ2RlY2FkZScgfCAneWVhcicgfCAnbW9udGgnIHwgJ2RhdGUnIHwgJ3RpbWUnO1xuIl19